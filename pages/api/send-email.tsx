import { sendMail } from "@/service/mailService";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	try {
		const { method } = req;
		switch (method) {
			case "POST": {
				const { name, email, message, subject } = req.body;
				await sendMail(
					subject,
					email,
					`Name: ${name}\nEmail: ${email}\nMessage: ${message}`
				);
				res.status(200).json({
					success: true,
					msg: "Successfully sent email"
				});
				break;
			}
			default:
				res.setHeader("Allow", ["POST"]);
				res.status(405).end(`Method ${method} Not Allowed`);
				break;
		}
	} catch (err: any) {
		res.status(400).json({
			error_code: "api_one",
			message: err.message,
		});
	}
}
