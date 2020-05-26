// jshint esversion: 6

const randomWords =[{key: "access control", value: "Ways of controlling who can see or enter information on a computer system."},
  {key: "account", value: "An agreement with a company that allows you to use the internet and email, and gives you space on the internet to put your documents."},
  {key: "adaptive design", value: "designers apply it in GUIs, such as webpages, which must function on devices of different sizes.Nearly the same as responsive design."},
  {key: "address", value:"This tag defines the contact information for the author/owner of a document or an article.e."},
  {key: "agile", value: "Used for describing ways of planning and doing work in which it is understood that making changes as they are needed is an important part of the job."},
  {key: "android", value:"This is a Linux-based operating system for mobile devices such as smart phones..."},
  {key: "ajax", value: "A set of web development techniques using many web technologies on the client side to create asynchronous web applications."},
  {key: "algorithm", value: "A set of mathematical rules that search engines use to rank the search results once a user has entered in a keyword (or keywords) when performing an online search. In other words, it is a method of ranking the Web site listings contained within its index."},
  {key: "American National Standards Institute", value: "An organization of American industry groups that work with other nations to develop standards in facilitating telecommunications and international trade."},
  {key: "anchor", value:"This mark the start and end of hypertext links."},
  {key: "annotations", value:"Notes that you can add to documents. These notes are stored on your local disk (hard drive) and are available each time you access a document. This feature is found in some Web browsers as well."},
  {key: "anonymize", value:"to remove identifying information from (something, such as computer data) so that the original source cannot be known"},
  {key: "application programming interface", value:"An interface or communication protocol between a client and a server intended to simplify the building of client-side software. It has been described as a “contract” between the client and the server, such that if the client makes a request in a specific format, it will always get a response in a specific format or initiate a defined action."},
  {key: "application", value:"A computer program that is designed for a particular purpose"},
  {key: "array", value:"A systematic arrangement of objects, usually in rows and columns. Mostly used to store multiple values in a single variable."},
  {key: "artificial intelligence", value:"It refers to computer hardware and software that emulates human behaviour, using reasoning and learning to solve problems."},
  {key: "ASCII", value:"The worldwide standard for the code numbers used by computers to represent all the uppercase and lowercase Latin letters, numbers, punctuation, and other symbols. There are 128 standard codes, each of which can be represented by a 7 digit binary number: 0000000 through 1111111."},
  {key: "asynchronous", value:"Something that is not happening in real time, rather senders ship off their messages for recipients to open or view at their convenience."},
  {key: "Atom", value:"A free and open-source text and source code editor for macOS, Linux, and Microsoft Windows with support for plug-ins written in Node.js, and embedded Git Control, developed by GitHub."},
  {key: "attribute", value:"A trait, characteristic, or property of an entity. In the computing world, it generally refers to a column name or field in a database."},
  {key: "authentication", value:"The step of determining the identity of the requesting client, such as comparing user identification and a password to a customer file."},
  {key: "authorization", value:"A process that verifies whether or not an individual or organization who has requested an action actually has the permission to make the request."},
  {key: "avatar", value:"Refers to a character that represents an online user. They are commonly used in multiplayer gaming, online communities, and Web forums."},
  {key: "back slash", value:"the name of a character on the computer keyboard. They are primarily used to represent a path."},
  {key: "back-hack", value:"The reverse process of finding out who is hacking into a system."},
  {key: "backlink", value:"A link from someone else\"s Web site to your site."},
  {key: "back end", value:"The portion of a program that accomplishes the processing tasks the program is designed to perform."},
  {key: "backbone", value:"The Internet high-speed data highway, it serves as a major access point to which other networks connect."},
  {key: "backup", value:"A copy of information held on a computer that is stored separately from the computer"},
  {key: "bad neighborhood", value:"A group of linked websites with poor reputations and search rankings."},
  {key: "bandwidth", value:"The difference between two frequencies and the amount of information that can flow through a channel, as expressed in cycles per second (hertz)."},
  {key: "bar code", value:"A series of vertical lines printed on most physical merchandise, it\"s used to identify the product and its price (among other details)."},
  {key: "base", value:"This tag specifies the base URL/target for all relative URLs in a document."},
  {key: "batch", value:"A method of organizing several files into a single group for transmitting or printing. This serves to increase the efficiency of the data transmission."},
  {key: "big data", value:"Refers traditionally to a collection of data so large and complex that it becomes difficult to process using database management tools."},
  {key: "binary", value:"A system of numerical notation that has 2 rather than 10 as a base."},
  {key: "binary file transfer", value:"relating to a system of counting, used in computers, in which only the numbers 0 and 1 are used."},
  {key: "bit", value:"The basic unit of information in a binary numbering system. It works like this: The electronic circuitry in computers detects the difference between two states (high current and low current) and represents these two states as one of two numbers, 1 or 0. "},
  {key: "bitmap", value:"A computer image formed from pixels that are each stored as a value of one or more bits"},
  {key: "blob", value:"A varying-length binary string that can be up to 2,147,483,647 characters long."},
  {key: "blockchain", value:"A system used to make a digital record of all the occasions a cryptocurrency (= a digital currency such as bitcoin) is bought or sold, and that is constantly growing as more blocks are added."},
  {key: "block-level", value:"all HTML element\"s that begins a new line on a web page and extends the full width of the available horizontal space of its parent element."},
  {key: "blog", value:"A Web site or social media site where users can post a chronological, up-to-date e-journal entry of their thoughts"},
  {key: "body", value:"This element contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc."},
  {key: "bookmark", value:"A direct link to an often visited site, saved in your browser for easy access."},
  {key: "boolean", value:" a data type that can only have one of two values, like \"yes\" or \"no\", \"on\" or \"off\",\"true\" or \"false\"."},
  {key: "Bootstrap", value: "The most popular free HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites."},
  {key: "breadcrumb", value:"This navigation provide links back to each previous page the user navigated through, and shows the user\"s current location in a website."},
  {key: "browser", value:"a computer program that makes it possible for you to read or see information on the internet."},
  {key: "bug", value:"A programming error that causes a software application or computer system to perform erratically, produce incorrect results, or crash altogether."},
  {key: "button", value:"A graphic that a user can \"click on\" to do something, such as download a program or go to another Web page."},
  {key: "byte", value:"The byte is also the basic unit of measurement for computer storage, storing the equivalent of one character."},
  {key: "C shell", value:"An interface for users whose Internet Service Provider (ISP) only offers character-based, command line access to a Unix system."},
  {key: "camel case", value:"The practice of joining words or phrases without spaces and capitalizing the words within the compound."},
  {key: "cache", value:"a form of high-speed memory that your computer sets aside to store frequently accessed data; once the data is stored, it can be retrieved directly from your hard drive rather than from a server."},
  {key: "CAPTCHA", value:"A string of letters or numbers that dynamically appears on some Web pages, ransom notes require that you type this sequence of characters exactly as they appear into a form field below the image in order to gain access to another Web page."},
  {key: "case sensitive", value:"A phrase used to describe whether letters are typed in uppercase or lowercase."},
  {key: "cascading style sheets", value:"A format used to separate style from structure on Web pages, it is a feature of HTML that gives both Web developers and users more control over how Web pages are displayed."},
  {key: "child", value:"this element selector selects those elements which have the same specific parent."},
  {key: "chip", value:"a very small piece of semiconductor, especially in a computer, that contains extremely small electronic circuits and devices, and can perform particular operations"},
  {key: "Chrome", value:"A browser created by Google, it is a program used to view, download, upload, surf, or otherwise access documents (for example, Web pages) on the Internet."},
  {key: "client", value:"The name for a computer that can request information, such as a Web page, from a server."},
  {key: "the cloud", value:"Is a not physical entity, but instead is a vast network of remote servers around the globe which are hooked together and meant to operate as a single ecosystem. These servers are designed to either store and manage data, run applications, or deliver content or a service such as streaming videos, web mail, office productivity software, or social media. Instead of accessing files and data from a local or personal computer, you are accessing them online from any Internet-capable device—the information will be available anywhere you go and anytime you need it."},
  {key: "Colf Fusion", value:"A Rapid Application Development (RAD) system, it integrates browser, server, and database technologies into Web applications. "},
  {key: "Common Gateway Interface", value:"This is a standard script for running programs on a server from a Web page."},
  {key: "comment", value:"a comment is a programmer-readable explanation or annotation in the source code of a computer program."},
  {key: "compiler", value:"A program that reads statements written in a human-readable programming language and translates them into a machine-readable program."},
  {key: "connect", value:"The line of communication between your computer (or any other device) and the Internet."},
  {key: "console", value:"A piece of software, such as a command prompt, where a user can input advanced commands."},
  {key: "container", value:"Those tags can contain an unspecified set of other tags."},
  {key: "content", value:"the textual and graphical information contained in a Web site"},
  {key: "conversion", value:"The process of changing computer data so that it can be read by a different software program:"},
  {key: "Content Managment System", value:"A computer-based system that manages content in a collaborative environment."},
  {key: "COPPA", value:"A law created to protect the privacy of children under 13.."},
  {key: "cookie", value:"A small piece of information about you (about your computer, actually). It is a small file that a Web server automatically sends to your computer when you browse certain Web sites."},
  {key: "counter", value:"A program counter is a register in a computer processor that contains the address (location) of the instruction being executed at the current time. As each instruction gets fetched, the program counter increases its stored value by 1."},
  {key: "dark web", value:"Refers to a collection of websites that exist on an encrypted network and cannot be found by using traditional search engines or visited by using traditional browsers."},
  {key: "data structures", value:"A collection of data values, the relationships among them, and the functions or operations that can be applied to the data."},
  {key: "database", value:"An organized collection of data, generally stored and accessed electronically from a computer system."},
  {key: "debugging", value:"Is the routine process of locating and removing computer program bugs, errors or abnormalities, which is methodically handled by software programmers"},
  {key: "declaration", value:"A statement that describes an identifier, such as the name of a variable or a function. Declarations are important because they inform the compiler or interpreter what the identifying word means, and how the identified thing should be used."},
  {key: "dedicated server", value:"A single computer in a network reserved for serving the needs of the network."},
  {key: "default", value:"What the computer, operating system, or program has set for the user based on what it believes is the best option."},
  {key: "demo", value:"A term that generally refers to a short display of a product\"s features and capabilities. It can be used in the past, present, or future tenses."},
  {key: "deployment", value:"in the context of network administration, refers to the process of setting up a new computer or system to the point where it is ready for productive work in a live environment."},
  {key: "deprecated", value:"The process of marking attributes or features that should be avoided by users."},
  {key: "desktop", value:"A personal computer (PC) or professional workstation that\"s designed to fit on a desk."},
  {key: "device", value:"Is a unit of physical hardware or equipment that provides one or more computing functions within a computer system. It can provide input to the computer, accept output or both."},
  {key: "device driver", value:"A particular form of software application that is designed to enable interaction with hardware devices."},
  {key: "docking station", value:"A unit for encasing a portable computer that expands into the equivalent of a desktop computer"},
  {key: "document source", value:"The actual programming code that creates a Web page"},
  {key: "documentation", value:"Is written text or illustration that accompanies computer software or is embedded in the source code. This explains how the software operates or how to use it, and may mean different things to people in different roles."},
  {key: "doctype", value:"This tells the browser the version of HTML used in the page"},
  {key: "Document Object Model", value:"a language and platform-independent convention that represents the interaction of objects written in markup languages, i.e., Hypertext Markup Language (HTML), Extensible Hypertext Markup Language (XHTML) and Extensible Markup Language (XML)."},
  {key: "domain", value:"Refers to any group of users, workstations, devices, printers, computers and database servers that share different types of data via network resources. There are also many types of subdomains. "},
  {key: "domain name system", value:"the phonebook of the Internet. This translates domain names to IP addresses so browsers can load Internet resources."},
  {key: "dots per inch", value:"Is a way of measuring the density of a print or video image."},
  {key: "Document Type Definition", value:"Refers to a set of markup declarations that define a document type for Standard Generalized Markup Language (SGML) languages."},
  {key: "Drupal", value:"An open-source content management system (CMS). It is written in the PHP programming language and distributed under a GNU General Public License. It can help individuals build various kinds of Web projects with its template resource that promotes user friendly results."},
  {key: "dynamic content", value:"Information, on a website or webpage that changes often, usually daily or each time a user reloads or returns to the page."},
  {key: "documentation", value:"Is written text or illustration that accompanies computer software or is embedded in the source code. This explains how the software operates or how to use it, and may mean different things to people in different roles."},
  {key: "entity", value:"Is any object in the system that we want to model and store information about. The are usually recognizable concepts, either concrete or abstract, such as person, places, things, or events which have relevance to the database."},
  {key: "easter egg", value:"Is a hidden video game feature or surprise. They are usually unlocked by using certain techniques to complete in-game tasks, entering specific button combinations or acquiring access to secret game or game file areas."},
  {key: "ECMAscript", value:"The official name of the language that use Javascript."},
  {key: "e-commerce", value:"The marketing, buying and selling of merchandise or services over the Internet."},
  {key: "e-learning", value:"An umbrella term to describe the act of learning online"},
  {key: "elastic layout", value:"In this layout is the size of the columns or sections bounded to the font size being used."},
  {key: "element", value:"an individual component of an HTML (Hypertext Markup Language) document or web page"},
  {key: "em", value:"Relative length unit to the font-size of the element"},
  {key: "email forwarding", value:"An email client option that allows a sender to forward a received email to another recipient."},
  {key: "embedded style sheets", value:"Allow you to define styles for the whole HTML document in one place."},
  {key: "entry page", value:"The point where Internet users arrive on your website or mobile site – it is the first page someone views on your site. "},
  {key: "epub", value:"A file extension used for an e-book file."},
  {key: "ethernet", value:"The traditional technology for connecting wired local area networks (LANs), enabling devices to communicate with each other via a protocol"},
  {key: "exit page", value:"This page is the last page viewed by a visitor during a visit"},
  {key: "export", value:"To format data so that it can be read and used by another application, thereby allowing multiple programs to share the same data."},
  {key: "external CSS", value:"This change the look of an entire website by changing just one fil"},
  {key: "external link", value:"hyperlink that point at (target) any domain other than the domain the link exists on (source)"},
  {key: "extentions", value:"Adds extra features to an already working standalone application."},
  {key: "extranet", value:"An extranet is a controlled private network allowing customers, partners, vendors, suppliers and other businesses to gain information, typically about a specific company or educational institution, and do so without granting access to the organization\"s entire network."},
  {key: "eye candy", value:"Something superficially attractive to look at"},
  {key: "favicon", value:"Is a shortcut icon that represents an associated Web page or website. It is usually displayed on a compliant browser’s address bar before the URL and bookmarks folder."},
  {key: "feature", value:"A component of a software program that makes it unique and that enables you to do something with that program (for example, a spell checker)."},
  {key: "file compression", value:"An essential tool for computer users. It is a method of making data smaller so that more of it can be transmitted in less time."},
  {key: "file sharing", value:"Software that enables multiple users to access the same computer files simultaneously."},
  {key: "filter", value:"A program that examines incoming data to ensure that only information within certain parameters is allowed to pass through."},
  {key: "Firefox", value:"An open source browser organized by the folks at Mozilla that empowers users to browse faster, more safely and more efficiently than other browsers."},
  {key: "firewall", value:"Security software that is installed on an user\"s PC which controls communications to and from the user\"s PC"},
  {key: "firmware", value:"System software written onto read-only memory (ROM), it is a combination of software and hardware."},
  {key: "fixed-width", value:"The layout of the page is contained within a wrapper that doesn\"t adjust its size when the width of the browser changes."},
  {key: "flex box", value:"This Flexible Box Module was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities. "},
  {key: "float", value:"This term is used in various programming languages to define a variable with a fractional value"},
  {key: "fold", value:"A term to describe a web browser window’s bottom border."},
  {key: "font", value:"A graphical representation of text that may include a different typeface, point size, weight, color, or design."},
  {key: "font family", value:"This CSS property can hold several font names as a \"fallback\" system."},
  {key: "font style", value:"There are four possible options for this css property: normal, italic, oblique and inherit"},
  {key: "font weight", value:"Defines the thinness or thickness of a font."},
  {key: "font category", value:"Serif, Sans-Serif, Oldstyle, Modern, Script an Decorative belongs to a different ...."},
  {key: "font stack", value:"a list of fonts in the CSS font-family declaration. The fonts are listed in order of preference that you would like them to appear in case of a problem, such as a font not loading. A font stack allows you to control the look of the fonts on the web page even if the site visitor\"s computer doesn\"t have the initial font that you called for."},
  {key: "format", value:"A preestablished layout for data"},
  {key: "frame", value:"A rectangular area absolutely positioned on the display screen."},
  {key: "frameworks", value:"A foundation with a specified level of complexity (based on user level) that a programmer may extend using their own code. It might include a set of software libraries, compilers, interpreters, or an API. In general, it provides an environment that facilitates a specific type of programming for a software development project."},
  {key: "Frequently Asked Questions", value:"FAQ"},
  {key: "front-end", value:"Term that describes the UI (user interface)"},
  {key: "FTP", value:"The standard method (protocol) for downloading and uploading files over the Internet."},
  {key: "Fully Qualified Domain Name", value:"the address name of a computer using DNS"},
  {key: "full-stack", value:"This programmer is familiar with all of the \"layers\" of software development, and has knowledge of networking, database, user interface , API, and security."},
  {key: "functionality", value:"The way something works or operates, or online, what purpose it serves. "},
  {key: "git", value:"An Open Source Distributed Version Control System."},
  {key: "github", value:"Code hosting platform for collaboration and version control."},
  {key: "Graphics Interchange Format", value:"An image file format commonly used for images on the web and sprites in software programs."},
  {key: "Graphical User Interface", value:"s a form of user interface that allows users to interact with electronic devices through graphical icons and visual indicators such as secondary notation, instead of text-based user interfaces, typed command labels or text navigation."},
  {key: "graceful degradation", value:"The ability of a computer, machine, electronic system or network to maintain limited functionality even when a large portion of it has been destroyed or rendered inoperative. The purpose is to prevent catastrophic failure."},
  {key: "guestbook", value:"A paper or electronic means for a visitor to acknowledge a visit to a site, physical or web-based, and leave details such as their name, postal or electronic address and any comments."},
  {key: "hacker", value:"Refer to anyone with technical skills, but it often refers to a person who uses his or her abilities to gain unauthorized access to systems or networks in order to commit crimes."},
  {key: "hard copy", value:"A printed version on paper of data held in a computer."},
  {key: "hardware", value:"Any physical component of a computer system that contains a circuit board, Integrated Circuits, or other electronics."},
  {key: "hastag", value:"A type of metadata tag used on social networks such as Twitter and other microblogging services, allowing users to apply dynamic, user-generated tagging which makes it possible for others to easily find messages with a specific theme or content. ... ."},
  {key: "heuristic", value:"A technique designed for solving a problem more quickly when classic methods are too slow, or for finding an approximate solution when classic methods fail to find any exact solution."},
  {key: "hexadecimal", value:"A positional system that represents numbers using a base of 16."},
  {key: "hit", value:"A request for 1 item from a web site."},
  {key: "hosting", value:"A service that allows organizations and individuals to post a website or web page onto the Internet."},
  {key: "hotspot", value:"A physical location where people may obtain Internet access, typically using Wi-Fi technology, via a wireless local area network (WLAN) using a router connected to an internet service provider"},
  {key: "hover", value:"Describes the act of moving a mouse cursor over a clickable object, but not actually clicking the left or right mouse button."},
  {key: "HSL", value:"Alternative representations of the RGB color model,"},
  {key: "htaccess", value:"A configuration file for use on web servers running the Apache Web Server software."},
  {key: "HTML", value:"The standard markup language for Web pages."},
  {key: "hyperlink", value:"an element in an HTML document that links to either another portion of the document or to another document altogether."},
  {key: "Hypertext Transfer Protocol", value:"An application protocol for distributed, collaborative, hypermedia information systems. It is the foundation of data communication for the World Wide Web, where hypertext documents include hyperlinks to other resources that the user can easily access,"},
  {key: "Hypertext Markup Language", value:"The standard markup language for Web pages"},
  {key: "Hypertext Preprocessor", value:"A widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML."},
  {key: "ICT", value:"refers to all the technology used to handle telecommunications, broadcast media, intelligent building management systems, audiovisual processing and transmission systems, and network-based control and monitoring functions."},
  {key: "Ignorant Operator Error", value:"An I/O Device Error happens when Windows XP or Vista, is not able to perform an Input/Output action (such as reading or copying data) when it is trying to access a drive or disk."},
  {key: "image map", value:"A graphic image defined so that a user can click on different areas of the image and be linked to different destinations"},
  {key: "index", value:"A common method for keeping track of data so that it can be accessed quickly. It is a list in which each entry contains the name of the item and its location."},
  {key: "inheritance", value:"The mechanism by which certain properties are passed on from a parent element down to its children"},
  {key: "inline elements", value:"These HTML elements are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content."},
  {key: "inline styles", value:"A term that refers to style sheet information being applied to the current element. By this, I mean that instead of defining the style once, then applying the style against all instances of an element, you only apply the style to the instance you want the style to apply to."},
  {key: "interactive program", value:"A computer software program that requires user interaction to operate. This interaction could include inputting information, modifying information, managing information or otherwise manipulating data."},
  {key: "internet", value:"A worldwide system of computer networks."},
  {key: "internal link", value:"A hyperlink that allows navigation from one page in a website to another. "},
  {key: "Internet Protocol", value:"The method  by which data is sent from one computer to another on the Internet."},
  {key: "IP adress", value:"a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication"},
  {key: "Internet Message Access Protocol", value:"A method of accessing and storing mail on a mail server."},
  {key: "intranet", value:"a private network contained within an enterprise that is used to securely share company information and computing resources among employees. An intranet can also be used to facilitate working in groups and teleconferences."},
  {key: "International Organization For Standardization", value:"An international standard-setting body composed of representatives from various national standards organizations."},
  {key: "Integrated Services Digital Network", value:"A set of communication standards for digital telephone connection and the transmission of voice and data over a digital line. These digital lines are commonly telephone lines and exchanges established by the government."},
  {key: "Integrated development environment", value:"This environment has visual tools that allow programmers to develop programs more efficiently."},
  {key: "Javascript", value:"A high-level, interpreted scripting language that conforms to the ECMAScript specification."},
  {key: "Java", value:"A high-level programming language developed by Sun Microsystems"},
  {key: "Jquery", value:"A JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.It is free, open-source softwar"},
  {key: "Java", value:"A high-level programming language developed by Sun Microsystems"},
  {key: "Jpeg", value:"A commonly used method of lossy compression for digital images, particularly for those images produced by digital photography."},
  {key: "kerning", value:"The process of adjusting the spacing between characters in a proportional font, usually to achieve a visually pleasing result."},
  {key: "kernel", value:"The core of a computer\"s operating system, with complete control over everything in the system.[1] On most systems, it is one of the first programs loaded on start-up "},
  {key: "keyboard", value:"A device used to input text into a computer or other device"},
  {key: "kilobyte", value:"A multiple unit used for binary data. Refers to 1,024 (2^10) bytes."},
  {key: "LAN", value:"a group of computers and peripheral devices that share a common communications line or wireless link to a server within a distinct geographic area"},
  {key: "launch", value:"To start, begin, or open up a computer program or application."},
  {key: "LAMP", value:"This acronym refers to Linux, Apache, MySQL, and PHP (or Perl or Python) which compose a solution stack made of free and open source software, suitable for building robust, dynamic web sites."},
  {key: "languages", value:"Programmers use this to develop software programs, scripts, or other sets of instructions for computers to execute. They share similarities, each has its."},
  {key: "leading", value:"The amount of vertical space between lines of text."},
  {key: "legacy code", value:"source code that relates to a no-longer supported or manufactured operating system or other computer technology. ... While the term usually refers to source code, it can also apply to executable code that no longer runs on a later version of a system, or requires a compatibility layer to do so."},
  {key: "libraries", value:"a collection of precompiled routines that a program can use. The routines, sometimes called modules, are stored in object format. They are particularly useful for storing frequently used routines because you do not need to explicitly link them to every program that uses them."},
  {key: "link farm", value:"a website (or a group of websites) created only for the purpose of increasing the link popularity of another site by increasing the number of incoming links. They usually looks like a regular web page, but the majority of the content is hyperlinks -- often random and unrelated -- to other websites. "},
  {key: "Linux", value:"The best-known and most-used open source operating system."},
  {key: "liquid layouts", value:"All containers on the page have their widths defined in percents – meaning that they are completely based on the viewport rather than the initial containing block."},
  {key: "log", value:"Detailed list of an application information, system performance, or user activities. This can be useful for keeping track of computer use, emergency recovery, and application improvement."},
  {key: "logoff", value:"The process of disconnecting from a network or account voluntarily."},
  {key: "login", value:"A set of credentials used to gain access to an area that requires proper authorization. Used to gain access to and control of computers, networks, and bulletin boards, as well as other services and devices. Today, most of them consist of both a username and password."},
  {key: "lorem ipsum", value:"One of the oldest and most common examples of placeholder text. It usually consists of randomly generated words that make up nonsensical Latin."},
  {key: "MACintosh", value:"A line of computers introduced by Steve Jobs and Steve Wozniak"},
  {key: "machine learning", value:"A branch of Artifical Intelligence focused on creating computer systems that can accomplish tasks without explicit instructions."},
  {key: "mainframe", value:"A type of computer that generally are known for their large size, amount of storage, processing power and high level of reliability. They are primarily used by large organizations for mission-critical applications requiring high volumes of data processing."},
  {key: "malware", value: "Also kown als malicious software. Any software that brings harm to a computer system. It can be in the form of worms, viruses, trojans, spyware, adware and rootkits, etc., which steal protected data, delete documents or add software not approved by a user."},
  {key: "MAMP", value:"an acronym representing the original components of the system: macOS, the operating system; Apache, the web server; MySQL, the database management system; and PHP, Perl, or Python, programming languages used for web development. The name is derived from LAMP, a similar stack of all open-source software widely used for web sites, but substituting proprietary macOS for open-source Linux.."},
  {key: "markup languages", value:" These languages are designed for the processing, definition and presentation of text. The language specifies code for formatting, both the layout and style, within a text file. The code used to specify the formatting are called tags."},
  {key: "marquee", value:"This tag is used to designate an area that contains scrolling text."},
  {key: "megabyte", value:"a multiple of the unit byte for digital information. 10^6."},
  {key: "memory", value:"any physical device capable of storing information temporarily like RAM or permanently, like ROM"},
  {key: "menu bar", value:"Horizontal bar containing the labels of drop-down menus in an operating system\"s GUI."},
  {key: "meta data", value:"Any data that describes other data."},
  {key: "meta tags", value:"This are tags placed in the head section of your HTML-code that help define the contents of a web page."},
  {key: "minification", value:"The process of minimizing code and markup in your web pages and script files. It’s one of the main methods used to reduce load times and bandwidth usage on websites.."},
  {key: "mirror", value:"A complete backup of the database that can be used if the primary database fails."},
  {key: "mobile device", value:"A handheld tablet or other device that is made for portability, and is therefore both compact and lightweight. New data storage, processing and display technologies have allowed these small devices to do nearly anything that had previously been traditionally done with larger personal computers."},
  {key: "mobile-first", value:"A worldwide system of computer networks."},
  {key: "modem", value:"A hardware device that connects a computer or router to a broadband network."},
  {key: "module", value:"A discrete piece of code which can be independently created and maintained to be used in different systems."},
  {key: "monospace", value:"A font whose letters and characters each occupy the same amount of horizontal space."},
  {key: "Motion Picture Experts Group", value:"An organization that develops standards for encoding digital audio and video. It works with the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC) to ensure media compression standards are widely adopted and universally available."},
  {key: "mouse", value:"A small handheld input device that controls a computer screen\"s cursor or pointer in conjunction with the way it is moved on a flat surface."},
  {key: "Multipurpose Internet Mail Extensions", value:"MIME is an extension of the original Internet e-mail protocol that lets people use the protocol to exchange different kinds of data files on the Internet: audio, video, images, application programs, and other kinds, as well as the ASCII text handled in the original protocol, the Simple Mail Transport Protocol (SMTP)."},
  {key: "multi-user", value:"Refers to computer systems that support two or more simultaneous users"},
  {key: "nerd", value:"Similar to a geek (a person who knows a lot about the Internet), but this is more of a brainy person who knows everything there is to know about computers."},
  {key: "netbook", value:"A small, cheap laptop designed for accessing internet functions."},
  {key: "netscape navigator", value:"The first commercially successful Web browser. It was based off the Mosaic browser and was created by a team led by Marc Andreessen, a programmer who co-wrote the code for Mosaic. Netscape Navigator helped influence the development of the Web into a graphical user experience rather than a purely text-based one."},
  {key: "network", value:"A group of two or more devices that can communicate."},
  {key: "node", value:"In the DOM is every html-element a ..."},
  {key: "non breaking space", value:"A space that will not break into a new line."},
  {key: "normal flow", value:"The way that elements are displayed in a web page in most circumstances. "},
  {key: "npm", value:"This is the world\"s largest Software Library and also a software Package Manager and Installer of computer networks."},
  {key: "obsolete", value:"Refers to outdated computer hardware, software, technology, services or practices that are no longer used, even if they are in working condition."},
  {key: "offline browsers", value:"They are used for viewing downloaded copies or content from websites while not connected to the Internet"},
  {key: "online", value:"In a generic sense, refers to when an electronic device is on and connected to other devices, such as another computer, a network or a device such as a printer."},
  {key: "online tracking", value:"Refers to a website or company that tracks the pages you visit, searches you perform, and other activities to improve their services or sell to other companies."},
  {key: "Opera", value:"A other web browser for Microsoft Windows, Android, iOS, macOS, and Linux operating systems"},
  {key: "Operating System", value:"In its most general sense, is this software that allows a user to run other applications on a computing device. "},
  {key: "outbound link", value:"A link that is meant to take you elsewhere."},
  {key: "parallel port", value:"An interface allowing a personal computer (PC) to transmit or receive data down multiple bundled cables to a peripheral device such as a printer."},
  {key: "paged media", value:"These properties control the presentation of content for print or any other media that splits content into discrete pages. It allows you to set page breaks, control printable area, style left and right pages differently, and control breaks inside elements."},
  {key: "Page Views", value:"This measures how many times someone has viewed an entire page including all text, images, etc."},
  {key: "parent", value:"Every node has exactly one, except the root (which has non);"},
  {key: "parse", value:"To break it down into component parts so that its syntax can be analyzed, categorized, and understood."},
  {key: "password", value:"A set of secret characters or words used to authenticate access to a digital system."},
  {key: "patch", value:"A piece of software code that can be applied after the software program is installed to correct an issue with that program."},
  {key: "peer-to-peer network", value:"Refers to the transmission between two peer computers over a network."},
  {key: "Perl", value:"An interpreted, free, open source programming language first developed by Larry Wall in 1987. It is very similar in structure to the C language. It is one of the more commonly used languages in writing CGI scripts and programming for Internet and web page applications."},
  {key: "permalink", value:"A link that enables a user to link to a post, article, web page, or other Internet content that is dynamically created."},
  {key: "Photoshop", value:"It is the premier graphics and photo editing program used professionals in every field of digital imaging."},
  {key: "pica", value:"Unit of measure that is 1/6th of an inch."},
  {key: "pishing", value:"A term used to describe a malicious individual or group of individuals who scam users. They do so by sending e-mails or creating web pages that are designed to collect an individual\"s online bank, credit card, or other login information. Because these e-mails and web pages look like legitimate companies users trust them and enter their personal information."},
  {key: "pixel", value:"The smallest portion of an image or display that a computer is capable of printing or displaying."},
  {key: "plain text", value:"any text, text file, or document that contains only text. Unlike a rich-text document, this file cannot have bold text, fonts, larger font sizes, or any other special text formatting."},
  {key: "platform", value:"A description of the overall standard of a computer\"s hardware or software."},
  {key: "plug-and-play", value:"refers to a computer\"s ability to detect and configure hardware automatically without requiring the user to configure hardware with jumpers or dip switches."},
  {key: "plugin", value:"A software add-on that is installed on a program, enhancing its capabilities."},
  {key: "pop-up", value:"Term used to describe a window that appears on top of all other Windows."},
  {key: "port", value:"Allow computers to access external devices."},
  {key: "Portable Document Format", value:"a file format and file extension developed by Adobe that enables users to capture the native appearance of a document. It is useful because it allows the document to be viewed and printed the same way on any device."},
  {key: "Portable Network Graphic", value:"A bitmapped image format that is lossless compressed"},
  {key: "property", value:"This is stored by an object."},
  {key: "pseudo-class", value:"An element of CSS coding that adds conditions to a class. It must immediately be followed by a colon (:), followed by the name of it."},
  {key: "pseudo-element", value:"It is used to style specified parts of an element."},
  {key: "Python", value:"An interpreted, interactive, object-oriented programming language that was first developed by Guido van Rossum in 1989 and released in 1991."},
  {key: "query", value:"A field or option used to locate information within a database or another location.."},
  {key: "QWERTY", value:"This keyboard is named after the first five letter keys located under the row of number keys on the keyboard and is the official computer keyboard standard (ISO 9995)."},
  {key: "radio button", value:"One type of selection indicator in a list of options. If an option is selected, the circle is filled. If the option is not selected, the circle is empty. When one circle is selected, the others are deselected, so that only one option may be selected at any time."},
  {key: "Random-Access Memory", value:"A form of computer memory that can be read and changed in any order, typically used to store working data and machine code. This allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory. ."},
  {key: "rankings", value:"In SEO refers this to a website’s position in the search engine results page."},
  {key: "raster graphic", value:"this image file format that is defined by a pixel that has one or more numbers associated with it. The number defines the location, size, or color of the pixels. "},
  {key: "readme", value:"A text file that contains information for the user about the software program, utility, or game."},
  {key: "real-time", value:"A term used to describe a process or event that occurs immediately."},
  {key: "Real Simple Syndication", value:"XML formatted text commonly used for distributing weblogs, news, or other content that is updated frequently."},
  {key: "reboot", value:"The process of restarting a working computer using hardware (e.g., a power button) instead of software."},
  {key: "redirect", value:"Describes the process of sending a signal, data, or other information to an alternate location"},
  {key: "refresh", value:"Another way of describing the process of reloading or updating what is being displayed or stored."},
  {key: "remote access", value:"A term used to describe a device capable of accessing a shared resource."},
  {key: "render", value:"Refers to the process of taking a computer image or file and converting it into another format or applying a modification such as shading or shadows.."},
  {key: "responsive design", value:"Method of creating webpages so that they adjust to the device viewing the document."},
  {key: "respository", value:"The collection of revisions and their metadata. It represents a step-by-step chronological record of every change made to help project managers revert all or part of the project to a previous state if necessary."},
  {key: "resolution", value:"The image quality produced by a printer or displayed on a monitor."},
  {key: "return code", value:"One of a variety of server messages you may see on your browser screen, it reports the return status of a Web page request and specifies whether the data transfer was successful or not (and why not)."},
  {key: "RGB", value:"a method of creating colors from the colors of red, green, and blue."},
  {key: "rollover", value:"A technique when using JavaScript, allows for an alternate image to be displayed when the mouse rolls over a specific line of text or graphic on the Web page."},
  {key: "router", value:"hardware device designed to receive, analyze and move incoming packets to another network."},
  {key: "Ruby", value:"an open source object-oriented programming language developed by Yukihiro Matsumoto."},
  {key: "Safari", value:"an Internet browser that was first introduced on June 30, 2003, and is included with Apple macOS X and the iPhone. It is also available for iPod Touch and iPad."},
  {key: "salt", value:"A salt is random data that is used as an additional input to a one-way function that \"hashes\" data, a password or passphrase. Salts are used to safeguard passwords in storage."},
  {key: "sandbox", value:"A location in memory partitioned from the rest of the system. The purpose is to create an area where experimental, sensitive, or potentially dangerous code and data may be executed and accessed without affecting the rest of the system."},
  {key: "sans-serif", value:"A font that does not contain a serif."},
  {key: "save", value:"The process of writing data to a storage medium"},
  {key: "script", value:"A computer language with a series of commands within a file that is capable of being executed without being compiled. ."},
  {key: "search engine", value:"software, usually accessed on the Internet, that searches a database of information according to the user\"s query. "},
  {key: "search engine optimization", value:"a technique where a web designer or writer creates a page for the visitor reading the page and search engines scanning the site for keywords. By adding and arranging important keywords on a page and pages linking to the page, you can boost the pages placement on search engine results."},
  {key: "security", value:"A system or set of steps that helps keep data from prying eyes by utilizing passwords, encryption, and hiding data."},
  {key: "select box", value:"This box allows you to offer visitors a dropdown selection of options. This is helpful when creating an application or asking questions with a range of values."},
  {key: "selector", value:"In CSS are this patterns used to select the element(s) you want to style."},
  {key: "server", value:"An instance of a computer program or device that accepts and responds to requests made by another program, known as a client. "},
  {key: "serif", value:"This is a small line which appears on the top or bottom of the characters in some fonts or typefaces."},
  {key: "shared hosting", value:"Type of web hosting where a single physical server hosts multiple sites. Many users utilize the resources on a single server, which keeps the costs low."},
  {key: "sign off", value:"is the process of disconnecting from a network or account voluntarily."},
  {key: "sign on", value:"The process of connecting to a network or a software program that utilizes a network identification. This process requires that the user specify the username and password and, in some cases, additional network or server information."},
  {key: "Simple Object Access Protocol", value:"A protocol for exchanging XML messages over a network."},
  {key: "singleton", value:"A software design pattern that restricts the instantiation of a class to one \"single\" instance. "},
  {key: "sitemap", value:"A page that contains a link to all sub pages or major sections of a website. This help enable the visitor or search engine the ability to get to any popular section of a website or see what the website has to offer."},
  {key: "slug", value:"The part of a URL which identifies a particular page on a website in an easy to read form. In other words, it’s the part of the URL that explains the page’s content."},
  {key: "smiley", value:"A way of showing an emotion on the Internet and text-based communication such as e-mail, chat, and SMS."},
  {key: "snippet", value:"A small portion of text that is part of a larger set of programming code used for applications and web pages.They are designed to be re-useable and add functionality."},
  {key: "social ads", value:"One of the quickest and most effective ways to connect with our target audience."},
  {key: "software", value:"A collection of instructions that enable the user to interact with a computer, its hardware, or perform tasks."},
  {key: "spam", value:"An e-mail sent to thousands and sometimes millions of people without prior approval, promoting a particular product, service, or a scam to get other people\"s money."},
  {key: "spam filter", value:"A program that is used to detect unsolicited and unwanted email and prevent those messages from getting to a user\"s inbox."},
  {key: "spambot", value:"A program designed to collect, or harvest, e-mail addresses from the Internet in order to build mailing lists for sending unsolicited e-mail, also known as spam."},
  {key: "spyware", value:"A term used to describe a program designed to gather information about a user\"s activity secretly."},
  {key: "static", value:"A term used to denote that something is not dynamic, meaning that it remains the same."},
  {key: "string", value:"A series of alphanumeric characters for any purpose."},
  {key: "style", value:"Refers to the overall appearance or design of an object, or method of accomplishing a task."},
  {key: "subscribe", value:"To manually add your name and e-mail address to a mailing list, LISTSERV, or discussion group."},
  {key: "subdomain", value:"A domain that is part of a larger domain name."},
  {key: "Swift", value:"A programming language developed by Apple. It\"s used to create computer programs and mobile apps for iOS, macOS X, and Linux, as well as for the Apple Watch and AppleTV."},
  {key: "tablet", value:"A mobile computing device designed to be held in one or two hands. It is approximately the size of a hardcover book (seven inches or bigger), and resembles a large smartphone. "},
  {key: "tag", value:"When referring to HTML, XML, or other markup languages, an element inserted into a document or file that changes the look of content or performs an action."},
  {key: "terminal", value:"An interface that allows you to access the command line from the GUI. "},
  {key: "text editor", value:"refers to any program capable of editing textfiles"},
  {key: "templates", value:"A file that is created with an overall layout or blueprint with a format to be used for a group of documents or a generic document."},
  {key: "themes", value:"The term is used to describe the general layout, design, and \"feel\" of a website or software program. "},
  {key: "toolbar", value:"A row of boxes, often at the top of an application window that control various functions of the software. The boxes often contain images that correspond with the function they control"},
  {key: "transpile", value:"A source-to-source compiler, it translates source code from one language to another (or to another version of the same language)."},
  {key: "turing test", value:"a test developed by Alan Turing and published in the October 1950 paper, Computing Machinery and Intelligence. The test proposed that if a computer could pass for a human during a test that it could be said to be able to \"think.\""},
  {key: "typography", value:"The art and approach of arranging typed characters to make a written language both beautiful, as well as improving its readability"},
  {key: "TypeSCRIPT", value:"an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language."},
  {key: "Uniform Resource Idenfifier", value:"URI."},
  {key: "Uniform Resource Locator", value:"URL."},
  {key: "under construction", value:"An overused phrase on the World Wide Web to signify that a Web site is not yet finished."},
  {key: "Unix", value:"A multi-user operating system designed for flexibility and adaptability. Originally developed in the 1970s"},
  {key: "upgrade", value:"To change a system or program to a newer version."},
  {key: "usability", value:"A process of testing a Web site user interface for maximum functionality, early detection of design problems, and intuitiveness of design. It refers to the ease with which users are able to navigate a Web site."},
  {key: "user experience", value:"describes how a person feels about a company or product. For example, a product that is easy for the user to understand and use has a much higher ... than a product that is difficult and frustrating.."},
  {key: "user agent", value:"A browser text string that is given to each website you visit. contain information such as the browser version, compatibility, operating system, and any modifying plugins. Using this data, a website can assess the capabilities of your computer, optimizing a page\"s performance and display."},
  {key: "version control", value:"The management of changes made over time. These changes can be to source code, project assets, or any other information that goes into the finished product. It permits many people to work on the same parts of a project without worrying that their changes will overwrite the work of anyone else."},
  {key: "world wide web consortium", value:"The main international standards organization for the World Wide Web"},
  {key: "wamp", value:"An acronym that stands for Windows, Apache, MySQL, and PHP"},
  {key: "web developer", value: "The title for a person who architecturally builds or structures a Web site from a technical standpoint."},
  {key: "web log", value:"A listing of text, images, or other objects that are arranged in a chronological order that first started appearing in 1998. Blogs are often maintained and run by a single individual, updated daily, or contain personal remarks about a topic, a personal ramble, or an update on the person\"s life"},
  {key: "webmaster", value:"An individual or group of individuals responsible for maintaining, updating or otherwise developing a website."},
  {key: "white space", value:"Any section of a document that is unused or space around an object. They help separate paragraphs of text, graphics, and other portions of a document, and helps a document look less crowded."},
  {key: "wi-fi", value:"A high-speed wireless networking standard"},
  {key: "wildcard", value:"A part of a character string that, when used in text searches, makes finding a match much easier. When you are doing an online search on a search engine, you can place an asterisk (*) at the end of a keyword to broaden your search and retrieve more information."},
  {key: "wireframe", value:"A  visual guide that represents the skeletal framework of a website. The wireframe depicts the page layout or arrangement of the website’s content, including interface elements and navigational systems, and how they work together. The wireframe usually lacks typographic style, color, or graphics, since the main focus lies in functionality, behavior, and priority of content.  In other words, it focuses on “what a screen does, not what it looks like.”"},
  {key: "wizard", value: "A term used to describe an individual who is very skilled with computers or programming"},
  {key: "world wide web", value:"An information system where documents and other web resources are identified by Uniform Resource Locators ), which may be interlinked by hypertext, and are accessible over the Internet."},
  {key: "wordpress", value:"a free and open source CMS by Automattic for managing a website, blog, and other content on the Internet that was first released on May 27, 2003."},
  {key: "wrapper", value:"Describes an intermediate set of functions that allow one piece of software to be accessed directly by other software, without additional computation"},
  {key: "wysiwyg", value:"acronym for What you see is what you get ."},
  {key: "xml", value:"A markup language much like HTML. It was designed to store and transport data. It was designed to be self-descriptive."}
];

