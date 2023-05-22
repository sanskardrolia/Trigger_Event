import { Container } from "../Container";

export const CTA = () => {
	return (
		<section className="py-24 bg-black">
			<Container className="space-y-10 text-center">
				<div className="space-y-5">
					<h1 className="text-3xl text-gray-700 font-semibold">
						Keep in touch with{" "}
						<span className="text-blue-700">#TRIGGER2K23</span> for the
						latest announcements
					</h1>
					<p className="text-xl text-gray-500">
						Let's get connected so that we can reach out to each other via a
						simple notification. Stake out #TRIGGER2K23 for the updates and
						news.
					</p>
				</div>
				<div>
					<a
						className="bg-blue-700 hover:bg-blue-800 transition-all px-8 py-3 rounded-md text-white"
						href="https://www.instagram.com/p/CqfPDD8r5AZ/?igshid=MDJmNzVkMjY="
						target="_blank"
						rel="noreferrer"
					>
						Learn more about TRIGGER 2K23
					</a>
				</div>
			</Container>
		</section>
	);
};
