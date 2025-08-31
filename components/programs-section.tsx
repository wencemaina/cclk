import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProgramsSection() {
	return (
		<section className="py-24 bg-gradient-to-br from-primary/5 to-accent/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-24">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
						Our Programs
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						Discover transformative programs designed to strengthen
						your faith journey and build meaningful connections
						within our community.
					</p>
				</div>

				<div className="space-y-40">
					{/* Bible Study Groups - Left aligned */}
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							<div className="space-y-6">
								<h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
									Bible Study Groups
								</h3>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Join weekly small group studies that dive
									deep into Scripture with fellow believers in
									an intimate, supportive environment.
								</p>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									"Weekly meetings",
									"Small group format",
									"All skill levels welcome",
									"Interactive discussions",
								].map((feature, index) => (
									<div
										key={index}
										className="flex items-center gap-3 text-muted-foreground"
									>
										<span className="text-base">
											{feature}
										</span>
									</div>
								))}
							</div>

							<div className="pt-2">
								<Button
									size="lg"
									className="flex items-center gap-3 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
								>
									Join a Group
								</Button>
							</div>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3"></div>
							<img
								src="https://plus.unsplash.com/premium_photo-1723874473105-0ce0a543d0ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZSUyMHByYXlpbmclMjB0b2dldGhlcnxlbnwwfHwwfHx8MA%3D%3D"
								alt="People praying together in Bible study"
								className="relative rounded-3xl shadow-2xl w-full h-96 object-cover border border-white/20"
							/>
						</div>
					</div>

					{/* Discipleship Training - Right aligned */}
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="relative lg:order-1">
							<div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl transform -rotate-3"></div>
							<img
								src="https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbiUyMHBlb3BsZSUyMHByYXlpbmclMjB0b2dldGhlcnxlbnwwfHwwfHx8MA%3D%3D"
								alt="African people praying together"
								className="relative rounded-3xl shadow-2xl w-full h-96 object-cover border border-white/20"
							/>
						</div>

						<div className="space-y-8 lg:order-2">
							<div className="space-y-6">
								<h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
									Discipleship Training
								</h3>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Comprehensive training programs designed to
									equip believers for ministry and spiritual
									leadership in their communities.
								</p>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									"12-week intensive",
									"Mentorship included",
									"Certificate program",
									"Practical ministry",
								].map((feature, index) => (
									<div
										key={index}
										className="flex items-center gap-3 text-muted-foreground"
									>
										<span className="text-base">
											{feature}
										</span>
									</div>
								))}
							</div>

							<div className="pt-2">
								<Button
									size="lg"
									className="flex items-center gap-3 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
								>
									Start Training
								</Button>
							</div>
						</div>
					</div>

					{/* Life Groups - Left aligned */}
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							<div className="space-y-6">
								<h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
									Life Groups
								</h3>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Connect with others through life-stage
									specific groups that provide support,
									fellowship, and spiritual growth
									opportunities.
								</p>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									"Age-specific groups",
									"Social activities",
									"Prayer support",
									"Community service",
								].map((feature, index) => (
									<div
										key={index}
										className="flex items-center gap-3 text-muted-foreground"
									>
										<span className="text-base">
											{feature}
										</span>
									</div>
								))}
							</div>

							<div className="pt-2">
								<Button
									size="lg"
									className="flex items-center gap-3 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
								>
									Find Your Group
								</Button>
							</div>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-2"></div>
							<img
								src="https://plus.unsplash.com/premium_photo-1718275465656-d7f9b360d40e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFmcmljYW4lMjBwZW9wbGUlMjBwcmF5aW5nJTIwdG9nZXRoZXJ8ZW58MHx8MHx8fDA%3D"
								alt="African people praying together in community"
								className="relative rounded-3xl shadow-2xl w-full h-96 object-cover border border-white/20"
							/>
						</div>
					</div>
				</div>

				<div className="text-center mt-24 pt-8">
					<Button
						asChild
						size="lg"
						className="px-10 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
					>
						<Link
							href="/programs"
							className="flex items-center gap-3"
						>
							Explore All Programs
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}