// Cross-linking maps for dense internal linking
// Coverage → which industries commonly need this coverage
export const coverageToIndustries = {
  'general-liability': ['assisted-living', 'skilled-nursing', 'independent-living', 'continuing-care'],
  'professional-liability': ['skilled-nursing', 'assisted-living', 'memory-care', 'home-health-agencies'],
  'workers-compensation': ['skilled-nursing', 'assisted-living', 'home-health-agencies', 'rehabilitation-centers'],
  'commercial-property': ['continuing-care', 'independent-living', 'skilled-nursing', 'assisted-living'],
  'abuse-molestation': ['memory-care', 'skilled-nursing', 'assisted-living', 'adult-day-care'],
  'commercial-auto': ['home-health-agencies', 'adult-day-care', 'independent-living', 'hospice'],
  'cyber-liability': ['skilled-nursing', 'home-health-agencies', 'continuing-care', 'hospice'],
  'directors-officers': ['continuing-care', 'skilled-nursing', 'senior-communities', 'hospice'],
  'umbrella-excess': ['skilled-nursing', 'memory-care', 'continuing-care', 'assisted-living'],
  'employment-practices': ['skilled-nursing', 'assisted-living', 'home-health-agencies', 'senior-communities'],
};

// Coverage → which resources are most relevant
export const coverageToResources = {
  'general-liability': ['senior-living-insurance-cost', 'regulatory-compliance-guide', 'coi-guide'],
  'professional-liability': ['professional-liability-guide', 'senior-living-insurance-cost', 'claims-guide'],
  'workers-compensation': ['staffing-liability-guide', 'senior-living-insurance-cost', 'resident-injury-prevention'],
  'commercial-property': ['senior-living-insurance-cost', 'coi-guide', 'regulatory-compliance-guide'],
  'abuse-molestation': ['abuse-molestation-coverage-guide', 'claims-guide', 'regulatory-compliance-guide'],
  'commercial-auto': ['senior-living-insurance-cost', 'coi-guide', 'claims-guide'],
  'cyber-liability': ['senior-living-insurance-cost', 'regulatory-compliance-guide', 'glossary'],
  'directors-officers': ['regulatory-compliance-guide', 'senior-living-insurance-cost', 'glossary'],
  'umbrella-excess': ['senior-living-insurance-cost', 'claims-guide', 'coi-guide'],
  'employment-practices': ['staffing-liability-guide', 'senior-living-insurance-cost', 'claims-guide'],
};

// Industry → top states for that industry
export const industryToStates = {
  'assisted-living': ['california', 'florida', 'texas', 'new-york', 'pennsylvania'],
  'skilled-nursing': ['california', 'texas', 'florida', 'ohio', 'new-york'],
  'memory-care': ['florida', 'california', 'texas', 'pennsylvania', 'michigan'],
  'independent-living': ['florida', 'california', 'texas', 'north-carolina', 'georgia'],
  'continuing-care': ['pennsylvania', 'florida', 'california', 'north-carolina', 'illinois'],
  'home-health-agencies': ['texas', 'california', 'florida', 'new-york', 'illinois'],
  'adult-day-care': ['california', 'new-york', 'florida', 'texas', 'ohio'],
  'hospice': ['texas', 'california', 'florida', 'ohio', 'pennsylvania'],
  'rehabilitation-centers': ['california', 'florida', 'texas', 'new-york', 'michigan'],
  'senior-communities': ['florida', 'california', 'texas', 'georgia', 'north-carolina'],
};

// Industry → relevant resources
export const industryToResources = {
  'assisted-living': ['senior-living-insurance-cost', 'professional-liability-guide', 'regulatory-compliance-guide'],
  'skilled-nursing': ['professional-liability-guide', 'claims-guide', 'regulatory-compliance-guide'],
  'memory-care': ['abuse-molestation-coverage-guide', 'professional-liability-guide', 'resident-injury-prevention'],
  'independent-living': ['senior-living-insurance-cost', 'coi-guide', 'glossary'],
  'continuing-care': ['senior-living-insurance-cost', 'regulatory-compliance-guide', 'coi-guide'],
  'home-health-agencies': ['staffing-liability-guide', 'senior-living-insurance-cost', 'claims-guide'],
  'adult-day-care': ['senior-living-insurance-cost', 'regulatory-compliance-guide', 'coi-guide'],
  'hospice': ['professional-liability-guide', 'claims-guide', 'regulatory-compliance-guide'],
  'rehabilitation-centers': ['professional-liability-guide', 'senior-living-insurance-cost', 'staffing-liability-guide'],
  'senior-communities': ['senior-living-insurance-cost', 'coi-guide', 'regulatory-compliance-guide'],
};
