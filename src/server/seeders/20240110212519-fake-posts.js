"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     
    */
    await queryInterface.sequelize
      .query("SELECT id from Users;")
      .then((users) => {
        const usersRows = users[0];
        console.log(usersRows, "usersRowsusersRows");
        return queryInterface.bulkInsert(
          "Posts",
          [
            {
              text: "Lorem ipsum 1",
              userId: usersRows[0].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              text: "Lorem ipsum 2",
              userId: usersRows[1].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          {}
        );
      });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
