import nodemailer from "nodemailer"

export default async function handler(req, res) {

    const {nombre, email, numero, mensaje} = req.body

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.SMTP_USER,
            subject: `${nombre} desde dwAR`,
            html: `<p>Nuevo mensaje desde Diseño Web AR</p><br>
            <p><strong>Email: </strong> ${email}</p><br>
            <p><strong>Número: </strong> ${numero}</p><br>
            <p><strong>Mensaje: </strong> ${mensaje}</p><br>
            `
        });
        } catch (error) {
            return res.status(500).json({ error: error.message || error.toString() });
        }

    res.status(200).json({ err: ''})
}
