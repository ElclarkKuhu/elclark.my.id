<script lang="ts">
	const defaultKeywords = [
		'Elclark',
		'website',
		'personal',
		'portfolio',
		'open source',
		'Software Engineer',
		'Web Developer',
		'UI/UX Designer',
		'System Administrator',
		'Manado',
		'Indonesia',
		'JavaScript',
		'React.js',
		'Svelte',
		'Java',
		'Android',
		'Lua',
		'Linux',
		'Windows',
		'OpenWRT',
		'MikroTik',
		'C++',
		'Python',
		'UI design',
		'UX design',
		'gaming',
		'music',
		'technology',
		'science',
		'collaboration'
	]

	const defaultCategorys = [
		'Technology',
		'Software Development',
		'Web Development',
		'UI/UX Design',
		'System Administration',
		'science',
		'portfolio'
	]

	export let type = 'website'
	export let title = 'Elclark - Software Engineer & Web Developer based in Manado, Indonesia'
	export let image: string | undefined = undefined
	export let description =
		'Elclark is a versatile tech professional. He specializes in Web & UI/UX. He stays informed about the latest technological trends and eager to take on new challenges.'

	export let path = '/'
	export let domain = 'elclark.my.id'

	export let keywords: Array<string> = []
	keywords = defaultKeywords.concat(keywords)
	export let categorys: Array<string> = []
	categorys = categorys.concat(defaultCategorys)

	export let publishedTime: string | undefined = undefined
	export let modifiedTime: string | undefined = undefined

	export let authorName = 'Elclark Kuhu'
	export let authorEmail = 'contact@elclark.my.id'

	export let twitterUsername = '@elclark_kuhu'
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
