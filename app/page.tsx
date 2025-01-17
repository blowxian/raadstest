export default function Home() {
    return (
        <div className="bg-black text-gray-300 font-sans min-h-screen">
            <header className="bg-gray-800 text-gray-100 p-6 shadow-md">
                <h1 className="text-4xl font-bold text-center" style={{ color: "rgb(223, 207, 153)" }}>
                    RAADS-R Test Platform
                </h1>
                <p className="text-center mt-2 text-gray-400">
                    Your comprehensive platform for the <strong>Ritvo Autism Asperger Diagnostic Scale-Revised</strong> assessment
                </p>
            </header>

            <main className="max-w-5xl mx-auto p-6">
                {/* Introduction Section */}
                <section id="introduction" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Professional Autism Assessment</h2>
                    <p className="mb-4">
                        Our platform combines professional assessment methodologies with user-friendly interfaces to provide valuable 
                        insights into autism spectrum characteristics. Whether you're seeking initial screening or professional guidance, 
                        our platform provides validated tools and resources.
                    </p>
                    <p>
                        Begin your assessment journey with our <a href="https://raadstest.com" 
                        className="text-yellow-500 hover:text-yellow-400 underline">professional RAADS-R test</a>.
                    </p>
                </section>

                {/* Key Features Section */}
                <section id="features" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Platform Features</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Professional RAADS-R Assessment with accurate scoring</li>
                        <li>Multi-Language Support for global accessibility</li>
                        <li>Instant Results with detailed interpretations</li>
                        <li>Comprehensive educational resources</li>
                        <li>AI-Powered mental health assistant</li>
                        <li>Progress tracking and assessment history</li>
                    </ul>
                </section>

                {/* Test Components Section */}
                <section id="components" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Test Components</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Comprehensive Evaluation</h3>
                            <p>80-question assessment covering key autism spectrum traits.</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Validated Scoring System</h3>
                            <p>Scientifically validated methodology for accurate results.</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Detailed Analysis</h3>
                            <p>In-depth interpretation of your test results.</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Professional Guidelines</h3>
                            <p>Expert-developed testing protocols and standards.</p>
                        </div>
                    </div>
                </section>

                {/* Testing Platforms Section */}
                <section id="platforms" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Our Testing Platforms</h2>
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Primary Platforms</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://raadstest.com" 
                                    className="text-yellow-500 hover:text-yellow-400 underline">
                                        RAADS Test
                                    </a>
                                    - Complete RAADS-R assessment with detailed scoring
                                </li>
                                <li>
                                    <a href="https://raadsrtest.com" 
                                    className="text-yellow-500 hover:text-yellow-400 underline">
                                        RAADSR Test
                                    </a>
                                    - Alternative platform for RAADS-R evaluation
                                </li>
                                <li>
                                    <a href="https://autismtestfree.com" 
                                    className="text-yellow-500 hover:text-yellow-400 underline">
                                        Autism Test Free
                                    </a>
                                    - Free comprehensive autism screening tools
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Additional Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://raadstest.com/articles-and-videos-about-raads-test-and-autism/" 
                                    className="text-yellow-500 hover:text-yellow-400 underline">
                                        Autism Articles
                                    </a>
                                    - Educational resources about autism
                                </li>
                                <li>
                                    <a href="https://raadstest.com/ai-powered-mental-health-assistant/" 
                                    className="text-yellow-500 hover:text-yellow-400 underline">
                                        AI Assistant
                                    </a>
                                    - Get AI-powered support
                                </li>
                                <li>
                                    <a href="https://raadstest.com/blog/autism-spectrum-quotient-aq-test/" 
                                    className="text-yellow-500 hover:text-yellow-400 underline">
                                        AQ Test
                                    </a>
                                    - Additional autism spectrum assessment
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Important Notice Section */}
                <section id="notice" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Important Notice</h2>
                    <p className="bg-gray-800 p-4 rounded-lg">
                        This platform provides self-assessment tools and should not be used for self-diagnosis. 
                        The RAADS-R test is designed to assist in the assessment process, but a proper diagnosis 
                        of Autism Spectrum Disorder can only be made by qualified healthcare professionals.
                    </p>
                </section>
            </main>

            <footer className="bg-gray-800 text-gray-400 p-6 text-center">
                <p>&copy; {new Date().getFullYear()} RAADS-R Test Platform - Professional Autism Assessment. All rights reserved.</p>
            </footer>
        </div>
    )
} 