const hangManImage = document.querySelector("#image");
const solutionContainer = document.querySelector("#solution-container");
const winOrLoseContainer = document.querySelector("#win-lose-container");
const letterContainer = document.querySelector("#letter-container");
const hintButton  = document.querySelector("#showHideHintButton");
const showHideHint = document.querySelector("#showHideHint");
const rulesButton = document.querySelector("#showHideRulesButton");
const showHideRulesArticle = document.querySelector(".showHideRules");
const total = document.querySelector("#myScore");
var score = 0;

const gameState = {
  wordAndDefinition: [],
  term: [],
  index: 0,
  hangman: 1,
  turn: 1,
  lettersFound: 0,
  won: false,
  lost: false,
  maxpoints: 8
};

var htmlyear = document.querySelector("#htmlYear");
var year = new Date().getFullYear();
var yearString = year.toString();
htmlyear.textContent = yearString;

function initGameState(){
  // this function initialises the gameState and playfield (html)

  gameState.wordAndDefinition = selectRandom();
  gameState.term = gameState.wordAndDefinition[0];
  gameState.index = gameState.wordAndDefinition[1];

  gameState.hangman = 1;
  gameState.turn = 1;
  gameState.lettersFound = 0;
  gameState.won = false;
  gameState.lost = false;
  gameState.maxpoints = 8;
  fillSolutionContainer();
  winOrLoseContainer.textContent = "";
  removeClassesFromAllLetters();
  removeClassesFromWinOrLoseContainer();
  if(rulesButton.textContent === "close") {
    toggleShowHideRulesDiv();
  }
  if(hintButton.textContent === "close") {
    toggleShowHideHintDiv();
  }
  hideRulesButton();
  updateHangmanPicture();
}

