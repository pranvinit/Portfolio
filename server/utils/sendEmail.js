const sgMail = require("@sendgrid/mail");

const sendEmail = async ({ to, subject, html }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to, // receiver
    from: "pranavy21@gmail.com", // verified sender address
    subject,
    html,
  };

  await sgMail.send(msg);
};

module.exports = sendEmail;
