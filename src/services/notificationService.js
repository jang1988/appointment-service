const fs = require('fs');
const moment = require('moment');

function logReminder(message) {
  const logEntry = `${new Date()} | ${message}\n`;
  fs.appendFile('reminders.log', logEntry, (err) => {
    if (err) throw err;
    console.log('Reminder logged');
  });
}

function remindUserOneDayBefore(user, doctor, slot) {
  const reminderDate = moment(slot).subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss');
  const message = `Привет ${user.name}! Напоминаем, что вы записаны к ${doctor.spec} завтра в ${reminderDate}!`;
  logReminder(message);
}

function remindUserTwoHoursBefore(user, doctor, slot) {
  const reminderDate = moment(slot).subtract(2, 'hours').format('YYYY-MM-DD HH:mm:ss');
  const message = `Привет ${user.name}! Вам через 2 часа к ${doctor.spec} в ${reminderDate}!`;
  logReminder(message);
}

module.exports = { logReminder, remindUserOneDayBefore, remindUserTwoHoursBefore };
