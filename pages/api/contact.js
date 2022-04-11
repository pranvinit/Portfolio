const sendEmail = require("../../server/utils/sendEmail");

const contactController = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const html = `<h3>Hello ${name}
        <br>
        You have message from ${email}<h3>
        <br>
        ${message}
        `;
    await sendEmail({ to: "pranvofficial@gmail.com", subject, html });
    console.log("hello this is working");
    res.status(200).json({ message: "Success" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default contactController;
