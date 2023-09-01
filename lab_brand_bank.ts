const labs :{
    category:'HAEMATOLOGY'|'BIOCHEMISTRY'|'IMMUNOLOGY'|'ENDOCRINOLOGY'|'MICROBIOLOGY'|'MOLECULAR-BIOLOGY'|'ALLERGY';
    subCategory?:'COAGULATION'|'LIVER-FUNCTION'|'RENAL/BONE'|'LIPID-METABOLISM'|'DIABETES'|'PANCREATIC-SCREEN'|'ANAEMIA-WORK-UP'|'FLUID-BIOCHEMISTRY'|'CEREBRO-SPINAL-FLUID'|'THERAPEUTIC-DRUG-MONITORING'|'OTHER-BIOCHEMISTRY'|'MYELOMA'|'CONNECTIVE-TISSUE'|'INFECTIOUS-DISEASES'|'PEPTIC-ULCER'|'MYOCARDIAL'|"THYROID-MARKERS"|'FERTILITY/STEROID-MARKERS'|'TUMOUR/CANCER MARKERS'|'DOWNS-SCREEN'|'OCCUPATIONAL'|'ANDROLOGY'|'CYTOGENETICS'
    name:string;
    shortName:string;
    description:string;
  }[] = [
    {
        category:'HAEMATOLOGY',
        name:'FULL BLOOD COUNT',
        shortName:'HFBC',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'ESR',
        shortName:'HESRCAPVIS',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'SICKLING TEST',
        shortName:'J854',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'HB ELECTROPHORESIS',
        shortName:'T943',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'BLOOD GROUP + Rh(D) Ag',
        shortName:'HGRP',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'DIRECT ANTI-GLOB',
        shortName:'X365',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'INDIRECT ANTI-GLOB',
        shortName:'Y366',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'HB A2/F (QUANT)',
        shortName:'F420+K354',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'G6PD',
        shortName:'B100',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'MALARIA THICK AND THIN',
        shortName:'P358',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'MALARIA PROFILE',
        shortName:'5723',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'MALARIA ICT (AG)',
        shortName:'G562',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'PAUL BUNNEL',
        shortName:'R359',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'RETICULOCYTES COUNT',
        shortName:'M356',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        name:'RHESUS ANTIBODY TITRES',
        shortName:'W792',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        subCategory: 'COAGULATION',
        name:'BLEEDING TIME',
        shortName:'HCBT',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        subCategory: 'COAGULATION',
        name:'CLOTTING TIME',
        shortName:'HCCLOT',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        subCategory: 'COAGULATION',
        name:'CLOTTING PROFILE',
        shortName:'HCCOAG',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        subCategory: 'COAGULATION',
        name:'PROTHROBIN TIME (PT)/INR',
        shortName:'HCPI/B369',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        subCategory: 'COAGULATION',
        name:'THROMBOPLASTIN TIME(APTT)',
        shortName:'HCPTT',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        subCategory: 'COAGULATION',
        name:'D-DIMER QUANTITATIVE',
        shortName:'HCDDT',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        subCategory: 'COAGULATION',
        name:'PROTEIN S',
        shortName:'P400',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        subCategory: 'COAGULATION',
        name:'PROTEIN C',
        shortName:'P381',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        subCategory: 'COAGULATION',
        name:'FACTOR 5',
        shortName:'HCF5',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        subCategory: 'COAGULATION',
        name:'FACTOR 8',
        shortName:'R498',
        description:''
    },
    {
        category:'HAEMATOLOGY',
        subCategory: 'COAGULATION',
        name:'FACTOR 9',
        shortName:'H458',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'LIVER-FUNCTION',
        name:'LFT (LIVER FUN TEST)',
        shortName:'T154',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'LIVER-FUNCTION',
        name:'TOTAL BILIRUBIN',
        shortName:'F287',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'LIVER-FUNCTION',
        name:'DIRECT BILIRUBIN',
        shortName:'H673',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'RENAL/BONE',
        name:'BUE & CREATININE',
        shortName:'UE',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'RENAL/BONE',
        name:'URIC ACID',
        shortName:'BUA',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'RENAL/BONE',
        name:'CALCIUM(CORRECTED)',
        shortName:'CA',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'RENAL/BONE',
        name:'IONIZED CALCIUM (CA2+)',
        shortName:'B497',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'RENAL/BONE',
        name:'MAGNESIUM',
        shortName:'MAG',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'RENAL/BONE',
        name:'PHOSPHATE',
        shortName:'PHOS',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'RENAL/BONE',
        name:'ALKALINE PHOSPHATASE',
        shortName:'ALK',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'RENAL/BONE',
        name:'24 HOUR URINE PROTEIN',
        shortName:'U247',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'RENAL/BONE',
        name:'CREATININE CLEARANCE',
        shortName:'W842',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'RENAL/BONE',
        name:'RENAL CALCULUS / STONE',
        shortName:'Z547',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'LIPID-METABOLISM',
        name:'LIPID PROFILE',
        shortName:'LIPO',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'LIPID-METABOLISM',
        name:'TOTAL CHOLESTEROL',
        shortName:'U132',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'DIABETES',
        name:'BLOOD GLUCOSE(RANDOM)',
        shortName:'H145',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'DIABETES',
        name:'BLOOD GLUCOSE(FASTING)',
        shortName:'G144',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'DIABETES',
        name:'URINE GLUCOSE',
        shortName:'U819',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'DIABETES',
        name:'2 HR POST PRANDIAL GLUC',
        shortName:'D432',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'DIABETES',
        name:'75G 2HR GTT',
        shortName:'T408',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'DIABETES',
        name:'LACTATE (ON ICE)',
        shortName:'LAC',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'DIABETES',
        name:'HBA1C',
        shortName:'H654',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'DIABETES',
        name:'ALBUMIN CREATININE RATIO',
        shortName:'K958',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'PANCREATIC-SCREEN',
        name:'AMYLASE',
        shortName:'AMY',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'PANCREATIC-SCREEN',
        name:'LIPASE',
        shortName:'LIP',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'PANCREATIC-SCREEN',
        name:'INSULIN',
        shortName:'S222',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'PANCREATIC-SCREEN',
        name:'INSULIN',
        shortName:'S222',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'ANAEMIA-WORK-UP',
        name:'IRON LEVEL',
        shortName:'FE',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'ANAEMIA-WORK-UP',
        name:'FERRITIN',
        shortName:'FER',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'ANAEMIA-WORK-UP',
        name:'TRANSFERRIN',
        shortName:'B173',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'ANAEMIA-WORK-UP',
        name:'IRON + TRANSFERIN(incl %SAT)',
        shortName:'E143',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'ANAEMIA-WORK-UP',
        name:'FOLATE',
        shortName:'FOL',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'ANAEMIA-WORK-UP',
        name:'B12',
        shortName:'B12',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'FLUID-BIOCHEMISTRY',
        name:'PROTEIN',
        shortName:'F548',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'FLUID-BIOCHEMISTRY',
        name:'GLUCOSE',
        shortName:'Y960',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'FLUID-BIOCHEMISTRY',
        name:'LDH',
        shortName:'L156',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'FLUID-BIOCHEMISTRY',
        name:'FL-ADA',
        shortName:'B900',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CEREBRO-SPINAL-FLUID',
        name:'CSF-BIOCHEMISTRY',
        shortName:'CSF',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CEREBRO-SPINAL-FLUID',
        name:'CSF-BACTERIOLOGY',
        shortName:'C814',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'THERAPEUTIC-DRUG-MONITORING',
        name:'PHENOBARBITONE',
        shortName:'Y182',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'THERAPEUTIC-DRUG-MONITORING',
        name:'PHENYTOIN',
        shortName:'Z183',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'THERAPEUTIC-DRUG-MONITORING',
        name:'VALPROIC ACID',
        shortName:'F189',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'THERAPEUTIC-DRUG-MONITORING',
        name:'TEGRETOL OR CARBAMAZ',
        shortName:'R175',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'THERAPEUTIC-DRUG-MONITORING',
        name:'DIGOXIN LEVELS',
        shortName:'S176',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'THERAPEUTIC-DRUG-MONITORING',
        name:'CYCLOSPORIN',
        shortName:'Y542',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'THERAPEUTIC-DRUG-MONITORING',
        name:'SIROLIMUS LEVE',
        shortName:'BSIRO',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'THERAPEUTIC-DRUG-MONITORING',
        name:'TACROLIMUS',
        shortName:'B812',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'OTHER-BIOCHEMISTRY',
        name:'DRUG OF ABUSE SCREEN',
        shortName:'P364',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'OTHER-BIOCHEMISTRY',
        name:'C3+C4 COMPLIMENTS',
        shortName:'Z137',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'OTHER-BIOCHEMISTRY',
        name:'ANGIOTENSIN CONVERTING ENZY',
        shortName:'A115',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'OTHER-BIOCHEMISTRY',
        name:'BILE PIGMENT(URINE)',
        shortName:'J238',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'OTHER-BIOCHEMISTRY',
        name:'FRUCTOSAMINE',
        shortName:'J146',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'OTHER-BIOCHEMISTRY',
        name:'GROWTH HORMONE',
        shortName:'GH',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'MYELOMA',
        name:'GPE',
        shortName:'QPE',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'MYELOMA',
        name:'FREE LIGHT CHAINS',
        shortName:'P452',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'MYELOMA',
        name:'B2 MICRO GLOBULIN',
        shortName:'N288',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'MYELOMA',
        name:'BENCE JONES -PROTEINS',
        shortName:'BIP',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'LUPUS ANTICOAG INHIBITOR',
        shortName:'K325',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'ANTI-NUCLEAR AB',
        shortName:'ANF',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'ANTI-ds DNA(sle) ELISA',
        shortName:'DNA',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'RHEUNATOID FACTOR',
        shortName:'BRFMAN',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'HS-CRP',
        shortName:'X284',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'ANCA',
        shortName:'G282',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'ANTI-PHOSPHOLIPID PROF',
        shortName:'F373',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'ANTI-MITOCHONDRIA',
        shortName:'C347',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'ANTI-SMOOTH MUSCLE AB',
        shortName:'D348',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'ACETYLCHOLINE RECEPTOR Ab',
        shortName:'A356',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'TETANUS IgG',
        shortName:'K379',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'ANTI SCL - 70',
        shortName:'ISCL70',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'CENTROMERE',
        shortName:'ICENTO',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'PANCREAS ANTIBODY',
        shortName:'X543',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'SMITH-ANTIBODY',
        shortName:'C348',
        description:''
    },
    {
        category:'BIOCHEMISTRY',
        subCategory: 'CONNECTIVE-TISSUE',
        name:'ENA PANEL/PROFILE',
        shortName:'IENAP',
        description:''
    },
    {
        category:'MOLECULAR-BIOLOGY',
        name:'DNA PATERNITY TEST(PER PERSON)',
        shortName:'P444&F999',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS B PROFILE',
        shortName:'HEPB',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS B QUANTIFICATION',
        shortName:'ZIHBSAGQ',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS Bs Ag Elisa + Rapid',
        shortName:'H906',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS Bs ANTIBODY',
        shortName:'HBAB',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS Be ANTIGEN',
        shortName:'H022',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS Be ANTIBODY',
        shortName:'H033',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS Bc IgM ANTIBODY',
        shortName:'W824',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS Bc IgG ANTIBODY',
        shortName:'H012',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HIV Elisa + Rapid',
        shortName:'H455',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HIV 1 QUALITATIVE PCR',
        shortName:'D232',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HIV 2 QUALITATIVE PCR',
        shortName:'P630',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HIV 1 QUANTITATIVE PCR',
        shortName:'F401',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HIV 2 QUANTITATIVE PCR',
        shortName:'R9H6',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS A - IgG +IgM',
        shortName:'X548',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS B VIRAL LOAD',
        shortName:'K561',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS C Ab (ELISA)',
        shortName:'F980',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HEPATITIS C VIRAL LOAD',
        shortName:'P140',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'TOXOPLASMA IgG',
        shortName:'TOXG',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'TOXOPLASMA IgM',
        shortName:'TOXM',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'RUBELLA IgG',
        shortName:'R443',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'RUBELLA IgM',
        shortName:'F521',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'GONORRHEA (ABS)',
        shortName:'A299',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'CHLAMYDIA (ABS)',
        shortName:'T292',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'RPR+TPHA SCREEN ONLY',
        shortName:'T240',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'T PALLIDUM (SCR) TPHA LATEX',
        shortName:'Z345',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'SYPHILIS PROFILE – VDRL + TPHA',
        shortName:'Y343',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'ANTI-STREPTOLYSIN O',
        shortName:'K765',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'CYTOMEGALOVIRUS(CMV IGM & IgG)',
        shortName:'X296',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'AMOEBIC HISTOLYTICAL Ab',
        shortName:'D279',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'BILHARZIA AB (PROFILE)',
        shortName:'M287',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HUMAN PAP VIRUS (HPV)',
        shortName:'P489',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HERPES 1 IgG-SERUM',
        shortName:'HERPIG1',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HERPES 2 IgG-SERUM',
        shortName:'HERPIG2',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HERPES SIMPLEX VIRUS',
        shortName:'W384',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'HERPES SIMPLEX VIRUS 1+2',
        shortName:'J307',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'TORCH SCREEN IgG+IgM',
        shortName:'F405',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'VARICELLA',
        shortName:'X342',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'MEASLES',
        shortName:'J330',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'MMR TITER',
        shortName:'X905',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'MUMPS',
        shortName:'K331',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'EPSTEIN BARR VIRUS (EBV',
        shortName:'Y297',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'P24 ANTIGEN',
        shortName:'P24',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'INFECTIOUS-DISEASES',
        name:'WHOOPING COUGH',
        shortName:'Z471',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'PEPTIC-ULCER',
        name:'H.PYLORI (IgG) ELISA',
        shortName:'B300',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'PEPTIC-ULCER',
        name:'H.PYLORI(Ag) STOOL',
        shortName:'C198',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'MYOCARDIAL',
        name:'CARDIAC PROFILE(AST,LDH,CPK,CKMB)',
        shortName:'CE',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'MYOCARDIAL',
        name:'CK-MB',
        shortName:'CKMB',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'MYOCARDIAL',
        name:'CK-NAC(CPK)',
        shortName:'CK',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'MYOCARDIAL',
        name:'LDH',
        shortName:'LDH',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'MYOCARDIAL',
        name:'AST(SGOTT)',
        shortName:'AST',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'MYOCARDIAL',
        name:'TROPONIN I',
        shortName:'J399',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'MYOCARDIAL',
        name:'HS-TROPONIN T',
        shortName:'B115',
        description:''
    },
    {
        category:'IMMUNOLOGY',
        subCategory: 'MYOCARDIAL',
        name:'BNP',
        shortName:'W354',
        description:''
    },
    {
        category:'ALLERGY',
        name:'TOTAL IgE',
        shortName:'C256',
        description:''
    },
    {
        category:'ALLERGY',
        name:'AERO-ALLEGEN SCR(PHADIOTOP)',
        shortName:'B254',
        description:''
    },
    {
        category:'ALLERGY',
        name:'FOOD SCREEN(Fx5) ADULT',
        shortName:'C255',
        description:''
    },
    {
        category:'ALLERGY',
        name:'FOOD SCREEN(PEDIATRICS)',
        shortName:'P189',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'THYROID-MARKERS',
        name:'THYROID FUNCTION TEST - TSH,T3,T4',
        shortName:'TFT',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'THYROID-MARKERS',
        name:'TSH',
        shortName:'ETSH',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'THYROID-MARKERS',
        name:'FREE T4',
        shortName:'EFT4',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'THYROID-MARKERS',
        name:'FREE T3',
        shortName:'EFT3',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'THYROID-MARKERS',
        name:'THYROGLOBULIN ANTIBODY',
        shortName:'E412',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'THYROID-MARKERS',
        name:'THYROID AUTO ANTIBDIES',
        shortName:'C471',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'THYROID-MARKERS',
        name:'TSH/RELEASING RECEPTORS ANTIBODY',
        shortName:'H932',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'FERTILITY/STEROID-MARKERS',
        name:'URINE PREGNANCY TEST',
        shortName:'J261',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'FERTILITY/STEROID-MARKERS',
        name:'LH',
        shortName:'ELH',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'FERTILITY/STEROID-MARKERS',
        name:'FSH',
        shortName:'EFSH',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'FERTILITY/STEROID-MARKERS',
        name:'PROLACTIN',
        shortName:'EPROL',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'FERTILITY/STEROID-MARKERS',
        name:'TOTAL BHCG',
        shortName:'E988',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'FERTILITY/STEROID-MARKERS',
        name:'ESTRADIOL(E2)',
        shortName:'V225',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'FERTILITY/STEROID-MARKERS',
        name:'SEX HORMONE BINDING GLO.',
        shortName:'SHBG',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'FERTILITY/STEROID-MARKERS',
        name:'PROGESTERONE',
        shortName:'EPROG',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'FERTILITY/STEROID-MARKERS',
        name:'TESTOSTERONE',
        shortName:'G452',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'FERTILITY/STEROID-MARKERS',
        name:'CORTISOL-BLOOD',
        shortName:'D210',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'FERTILITY/STEROID-MARKERS',
        name:'ANTI-MULLERIAN HORMONE',
        shortName:'P415',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'TUMOUR/CANCER MARKERS',
        name:'AFP (TUMOUR MARKER)',
        shortName:'L192',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'TUMOUR/CANCER MARKERS',
        name:'CA72-4',
        shortName:'S443',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'TUMOUR/CANCER MARKERS',
        name:'PSA',
        shortName:'EPSA',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'TUMOUR/CANCER MARKERS',
        name:'BREAST CANCER AG (CA 15.3)',
        shortName:'C153',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'TUMOUR/CANCER MARKERS',
        name:'CEA (CARCINOEMBRYONICAG)',
        shortName:'CEA',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'TUMOUR/CANCER MARKERS',
        name:'OVARIAN CANCER (CA 125)',
        shortName:'C125',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'TUMOUR/CANCER MARKERS',
        name:'G.I. TUMOUR ANTIGEN (CA19.9)',
        shortName:'C199',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'TUMOUR/CANCER MARKERS',
        name:'TOTAL PSA + FREE PSA',
        shortName:'K838',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'DOWNS-SCREEN',
        name:'FIRST TRIMESTER DOWNS SCREEN',
        shortName:'X212',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'DOWNS-SCREEN',
        name:'SECOND TRIMESTER DOWNSSCREEN',
        shortName:'F212',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'OCCUPATIONAL',
        name:'CHOLINESTERASE',
        shortName:'H772',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'OCCUPATIONAL',
        name:'LEAD',
        shortName:'S153',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'OCCUPATIONAL',
        name:'ALCOHOL',
        shortName:'ALC',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'OCCUPATIONAL',
        name:'DRUG OF ABUSE',
        shortName:'M472',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'OCCUPATIONAL',
        name:'SELENIUM',
        shortName:'S767',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'OCCUPATIONAL',
        name:'ARSENIC',
        shortName:'V711',
        description:''
    },
    {
        category:'ENDOCRINOLOGY',
        subCategory: 'OCCUPATIONAL',
        name:'MERCURY BLOOD LEVEL',
        shortName:'Y632',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'BLOOD C/S - PEDIATRIC (0-12YRS)',
        shortName:'M942',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'BLOOD C/S - RIGHT ARM',
        shortName:'Z625',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'BLOOD C/S - LEFT ARM',
        shortName:'Z624',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'CORNEAL/EYE SWAB MCS',
        shortName:'W034',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'EAR/NOSE/THROAT SWAB MCS',
        shortName:'MENT',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'ENDOCERVICAL MCS FEMALE ADULT',
        shortName:'MV',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'ENDOCERVICAL MCS FEMALE CHILD',
        shortName:'G839',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'OCCULT BLOOD-STOOL',
        shortName:'J133',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'SPUTUM FOR AFB',
        shortName:'T665',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'CERVICAL SWAB MCS',
        shortName:'R916',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'HVS RE',
        shortName:'L123',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'HVS CS',
        shortName:'HVS',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'STOOL MC',
        shortName:'R544',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'STOOL R/E',
        shortName:'F991',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'STOOL R/E,CS (CHILD 0 -5 YRS)',
        shortName:'Y322',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'STOOL ROTA & ADENO (CHILD 0- 5 YRS',
        shortName:'M835',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'H.PYLORI(Ag) STOOL',
        shortName:'C198',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'URINE CS',
        shortName:'U345',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'URINE R/E',
        shortName:'R204',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'PUS FLUID MCS',
        shortName:'P999',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'WIDAL (TYPHI O &H)',
        shortName:'Z344',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'SKIN SCRAPINGS',
        shortName:'F908',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'SPUTUM MCS',
        shortName:'L887',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'SKIN SNIP',
        shortName:'IPAR',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'CSF BACTERIAL ANTIGEN',
        shortName:'M344',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'CSF CRYPTOCOCCAL ANTIGEN',
        shortName:'R320',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'URINE BILHARZIA',
        shortName:'J232',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'URETHRAL MCS',
        shortName:'MVM',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'URINE REDUCING SUB.',
        shortName:'K572',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'ENVIRONMENTAL CULTURES (WATER ETC.',
        shortName:'W520',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'PCR CHLAMYDIA TRACHOMATIS',
        shortName:'F235',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'PCR GONOCOCCA',
        shortName:'H854',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        name:'TB PCR (GENEXPERT SPUTUM)',
        shortName:'C232',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        subCategory: 'ANDROLOGY',
        name:'SEMEN ANALYSIS',
        shortName:'M597',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        subCategory: 'ANDROLOGY',
        name:'SPERM ANTI-BODIES',
        shortName:'R266',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        subCategory: 'ANDROLOGY',
        name:'SEMEN MCS',
        shortName:'Y572',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        subCategory: 'CYTOGENETICS',
        name:'PCR BCR-ABL FUSION (PHIL. CHROMOSOMES)',
        shortName:'B368',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        subCategory: 'CYTOGENETICS',
        name:'KARYOTYPING (BLOOD',
        shortName:'A248',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        subCategory: 'CYTOGENETICS',
        name:'KARYOTYPING (AMNIOTIC FLUID)',
        shortName:'A248',
        description:''
    },
    {
        category:'MICROBIOLOGY',
        subCategory: 'CYTOGENETICS',
        name:'PRE-NATAL SICKLE CELL GENOTYPING',
        shortName:'',
        description:''
    },
]