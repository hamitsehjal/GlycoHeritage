import React from "react";

const About = () => {
    return (
        <div className="bg-background min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-10 text-center">
                    About Us
                </h1>
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-secondary mb-8">
                        Vision: Our app's vision is to promote healthier eating habits and
                        improve diabetes management among the Warsauksing First Nations
                        community. We aim to achieve this by providing recipes with lower
                        glycemic index and load, as well as collecting data on users'
                        dietary habits to help them make more informed choices.
                    </p>
                    <p className="text-lg text-secondary mb-8">
                        Unique Value: Our app provides a unique value by combining recipe
                        suggestions with glycemic index and load information, which can help
                        users make healthier food choices that are tailored to their needs.
                        Additionally, our app's data collection feature allows users to
                        monitor their blood sugar levels and evaluate the effectiveness of
                        their dietary choices over time.
                    </p>
                    <p className="text-lg text-secondary mb-8">
                        Competitive Advantage: Compared to other diabetes management apps,
                        our app offers a more personalized and community-oriented approach
                        that is specifically tailored to the Warsauksing First Nations
                        community. By incorporating traditional ingredients and recipes
                        into our app, we aim to provide a culturally sensitive solution that
                        promotes healthy eating habits while respecting the community's
                        heritage and traditions. Furthermore, our app's focus on data
                        collection and analysis sets us apart from other diabetes management
                        apps, as it allows users to gain a deeper understanding of their
                        dietary habits and make more informed choices about their health.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
