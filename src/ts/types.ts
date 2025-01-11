export interface Streaming {
	[index: string]: string;
}

export interface OneTrack {
	title: string;
	feat: string;
	version: string;
	cover: string;
}

export interface Tracklist {
	header?: string;
	tracks: (string | OneTrack)[];
}

export interface Stats {
	tracks: number;
	minutes: number;
	omissions: number;
	startyear: number;
}

export interface Data {
	id: string;
	title: string;
	subtitle: string;
	year: number;
	kind: string;
	description: string;
	coverby: string;
	workingtitles: string[];
	tracklist: Tracklist[];
	stats: Stats;
}

export interface Release {
	data: Data;
	streaming: Streaming;
}
