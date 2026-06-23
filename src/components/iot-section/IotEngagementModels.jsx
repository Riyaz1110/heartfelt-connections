import React from 'react';

const ThreatEngagementModels = () => {
    const models = [
        {
            icon: "/icons/soc_augmentation/co-managed.png",
            title: "OT/IoT & Automotive Security Assessment",
            description: "A focused engagement to uncover vulnerabilities in your OT networks, IoT devices, vehicle systems, data paths, and supporting infrastructure, including gateways and backend APIs."
        },
        {
            icon: "/icons/soc_augmentation/fully-managed.png",
            title: "Secure Deployment Readiness Review",
            description: "A pre-launch validation layer for new OT/IoT rollouts and automotive platforms, covering segmentation, logging, access, update mechanisms, and incident response readiness across plants and fleets."
        },
        {
            icon: "/icons/soc_augmentation/soc-augmentation.png",
            title: "Continuous OT/IoT & Vehicle Assurance",
            description: "Ongoing testing and validation for teams deploying connected devices and vehicles frequently, with recurring assessments, change-based review, and support for secure rollouts and upgrades."
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
                    paddingBottom: '170px',
                    padding: '60px 0'
                }}
            >
                <div style={{ paddingLeft: 'calc(60px + 1cm)', paddingRight: '80px' }}>

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

                    {/* Built for How You Build — And Operate OT, IoT, and Vehicles - Heading */}
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
                        Built for How You Build — And Operate OT, IoT, and Vehicles
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

                    {/* Built for How You Build — And Operate OT, IoT, and Vehicles - Heading Mobile */}
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
                        Built for How You Build — And Operate OT, IoT, and Vehicles
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