function hideRulesButton(){
  rulesButton.classList.add("hide");
  hintButton.classList.remove("hide");
}

function selectRandom() {
  // return random word from the randomWords array and split it up into an array
  var randomIndex = Math.floor(Math.random() * randomWords.length);
  return [randomWords[randomIndex].key.split(""), randomIndex];
}

function fillSolutionContainer() {
  //emptying the solutionContainer
  emptySolutionContainer();
  // fill it up with one solutionLetter (use createNewSolutionLetter)
  // per letter in the current gamestate.term
  for(let i = 0 ; i < gameState.term.length; i++) {
    solutionContainer.appendChild(createNewSolutionLetter(i));
  }
}

function emptySolutionContainer(){
    solutionContainer.innerHTML = "";
    winOrLoseContainer.style.display = "none";
}

function createNewSolutionLetter(i) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("solution-letter");
  if ((gameState.term[i] === " ") || (gameState.term[i] === "-")){
    newDiv.style.borderBottom = "none";
    newDiv.textContent = gameState.term[i];
    gameState.lettersFound += 1;
  }
  return newDiv;
}

function removeClassesFromAllLetters() {
  // remove the failed and success classes from all .letter
  const letters = document.querySelectorAll(".letter");
  letters.forEach(function (letter) {
    letter.classList.remove("failed");
    letter.classList.remove("success");
  });
}

