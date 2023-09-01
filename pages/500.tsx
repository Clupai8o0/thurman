import React from "react";

function ServerError() {
	return (
		<div className="w-full flex justify-center">
			<div className="max-w-7xl w-full flex justify-center items-center h-[60vh]">
				<h1 className="font-semibold text-6xl text-center">
					There Was A Problem With The Server
				</h1>
			</div>
		</div>
	);
}

export default ServerError;
