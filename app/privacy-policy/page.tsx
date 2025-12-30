export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col">
            <section className="bg-davis-purple py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black uppercase">
                        Privacy <span className="text-davis-green">Policy</span>
                    </h1>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl space-y-8 text-lg text-gray-700 leading-relaxed">
                    <p>
                        At Davis Future Planning, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us.
                    </p>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-davis-purple uppercase">Information Collection</h3>
                        <p>
                            We collect information that you provide to us directly, such as when you enroll in our services, contact us with questions, or use our client portal. This may include your name, contact information, social security number, and credit report data.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-davis-purple uppercase">How We Use Your Information</h3>
                        <p>
                            Your information is used solely for the purpose of providing credit repair and financial planning services. We use it to analyze your credit report, communicate with credit bureaus, and provide you with progress updates.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-davis-purple uppercase">Data Security</h3>
                        <p>
                            We implement industry-standard security measures to protect your sensitive data from unauthorized access, disclosure, or alteration. All online transactions are processed through secure, encrypted connections.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-davis-purple uppercase">Third-Party Disclosure</h3>
                        <p>
                            We do not sell or trade your personal information to outside parties. We only share information with third parties as necessary to provide our services, such as with credit bureaus or as required by law.
                        </p>
                    </div>

                    <p className="pt-8 border-t border-gray-100 italic">
                        Last Updated: December 2025
                    </p>
                </div>
            </section>
        </div>
    );
}
