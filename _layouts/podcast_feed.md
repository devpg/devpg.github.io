<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:googleplay="http://www.google.com/schemas/play-podcasts/1.0" version="2.0">
  <channel>
    <atom:link href="https://pubsubhubbub.appspot.com/" rel="hub"/>
    <atom:link href="{{ page.feed_url | absolute_url }}" rel="self"/>
    <atom:link href="{{ page.feed_url | absolute_url }}" rel="first"/>
    <atom:link href="{{ page.feed_url | absolute_url }}" rel="last"/>
    <title>{{ page.title }}</title>
    <language>{{ page.feed_lang }}</language>
    <pubDate>{{ page.feed_since }}</pubDate>
    <lastBuildDate>{{ page.feed_last }}</lastBuildDate>
    <description>{{ page.description }}</description>
    <link>{{ page.url | absolute_url }}</link>
    <generator>{{ page.url | absolute_url }}</generator>
    <itunes:type>episodic</itunes:type>
    <image>
      <url>{{ page.logo | absolute_url }}</url>
      <title>{{ page.title }}</title>
      <link>{{ page.url | absolute_url }}</link>
    </image>
    <itunes:image href="{{ page.logo | absolute_url }}"/>
    <itunes:subtitle/>
    <itunes:author>{{ page.feed_owner}}</itunes:author>
    <itunes:explicit>no</itunes:explicit>
    <itunes:keywords></itunes:keywords>
    <itunes:category text="Technology"/>
    <itunes:category text="News">
      <itunes:category text="Tech News"/>
    </itunes:category>
    <itunes:summary>{{ page.description }}</itunes:summary>
    <itunes:owner>
      <itunes:name>{{ page.feed_owner }}</itunes:name>
      <itunes:email>{{ page.feed_contact }}</itunes:email>
    </itunes:owner>
    {{ content }}
  </channel>
</rss>