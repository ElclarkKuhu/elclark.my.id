<script lang="ts">
	const defaultKeywords = [
		'Elclark',
		'elclark.my.id',
		'website',
		'personal',
		'personal website',
		'portfolio',
		'portfolio website',
		'open source',
		'open source website',
		'software engineer',
		'technology',
		'science',
		'music',
		'gaming',
		'ui',
		'ux',
		'ui/ux',
		'ui designer',
		'ux designer',
		'ui/ux designer'
	];

	const defaultCategorys = ['technology', 'science', 'portfolio'];

	export let type = 'website';
	export let title = 'Elclark';
	export let image: string | undefined = undefined;
	export let description =
		"Hi, I'm Elclark, I'm a software engineer and designer. I also do system administration, and designing UI and UX. I'm still learning and trying new things. I'm passionate about technology, science, music, and gaming.";

	export let path = '/';
	export let domain = 'elclark.my.id';

	export let keywords: Array<string> = [];
	keywords = defaultKeywords.concat(keywords);
	export let categorys: Array<string> = [];
	categorys = categorys.concat(defaultCategorys);

	export let publishedTime: string | undefined = undefined;
	export let modifiedTime: string | undefined = undefined;

	export let authorName = 'Elclark Kuhu';
	export let authorEmail = 'founder@elclark.my.id';

	export let twitterUsername = '@elclark_kuhu';
</script>

<!-- <Meta
	type=""
	title=""
	image=""
	description=""
	path=""
	domain=""
	keywords={[]}
	categorys={[]}
	publishedTime=""
	modifiedTime=""
	authorName=""
	authorEmail=""
	twitterUsername=""
/> -->

<svelte:head>
	<!-- Metadata -->
	<title>{title}</title>
	<link rel="canonical" href="https://{domain}{path}" />

	<!-- Basic HTML Meta Tags -->
	<meta name="keywords" content={keywords.join(', ')} />
	<meta name="description" content={description} />
	<meta name="copyright" content="Elclark" />
	<meta name="language" content="EN" />
	<meta name="robots" content="index, follow" />

	<meta name="author" content={`${authorName}, ${authorEmail}`} />
	<meta name="designer" content="Elclark, mail@elclark.my.id" />
	<meta name="owner" content="Elclark, mail@elclark.my.id" />
	<meta name="url" content="https://{domain}{path}" />
	<meta name="identifier-URL" content="https://{domain}" />
	<meta name="category" content={categorys.join(', ')} />
	<meta name="coverage" content="Worldwide" />
	<meta name="distribution" content="Global" />
	<meta name="rating" content="General" />

	<!-- OpenGraph Meta Tags -->
	<meta name="og:title" content={title} />
	<meta name="og:type" content={type} />
	<meta name="og:url" content="https://{domain}{path}" />
	{#if image}
		<meta name="og:image" content={image} />
	{/if}
	<meta name="og:site_name" content="Elclark" />
	<meta name="og:description" content={description} />

	<meta name="og:email" content="mail@elclark.my.id" />
	<meta name="og:region" content="MDO" />
	<meta name="og:country-name" content="ID" />

	{#if type === 'article'}
		{#if publishedTime}
			<meta name="article:published_time" content={publishedTime} />
		{/if}
		{#if modifiedTime}
			<meta name="article:modified_time" content={modifiedTime} />
		{/if}

		<meta name="article:author" content={`${authorName}, ${authorEmail}`} />
		<meta name="article:section" content={categorys[0]} />
		<meta name="article:tag" content={categorys.join(', ')} />
	{/if}

	<!-- Twitter Metadata -->
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content="https://{domain}{path}" />

	<meta name="twitter:card" content="summary" />
	{#if image}
		<meta name="twitter:image" content={image} />
	{/if}
	<meta name="twitter:creator" content={twitterUsername} />
	<meta name="twitter:site" content={twitterUsername} />
</svelte:head>
