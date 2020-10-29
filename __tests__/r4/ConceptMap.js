const conceptmapValidateFunction = require("../../r4/js/ConceptMap");

describe("ConceptMap", () => {
	 test("validate ConceptMap-101.json", () => {
		 const conceptmapExample1 = require("../r4-resources/ConceptMap-101.json");
		 expect(conceptmapValidateFunction(conceptmapExample1)).toBe(true);
	 });

	 test("validate ConceptMap-102.json", () => {
		 const conceptmapExample2 = require("../r4-resources/ConceptMap-102.json");
		 expect(conceptmapValidateFunction(conceptmapExample2)).toBe(true);
	 });

	 test("validate ConceptMap-103.json", () => {
		 const conceptmapExample3 = require("../r4-resources/ConceptMap-103.json");
		 expect(conceptmapValidateFunction(conceptmapExample3)).toBe(true);
	 });

	 test("validate ConceptMap-cdshooks-indicator.json", () => {
		 const conceptmapExample4 = require("../r4-resources/ConceptMap-cdshooks-indicator.json");
		 expect(conceptmapValidateFunction(conceptmapExample4)).toBe(true);
	 });

	 test("validate ConceptMap-cm-address-type-v3.json", () => {
		 const conceptmapExample5 = require("../r4-resources/ConceptMap-cm-address-type-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample5)).toBe(true);
	 });

	 test("validate ConceptMap-cm-address-use-v2.json", () => {
		 const conceptmapExample6 = require("../r4-resources/ConceptMap-cm-address-use-v2.json");
		 expect(conceptmapValidateFunction(conceptmapExample6)).toBe(true);
	 });

	 test("validate ConceptMap-cm-address-use-v3.json", () => {
		 const conceptmapExample7 = require("../r4-resources/ConceptMap-cm-address-use-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample7)).toBe(true);
	 });

	 test("validate ConceptMap-cm-administrative-gender-v2.json", () => {
		 const conceptmapExample8 = require("../r4-resources/ConceptMap-cm-administrative-gender-v2.json");
		 expect(conceptmapValidateFunction(conceptmapExample8)).toBe(true);
	 });

	 test("validate ConceptMap-cm-administrative-gender-v3.json", () => {
		 const conceptmapExample9 = require("../r4-resources/ConceptMap-cm-administrative-gender-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample9)).toBe(true);
	 });

	 test("validate ConceptMap-cm-composition-status-v3.json", () => {
		 const conceptmapExample10 = require("../r4-resources/ConceptMap-cm-composition-status-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample10)).toBe(true);
	 });

	 test("validate ConceptMap-cm-contact-point-system-v2.json", () => {
		 const conceptmapExample11 = require("../r4-resources/ConceptMap-cm-contact-point-system-v2.json");
		 expect(conceptmapValidateFunction(conceptmapExample11)).toBe(true);
	 });

	 test("validate ConceptMap-cm-contact-point-use-v2.json", () => {
		 const conceptmapExample12 = require("../r4-resources/ConceptMap-cm-contact-point-use-v2.json");
		 expect(conceptmapValidateFunction(conceptmapExample12)).toBe(true);
	 });

	 test("validate ConceptMap-cm-contact-point-use-v3.json", () => {
		 const conceptmapExample13 = require("../r4-resources/ConceptMap-cm-contact-point-use-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample13)).toBe(true);
	 });

	 test("validate ConceptMap-cm-data-absent-reason-v3.json", () => {
		 const conceptmapExample14 = require("../r4-resources/ConceptMap-cm-data-absent-reason-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample14)).toBe(true);
	 });

	 test("validate ConceptMap-cm-detectedissue-severity-v3.json", () => {
		 const conceptmapExample15 = require("../r4-resources/ConceptMap-cm-detectedissue-severity-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample15)).toBe(true);
	 });

	 test("validate ConceptMap-cm-document-reference-status-v3.json", () => {
		 const conceptmapExample16 = require("../r4-resources/ConceptMap-cm-document-reference-status-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample16)).toBe(true);
	 });

	 test("validate ConceptMap-cm-name-use-v2.json", () => {
		 const conceptmapExample17 = require("../r4-resources/ConceptMap-cm-name-use-v2.json");
		 expect(conceptmapValidateFunction(conceptmapExample17)).toBe(true);
	 });

	 test("validate ConceptMap-cm-name-use-v3.json", () => {
		 const conceptmapExample18 = require("../r4-resources/ConceptMap-cm-name-use-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample18)).toBe(true);
	 });

	 test("validate ConceptMap-example2.json", () => {
		 const conceptmapExample19 = require("../r4-resources/ConceptMap-example2.json");
		 expect(conceptmapValidateFunction(conceptmapExample19)).toBe(true);
	 });

	 test("validate ConceptMap-sc-account-status.json", () => {
		 const conceptmapExample20 = require("../r4-resources/ConceptMap-sc-account-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample20)).toBe(true);
	 });

	 test("validate ConceptMap-sc-allergyintolerance-clinical.json", () => {
		 const conceptmapExample21 = require("../r4-resources/ConceptMap-sc-allergyintolerance-clinical.json");
		 expect(conceptmapValidateFunction(conceptmapExample21)).toBe(true);
	 });

	 test("validate ConceptMap-sc-allergyintolerance-verification.json", () => {
		 const conceptmapExample22 = require("../r4-resources/ConceptMap-sc-allergyintolerance-verification.json");
		 expect(conceptmapValidateFunction(conceptmapExample22)).toBe(true);
	 });

	 test("validate ConceptMap-sc-appointmentstatus.json", () => {
		 const conceptmapExample23 = require("../r4-resources/ConceptMap-sc-appointmentstatus.json");
		 expect(conceptmapValidateFunction(conceptmapExample23)).toBe(true);
	 });

	 test("validate ConceptMap-sc-care-plan-activity-status.json", () => {
		 const conceptmapExample24 = require("../r4-resources/ConceptMap-sc-care-plan-activity-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample24)).toBe(true);
	 });

	 test("validate ConceptMap-sc-care-team-status.json", () => {
		 const conceptmapExample25 = require("../r4-resources/ConceptMap-sc-care-team-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample25)).toBe(true);
	 });

	 test("validate ConceptMap-sc-chargeitem-status.json", () => {
		 const conceptmapExample26 = require("../r4-resources/ConceptMap-sc-chargeitem-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample26)).toBe(true);
	 });

	 test("validate ConceptMap-sc-clinicalimpression-status.json", () => {
		 const conceptmapExample27 = require("../r4-resources/ConceptMap-sc-clinicalimpression-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample27)).toBe(true);
	 });

	 test("validate ConceptMap-sc-composition-status.json", () => {
		 const conceptmapExample28 = require("../r4-resources/ConceptMap-sc-composition-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample28)).toBe(true);
	 });

	 test("validate ConceptMap-sc-condition-ver-status.json", () => {
		 const conceptmapExample29 = require("../r4-resources/ConceptMap-sc-condition-ver-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample29)).toBe(true);
	 });

	 test("validate ConceptMap-sc-consent-state-codes.json", () => {
		 const conceptmapExample30 = require("../r4-resources/ConceptMap-sc-consent-state-codes.json");
		 expect(conceptmapValidateFunction(conceptmapExample30)).toBe(true);
	 });

	 test("validate ConceptMap-sc-contract-publicationstatus.json", () => {
		 const conceptmapExample31 = require("../r4-resources/ConceptMap-sc-contract-publicationstatus.json");
		 expect(conceptmapValidateFunction(conceptmapExample31)).toBe(true);
	 });

	 test("validate ConceptMap-sc-contract-status.json", () => {
		 const conceptmapExample32 = require("../r4-resources/ConceptMap-sc-contract-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample32)).toBe(true);
	 });

	 test("validate ConceptMap-sc-device-statement-status.json", () => {
		 const conceptmapExample33 = require("../r4-resources/ConceptMap-sc-device-statement-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample33)).toBe(true);
	 });

	 test("validate ConceptMap-sc-device-status.json", () => {
		 const conceptmapExample34 = require("../r4-resources/ConceptMap-sc-device-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample34)).toBe(true);
	 });

	 test("validate ConceptMap-sc-diagnostic-report-status.json", () => {
		 const conceptmapExample35 = require("../r4-resources/ConceptMap-sc-diagnostic-report-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample35)).toBe(true);
	 });

	 test("validate ConceptMap-sc-document-reference-status.json", () => {
		 const conceptmapExample36 = require("../r4-resources/ConceptMap-sc-document-reference-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample36)).toBe(true);
	 });

	 test("validate ConceptMap-sc-encounter-location-status.json", () => {
		 const conceptmapExample37 = require("../r4-resources/ConceptMap-sc-encounter-location-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample37)).toBe(true);
	 });

	 test("validate ConceptMap-sc-encounter-status.json", () => {
		 const conceptmapExample38 = require("../r4-resources/ConceptMap-sc-encounter-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample38)).toBe(true);
	 });

	 test("validate ConceptMap-sc-endpoint-status.json", () => {
		 const conceptmapExample39 = require("../r4-resources/ConceptMap-sc-endpoint-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample39)).toBe(true);
	 });

	 test("validate ConceptMap-sc-episode-of-care-status.json", () => {
		 const conceptmapExample40 = require("../r4-resources/ConceptMap-sc-episode-of-care-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample40)).toBe(true);
	 });

	 test("validate ConceptMap-sc-event-status.json", () => {
		 const conceptmapExample41 = require("../r4-resources/ConceptMap-sc-event-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample41)).toBe(true);
	 });

	 test("validate ConceptMap-sc-explanationofbenefit-status.json", () => {
		 const conceptmapExample42 = require("../r4-resources/ConceptMap-sc-explanationofbenefit-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample42)).toBe(true);
	 });

	 test("validate ConceptMap-sc-flag-status.json", () => {
		 const conceptmapExample43 = require("../r4-resources/ConceptMap-sc-flag-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample43)).toBe(true);
	 });

	 test("validate ConceptMap-sc-fm-status.json", () => {
		 const conceptmapExample44 = require("../r4-resources/ConceptMap-sc-fm-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample44)).toBe(true);
	 });

	 test("validate ConceptMap-sc-goal-achievement.json", () => {
		 const conceptmapExample45 = require("../r4-resources/ConceptMap-sc-goal-achievement.json");
		 expect(conceptmapValidateFunction(conceptmapExample45)).toBe(true);
	 });

	 test("validate ConceptMap-sc-goal-status.json", () => {
		 const conceptmapExample46 = require("../r4-resources/ConceptMap-sc-goal-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample46)).toBe(true);
	 });

	 test("validate ConceptMap-sc-guidance-response-status.json", () => {
		 const conceptmapExample47 = require("../r4-resources/ConceptMap-sc-guidance-response-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample47)).toBe(true);
	 });

	 test("validate ConceptMap-sc-history-status.json", () => {
		 const conceptmapExample48 = require("../r4-resources/ConceptMap-sc-history-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample48)).toBe(true);
	 });

	 test("validate ConceptMap-sc-imagingstudy-status.json", () => {
		 const conceptmapExample49 = require("../r4-resources/ConceptMap-sc-imagingstudy-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample49)).toBe(true);
	 });

	 test("validate ConceptMap-sc-immunization-evaluation-status.json", () => {
		 const conceptmapExample50 = require("../r4-resources/ConceptMap-sc-immunization-evaluation-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample50)).toBe(true);
	 });

	 test("validate ConceptMap-sc-immunization-status.json", () => {
		 const conceptmapExample51 = require("../r4-resources/ConceptMap-sc-immunization-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample51)).toBe(true);
	 });

	 test("validate ConceptMap-sc-invoice-status.json", () => {
		 const conceptmapExample52 = require("../r4-resources/ConceptMap-sc-invoice-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample52)).toBe(true);
	 });

	 test("validate ConceptMap-sc-list-status.json", () => {
		 const conceptmapExample53 = require("../r4-resources/ConceptMap-sc-list-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample53)).toBe(true);
	 });

	 test("validate ConceptMap-sc-location-status.json", () => {
		 const conceptmapExample54 = require("../r4-resources/ConceptMap-sc-location-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample54)).toBe(true);
	 });

	 test("validate ConceptMap-sc-measure-report-status.json", () => {
		 const conceptmapExample55 = require("../r4-resources/ConceptMap-sc-measure-report-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample55)).toBe(true);
	 });

	 test("validate ConceptMap-sc-medication-admin-status.json", () => {
		 const conceptmapExample56 = require("../r4-resources/ConceptMap-sc-medication-admin-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample56)).toBe(true);
	 });

	 test("validate ConceptMap-sc-medication-statement-status.json", () => {
		 const conceptmapExample57 = require("../r4-resources/ConceptMap-sc-medication-statement-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample57)).toBe(true);
	 });

	 test("validate ConceptMap-sc-medication-status.json", () => {
		 const conceptmapExample58 = require("../r4-resources/ConceptMap-sc-medication-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample58)).toBe(true);
	 });

	 test("validate ConceptMap-sc-medicationdispense-status.json", () => {
		 const conceptmapExample59 = require("../r4-resources/ConceptMap-sc-medicationdispense-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample59)).toBe(true);
	 });

	 test("validate ConceptMap-sc-medicationknowledge-status.json", () => {
		 const conceptmapExample60 = require("../r4-resources/ConceptMap-sc-medicationknowledge-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample60)).toBe(true);
	 });

	 test("validate ConceptMap-sc-medicationrequest-status.json", () => {
		 const conceptmapExample61 = require("../r4-resources/ConceptMap-sc-medicationrequest-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample61)).toBe(true);
	 });

	 test("validate ConceptMap-sc-metric-operational-status.json", () => {
		 const conceptmapExample62 = require("../r4-resources/ConceptMap-sc-metric-operational-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample62)).toBe(true);
	 });

	 test("validate ConceptMap-sc-observation-status.json", () => {
		 const conceptmapExample63 = require("../r4-resources/ConceptMap-sc-observation-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample63)).toBe(true);
	 });

	 test("validate ConceptMap-sc-participationstatus.json", () => {
		 const conceptmapExample64 = require("../r4-resources/ConceptMap-sc-participationstatus.json");
		 expect(conceptmapValidateFunction(conceptmapExample64)).toBe(true);
	 });

	 test("validate ConceptMap-sc-product-status.json", () => {
		 const conceptmapExample65 = require("../r4-resources/ConceptMap-sc-product-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample65)).toBe(true);
	 });

	 test("validate ConceptMap-sc-publication-status.json", () => {
		 const conceptmapExample66 = require("../r4-resources/ConceptMap-sc-publication-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample66)).toBe(true);
	 });

	 test("validate ConceptMap-sc-questionnaire-answers-status.json", () => {
		 const conceptmapExample67 = require("../r4-resources/ConceptMap-sc-questionnaire-answers-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample67)).toBe(true);
	 });

	 test("validate ConceptMap-sc-report-status-codes.json", () => {
		 const conceptmapExample68 = require("../r4-resources/ConceptMap-sc-report-status-codes.json");
		 expect(conceptmapValidateFunction(conceptmapExample68)).toBe(true);
	 });

	 test("validate ConceptMap-sc-request-status.json", () => {
		 const conceptmapExample69 = require("../r4-resources/ConceptMap-sc-request-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample69)).toBe(true);
	 });

	 test("validate ConceptMap-sc-research-study-status.json", () => {
		 const conceptmapExample70 = require("../r4-resources/ConceptMap-sc-research-study-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample70)).toBe(true);
	 });

	 test("validate ConceptMap-sc-research-subject-status.json", () => {
		 const conceptmapExample71 = require("../r4-resources/ConceptMap-sc-research-subject-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample71)).toBe(true);
	 });

	 test("validate ConceptMap-sc-slotstatus.json", () => {
		 const conceptmapExample72 = require("../r4-resources/ConceptMap-sc-slotstatus.json");
		 expect(conceptmapValidateFunction(conceptmapExample72)).toBe(true);
	 });

	 test("validate ConceptMap-sc-specimen-status.json", () => {
		 const conceptmapExample73 = require("../r4-resources/ConceptMap-sc-specimen-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample73)).toBe(true);
	 });

	 test("validate ConceptMap-sc-subscription-status.json", () => {
		 const conceptmapExample74 = require("../r4-resources/ConceptMap-sc-subscription-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample74)).toBe(true);
	 });

	 test("validate ConceptMap-sc-substance-status.json", () => {
		 const conceptmapExample75 = require("../r4-resources/ConceptMap-sc-substance-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample75)).toBe(true);
	 });

	 test("validate ConceptMap-sc-supplydelivery-status.json", () => {
		 const conceptmapExample76 = require("../r4-resources/ConceptMap-sc-supplydelivery-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample76)).toBe(true);
	 });

	 test("validate ConceptMap-sc-supplyrequest-status.json", () => {
		 const conceptmapExample77 = require("../r4-resources/ConceptMap-sc-supplyrequest-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample77)).toBe(true);
	 });

	 test("validate ConceptMap-sc-task-status.json", () => {
		 const conceptmapExample78 = require("../r4-resources/ConceptMap-sc-task-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample78)).toBe(true);
	 });

	 test("validate ConceptMap-sc-verificationresult-status.json", () => {
		 const conceptmapExample79 = require("../r4-resources/ConceptMap-sc-verificationresult-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample79)).toBe(true);
	 });

	 test("validate ConceptMap-sc-verificationresult-validation-status.json", () => {
		 const conceptmapExample80 = require("../r4-resources/ConceptMap-sc-verificationresult-validation-status.json");
		 expect(conceptmapValidateFunction(conceptmapExample80)).toBe(true);
	 });

});