export const verticalConfig = {
  id: 'senior-living', label: 'Senior Living Insurance',
  heading: 'Get a Senior Living Insurance Quote',
  subtext: 'Answer a few quick questions and our senior care specialists will design coverage for your facility.',
  businessTypes: [
    { value: 'assisted-living', label: 'Assisted Living' },
    { value: 'skilled-nursing', label: 'Skilled Nursing' },
    { value: 'memory-care', label: 'Memory Care' },
    { value: 'independent-living', label: 'Independent Living' },
    { value: 'home-health', label: 'Home Health Agency' },
    { value: 'hospice', label: 'Hospice' },
  ],
  customQuestions: [
    { id: 'facility_type', label: 'What type of facility?', type: 'select', options: ['Assisted Living', 'Skilled Nursing', 'Memory Care', 'Independent Living', 'Home Health', 'Hospice'] },
    { id: 'bed_count', label: 'How many beds/residents?', type: 'select', options: ['Under 25', '25-50', '51-100', '101-250', '250+'] },
    { id: 'medicare', label: 'Medicare/Medicaid certified?', type: 'select', options: ['Yes', 'No', 'In process'] },
  ],
  coverageOptions: ['General Liability', 'Professional Liability', 'Workers\' Compensation', 'Commercial Property', 'Abuse & Molestation', 'Resident Elopement', 'Medication Management', 'Directors & Officers', 'Umbrella / Excess', 'Staffing Shortage Liability'],
};
