import Link from 'next/link';
import React from 'react';

const privacyPolicyPage = () => {
    return (
        <div>
            <h1 className="mb-8 text-4xl">PRIVACY POLICY</h1>
            {/* <p>Last updated January 16, 2024</p> */}
            <p>Last updated February, 06 2024</p>

            <div className="my-8">
                <p>
                    This privacy notice for leadloom games ("we," "us," or
                    "our"), describes how and why we might collect, store, use,
                    and/or share ("process") your information when you use our
                    services ("Services"), such as when you:
                </p>
                <ul className="list-inside list-disc">
                    <li>
                        Visit our website at{' '}
                        <a
                            href="https://leadloom.games"
                            className="text-blue-500"
                        >
                            https://leadloom.games
                        </a>
                        , or any website of ours that links to this privacy
                        notice
                    </li>
                    <li>
                        Engage with us in other related ways, including any
                        sales, marketing, or events
                    </li>
                </ul>
                <p>
                    Questions or concerns? Reading this privacy notice will help
                    you understand your privacy rights and choices. If you do
                    not agree with our policies and practices, please do not use
                    our Services.
                </p>
            </div>

            {/* SUMMARY OF KEY POINTS */}
            <div className="my-8">
                <h2 className="mb-4 text-2xl font-bold">
                    SUMMARY OF KEY POINTS
                </h2>
                <p>
                    This summary provides key points from our privacy notice,
                    but you can find out more details about any of these topics
                    by clicking the link following each key point or by using
                    our table of contents below to find the section you are
                    looking for.
                </p>
                {/* You can add more content here */}
            </div>

            {/* TABLE OF CONTENTS */}

            <h2 className="mb-4 text-2xl font-bold">
                <strong>TABLE OF CONTENTS</strong>
            </h2>
            <p>
                <a href="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a>
            </p>
            <p>
                <a href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
            </p>
            <p>
                <a href="#legalbases">
                    3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                    INFORMATION?
                </a>
            </p>
            <p>
                <a href="#whoshare">
                    4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
            </p>
            <p>
                <a href="#cookies">
                    5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </a>
            </p>
            <p>
                <a href="#sociallogins">
                    6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </a>
            </p>
            <p>
                <a href="#inforetain">
                    7. HOW LONG DO WE KEEP YOUR INFORMATION?
                </a>
            </p>
            <p>
                <a href="#infosafe">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
            </p>
            <p>
                <a href="#infominors">
                    9. DO WE COLLECT INFORMATION FROM MINORS?
                </a>
            </p>
            <p>
                <a href="#privacyrights">10. WHAT ARE YOUR PRIVACY RIGHTS?</a>
            </p>
            <p>
                <a href="#DNT">11. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
            </p>
            <p>
                <a href="#uslaws">
                    12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </a>
            </p>
            <p>
                <a href="#policyupdates">
                    13. DO WE MAKE UPDATES TO THIS NOTICE?
                </a>
            </p>
            <p>
                <a href="#contact">
                    14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>
            </p>
            <p>
                <a href="#request">
                    15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                    COLLECT FROM YOU?
                </a>
            </p>
            <p>
                <strong>1. WHAT INFORMATION DO WE COLLECT?</strong>
            </p>
            <p>
                <strong>Personal information you disclose to us</strong>
            </p>
            <p>
                <strong>In Short:</strong>
                <strong>&nbsp;</strong>We collect personal information that you
                provide to us.
            </p>
            <p>
                We collect personal information that you voluntarily provide to
                us when you register on the Services,&nbsp;express an interest
                in obtaining information about us or our products and Services,
                when you participate in activities on the Services, or otherwise
                when you contact us.
            </p>
            <p>
                <strong>Personal Information Provided by You.</strong> The
                personal information that we collect depends on the context of
                your interactions with us and the Services, the choices you
                make, and the products and features you use. The personal
                information we collect may include the following:
            </p>
            <ul>
                <li>names</li>
            </ul>
            <ul>
                <li>email addresses</li>
            </ul>
            <ul>
                <li>usernames</li>
            </ul>
            <p>
                <strong>Sensitive Information.</strong> We do not process
                sensitive information.
            </p>
            <p>
                <strong>Social Media Login Data.&nbsp;</strong>We may provide
                you with the option to register with us using your existing
                social media account details, like your Facebook, Twitter, or
                other social media account. If you choose to register in this
                way, we will collect the information described in the section
                called "
                <a href="#sociallogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>
                " below.
            </p>
            <p>
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
            </p>
            <p>
                <strong>Information automatically collected</strong>
            </p>
            <p>
                <strong>In Short:</strong>
                <strong>&nbsp;</strong>Some information — such as your Internet
                Protocol (IP) address and/or browser and device characteristics
                — is collected automatically when you visit our Services.
            </p>
            <p>
                We automatically collect certain information when you visit,
                use, or navigate the Services. This information does not reveal
                your specific identity (like your name or contact information)
                but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes.
            </p>
            <p>
                Like many businesses, we also collect information through
                cookies and similar technologies. You can find out more about
                this in our Cookie Notice:
                https://www.leadloom.games/docs/cookies.
            </p>
            <p>The information we collect includes:</p>
            <ul>
                <li>
                    Log and Usage Data. Log and usage data is service-related,
                    diagnostic, usage, and performance information our servers
                    automatically collect when you access or use our Services
                    and which we record in log files. Depending on how you
                    interact with us, this log data may include your IP address,
                    device information, browser type, and settings and
                    information about your activity in the Services&nbsp;(such
                    as the date/time stamps associated with your usage, pages
                    and files viewed, searches, and other actions you take such
                    as which features you use), device event information (such
                    as system activity, error reports (sometimes called "crash
                    dumps"), and hardware settings).
                </li>
            </ul>
            <ul>
                <li>
                    Location Data. We collect location data such as information
                    about your device's location, which can be either precise or
                    imprecise. How much information we collect depends on the
                    type and settings of the device you use to access the
                    Services. For example, we may use GPS and other technologies
                    to collect geolocation data that tells us your current
                    location (based on your IP address). You can opt out of
                    allowing us to collect this information either by refusing
                    access to the information or by disabling your Location
                    setting on your device. However, if you choose to opt out,
                    you may not be able to use certain aspects of the Services.
                </li>
            </ul>
            <p>
                <strong>2. HOW DO WE PROCESS YOUR INFORMATION?</strong>
            </p>
            <p>
                <strong>In Short:&nbsp;</strong>We process your information to
                provide, improve, and administer our Services, communicate with
                you, for security and fraud prevention, and to comply with law.
                We may also process your information for other purposes with
                your consent.
            </p>
            <p>
                <strong>
                    We process your personal information for a variety of
                    reasons, depending on how you interact with our Services,
                    including:
                </strong>
            </p>
            <ul>
                <li>
                    <strong>
                        To facilitate account creation and authentication and
                        otherwise manage user accounts.&nbsp;
                    </strong>
                    We may process your information so you can create and log in
                    to your account, as well as keep your account in working
                    order.
                </li>
            </ul>
            <ul>
                <li>
                    <strong>To request feedback.&nbsp;</strong>We may process
                    your information when necessary to request feedback and to
                    contact you about your use of our Services.
                </li>
            </ul>
            <ul>
                <li>
                    <strong>To protect our Services.</strong> We may process
                    your information as part of our efforts to keep our Services
                    safe and secure, including fraud monitoring and prevention.
                </li>
            </ul>
            <ul>
                <li>
                    <strong>To administer prize draws and competitions.</strong>{' '}
                    We may process your information to administer prize draws
                    and competitions.
                </li>
            </ul>
            <ul>
                <li>
                    <strong>
                        To determine the effectiveness of our marketing and
                        promotional campaigns.
                    </strong>{' '}
                    We may process your information to better understand how to
                    provide marketing and promotional campaigns that are most
                    relevant to you.
                </li>
            </ul>
            <p>
                <strong>
                    3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
                    INFORMATION?
                </strong>
            </p>
            <p>
                <strong>In Short:&nbsp;</strong>We only process your personal
                information when we believe it is necessary and we have a valid
                legal reason (i.e., legal basis) to do so under applicable law,
                like with your consent, to comply with laws, to provide you with
                services to enter into or fulfill our contractual obligations,
                to protect your rights, or to fulfill our legitimate business
                interests.
            </p>
            <p>
                <strong>
                    If you are located in Canada, this section applies to you.
                </strong>
            </p>
            <p>
                We may process your information if you have given us specific
                permission (i.e., express consent) to use your personal
                information for a specific purpose, or in situations where your
                permission can be inferred (i.e., implied consent). You
                can&nbsp;<a href="#withdrawconsent">withdraw your consent</a>
                &nbsp;at any time.
            </p>
            <p>
                In some exceptional cases, we may be legally permitted under
                applicable law to process your information without your consent,
                including, for example:
            </p>
            <ul>
                <li>
                    If collection is clearly in the interests of an individual
                    and consent cannot be obtained in a timely way
                </li>
            </ul>
            <ul>
                <li>For investigations and fraud detection and prevention</li>
            </ul>
            <ul>
                <li>
                    For business transactions provided certain conditions are
                    met
                </li>
            </ul>
            <ul>
                <li>
                    If it is contained in a witness statement and the collection
                    is necessary to assess, process, or settle an insurance
                    claim
                </li>
            </ul>
            <ul>
                <li>
                    For identifying injured, ill, or deceased persons and
                    communicating with next of kin
                </li>
            </ul>
            <ul>
                <li>
                    If we have reasonable grounds to believe an individual has
                    been, is, or may be victim of financial abuse
                </li>
            </ul>
            <ul>
                <li>
                    If it is reasonable to expect collection and use with
                    consent would compromise the availability or the accuracy of
                    the information and the collection is reasonable for
                    purposes related to investigating a breach of an agreement
                    or a contravention of the laws of Canada or a province
                </li>
            </ul>
            <ul>
                <li>
                    If disclosure is required to comply with a subpoena,
                    warrant, court order, or rules of the court relating to the
                    production of records
                </li>
            </ul>
            <ul>
                <li>
                    If it was produced by an individual in the course of their
                    employment, business, or profession and the collection is
                    consistent with the purposes for which the information was
                    produced
                </li>
            </ul>
            <ul>
                <li>
                    If the collection is solely for journalistic, artistic, or
                    literary purposes
                </li>
            </ul>
            <ul>
                <li>
                    If the information is publicly available and is specified by
                    the regulations
                </li>
            </ul>
            <p>
                <strong>
                    4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </strong>
            </p>
            <p>
                <strong>In Short:</strong>&nbsp;We may share information in
                specific situations described in this section and/or with the
                following categories of third parties.
            </p>
            <p>
                <strong>
                    Vendors, Consultants, and Other Third-Party Service
                    Providers.
                </strong>{' '}
                We may share your data with third-party vendors, service
                providers, contractors, or agents ("
                <strong>third parties</strong>") who perform services for us or
                on our behalf and require access to such information to do that
                work. We have contracts in place with our third parties, which
                are designed to help safeguard your personal information. This
                means that they cannot do anything with your personal
                information unless we have instructed them to do it. They will
                also not share your personal information with any organization
                apart from us. They also commit to protect the data they hold on
                our behalf and to retain it for the period we instruct. The
                categories of third parties we may share personal information
                with are as follows:
            </p>
            <ul>
                <li>Data Analytics Services</li>
            </ul>
            <p>
                We also may need to share your personal information in the
                following situations:
            </p>
            <ul>
                <li>
                    <strong>Business Transfers.</strong> We may share or
                    transfer your information in connection with, or during
                    negotiations of, any merger, sale of company assets,
                    financing, or acquisition of all or a portion of our
                    business to another company.
                </li>
            </ul>
            <p>
                <strong>
                    5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </strong>
            </p>
            <p>
                <strong>In Short:</strong>&nbsp;We may use cookies and other
                tracking technologies to collect and store your information.
            </p>
            <p>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to access or store information. Specific
                information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Notice:
                https://www.leadloom.games/docs/cookies.
            </p>
            <p>
                <strong>6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</strong>
            </p>
            <p>
                <strong>In Short:&nbsp;</strong>If you choose to register or log
                in to our Services using a social media account, we may have
                access to certain information about you.
            </p>
            <p>
                Our Services offer you the ability to register and log in using
                your third-party social media account details (like your
                Facebook or Twitter logins). Where you choose to do this, we
                will receive certain profile information about you from your
                social media provider. The profile information we receive may
                vary depending on the social media provider concerned, but will
                often include your name, email address, friends list, and
                profile picture, as well as other information you choose to make
                public on such a social media platform.
            </p>
            <p>
                We will use the information we receive only for the purposes
                that are described in this privacy notice or that are otherwise
                made clear to you on the relevant Services. Please note that we
                do not control, and are not responsible for, other uses of your
                personal information by your third-party social media provider.
                We recommend that you review their privacy notice to understand
                how they collect, use, and share your personal information, and
                how you can set your privacy preferences on their sites and
                apps.
            </p>
            <p>
                <strong>7. HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
            </p>
            <p>
                <strong>In Short:&nbsp;</strong>We keep your information for as
                long as necessary to fulfill the purposes outlined in this
                privacy notice unless otherwise required by law.
            </p>
            <p>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements). No
                purpose in this notice will require us keeping your personal
                information for longer than &nbsp; the period of time in which
                users have an account with us.
            </p>
            <p>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
            </p>
            <p>
                <strong>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</strong>
            </p>
            <p>
                <strong>In Short:&nbsp;</strong>We aim to protect your personal
                information through a system of organizational and technical
                security measures.
            </p>
            <p>
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards and efforts to secure your information,
                no electronic transmission over the Internet or information
                storage technology can be guaranteed to be 100% secure, so we
                cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Although we will do our best to protect your
                personal information, transmission of personal information to
                and from our Services is at your own risk. You should only
                access the Services within a secure environment.
            </p>
            <p>
                <strong>9. DO WE COLLECT INFORMATION FROM MINORS?</strong>
            </p>
            <p>
                <strong>In Short:</strong>&nbsp;We do not knowingly collect data
                from or market to children under 18 years of age.
            </p>
            <p>
                We do not knowingly solicit data from or market to children
                under 18 years of age. By using the Services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent’s use of the
                Services. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18, please contact us at
                admin@ciac.me.
            </p>
            <p>
                <strong>10. WHAT ARE YOUR PRIVACY RIGHTS?</strong>
            </p>
            <p>
                <strong>In Short:</strong>&nbsp;In some regions, such as Canada,
                you have rights that allow you greater access to and control
                over your personal information.&nbsp;You may review, change, or
                terminate your account at any time.
            </p>
            <p>
                In some regions (like Canada), you have certain rights under
                applicable data protection laws. These may include the right (i)
                to request access and obtain a copy of your personal
                information, (ii) to request rectification or erasure; (iii) to
                restrict the processing of your personal information; (iv) if
                applicable, to data portability; and (v) not to be subject to
                automated decision-making. In certain circumstances, you may
                also have the right to object to the processing of your personal
                information. You can make such a request by contacting us by
                using the contact details provided in the section "
                <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
                " below.
            </p>
            <p>
                We will consider and act upon any request in accordance with
                applicable data protection laws.
            </p>
            <p>
                <strong>Withdrawing your consent:</strong> If we are relying on
                your consent to process your personal information, which may be
                express and/or implied consent depending on the applicable law,
                you have the right to withdraw your consent at any time. You can
                withdraw your consent at any time by contacting us by using the
                contact details provided in the section "
                <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
                " below.
            </p>
            <p>
                However, please note that this will not affect the lawfulness of
                the processing before its withdrawal nor, when applicable law
                allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds
                other than consent.
            </p>
            <p>
                <strong>
                    Opting out of marketing and promotional communications:
                </strong>
                <strong>&nbsp;</strong>You can unsubscribe from our marketing
                and promotional communications at any time by clicking on the
                unsubscribe link in the emails that we send, replying "STOP" or
                "UNSUBSCRIBE" to the SMS messages that we send, or by contacting
                us using the details provided in the section "
                <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
                " below. You will then be removed from the marketing lists.
                However, we may still communicate with you — for example, to
                send you service-related messages that are necessary for the
                administration and use of your account, to respond to service
                requests, or for other non-marketing purposes.
            </p>
            <p>
                <strong>Account Information</strong>
            </p>
            <p>
                If you would at any time like to review or change the
                information in your account or terminate your account, you can:
            </p>
            <ul>
                <li>
                    Log in to your account settings and update your user
                    account.
                </li>
            </ul>
            <ul>
                <li>Contact us using the contact information provided.</li>
            </ul>
            <p>
                Upon your request to terminate your account, we will deactivate
                or delete your account and information from our active
                databases. However, we may retain some information in our files
                to prevent fraud, troubleshoot problems, assist with any
                investigations, enforce our legal terms and/or comply with
                applicable legal requirements.
            </p>
            <p>
                <strong>Cookies and similar technologies:</strong> Most Web
                browsers are set to accept cookies by default. If you prefer,
                you can usually choose to set your browser to remove cookies and
                to reject cookies. If you choose to remove cookies or reject
                cookies, this could affect certain features or services of our
                Services. For further information, please see our Cookie Notice:
                https://www.leadloom.games/docs/cookies.
            </p>
            <p>
                <strong>11. CONTROLS FOR DO-NOT-TRACK FEATURES</strong>
            </p>
            <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
            </p>
            <p>
                <strong>
                    12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </strong>
            </p>
            <p>
                <strong>In Short:&nbsp;</strong>If you are a resident of
                Virginia, Utah, Connecticut, Colorado or California, you are
                granted specific rights regarding access to your personal
                information.
            </p>
            <p>
                <strong>
                    What categories of personal information do we collect?
                </strong>
            </p>
            <p>
                We have collected the following categories of personal
                information in the past twelve (12) months:
            </p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <strong>Category</strong>
                        </td>
                        <td>
                            <strong>Examples</strong>
                        </td>
                        <td>
                            <strong>Collected</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>A. Identifiers</p>
                        </td>
                        <td>
                            <p>
                                Contact details, such as real name, alias,
                                postal address, telephone or mobile contact
                                number, unique personal identifier, online
                                identifier, Internet Protocol address, email
                                address, and account name
                            </p>
                        </td>
                        <td>
                            <p>NO</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>
                                B. Personal information as defined in the
                                California Customer Records statute
                            </p>
                        </td>
                        <td>
                            <p>
                                Name, contact information, education,
                                employment, employment history, and financial
                                information
                            </p>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>
                                C. Protected classification characteristics
                                under state or federal law
                            </p>
                        </td>
                        <td>
                            <p>Gender and date of birth</p>
                        </td>
                        <td>
                            <p>NO</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>D. Commercial information</p>
                        </td>
                        <td>
                            <p>
                                Transaction information, purchase history,
                                financial details, and payment information
                            </p>
                        </td>
                        <td>
                            <p>NO</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>E. Biometric information</p>
                        </td>
                        <td>
                            <p>Fingerprints and voiceprints</p>
                        </td>
                        <td>
                            <p>NO</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>F. Internet or other similar network activity</p>
                        </td>
                        <td>
                            <p>
                                Browsing history, search history, online
                                behavior, interest data, and interactions with
                                our and other websites, applications, systems,
                                and advertisements
                            </p>
                        </td>
                        <td>
                            <p>NO</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>G. Geolocation data</p>
                        </td>
                        <td>
                            <p>Device location</p>
                        </td>
                        <td>
                            <p>NO</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                H. Audio, electronic, visual, thermal,
                                olfactory, or similar information
                            </p>
                        </td>
                        <td>
                            <p>
                                Images and audio, video or call recordings
                                created in connection with our business
                                activities
                            </p>
                        </td>
                        <td>
                            <p>NO</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                I. Professional or employment-related
                                information
                            </p>
                        </td>
                        <td>
                            <p>
                                Business contact details in order to provide you
                                our Services at a business level or job title,
                                work history, and professional qualifications if
                                you apply for a job with us
                            </p>
                        </td>
                        <td>
                            <p>NO</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>J. Education Information</p>
                        </td>
                        <td>
                            <p>Student records and directory information</p>
                        </td>
                        <td>
                            <p>NO</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                K. Inferences drawn from collected personal
                                information
                            </p>
                        </td>
                        <td>
                            <p>
                                Inferences drawn from any of the collected
                                personal information listed above to create a
                                profile or summary about, for example, an
                                individual’s preferences and characteristics
                            </p>
                        </td>
                        <td>
                            <p>NO</p>
                        </td>
                    </tr>
                    <tr>
                        <td>L. Sensitive personal Information</td>
                        <td></td>
                        <td>
                            <p>NO</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                We will use and retain the collected personal information as
                needed to provide the Services or for:
            </p>
            <ul>
                <li>Category B - As long as the user has an account with us</li>
            </ul>
            <p>
                We may also collect other personal information outside of these
                categories through instances where you interact with us in
                person, online, or by phone or mail in the context of:
            </p>
            <ul>
                <li>Receiving help through our customer support channels;</li>
            </ul>
            <ul>
                <li>Participation in customer surveys or contests; and</li>
            </ul>
            <ul>
                <li>
                    Facilitation in the delivery of our Services and to respond
                    to your inquiries.
                </li>
            </ul>
            <p>
                <strong>
                    How do we use and share your personal information?
                </strong>
            </p>
            <p>
                Learn about how we use your personal information in the section,
                "<a href="#infouse">HOW DO WE PROCESS YOUR INFORMATION?</a>"
            </p>
            <p>
                <strong>
                    Will your information be shared with anyone else?
                </strong>
            </p>
            <p>
                We may disclose your personal information with our service
                providers pursuant to a written contract between us and each
                service provider. Learn more about how we disclose personal
                information to in the section, "
                <a href="#whoshare">
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
                "
            </p>
            <p>
                We may use your personal information for our own business
                purposes, such as for undertaking internal research for
                technological development and demonstration. This is not
                considered to be "selling" of your personal information.
            </p>
            <p>
                We have not sold or shared any personal information to third
                parties for a business or commercial purpose in the preceding
                twelve (12) months.&nbsp;We have disclosed the following
                categories of personal information to third parties for a
                business or commercial purpose in the preceding twelve (12)
                months:
            </p>
            <p>
                The categories of third parties to whom we disclosed personal
                information for a business or commercial purpose can be found
                under "
                <a href="#whoshare">
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
                "
            </p>
            <p>
                <strong>California Residents</strong>
            </p>
            <p>
                California Civil Code Section 1798.83, also known as the "Shine
                The Light" law permits our users who are California residents to
                request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us using the
                contact information provided below.
            </p>
            <p>
                If you are under 18 years of age, reside in California, and have
                a registered account with the Services, you have the right to
                request removal of unwanted data that you publicly post on the
                Services. To request removal of such data, please contact us
                using the contact information provided below and include the
                email address associated with your account and a statement that
                you reside in California. We will make sure the data is not
                publicly displayed on the Services, but please be aware that the
                data may not be completely or comprehensively removed from all
                our systems (e.g., backups, etc.).
            </p>
            <p>
                <strong>CCPA Privacy Notice</strong>
            </p>
            <p>
                This section applies only to California residents. Under the
                California Consumer Privacy Act (CCPA), you have the rights
                listed below.
            </p>
            <p>The California Code of Regulations defines a "residents" as:</p>
            <p>
                (1) every individual who is in the State of California for other
                than a temporary or transitory purpose and
            </p>
            <p>
                (2) every individual who is domiciled in the State of California
                who is outside the State of California for a temporary or
                transitory purpose
            </p>
            <p>All other individuals are defined as "non-residents."</p>
            <p>
                If this definition of "resident" applies to you, we must adhere
                to certain rights and obligations regarding your personal
                information.
            </p>
            <p>
                <strong>Your rights with respect to your personal data</strong>
            </p>
            <p>Right to request deletion of the data — Request to delete</p>
            <p>
                You can ask for the deletion of your personal information. If
                you ask us to delete your personal information, we will respect
                your request and delete your personal information, subject to
                certain exceptions provided by law, such as (but not limited to)
                the exercise by another consumer of his or her right to free
                speech, our compliance requirements resulting from a legal
                obligation, or any processing that may be required to protect
                against illegal activities.
            </p>
            <p>Right to be informed — Request to know</p>
            <p>Depending on the circumstances, you have a right to know:</p>
            <ul>
                <li>whether we collect and use your personal information;</li>
            </ul>
            <ul>
                <li>the categories of personal information that we collect;</li>
            </ul>
            <ul>
                <li>
                    the purposes for which the collected personal information is
                    used;
                </li>
            </ul>
            <ul>
                <li>
                    whether we sell or share personal information to third
                    parties;
                </li>
            </ul>
            <ul>
                <li>
                    the categories of personal information that we sold, shared,
                    or disclosed for a business purpose;
                </li>
            </ul>
            <ul>
                <li>
                    the categories of third parties to whom the personal
                    information was sold, shared, or disclosed for a business
                    purpose;
                </li>
            </ul>
            <ul>
                <li>
                    the business or commercial purpose for collecting, selling,
                    or sharing personal information; and
                </li>
            </ul>
            <ul>
                <li>
                    the specific pieces of personal information we collected
                    about you.
                </li>
            </ul>
            <p>
                In accordance with applicable law, we are not obligated to
                provide or delete consumer information that is de-identified in
                response to a consumer request or to re-identify individual data
                to verify a consumer request.
            </p>
            <p>
                Right to Non-Discrimination for the Exercise of a Consumer’s
                Privacy Rights
            </p>
            <p>
                We will not discriminate against you if you exercise your
                privacy rights.
            </p>
            <p>
                Right to Limit Use and Disclosure of Sensitive Personal
                Information
            </p>
            <p>We do not process consumer's sensitive personal information.</p>
            <p>Verification process</p>
            <p>
                Upon receiving your request, we will need to verify your
                identity to determine you are the same person about whom we have
                the information in our system. These verification efforts
                require us to ask you to provide information so that we can
                match it with information you have previously provided us. For
                instance, depending on the type of request you submit, we may
                ask you to provide certain information so that we can match the
                information you provide with the information we already have on
                file, or we may contact you through a communication method
                (e.g., phone or email) that you have previously provided to us.
                We may also use other verification methods as the circumstances
                dictate.
            </p>
            <p>
                We will only use personal information provided in your request
                to verify your identity or authority to make the request. To the
                extent possible, we will avoid requesting additional information
                from you for the purposes of verification. However, if we cannot
                verify your identity from the information already maintained by
                us, we may request that you provide additional information for
                the purposes of verifying your identity and for security or
                fraud-prevention purposes. We will delete such additionally
                provided information as soon as we finish verifying you.
            </p>
            <p>Other privacy rights</p>
            <ul>
                <li>
                    You may object to the processing of your personal
                    information.
                </li>
            </ul>
            <ul>
                <li>
                    You may request correction of your personal data if it is
                    incorrect or no longer relevant, or ask to restrict the
                    processing of the information.
                </li>
            </ul>
            <ul>
                <li>
                    You can designate an authorized agent to make a request
                    under the CCPA on your behalf. We may deny a request from an
                    authorized agent that does not submit proof that they have
                    been validly authorized to act on your behalf in accordance
                    with the CCPA.
                </li>
            </ul>
            <ul>
                <li>
                    You may request to opt out from future selling or sharing of
                    your personal information to third parties. Upon receiving
                    an opt-out request, we will act upon the request as soon as
                    feasibly possible, but no later than fifteen (15) days from
                    the date of the request submission.
                </li>
            </ul>
            <p>
                To exercise these rights, you can contact us by visiting
                https://www.leadloom.games/dashboard/settings/userdata, by email
                at admin@ciac.me, or by referring to the contact details at the
                bottom of this document. If you have a complaint about how we
                handle your data, we would like to hear from you.
            </p>
            <p>
                <strong>Colorado Residents</strong>
            </p>
            <p>
                This section applies only to Colorado residents. Under the
                Colorado Privacy Act (CPA), you have the rights listed below.
                However, these rights are not absolute, and in certain cases, we
                may decline your request as permitted by law.
            </p>
            <ul>
                <li>
                    Right to be informed whether or not we are processing your
                    personal data
                </li>
            </ul>
            <ul>
                <li>Right to access your personal data</li>
            </ul>
            <ul>
                <li>Right to correct inaccuracies in your personal data</li>
            </ul>
            <ul>
                <li>Right to request deletion of your personal data</li>
            </ul>
            <ul>
                <li>
                    Right to obtain a copy of the personal data you previously
                    shared with us
                </li>
            </ul>
            <ul>
                <li>
                    Right to opt out of the processing of your personal data if
                    it is used for targeted advertising, the sale of personal
                    data, or profiling in furtherance of decisions that produce
                    legal or similarly significant effects ("profiling")
                </li>
            </ul>
            <p>
                To submit a request to exercise these rights described above,
                please visit
                https://www.leadloom.games/dashboard/settings/userdata.
            </p>
            <p>
                If we decline to take action regarding your request and you wish
                to appeal our decision, please email us at{' '}
                <Link href="mailto:admin@ciac.me">admin@ciac.me</Link>. Within
                forty-five (45) days of receipt of an appeal, we will inform you
                in writing of any action taken or not taken in response to the
                appeal, including a written explanation of the reasons for the
                decisions.
            </p>
            <p>
                <strong>Connecticut Residents</strong>
            </p>
            <p>
                This section applies only to Connecticut residents. Under the
                Connecticut Data Privacy Act (CTDPA), you have the rights listed
                below. However, these rights are not absolute, and in certain
                cases, we may decline your request as permitted by law.
            </p>
            <ul>
                <li>
                    Right to be informed whether or not we are processing your
                    personal data
                </li>
            </ul>
            <ul>
                <li>Right to access your personal data</li>
            </ul>
            <ul>
                <li>Right to correct inaccuracies in your personal data</li>
            </ul>
            <ul>
                <li>Right to request deletion of your personal data</li>
            </ul>
            <ul>
                <li>
                    Right to obtain a copy of the personal data you previously
                    shared with us
                </li>
            </ul>
            <ul>
                <li>
                    Right to opt out of the processing of your personal data if
                    it is used for targeted advertising, the sale of personal
                    data, or profiling in furtherance of decisions that produce
                    legal or similarly significant effects ("profiling")
                </li>
            </ul>
            <p>
                To submit a request to exercise these rights described above,
                please visit
                https://www.leadloom.games/dashboard/settings/userdata.
            </p>
            <p>
                If we decline to take action regarding your request and you wish
                to appeal our decision, please email us at{' '}
                <Link href="mailto:admin@ciac.me">admin@ciac.me</Link>. Within
                sixty (60) days of receipt of an appeal, we will inform you in
                writing of any action taken or not taken in response to the
                appeal, including a written explanation of the reasons for the
                decisions.
            </p>
            <p>
                <strong>Utah Residents</strong>
            </p>
            <p>
                This section applies only to Utah residents. Under the Utah
                Consumer Privacy Act (UCPA), you have the rights listed below.
                However, these rights are not absolute, and in certain cases, we
                may decline your request as permitted by law.
            </p>
            <ul>
                <li>
                    Right to be informed whether or not we are processing your
                    personal data
                </li>
            </ul>
            <ul>
                <li>Right to access your personal data</li>
            </ul>
            <ul>
                <li>Right to request deletion of your personal data</li>
            </ul>
            <ul>
                <li>
                    Right to obtain a copy of the personal data you previously
                    shared with us
                </li>
            </ul>
            <ul>
                <li>
                    Right to opt out of the processing of your personal data if
                    it is used for targeted advertising or the sale of personal
                    data
                </li>
            </ul>
            <p>
                To submit a request to exercise these rights described above,
                please visit
                https://www.leadloom.games/dashboard/settings/userdata.
            </p>
            <p>
                <strong>Virginia Residents</strong>
            </p>
            <p>Under the Virginia Consumer Data Protection Act (VCDPA):</p>
            <p>
                "Consumer" means a natural person who is a resident of the
                Commonwealth acting only in an individual or household context.
                It does not include a natural person acting in a commercial or
                employment context.
            </p>
            <p>
                "Personal data" means any information that is linked or
                reasonably linkable to an identified or identifiable natural
                person. "Personal data" does not include de-identified data or
                publicly available information.
            </p>
            <p>
                "Sale of personal data" means the exchange of personal data for
                monetary consideration.
            </p>
            <p>
                If this definition of "consumer" applies to you, we must adhere
                to certain rights and obligations regarding your personal data.
            </p>
            <p>Your rights with respect to your personal data</p>
            <ul>
                <li>
                    Right to be informed whether or not we are processing your
                    personal data
                </li>
            </ul>
            <ul>
                <li>Right to access your personal data</li>
            </ul>
            <ul>
                <li>Right to correct inaccuracies in your personal data</li>
            </ul>
            <ul>
                <li>Right to request deletion of your personal data</li>
            </ul>
            <ul>
                <li>
                    Right to obtain a copy of the personal data you previously
                    shared with us
                </li>
            </ul>
            <ul>
                <li>
                    Right to opt out of the processing of your personal data if
                    it is used for targeted advertising, the sale of personal
                    data, or profiling in furtherance of decisions that produce
                    legal or similarly significant effects ("profiling")
                </li>
            </ul>
            <p>Exercise your rights provided under the Virginia VCDPA</p>
            <p>
                You may visit
                https://www.leadloom.games/dashboard/settings/userdata.
            </p>
            <p>
                If you are using an authorized agent to exercise your rights, we
                may deny a request if the authorized agent does not submit proof
                that they have been validly authorized to act on your behalf.
            </p>
            <p>Verification process</p>
            <p>
                We may request that you provide additional information
                reasonably necessary to verify you and your consumer's request.
                If you submit the request through an authorized agent, we may
                need to collect additional information to verify your identity
                before processing your request.
            </p>
            <p>
                Upon receiving your request, we will respond without undue
                delay, but in all cases, within forty-five (45) days of receipt.
                The response period may be extended once by forty-five (45)
                additional days when reasonably necessary. We will inform you of
                any such extension within the initial 45-day response period,
                together with the reason for the extension.
            </p>
            <p>Right to appeal</p>
            <p>
                If we decline to take action regarding your request, we will
                inform you of our decision and reasoning behind it. If you wish
                to appeal our decision, please email us at{' '}
                <Link href="mailto:admin@ciac.me">admin@ciac.me</Link>. Within
                sixty (60) days of receipt of an appeal, we will inform you in
                writing of any action taken or not taken in response to the
                appeal, including a written explanation of the reasons for the
                decisions. If your appeal is denied, you may contact the{' '}
                <a href="https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint">
                    Attorney General to submit a complaint
                </a>
                .
            </p>
            <p>
                <strong>13. DO WE MAKE UPDATES TO THIS NOTICE?</strong>
            </p>
            <p>
                <strong>In Short:&nbsp;</strong>Yes, we will update this notice
                as necessary to stay compliant with relevant laws.
            </p>
            <p>
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated "Revised" date and the
                updated version will be effective as soon as it is accessible.
                If we make material changes to this privacy notice, we may
                notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy notice frequently to be informed of
                how we are protecting your information.
            </p>
            <p>
                <strong>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>
            </p>
            <p>
                If you have questions or comments about this notice, you may
                email us at admin@ciac.me or&nbsp;contact us by post at:
            </p>
            <p>leadloom games</p>
            <p>Poland, Zielona Góra</p>
            <p>__________</p>
            <p>Poland</p>
            <p>
                <strong>
                    15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                    COLLECT FROM YOU?
                </strong>
            </p>
            <p>
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information, or delete it. To request to
                review, update, or delete your personal information, please
                visit: https://www.leadloom.games/dashboard/settings/userdata.
            </p>
        </div>
    );
};

export default privacyPolicyPage;
