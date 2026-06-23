import React from 'react';

const ThreatEngagementModels = () => {
    const models = [
        {
            icon: "/icons/soc_augmentation/co-managed.png",
            title: "Retainer-Based IR",
            description: "Pre-contracted response capacity for urgent incidents, so you are never starting from zero during a breach."
        },
        {
            icon: "/icons/soc_augmentation/fully-managed.png",
            title: "Co-Managed IR",
            description: "Your internal team stays in control while Auriseg provides specialist support for containment, evidence handling, and recovery."
        },
        {
            icon: "/icons/soc_augmentation/soc-augmentation.png",
            title: "On-Demand IR",
            description: "Bring in Auriseg when an incident is confirmed and you need experienced responders fast."
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

                    {/* Built for How You Operate - Heading */}
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
                        Built for How You Respond
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

                    {/* Built for How You Operate - Heading Mobile */}
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
                        Built for How You Respond
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
