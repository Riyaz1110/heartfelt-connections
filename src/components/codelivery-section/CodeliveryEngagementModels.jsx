import React from 'react';

const ThreatEngagementModels = () => {
    const models = [
        {
            icon: "/icons/soc_augmentation/co-managed.png",
            title: "Co-Managed Delivery",
            description: "Your team stays front and center. Auriseg analysts join your engagements as embedded specialists — sharing the delivery workload while you own the client relationship, the narrative, and the brand."
        },
        {
            icon: "/icons/soc_augmentation/fully-managed.png",
            title: "Full White-Label Delivery",
            description: "Hand us the scope. We deliver under your name. Execution, reporting, findings documentation — all branded to your firm, with zero Auriseg attribution unless you choose it."
        },
        {
            icon: "/icons/soc_augmentation/soc-augmentation.png",
            title: "Surge & Specialist Support",
            description: "When a client engagement demands expertise you don't have in-house, or simply outgrows your current capacity, we step in on demand — covering complex assessments, overflow engagements, or specialist-led workstreams at a moment's notice."
        }
    ];

    return (
        <>
            {/* Desktop View - Hidden on mobile */}
            <section
                className="hidden md:block relative overflow-hidden"
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    background: '#FFFFFF',
                    padding: '60px 100px'
                }}
            >
                <div className="w-full max-w-[1240px] mx-auto">

                    {/* ENGAGEMENT MODELS - Badge */}
                    <div className="flex justify-center mb-6">
                        <div
                            className="inline-flex items-center justify-center gap-2"
                            style={{
                                border: '1px solid #ADADAD',
                                padding: '10px 11px',
                                backgroundColor: 'transparent'
                            }}
                        >
                            <img
                                src="/icons/playbook-icon.png"
                                alt="icon"
                                style={{ width: '8px', height: '11.2px' }}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <span
                                className="uppercase"
                                style={{
                                    fontFamily: "'Roboto Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '-4%',
                                    color: '#FF5536'
                                }}
                            >
                                ENGAGEMENT MODELS
                            </span>
                        </div>
                    </div>

                    {/* Structured to fit the way you already work.  - Heading */}
                    <h2
                        className="text-center"
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 500,
                            fontSize: '48px',
                            lineHeight: '110%',
                            letterSpacing: '0%',
                            color: '#030407',
                            marginBottom: '48px'
                        }}
                    >
                        Structured to fit the way you already work.
                    </h2>

                    {/* 3 Cards - Separate Individual Cards in Same Row */}
                    <div className="flex flex-nowrap gap-6 justify-center">
                        {models.map((model, index) => (
                            <div
                                key={index}
                                className="relative transition-all duration-300 hover:shadow-lg"
                                style={{
                                    width: '387px',
                                    minHeight: '263px',
                                    background: '#FFFFFF',
                                    border: '1px solid #ADADAD',
                                    padding: '20px'
                                }}
                            >
                                {/* Icon */}
                                <div
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '8px',
                                        background: '#FF55361A',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '20px'
                                    }}
                                >
                                    <img
                                        src={model.icon}
                                        alt={model.title}
                                        style={{
                                            width: '38px',
                                            height: '37.05px',
                                            opacity: 1
                                        }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    style={{
                                        fontFamily: "'Cabinet Grotesk', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '22px',
                                        lineHeight: '25.3px',
                                        letterSpacing: '0%',
                                        color: '#13284C',
                                        marginBottom: '16px'
                                    }}
                                >
                                    {model.title}
                                </h3>

                                {/* Description */}
                                <p
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '23.1px',
                                        letterSpacing: '0%',
                                        color: '#444444',
                                        margin: 0
                                    }}
                                >
                                    {model.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile View - Visible only on mobile */}
            <section
                className="md:hidden relative overflow-hidden"
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    background: '#FFFFFF',
                    padding: '40px 16px'
                }}
            >
                <div className="max-w-[342px] mx-auto">

                    {/* ENGAGEMENT MODELS - Badge Mobile */}
                    <div className="flex justify-center mb-6">
                        <div
                            className="inline-flex items-center justify-center gap-2"
                            style={{
                                border: '0.52px solid #ADADAD',
                                padding: '5.18px 5.7px',
                                backgroundColor: 'transparent'
                            }}
                        >
                            <img
                                src="/icons/playbook-icon.png"
                                alt="icon"
                                style={{ width: '6px', height: '8.4px' }}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <span
                                className="uppercase"
                                style={{
                                    fontFamily: "'Roboto Mono', monospace",
                                    fontWeight: 500,
                                    fontSize: '12px',
                                    lineHeight: '100%',
                                    letterSpacing: '-2%',
                                    color: '#FF5536'
                                }}
                            >
                                ENGAGEMENT MODELS
                            </span>
                        </div>
                    </div>

                    {/* Structured to fit the way you already work.  - Heading Mobile */}
                    <h2
                        className="text-center"
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 500,
                            fontSize: '28px',
                            lineHeight: '120%',
                            letterSpacing: '-2%',
                            color: '#030407',
                            marginBottom: '32px',
                            textAlign: 'center'
                        }}
                    >
                        Structured to fit the way you already work.
                    </h2>

                    {/* 3 Cards - Mobile Stacked */}
                    <div className="flex flex-col gap-4">
                        {models.map((model, index) => (
                            <div
                                key={index}
                                className="relative transition-all duration-300"
                                style={{
                                    width: '342px',
                                    minHeight: '210px',
                                    background: '#FFFFFF',
                                    border: '1px solid #ADADAD',
                                    padding: '20px'
                                }}
                            >
                                {/* Icon - Mobile */}
                                <div
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '8px',
                                        background: '#FF55361A',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '16px'
                                    }}
                                >
                                    <img
                                        src={model.icon}
                                        alt={model.title}
                                        style={{
                                            width: '38px',
                                            height: '37.05px',
                                            opacity: 1
                                        }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>

                                {/* Title - Mobile */}
                                <h3
                                    style={{
                                        fontFamily: "'Cabinet Grotesk', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '20px',
                                        lineHeight: '100%',
                                        letterSpacing: '-2%',
                                        color: '#13284C',
                                        marginBottom: '12px'
                                    }}
                                >
                                    {model.title}
                                </h3>

                                {/* Description - Mobile */}
                                <p
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '12px',
                                        lineHeight: '150%',
                                        letterSpacing: '0%',
                                        color: '#030407',
                                        margin: 0
                                    }}
                                >
                                    {model.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ThreatEngagementModels;
