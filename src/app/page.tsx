import Image from "next/image";
import Link from "next/link";

import Logo from "~/assets/v-sekai.png";
import { InlineLink } from "~/components/link";

export default function RootPage() {
	return (
		<>
			<header className="flex flex-col gap-4 border-b-2 border-black/5 bg-black/[2%] p-4">
				<Link
					className="block rounded-3xl border-4 border-blue-700 bg-blue-700/10 px-4 py-2 text-center transition-all hover:bg-blue-700/15"
					href="https://discord.gg/7BQDHesck8"
				>
					<span className="text-blue-700">
						Interested in <span className="font-medium">V-Sekai</span> or{" "}
						<span className="font-medium">#GodotVR</span> development? Join the
						V-Sekai Discord Server!
					</span>
				</Link>
				<section className="mx-auto flex w-full max-w-screen-lg justify-between gap-8">
					<Link className="flex items-center gap-4" href="/">
						<Image alt="V-Sekai Logo" src={Logo} />
						<span className="hidden text-xl font-medium md:inline">
							V-Sekai
						</span>
					</Link>
					<nav className="flex flex-col items-end gap-2 pt-4">
						<div className="flex gap-2 text-sm">
							<Link
								className="rounded-xl bg-red-500 px-4 py-1 text-white transition-all hover:bg-red-600"
								href="/sign-in"
							>
								Sign In
							</Link>
							<Link
								className="rounded-xl bg-red-500 px-4 py-1 text-white transition-all hover:bg-red-600"
								href="/sign-up"
							>
								Register
							</Link>
						</div>
						<div className="flex gap-4">
							<Link href="/about">About</Link>
							<Link href="/download">Download</Link>
						</div>
					</nav>
				</section>
			</header>
			<main className="mx-auto flex w-full max-w-screen-lg flex-col pt-16">
				<section>
					<h1 className="bg-red-500 p-6 text-center text-3xl font-medium text-white">
						<span>V-Sekai</span>
					</h1>
					<div className="flex flex-col gap-4 py-8 text-center text-xl">
						<p className="text-balance italic">
							Your virtual reality platform, on your game engine.
						</p>
						<p className="text-balance">
							Imagine a completely{" "}
							<InlineLink
								href="https://github.com/V-Sekai"
								title="V-Sekai GitHub page"
							>
								free and open source
							</InlineLink>{" "}
							social VR platform,
							<br />
							utilizing the community and the power of{" "}
							<InlineLink href="https://godotengine.org/">
								Godot Engine
							</InlineLink>{" "}
							4.
						</p>
						<p className="text-balance">
							V-Sekai, A completely community-run, self-hostable
							<br />
							MIT open source software stack built with Godot Engine 4.
						</p>
						<p>
							<InlineLink href="https://discord.gg/7BQDHesck8">
								Join our Discord community
							</InlineLink>
						</p>
						<p className="mx-auto max-w-screen-sm text-balance">
							Are you a developer? Clone or fork our code on the{" "}
							<InlineLink href="https://github.com/V-Sekai">
								V-Sekai GitHub organization
							</InlineLink>
							.
						</p>
					</div>
				</section>
				<section className="mx-auto flex w-full max-w-screen-md flex-col gap-4 px-4 text-lg">
					<h1 className="-mx-8 mt-8 bg-red-500 px-8 py-4 text-xl font-medium text-white">
						About us
					</h1>
					<p>
						V-Sekai is a community of enthusiasts building a next-generation
						social and gaming VR platform powered by the{" "}
						<InlineLink href="https://godotengine.org/">
							Godot Engine 4.0
						</InlineLink>
						. Please{" "}
						<InlineLink href="https://discord.gg/7BQDHesck8">
							join our Discord server
						</InlineLink>{" "}
						to receive updates and join the community.
					</p>
					<h2 className="-mx-8 mt-8 bg-red-500 px-8 py-4 text-xl font-medium text-white">
						Why Godot Engine?
					</h2>
					<p>
						We felt there was a need for a remixable ecosystem focused on VR.
						Social VR should be a truly community-driven experience. For this to
						be realised, we believe the entire software stack should be
						available, moddable, and tweakable from the source up, which is why
						we encourage you to{" "}
						<InlineLink href="https://github.com/V-Sekai">
							tinker with our code on GitHub
						</InlineLink>{" "}
						and a lot of our projects focus on the MIT-Licensed{" "}
						<InlineLink href="https://godotengine.org/">
							Godot Engine
						</InlineLink>
						.
					</p>
					<p>
						As such, the license of Godot Engine is compatible with our goals
						and should allow for fully custom-built solutions at the engine
						level. Additionally, we&apos;re able to make use of the hard work of
						thousands of Godot contributors to keep the technology stack
						powering V-Sekai innovative and competitive amongst industry leading
						engines.
					</p>
					<p>
						An astute reader might be wondering, why not use a more developed,{" "}
						<em>commercial</em> engine, perhaps even one whose name begins with
						&quot;U&quot;? It&apos;s a good question, and there are other
						projects which may go this route. By synergizing with the dozens of
						core Godot developers and thousands of individual contributors,
						building upon the rising star Godot Engine 4.0 offers V-Sekai a
						unique opportunity to create a truly community owned, fully free
						ecosystem that won&apos;t be forever in a corporate shadow. We hope
						to follow a shining role model,{" "}
						<InlineLink href="https://blender.org">Blender</InlineLink>, which
						has grown over two decades to become an industry leader.
					</p>
					<h2 className="-mx-8 mt-8 bg-red-500 px-8 py-4 text-xl font-medium text-white">
						A unique community
					</h2>
					<p>
						V-Sekai is the first fully-open source social VR platform running on
						the Godot Engine. It is designed as a living virtual space where you
						can meet people and interact in a virtual space, while leveraging
						the fast-growing Godot game engine to let users create any content
						they want and have it be immediately accessible and shareable to a
						growing community.
					</p>
					<h2 className="-mx-8 mt-8 bg-red-500 px-8 py-4 text-xl font-medium text-white">
						Why V-Sekai?
					</h2>
					<p>
						We believe social VR should be a truly community-driven experience.
						For this to be realised, we believe the entire software stack should
						be available, moddable, and tweakable from the source up, in order
						to ensure V-Sekai develops into the best platform it can possibly
						be.
					</p>
					<h2 className="-mx-8 mt-8 bg-red-500 px-8 py-4 text-xl font-medium text-white">
						Who are we?
					</h2>
					<p>
						We are a small group of developers and VR enthusiasts who felt there
						was a need for a project like this. Many of us already love the
						existing offerings out there, but wanted our own self-sustainable
						platform which could survive on the backs of its community, rather
						than being tied to the life of a company and a small group of
						individuals with exclusive control over its direction.
					</p>
					<h2 className="-mx-8 mt-8 bg-red-500 px-8 py-4 text-xl font-medium text-white">
						What do we offer?
					</h2>
					<p>
						We have built a framework for the Godot game engine which makes the
						distribution of custom avatars and worlds in a networked environment
						possible. Our current plan is to offer hosting via our own web
						server, as well as individual server hosting and social functions,
						and in the future plan to broaden what we can offer. We have already
						been tackling many of the technical challenges required to make such
						a project possible on the Godot game engine, including:
					</p>
					<ul className="list-inside list-disc">
						<li>Spatialised audio and VOIP support </li>
						<li>Native VRM support</li>
						<li>Our own custom networking stack</li>
						<li>
							A security-focused sandboxed scripting environment backed by WASM
						</li>
						<li>Customisable servers with their own individual game rules</li>
					</ul>
					<h2 className="-mx-8 mt-8 bg-red-500 px-8 py-4 text-xl font-medium text-white">
						Alright, when can we get it?
					</h2>
					<p>
						At the moment, Godot Engine 4.0 is in early beta, and there is
						nothing usable outside of development purposes. We encourage you to
						connect with us on Discord, check out the code, or try the Godot
						Engine 4.0 beta.
					</p>
					<p>
						We want to ensure that our formal release is as polished as it can
						be. Please{" "}
						<InlineLink href="https://discord.gg/7BQDHesck8">
							join our Discord server
						</InlineLink>{" "}
						to learn more and stay connected.
					</p>
				</section>
				<footer className="mx-auto mt-8 flex w-full max-w-screen-md py-8">
					<hr />
					<p className="text-xs">
						Vulkan and the Vulkan logo are registered trademarks of the Khronos
						Group Inc. OpenXR&trade; and the OpenXR logo are trademarks owned by
						The Khronos Group Inc. and are registered as a trademark in China,
						the European Union, Japan and the United Kingdom.
					</p>
				</footer>
			</main>
		</>
	);
}
