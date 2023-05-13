<script>
	import Meta from '$lib/components/meta.svelte';
	import Footer from '$lib/components/footer.svelte';
	import FloatingBar from './floating-bar.svelte';
</script>

<Meta image="https://elclark.my.id/images/elclark.png" keywords={['about', 'me']} />

<h1><a href="/">About Me</a></h1>

<article>
	<h2>Introduction</h2>
	<p>
		Hello! My name is Elclark Kuhu, a Software Engineer, Web Developer, UI/UX designer, and system
		administrator based on Manado, Indonesia.
	</p>

	<p>
		I enjoy designing user interfaces and managing systems, and I'm passionate about technology and
		science. In my free time, I like gaming and listening to music.
	</p>

	<h2>Background</h2>
	<p>
		I am currently a college student studying computer science and improving my software
		development, website development and system administration skills. In my spare time I like to
		explore new technologies and experiment with new programming languages and frameworks
	</p>

	<h2>Skills and Expertise</h2>
	<p>
		I have a wide range of skills and experience working with a variety of programming languages,
		frameworks and technologies, including:
	</p>

	<ul>
		<li>
			<b>Web Development</b>: JavaScript, React.js, Svelte
		</li>
		<li>
			<b>Mobile Development</b>: Java, Android
		</li>
		<li>
			<b>Game Development</b>: Lua
		</li>
		<li>
			<b>System Administration</b>: Linux, Windows, OpenWRT, MikroTik
		</li>
		<li>
			<b>Other Languages</b>: C++, Python
		</li>
	</ul>

	<p>
		In addition to my programming skills, I'm also skilled in UI and UX design, and have experience
		creating beautiful and functional interfaces for web and mobile applications. I'm always excited
		to learn and explore new technologies and frameworks, and I'm confident in my ability to adapt
		and learn quickly.
	</p>

	<p>
		I hope this updated version better reflects your skills and experience. Let me know if you have
		any other feedback or changes you'd like me to make.
	</p>

	<h2>Hobbies and Interests</h2>
	<p>
		When I'm not working or learning new things, I enjoy pursuing a range of hobbies and interests.
		Some of my favorite activities include:
	</p>

	<ul>
		<li>
			<b>Gaming</b>: I'm an avid gamer, and I enjoy playing a variety of games on different
			platforms. I find gaming to be a great way to unwind and have fun, and it also helps me stay
			up-to-date with the latest trends and technologies in the industry.
		</li>
		<li>
			<b>Music</b>: I'm passionate about music, and I enjoy listening to and discovering new artists
			and genres.
		</li>
		<li>
			<b>Technology and Science</b>: I'm always fascinated by the latest developments and
			breakthroughs in technology and science, and I enjoy reading about them and learning more. I
			find that keeping up with these fields helps me stay informed and inspired, and also fuels my
			curiosity and desire to learn more.
		</li>
	</ul>

	<p>
		Overall, I'm someone who enjoys trying new things and challenging myself, and I'm always excited
		to see what the world has to offer.
	</p>

	<h2>Motivations</h2>
	<p>
		One of my biggest motivations is seeing the amazing things that people can create with
		technology. Whether it's a beautiful website, an innovative app, or a powerful piece of
		software, I'm constantly inspired by the creativity and ingenuity of people working in the
		field.
	</p>

	<h2>Accomplishments</h2>
	<p>
		While I'm still early in my career, I'm proud of the progress I've made so far. Some of my
		accomplishments include:
	</p>

	<ul>
		<li>Building this website using SvelteKit</li>
		<li>Developing a game inventory system for FiveM using JavaScript and Lua</li>
	</ul>

	<p>
		These are just a few examples of projects I've worked on that I'm particularly proud of. I'm
		always striving to improve my skills and take on new challenges, and I'm excited to see what the
		future holds.
	</p>

	<h2>Goals</h2>
	<p>
		My main goal for the future is to continue learning and growing as a developer and designer, and
		to build even cooler things that make a difference in people's lives. I'm also interested in
		exploring the intersection of technology and social justice, and using my skills to help create
		positive change in the world.
	</p>

	<h2>Conclusion</h2>
	<p>
		Thanks for taking the time to learn a little bit about me! If you're interested in working
		together, collaborating on a project, or just want to say hello, feel free to reach out. I'm
		always happy to connect with other people who are passionate about technology and creating cool
		things.
	</p>
</article>

<FloatingBar />
<Footer />

<style>
	li {
		margin-bottom: 0.25rem;
	}

	h1 a {
		color: currentColor;
	}

	h1 a:hover {
		text-decoration: underline;
	}
</style>
