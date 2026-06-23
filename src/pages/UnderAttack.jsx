import React from 'react';
import UnderAttackHero from '../components/UnderAttack/UnderAttackHero';
import UnderAttackSteps from '../components/UnderAttack/Underattacksteps';
import UnderAttackThreats from '../components/UnderAttack/UnderAttackThreats';
import LiveIncidentCounter from '../components/UnderAttack/LiveIncidentCounter';
import RegionalTollFree from '../components/UnderAttack/RegionalTollFree';

const UnderAttack = () => {
  return (
    <div>
      <UnderAttackHero />
      <UnderAttackSteps />
      <UnderAttackThreats />
      <LiveIncidentCounter />
      <RegionalTollFree/>
      {/* Add more UnderAttack sections here as they are built */}
    </div>
  );
};

export default UnderAttack;