function removeClassesFromWinOrLoseContainer() {
  // remove the win or lose classes from winOrLoseContainer
  winOrLoseContainer.classList.remove("won","lost");
}

function updateHangmanPicture() {
  switch(gameState.hangman) {
    case 1:
      hangManImage.src = "https://i.postimg.cc/3NZ6HL2Q/hangman0" + gameState.hangman + ".png";
      break;
    case 2:
      hangManImage.src = "https://i.postimg.cc/9XPsTfKg/hangman0" + gameState.hangman + ".png";
      break;
    case 3:
      hangManImage.src = "https://i.postimg.cc/L6HwVpM9/hangman0" + gameState.hangman + ".png";
      break;
    case 4:
      hangManImage.src = "https://i.postimg.cc/0yj4L0Qh/hangman0" + gameState.hangman + ".png";
      break;
    case 5:
      hangManImage.src = "https://i.postimg.cc/02c3WB8p/hangman0" + gameState.hangman + ".png";
      break;
    case 6:
      hangManImage.src = "https://i.postimg.cc/XvyzvN98/hangman0" + gameState.hangman + ".png";
      break;
    case 7:
      hangManImage.src = "https://i.postimg.cc/HxDP8G2C/hangman0" + gameState.hangman + ".png";
      break;
    case 8:
      hangManImage.src = "https://i.postimg.cc/DwNNF440/hangman0" + gameState.hangman + ".png";
      break;
    case 9:
      hangManImage.src = "https://i.postimg.cc/vBr2WPqx/hangman0" + gameState.hangman + ".gif";
      break;
  }
  /*hangManImage.src = "images/hangman0" + gameState.hangman + ".png";*/
}

