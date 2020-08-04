import { Request, Response } from "express";
import db from "../database/connection";
import convertHoursToMinutes from "../utils/ConvertHourToMinutes";

interface ScheduleTypes {
  week_day: number;
  from: string;
  to: string;
}

export default {
  async store(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

    const trx = await db.transaction();

    try {
      const [user_id] = await trx("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const [class_id] = await trx("classes").insert({
        subject,
        cost,
        user_id,
      });

      const classSchedule = schedule.map((scheduleItem: ScheduleTypes) => ({
        class_id,
        ...scheduleItem,
        from: convertHoursToMinutes(scheduleItem.from),
        to: convertHoursToMinutes(scheduleItem.to),
      }));

      await trx("class_schedule").insert(classSchedule);

      await trx.commit();

      res.status(201).send();
    } catch (err) {
      await trx.rollback();

      res.status(500).send({
        message: "Unexpected error.",
      });
    }
  },

  async index(req: Request, res: Response) {
    const necessaryFilters = ["week_day", "subject", "time"];
    const filters = Object.keys(req.query);
    const { time, week_day, subject } = req.query;

    const validRequest = necessaryFilters.every((filter) =>
      filters.includes(filter)
    );

    if (!validRequest)
      return res.status(400).send({
        message: "Invalid request, missing filters.",
      });

    const timeInMinutes = convertHoursToMinutes(time as string);
    const week_dayString = week_day as string;
    const week_dayArray = week_dayString.split(",").map(Number);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
          .whereIn("class_schedule.week_day", week_dayArray)
          .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
          .whereRaw("`class_schedule`.`to` > ??", [timeInMinutes]);
      })
      .where("classes.subject", "=", subject as string)
      .join("users", "classes.user_id", "=", "users.id")
      .select("classes.*", "users.*");

    res.json(classes);
  },
};
