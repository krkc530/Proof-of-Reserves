import _ from "lodash";
import DbInstance from "../../database";

const createUser = async (userName) => {
  const [rows, fields] = await DbInstance.execute(
    "INSERT INTO Users (user_name) VALUES (?)",
    [userName || "test"]
  );
  const userId = rows.insertId;

  return userId;
};

const getAllUserIds = async () => {
  const [rows, fields] = await DbInstance.query("SELECT user_id FROM Users");
  const userIds = [];

  for (const row of rows) {
    userIds.push(_.get(row, "user_id"));
  }

  return userIds;
};

const UsersServices = {
  createUser,
  getAllUserIds,
};

export default UsersServices;