function winOrLose() {
  // checks if the player has won or lost, text should be updated with an appropriate message
  if (gameState.lettersFound === gameState.term.length) {
    gameState.won = true;
    score += gameState.maxpoints;
    total.innerHTML = score.toString();
    winOrLoseContainer.classList.remove("start");
    winOrLoseContainer.style.display = "block";
    winOrLoseContainer.classList.add("won");
    winOrLoseContainer.textContent = "You won!! Continue playing by clicking.";
  }
  if (gameState.hangman === 9) {
    gameState.lost = true;
    total.innerHTML = "0";
    winOrLoseContainer.classList.remove("start");
    winOrLoseContainer.style.display = "block";
    winOrLoseContainer.classList.add("lost");
    winOrLoseContainer.textContent = "You lost!! The word was: " + gameState.term.join("") + ". Next player";
  }
}

function letterClicked(event) {
  // find out which letter is clicked
  // check if that letter is in in the current term (beware of upper/lowercase)
  // if so fill in the .solution-letter
  // update the gameState
  // add the correct class to the clicked letter (event.target)
  // add "success" when the letter is found
  // add "failed" when the letter is not (use [node-element].classList.add())
  // update the hangman picture
  // make sure .letter with a success or .failed class can not be clicked
  if (event.target.matches(".letter") && !gameState.lost && !gameState.won) {
    if (!event.target.matches(".success") && !event.target.matches(".failed")) {
      const selectedLetter = event.target.textContent;
      let lettersFound = 0;
      gameState.term.forEach(function (letter, index) {
        if (letter.toUpperCase() === selectedLetter) {
          lettersFound++;
          const solutionLetter = document.querySelector(".solution-letter:nth-child(" + (index + 1) + ")");
          solutionLetter.textContent = letter.toUpperCase();
        }
      });
      gameState.turn++;
      if (lettersFound > 0) {
        gameState.lettersFound += lettersFound;
        event.target.classList.add("success");
      } else {
        event.target.classList.add("failed");
        gameState.hangman++;
        gameState.maxpoints--;
        updateHangmanPicture();
      }
      winOrLose();
    }
  }
}

function toggleShowHideHintDiv(){
  showHideHint.classList.toggle("show");
  showHideHint.textContent = randomWords[gameState.index].value;
  if (hintButton.textContent === "Hint"){
    hintButton.innerHTML = "close<i class=\"fas fa-caret-down fa-lg\"></i>";
    gameState.maxpoints -= 3;
  }
  else {
    hintButton.innerHTML = "Hint<i class=\"fas fa-caret-right fa-lg\"></i>";
  }
}

function toggleShowHideRulesDiv(){
  showHideRulesArticle.classList.toggle("show");
  if (rulesButton.textContent === "game rules"){
    rulesButton.innerHTML = "close<i class=\"fas fa-caret-down fa-lg\"></i>";
  }
  else {
    rulesButton.innerHTML = "game rules<i class=\"fas fa-caret-right fa-lg\"></i>";
  }
}

winOrLoseContainer.addEventListener("click", initGameState);
letterContainer.addEventListener("click", letterClicked);
hintButton.addEventListener("click",toggleShowHideHintDiv);
rulesButton.addEventListener("click",toggleShowHideRulesDiv);
//This snippet will enable hover effects for touchscreens
document.addEventListener("touchstart", function() {}, true);
