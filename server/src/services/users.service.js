import _ from "lodash";
import DbInstance from "../database";

const createUser = async (userName) => {
  const [rows, fields] = await DbInstance.execute(
    "INSERT INTO Users (userName) VALUES (?)",
    [userName || "test"]
  );
  const userId = rows.insertId;

  return userId;
};

const getAllUserIds = async () => {
  const [rows, fields] = await DbInstance.query("SELECT userId FROM Users");
  const userIds = [];

  for (const row of rows) {
    userIds.push(_.get(row, "userId"));
  }

  return userIds;
};

const UsersServices = {
  createUser,
  getAllUserIds,
};

export default UsersServices;
