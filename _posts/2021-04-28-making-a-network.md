---
title: Making a network
---

By [Stefan Candea](https://ro.linkedin.com/in/stefan-candea-43ab8819)

A sunny morning. Early September. Leipzig. Panic. The highly secure communication platform run by European Investigative Collaborations (EIC) was experiencing a nasty glitch.

I started typing a direct message to engage the user Stefano but a number of different other colleagues started to reply under his username.

Me: Are you Stefano?

Stefano: Hugo. Don't ask me how this is possible.

Stefano: Hey, woow what's going on?! I'm Christoph!

During that morning, a bug in our authentification system directed anybody who had the credentials to log in to our communication platform towards a fresh account created under the name of our Italian colleague, Stefano. Everyone was Stefano. It was like Anonymous meets Being John Malkovich.

This was not a security issue, since this was happening only to members who had access to the platform in the first place, but several colleagues had already popped up, one kicking out the previous one, under the same user account. We suspended the platform to investigate.

After a few hours the glitch was identified and repaired.

This moment is quite telling for the work and feel of our network.

Firstly, during the entire year which has now culminated in the publication of an international investigation detailing corruption, tax evasion and public deception in the world of sports - [Football Leaks](https://eic.network/projects/football-leaks.html) - we have tested available cutting edge technology, Free Software wherever possible, and built our software from scratch on our own servers.

We know what's happening to our data, we can afford to be fast, flexible and everybody in our network is learning from this experimental approach. We also share admin and control rights across EIC partners.

Secondly, while exchanging information and requesting explanations or assistance on the platform, there is no hierarchy in our group. The way our communication tools are built do permit a distributive approach, delegation and avoid centralization. And so are all partners of EIC: participants in the project argue, ask, fight and compromise, even if reluctantly.

One rule we have is that the coordinator, that's me, is a guide who points to the possible solutions and approaches at hand, on a case-by-case basis, based on previous experience with investigative cross-border projects. I have more then 15 years of experience in such projects, [small and large](https://web.archive.org/web/20201130094303/https://www.icij.org/offshore/about-project-secrecy-sale), in investigating organized crime in Eastern Europe.

In order to be able to coordinate and guide such an experienced group of people, my work has to stay hands-on. Part of the time I use our systems and workflow as a journalist, to lead by example, I dig into the data, post findings, contribute to some stories and collect feedback on our tools. Another part of the time I'm involved in the logistics of the collaboration, also keeping an overview of investigations and making sure important information get's to the relevant people, up to the point when colleagues establish small working groups and collaborate directly.

Another rule we developed is that the coordinator together with the initiator of a given project form a fusion cell and have a final saying in case the network can't reach a compromise, especially related to the publication schedule and the publication of source documents.

EIC’s current project involves 12 media and over 60 journalists reporting in 13 languages, including info-designers and a dozen technologists. Most of us have been working together for the past seven months on this project, with sub-groups meeting online at least once every week. About a third of us participate in face-to-face meetings every two months, where we visit partner newsrooms around Europe. Those who did so, also have the pleasure to wolf down take-away boxes of filets de saumon au vinaigre balsamique at Mediapart in Paris; or drink glasses of a knockout dry red from the Expresso newsroom in Lisbon; and kick ping-pong balls around a fussball table in the back of a dive bar (where smoking is allowed) in St. Pauli in Hamburg or chinwag with participants in top journalism conference Data Harvest in Mechelen, Belgium. Based on these interactions some of the journalists plotted to launch new spin-off investigative projects.

But outside our secure working platform, in real life, to say that there are differences between partners of EIC is an understatement.

Mid November. Two weeks before Football Leaks was launched, editors in chief of the ten EIC partners – or their representatives – meet in Hamburg to commit endorsing this network. Der Spiegel hosted NRC, Politiken, Mediapart, RCIJ/TheBlackSea.eu, NewsWeek Serbia, Falter, L'Espresso, Le Soir, El Mundo and offered a tour of some of the magazine operations.

On the 13th floor of the giant open-plan Spiegel building overlooking the slickly port of Hamburg, in the online newsroom and on the way to the War Room, Michael Bird, editor of theblacksea.eu in Romania asked me: “I wonder how we could make the tour of our operations in Bucharest, since I'm doing the translating, editing, picture-editing, fact-checking, publishing, and social media promotion from my bedroom.”

As one initiative of the non-profit [Romanian Centre for Investigative Journalism](https://web.archive.org/web/20201130094303/http://crji.theblacksea.eu/), indeed TBS has no operating budget, but has boots on the ground: it relies on a network of local independent journalists who investigate at source, volunteer work and small research grants. But RCIJ/TBS do contribute to EIC as the other partners do, both with research from a complicated region, as well as with a nose for developing technology.

The work on Football Leaks

This current project started when DER SPIEGEL decided to collaborate on this research with the EIC network on the data-set obtained by [Rafael Buschmann](http://www.spiegel.de/international/business/football-leaks-a-look-at-the-man-behind-the-documents-a-1124452.html) from Football Leaks. At the end of April, the EIC partner journalists meet in Hamburg. All partners walk away with clear options on how to analyse the leaked dataset.

I'm not a football fan and in our group we had a great mix of investigators and experienced sport reporters. So during the kick-off meeting I left for a while the EIC journalists discussing strategies to investigate the football world, and joined two sub-groups that had parallel discussions in the next rooms: an info-design and a tech group started to collaborate.

The information design journalists already worked together for a previous EIC investigation into arms smuggling, and the coordination has been done smoothly by Paula Guisado from El Mundo for almost a year now. Nicolas Barthe Dejean from Mediapart took over the building of the eic.network static CMS.

The tech group is formed by only a few of the EIC partners, who discussed what tools to use to process the data, OCR, index, search and communicate securely. Few partners experimented with several proprietary forensic tools and settled on [Intella](https://www.vound-software.com/solutions) to be used internally.

The rest of the partners rely on what Alex Morega build from scratch out of Romania. The Romanian Centre for Investigative Journalism (RCIJ) could offer a secure web-based version for EIC journalists to start searching in less then a month since the beginning of the project. Features and revisions where added on the go. The web-based search engine used to investigate Football Leaks data-set by all partners was further developed during the entire year and is still enhanced as we speak (the code is available here: [https://github.com/hoover/](https://web.archive.org/web/20201130094303/https://github.com/hoover/) and a demo server here: [https://hoover.crji.org/](https://web.archive.org/web/20201130094303/https://hoover.crji.org/)).

Also during the first month we had to settle on a new communication and information exchange platform. For [the previous project on weapons](https://eic.network/projects/arms.html) we used a platform called [Intertwinkles](https://web.archive.org/web/20201130094303/https://intertwinkles.org/) that was discontinued in June. So for the current one, we tested several solutions and settled to a new technology called [Sandstorm](https://web.archive.org/web/20201130094303/https://sandstorm.io/about).

The Sandstorm team offered our group a free for_work license, so we implement an independent two factor authentication system on top of our own instance of Sandstorm (we used [https://www.privacyidea.org/](https://web.archive.org/web/20201130094303/https://www.privacyidea.org/)). Stephan Heffner at Der Spiegel took over the maintaining and management of EIC communication platform, including the security and back-ups.

We choose this system for several reasons. First, it runs most of the important free and open source apps you can think of when working in a team: RocketChat, EtherPad, Davros sharing system, Wekan project management, GitLab for code and for posting findings and most important DokuWiki.

Most of the processed information, articles and replies to questions is shared using the wikis. For this investigation we co-created several hundred wiki pages. This used the format and style of Wikipedia, so acts as not only an effective tried-and-tested archiving tool, but also an internal knowledge base which can be used to host facts for use in future investigations.

Second, access to each of the above mentioned Apps is granular and can be delegated, and it doesn't need a central manager. Once you are part of the platform you can work in the big group, give further access to your new colleagues or you can create your own small teams without the rest of the users having access to what you do.

Last but not least, behind each application we run is a different community of free/open source developers and a few different people taking bugs seriously and patching them up fast. Distributive work again: instead of relying on very few coders to fix all the stuff under a centralized command, we could enjoy the responsiveness of totally different groups of people.

We also experimented with implementing our own layer of annotations, hosting our server of Hypothes.is. The main advantage of this technology is to be able to work directly on source documents and annotate findings, leaving a trace on the document for others to see. Also we gave life to Columbo, a robot in the guise of Peter Falk's shabby detective, who is serving annotations to our internal chat on a dedicated channel. We experiment on how annotations work during the discovery phase, mostly to briefly highlight new findings for further references and alert other colleagues. We explore ways at how best to use annotations in the editorial process. And we are testing annotations for the post-publication phase, where journalists and readers can engage published documents.

For our weekly telephone conferences, both on content and tech, we switched slowly to meet.Jit.si and we tried to use as little as possible emails, even disabling the Sandstorm email notifications and invites because they are not sent encrypted. When we did use email, we used PGP. Yes, with all the burdens of using PGP, more then 50 people are new users of encryption as a result of this ongoing project.

Differences and tensions

To have so many different journalists working together for so many months on a secret data-set can't happen without discovering big differences. Sometimes this has lead to tensions and heated discussions and open criticism. We choose to have the arguments and fights in the open.

If you look at where EIC partners are based, you'll realize we bring different experiences and approaches to journalism in one single place. Not to mention the diverse languages and cultures. We already knew from our weapons investigation that some parts of the investigative process are very different from one media to another, for instance the acceptance or not of undercover research.

And we knew that most of the tensions will be related to the publication schedule. This part involved a lot of discussions and compromises on all sides, since everybody wants to host the stories exclusively. It was a lot of time and energy put into this to be able to satisfy the logistical questions of print deadlines of weeklies that appear on different days or of online publications that have diverse rules on paywall or no paywall. Also, some partners are coming from countries who have important political events during our publication time.

I'm sure that not all partners are happy about the publication schedule. But my personal conviction is also that journalism presenting in-depth stories from different angles in different languages across Europe, at different times, can create a more continuous coverage that benefits the understanding of the topic.

What was a surprise for me was the intensive debate on how to send questions during our confrontation phase, a debate related to the different media legislation in each different country and to different journalistic practices. Since we publish a lot of stories involving people from many countries, we made a very clear plan and sometime partners took ownership on packages of questions on behalf of the network. Half of our internal wikis are dedicated to about 300 people and institutions to whom we asked questions and then shared replies internally.

Lawyers of each partner advised their journalists how to go about the questions, keeping in mind possible injunctions or the needed time for deadlines, but then sometimes such suggestions would incite a conflict between newsrooms from different countries. The biggest question was what language to use when a local partner would ask questions locally on behalf of the entire network who's lingua franca is English. In the end we put legal advisors from the different countries in touch directly. That came in handy when some of the people and companies we are reporting on started to send out legal threats and even obtained an injunction in Spain. El Mundo courageously decided to publish in spite of the injunction. Soon after publication started, a second gag order against EIC partners followed, from the same judge in Spain. Reporters without Borders called it “[an attempt to censor on a continental scale](https://web.archive.org/web/20201130094303/https://rsf.org/en/news/spain-rsf-condemns-european-gag-order-football-leaks)”.

Now you have an insight into the behind the scenes of European Investigative Collaborations. More information will follow on how we work. And during these weeks you are already reading EIC stories in 13 languages across several platforms.

If you like this, let's collaborate on the next stories. If you don't, tell us what and how we could do things differently to ensure that we can better investigate and report on how power structures affect European communities.