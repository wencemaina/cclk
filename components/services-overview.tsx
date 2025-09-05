import { Button } from "@/components/ui/button";

export default function ServicesOverview() {
	return (
		<section className="py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-24">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
						How We Can Support You
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						Whether you're seeking spiritual growth, emotional
						healing, or community connection, we're here to walk
						alongside you.
					</p>
				</div>

				<div className="space-y-40">
					{/* Discipleship Programs */}
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							<div className="space-y-6">
								<h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
									Discipleship Programs
								</h3>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Small groups, mentorship, and Bible studies
									designed to deepen your faith and build
									lasting relationships.
								</p>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									"Weekly Small Groups",
									"One-on-One Mentorship",
									"Bible Study Courses",
									"Leadership Development",
								].map((feature, index) => (
									<div
										key={index}
										className="flex items-center gap-3 text-muted-foreground"
									>
										<span className="text-base font-medium">
											{feature}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="relative">
							<div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-[2.5rem] rotate-1"></div>
							<img
								src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
								alt="Small group Bible study"
								className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
							/>
						</div>
					</div>

					{/* Soul Care Services */}
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="relative lg:order-1">
							<div className="absolute -inset-4 bg-gradient-to-br from-accent/5 to-primary/5 rounded-[2.5rem] -rotate-1"></div>
							<img
								src="https://images.unsplash.com/photo-1756456344764-17fdecd99c2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
								alt="Peaceful counseling environment"
								className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
							/>
						</div>

						<div className="space-y-8 lg:order-2">
							<div className="space-y-6">
								<h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
									Soul Care Services
								</h3>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Professional counseling, spiritual
									direction, and crisis support in a
									faith-centered environment.
								</p>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									"Individual Counseling",
									"Spiritual Direction",
									"Crisis Support",
									"Grief & Loss Care",
								].map((feature, index) => (
									<div
										key={index}
										className="flex items-center gap-3 text-muted-foreground"
									>
										<span className="text-base font-medium">
											{feature}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Community & Events */}
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							<div className="space-y-6">
								<h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
									Community & Events
								</h3>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Workshops, retreats, and fellowship
									opportunities to connect with others on the
									same journey.
								</p>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									"Monthly Workshops",
									"Seasonal Retreats",
									"Fellowship Events",
									"Service Projects",
								].map((feature, index) => (
									<div
										key={index}
										className="flex items-center gap-3 text-muted-foreground"
									>
										<span className="text-base font-medium">
											{feature}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="relative">
							<div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-[2.5rem] rotate-1"></div>
							<img
								src="https://plus.unsplash.com/premium_photo-1752521132656-772ffd2584e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
								alt="Community fellowship gathering"
								className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}