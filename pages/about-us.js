import Head from 'next/head'
export default () =>
    <div>
        <Head>
            <title>About Us | House Vault</title>
            <meta name="description" content="About House Vault and our bespoke property Machine Learning Algorithms" />
        </Head>
        <div className="container list-page-padding">
            <h1>About Us</h1>
            <p>Our experienced team of PHD researchers, data scientists, statistician’s, economists and software developers
                dedicate their time to building the most accurate, unbiased & efficient tools on homes and locations
                throughout the UK.</p>

            <p>At the core of our technology sits our Machine Learning & Artificial Intelligence algorithms built in-house
                by our team of PHD researchers and graduates. Thanks in a great part to the UK government’s decision to open
                up millions of data sets and relationships with private property companies, we have been able to use our
                skill set to build industry leading models to help UK property professionals and residents make informed
                decisions at little to no cost.
                You can learn more about our specific technology in our whitepaper here.</p>

            <h3>Machine Learning & Artificial Intelligence</h3>
            <p>Most people do not care about how our technology works, and we think that’s also a great thing. But being a
                team of researchers and tech professionals, we thought some might want a look ‘under the hood’ and learn
                more about us and the technology we use.</p>
            <p>Before explaining our technology it’s important to first understand what machine learning, AI and general
                modelling is, and isn’t. There seems to be a lot of buzz around the terms recently from doomsday predictions
                to business using even basic 20-year-old statistical regression models calling it ‘AI’ to add some
                interest.</p>
            <p>There is a really good resource about what ML and AI is about here for people new to the concept.</p>
            <p>In summary over the last 20+ years there has been an incredible increase in processing power and decrease in
                costs, thanks to Moors’e Law, allowing complex algorithms once reserved for large conglomerates such as
                Google, Apple & Amazon to be accessed by a broader market. Whilst most companies have kept their technology
                secret some such as Google have opened up large parts of their models to 3rd parties. This has also lead to
                the popularity of AI courses in universities which in turn provides additional funds to researchers to
                develop new concepts.</p>

            <p>Our ML & AI journey began in mid 2017 after a group of like-minded people wanted to fix a problem with the UK
                property industry. There are dozens of companies offering AVM’s to consumers and businesses however we were
                concerned that many use fairly old regression methods to calculate house prices. Our research also found
                that most were of a purely commercial nature such as offering estate agency services or selling reports to
                consumers.
                Whilst we respect all these companies we thought that in the current world of open-source there should be
                more transparency on house prices and local information. We were really pleasantly surprised with how open
                the UK government has been to release statistical data. So that’s where we began, and we aim to continue
                developing technology to help people all over the world access transparent information about their home and
                neighbourhood.</p>

            <h3>Under Our Hood</h3>
            <p>We use several optimized models, including some older regression-based principles, to learn from hundreds of
                different features such core deciders like location. However, unlike many AVM’s we also consider external
                factors such as economic headwinds, forecast indexes & predicted developmental growth.</p>
            <p>Our three-core machine learning backed models are:</p>
            <ul className="list-unstyled">
                <li>AVM – Automated Valuation Model to predict a property value anywhere in the UK with an accuracy of
                    97%.
                </li>
                <li>AECM – Predicts and forecasts residential and commercial energy bills for every UK property using public
                    and anonymous data to deliver accurate results.
                </li>
                <li>APEM – Automated Efficiency Model learnt on millions of data points to predict the energy efficiency &
                    condition of any UK home. The model also offers comparisons to local and national averages.
                </li>
                <li>MLN - Currently going through beta testing is our neural network model, which can handle millions of
                    features and data sets, self-learns on a constant cycle. Current tests show the predictions offer
                    incredibly accurate insights into property and location information. The looping function of this model
                    means it will continuously improve over time with new data.
                </li>
            </ul>

            <h3>Lead Team</h3>
            <h4>Daniel Morgan – CEO</h4>
            <p>Nobody is entirely sure what Daniel does. But he says he does a lot. Daniel spent the last 15 years in
                start-ups and SME’s. He bring experience in building, growing and exiting several sectors. Based in Asia and
                with a love of technology he spends his spare time with friends and family whilst constantly trying to build
                AI robots (that will one day work).</p>

            <h4>Lee Mellon – CTO / Lead Developer</h4>
            <p>Having over 15 years’ experience as a software developer Lee has held roles in mainly tech sectors.
                Specialising in the latest Agile frameworks his role within HouseVault has been pivotal in leading a team of
                miss-fits to technological greatness.</p>

            <h4>Joy Ying – CFO</h4>
            <p>UK Accounting graduate Joy spent 10 years accounting in-house for property, renewable energy and technology
                companies before joining us as CFO. Responsible for ensuring our team doesn’t spend all its money on gadgets
                and RAM, Qiu tirelessly keeps our ship afloat through rain or shine.</p>

            <h4>Jie Gong - Head of Research</h4>
            <p>Fellow of the Hunan Nominal University in China. Jie works with our team of researchers in China to develop
                the most sophisticated AI and ML algorithms. China has become a leading player in educating the brightest
                minds in complex mathematics and computer science. Based in our Hunan office Jie works with our UK team to
                implement the latest upgrades. Apart from being an amazing mathematician Jie also likes to play practical
                jokes, mainly at the expense of his co-workers.</p>
        </div>
    </div>