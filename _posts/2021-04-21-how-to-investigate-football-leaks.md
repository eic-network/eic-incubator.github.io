---
title: HOW TO INVESTIGATE FOOTBALL LEAKS
---

By [Alex Morega](https://grep.ro/), [RCIJ/The Black Sea](http://crji.theblacksea.eu/)

The technology behind scouting through the largest leak in sports history

For more visit our Football Leaks homepage

In April 2016, the European Investigative Collaborations network of 12 major national news organisations received a dataset detailing shady business in football, and set about investigating the mass of rich contents.

This consisted of email inboxes, a bunch of PDF and Word documents, zip and rar archives, whatsapp conversations and encrypted hushmail communication. Out of 1.9TB of data, our team analyzed one terabyte of data, which yielded more than 6 million individual documents.

It was the largest leak in the history of sport and was made available to the investigative team of German news magazine Der Spiegel.

One of the options for EIC journalists to search through the data was a server that we set up at the Romanian Centre of Investigative Journalism (RCIJ), using whatever hardware was at hand.

Specifically, a 2011 MacBook Pro with an after-market SSD, to which we hooked up a large USB drive. It turns out that the MacBook, with quad I7 processors, is a powerful beast, and could churn through the documents at an impressive rate.

We processed the data in stages, using a tool we built for this project called ‘[Snoop](https://github.com/hoover/snoop)’. To get started, we listed all the files in the dataset, and stored them in a PostgreSQL database. Then we extracted the text from the easy emails (from Apple Mail inboxes) and indexed them into elasticsearch, a versatile open-source search database.

Now we wanted to give our journalists access to the search engine so they could start their work.

**Maximising Security**

A Virtual Private Network (VPN) is difficult to set up and support, and replicating the search engine on-premises for each of the 12 news organizations would require hardware and people to take care of each server. We didn't have the resources for that. So we set up a secure HTTPS website, two-factor authentication using the TOTP protocol, time-limited login sessions, rate limiting and traffic logging, which gave us enough confidence to open up the server to our network of journalists, over the public Internet.

We implemented a straightforward process for sign-up and account recovery: the user would get a URL, which contained a short-lived code, that opened a form page. Here they would choose a password, and set up a second factor for authentication, with a compatible phone app like Google Authenticator or Duo Mobile. This process went smoothly and saved us a lot of support work.

Then we went back to the dataset: we ran Tika, a tool that extracts text and metadata from a bunch of different file formats (PDFs, Word documents, etc). We also introduced the concept of file containers, so we could analyze email attachments and archive contents.

Emails were a particular challenge, because they have a tree-like structure of text parts and file attachments, with a bunch of headers with specific meanings, and they come in several file formats to boot. The email parser from Python’s standard library would handle anything that looked like standard RFC-822, and Apple Mail's "emlx" format is a simple adaptation of that. We converted Outlook files using msgconvert and readpst.

There were many scanned documents in the dataset, so early on, Der Spiegel made a big effort to process all PDFs and images through OCR - a process that retrieves the original text from printed documents. We added support in Snoop, matching the files by their unique MD5 checksum, and indexed the OCR output along with the original file.

Each feature added to Snoop would yield more documents for the search engine. To make sure we didn't miss anything, we re-processed the whole dataset every time, using caches to avoid duplicating expensive steps, like parsing emails, running Tika, and unpacking archives. Internally, each document has a unique identifier, so there are no duplicates in the index, and documents have stable URLs in the search engine.

We started out with a very basic user interface: a search box, highlighting for matches in search results, and clicking on a result opened a new tab with nothing more than a text-only preview of the document. As the project went on, we evolved the user interface (UI) with feedback from journalists, to a two-column layout with search results on the left and document preview on the right. Now we display a bunch of metadata for each document, along with links to download the original file, OCRed version (if available), and links to parent and child documents (e.g. email attachments, zip archive contents, and navigation of the original dataset's folder structure).

**Problems Encountered**

Journalists were incredibly forgiving with glitches and initial usability problems, as long as they could actually search through the files, and, over time, get access to more of the dataset, as we improved the processing toolchain. The whole group stayed in touch via Rocket.chat, an open-source clone of Slack, that we ran on a self-hosted Sandstorm server, and for the tech team, the questions, feedback and encouragement were invaluable. We hardly needed to set up monitoring in case the server went down - very soon we would receive worried (but friendly) messages and emails…

On the development team, coders Gabriel Vîjială, Dragoș Catarahia, Victor Avasiloaei and myself worked on the data processing and user interface, Coder Dan Achim integrated Hypothesis annotations, and Raluca Ciubotaru designed the user interface and helped us understand how journalists use the tool.

All of this work - document processing, indexing, the search interface, two-factor authentication and the signup process - is open source under the "hoover" umbrella project. We were in a unique position to build the tool, with constant user feedback, a large and varied real-life dataset, and hard publishing deadlines. Now we're smoothing out the rough edges so hoover can be used in other similar projects, both at EIC and in other places.

The source code is on GitHub - [https://github.com/hoover](https://github.com/hoover) - and includes an installation utility to get started quickly. If you try it out, we'd love to hear your experiences.
