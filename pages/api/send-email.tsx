import { sendMail } from "@/service/mailService";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
	message: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	try {
		const { method } = req;
		switch (method) {
			case "POST": {
				await sendMail(
					"TEST",
					"limbusamaka@gmail.com",
					"THI IS A TEST FOR MY MEDIUM USERS"
				);
				res.status(200).json({
					success: true,
					msg: process.env.NODEMAILER_PW
				});
				break;
			}
			default:
				res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
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
