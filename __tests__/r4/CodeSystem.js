const codesystemValidateFunction = require("../../r4/js/CodeSystem");

describe("CodeSystem", () => {
	 test("validate CodeSystem-activity-definition-category.json", () => {
		 const codesystemExample1 = require("../r4-resources/CodeSystem-activity-definition-category.json");
		 expect(codesystemValidateFunction(codesystemExample1)).toBe(true);
	 });

	 test("validate CodeSystem-additionalmaterials.json", () => {
		 const codesystemExample2 = require("../r4-resources/CodeSystem-additionalmaterials.json");
		 expect(codesystemValidateFunction(codesystemExample2)).toBe(true);
	 });

	 test("validate CodeSystem-allerg-intol-substance-exp-risk.json", () => {
		 const codesystemExample3 = require("../r4-resources/CodeSystem-allerg-intol-substance-exp-risk.json");
		 expect(codesystemValidateFunction(codesystemExample3)).toBe(true);
	 });

	 test("validate CodeSystem-animal-genderstatus.json", () => {
		 const codesystemExample4 = require("../r4-resources/CodeSystem-animal-genderstatus.json");
		 expect(codesystemValidateFunction(codesystemExample4)).toBe(true);
	 });

	 test("validate CodeSystem-animal-species.json", () => {
		 const codesystemExample5 = require("../r4-resources/CodeSystem-animal-species.json");
		 expect(codesystemValidateFunction(codesystemExample5)).toBe(true);
	 });

	 test("validate CodeSystem-catalogType.json", () => {
		 const codesystemExample6 = require("../r4-resources/CodeSystem-catalogType.json");
		 expect(codesystemValidateFunction(codesystemExample6)).toBe(true);
	 });

	 test("validate CodeSystem-choice-list-orientation.json", () => {
		 const codesystemExample7 = require("../r4-resources/CodeSystem-choice-list-orientation.json");
		 expect(codesystemValidateFunction(codesystemExample7)).toBe(true);
	 });

	 test("validate CodeSystem-codesystem-altcode-kind.json", () => {
		 const codesystemExample8 = require("../r4-resources/CodeSystem-codesystem-altcode-kind.json");
		 expect(codesystemValidateFunction(codesystemExample8)).toBe(true);
	 });

	 test("validate CodeSystem-composition-altcode-kind.json", () => {
		 const codesystemExample9 = require("../r4-resources/CodeSystem-composition-altcode-kind.json");
		 expect(codesystemValidateFunction(codesystemExample9)).toBe(true);
	 });

	 test("validate CodeSystem-concept-subsumption-outcome.json", () => {
		 const codesystemExample10 = require("../r4-resources/CodeSystem-concept-subsumption-outcome.json");
		 expect(codesystemValidateFunction(codesystemExample10)).toBe(true);
	 });

	 test("validate CodeSystem-condition-state.json", () => {
		 const codesystemExample11 = require("../r4-resources/CodeSystem-condition-state.json");
		 expect(codesystemValidateFunction(codesystemExample11)).toBe(true);
	 });

	 test("validate CodeSystem-conformance-expectation.json", () => {
		 const codesystemExample12 = require("../r4-resources/CodeSystem-conformance-expectation.json");
		 expect(codesystemValidateFunction(codesystemExample12)).toBe(true);
	 });

	 test("validate CodeSystem-consent-performer.json", () => {
		 const codesystemExample13 = require("../r4-resources/CodeSystem-consent-performer.json");
		 expect(codesystemValidateFunction(codesystemExample13)).toBe(true);
	 });

	 test("validate CodeSystem-contract-data-meaning.json", () => {
		 const codesystemExample14 = require("../r4-resources/CodeSystem-contract-data-meaning.json");
		 expect(codesystemValidateFunction(codesystemExample14)).toBe(true);
	 });

	 test("validate CodeSystem-copy-number-event.json", () => {
		 const codesystemExample15 = require("../r4-resources/CodeSystem-copy-number-event.json");
		 expect(codesystemValidateFunction(codesystemExample15)).toBe(true);
	 });

	 test("validate CodeSystem-coverage-selfpay.json", () => {
		 const codesystemExample16 = require("../r4-resources/CodeSystem-coverage-selfpay.json");
		 expect(codesystemValidateFunction(codesystemExample16)).toBe(true);
	 });

	 test("validate CodeSystem-definition-status.json", () => {
		 const codesystemExample17 = require("../r4-resources/CodeSystem-definition-status.json");
		 expect(codesystemValidateFunction(codesystemExample17)).toBe(true);
	 });

	 test("validate CodeSystem-device-definition-status.json", () => {
		 const codesystemExample18 = require("../r4-resources/CodeSystem-device-definition-status.json");
		 expect(codesystemValidateFunction(codesystemExample18)).toBe(true);
	 });

	 test("validate CodeSystem-dicom-audit-lifecycle.json", () => {
		 const codesystemExample19 = require("../r4-resources/CodeSystem-dicom-audit-lifecycle.json");
		 expect(codesystemValidateFunction(codesystemExample19)).toBe(true);
	 });

	 test("validate CodeSystem-dicom-dcim.json", () => {
		 const codesystemExample20 = require("../r4-resources/CodeSystem-dicom-dcim.json");
		 expect(codesystemValidateFunction(codesystemExample20)).toBe(true);
	 });

	 test("validate CodeSystem-ex-onsettype.json", () => {
		 const codesystemExample21 = require("../r4-resources/CodeSystem-ex-onsettype.json");
		 expect(codesystemValidateFunction(codesystemExample21)).toBe(true);
	 });

	 test("validate CodeSystem-ex-payee-resource-type.json", () => {
		 const codesystemExample22 = require("../r4-resources/CodeSystem-ex-payee-resource-type.json");
		 expect(codesystemValidateFunction(codesystemExample22)).toBe(true);
	 });

	 test("validate CodeSystem-expansion-parameter-source.json", () => {
		 const codesystemExample23 = require("../r4-resources/CodeSystem-expansion-parameter-source.json");
		 expect(codesystemValidateFunction(codesystemExample23)).toBe(true);
	 });

	 test("validate CodeSystem-expansion-processing-rule.json", () => {
		 const codesystemExample24 = require("../r4-resources/CodeSystem-expansion-processing-rule.json");
		 expect(codesystemValidateFunction(codesystemExample24)).toBe(true);
	 });

	 test("validate CodeSystem-extra-activity-type.json", () => {
		 const codesystemExample25 = require("../r4-resources/CodeSystem-extra-activity-type.json");
		 expect(codesystemValidateFunction(codesystemExample25)).toBe(true);
	 });

	 test("validate CodeSystem-extra-security-role-type.json", () => {
		 const codesystemExample26 = require("../r4-resources/CodeSystem-extra-security-role-type.json");
		 expect(codesystemValidateFunction(codesystemExample26)).toBe(true);
	 });

	 test("validate CodeSystem-feeding-device.json", () => {
		 const codesystemExample27 = require("../r4-resources/CodeSystem-feeding-device.json");
		 expect(codesystemValidateFunction(codesystemExample27)).toBe(true);
	 });

	 test("validate CodeSystem-financial-taskcode.json", () => {
		 const codesystemExample28 = require("../r4-resources/CodeSystem-financial-taskcode.json");
		 expect(codesystemValidateFunction(codesystemExample28)).toBe(true);
	 });

	 test("validate CodeSystem-financial-taskinputtype.json", () => {
		 const codesystemExample29 = require("../r4-resources/CodeSystem-financial-taskinputtype.json");
		 expect(codesystemValidateFunction(codesystemExample29)).toBe(true);
	 });

	 test("validate CodeSystem-flag-priority.json", () => {
		 const codesystemExample30 = require("../r4-resources/CodeSystem-flag-priority.json");
		 expect(codesystemValidateFunction(codesystemExample30)).toBe(true);
	 });

	 test("validate CodeSystem-fm-conditions.json", () => {
		 const codesystemExample31 = require("../r4-resources/CodeSystem-fm-conditions.json");
		 expect(codesystemValidateFunction(codesystemExample31)).toBe(true);
	 });

	 test("validate CodeSystem-fm-itemtype.json", () => {
		 const codesystemExample32 = require("../r4-resources/CodeSystem-fm-itemtype.json");
		 expect(codesystemValidateFunction(codesystemExample32)).toBe(true);
	 });

	 test("validate CodeSystem-gender-identity.json", () => {
		 const codesystemExample33 = require("../r4-resources/CodeSystem-gender-identity.json");
		 expect(codesystemValidateFunction(codesystemExample33)).toBe(true);
	 });

	 test("validate CodeSystem-goal-acceptance-status.json", () => {
		 const codesystemExample34 = require("../r4-resources/CodeSystem-goal-acceptance-status.json");
		 expect(codesystemValidateFunction(codesystemExample34)).toBe(true);
	 });

	 test("validate CodeSystem-goal-relationship-type.json", () => {
		 const codesystemExample35 = require("../r4-resources/CodeSystem-goal-relationship-type.json");
		 expect(codesystemValidateFunction(codesystemExample35)).toBe(true);
	 });

	 test("validate CodeSystem-goal-status-reason.json", () => {
		 const codesystemExample36 = require("../r4-resources/CodeSystem-goal-status-reason.json");
		 expect(codesystemValidateFunction(codesystemExample36)).toBe(true);
	 });

	 test("validate CodeSystem-hl7-work-group.json", () => {
		 const codesystemExample37 = require("../r4-resources/CodeSystem-hl7-work-group.json");
		 expect(codesystemValidateFunction(codesystemExample37)).toBe(true);
	 });

	 test("validate CodeSystem-implantStatus.json", () => {
		 const codesystemExample38 = require("../r4-resources/CodeSystem-implantStatus.json");
		 expect(codesystemValidateFunction(codesystemExample38)).toBe(true);
	 });

	 test("validate CodeSystem-intervention.json", () => {
		 const codesystemExample39 = require("../r4-resources/CodeSystem-intervention.json");
		 expect(codesystemValidateFunction(codesystemExample39)).toBe(true);
	 });

	 test("validate CodeSystem-iso-21089-lifecycle.json", () => {
		 const codesystemExample40 = require("../r4-resources/CodeSystem-iso-21089-lifecycle.json");
		 expect(codesystemValidateFunction(codesystemExample40)).toBe(true);
	 });

	 test("validate CodeSystem-language-preference-type.json", () => {
		 const codesystemExample41 = require("../r4-resources/CodeSystem-language-preference-type.json");
		 expect(codesystemValidateFunction(codesystemExample41)).toBe(true);
	 });

	 test("validate CodeSystem-match-grade.json", () => {
		 const codesystemExample42 = require("../r4-resources/CodeSystem-match-grade.json");
		 expect(codesystemValidateFunction(codesystemExample42)).toBe(true);
	 });

	 test("validate CodeSystem-name-assembly-order.json", () => {
		 const codesystemExample43 = require("../r4-resources/CodeSystem-name-assembly-order.json");
		 expect(codesystemValidateFunction(codesystemExample43)).toBe(true);
	 });

	 test("validate CodeSystem-narrative-status.json", () => {
		 const codesystemExample44 = require("../r4-resources/CodeSystem-narrative-status.json");
		 expect(codesystemValidateFunction(codesystemExample44)).toBe(true);
	 });

	 test("validate CodeSystem-observation-statistics.json", () => {
		 const codesystemExample45 = require("../r4-resources/CodeSystem-observation-statistics.json");
		 expect(codesystemValidateFunction(codesystemExample45)).toBe(true);
	 });

	 test("validate CodeSystem-oral-prosthodontic-material.json", () => {
		 const codesystemExample46 = require("../r4-resources/CodeSystem-oral-prosthodontic-material.json");
		 expect(codesystemValidateFunction(codesystemExample46)).toBe(true);
	 });

	 test("validate CodeSystem-parameter-group.json", () => {
		 const codesystemExample47 = require("../r4-resources/CodeSystem-parameter-group.json");
		 expect(codesystemValidateFunction(codesystemExample47)).toBe(true);
	 });

	 test("validate CodeSystem-practitioner-specialty.json", () => {
		 const codesystemExample48 = require("../r4-resources/CodeSystem-practitioner-specialty.json");
		 expect(codesystemValidateFunction(codesystemExample48)).toBe(true);
	 });

	 test("validate CodeSystem-procedure-progress-status-codes.json", () => {
		 const codesystemExample49 = require("../r4-resources/CodeSystem-procedure-progress-status-codes.json");
		 expect(codesystemValidateFunction(codesystemExample49)).toBe(true);
	 });

	 test("validate CodeSystem-question-max-occurs.json", () => {
		 const codesystemExample50 = require("../r4-resources/CodeSystem-question-max-occurs.json");
		 expect(codesystemValidateFunction(codesystemExample50)).toBe(true);
	 });

	 test("validate CodeSystem-questionnaire-display-category.json", () => {
		 const codesystemExample51 = require("../r4-resources/CodeSystem-questionnaire-display-category.json");
		 expect(codesystemValidateFunction(codesystemExample51)).toBe(true);
	 });

	 test("validate CodeSystem-questionnaire-item-control.json", () => {
		 const codesystemExample52 = require("../r4-resources/CodeSystem-questionnaire-item-control.json");
		 expect(codesystemValidateFunction(codesystemExample52)).toBe(true);
	 });

	 test("validate CodeSystem-questionnaire-usage-mode.json", () => {
		 const codesystemExample53 = require("../r4-resources/CodeSystem-questionnaire-usage-mode.json");
		 expect(codesystemValidateFunction(codesystemExample53)).toBe(true);
	 });

	 test("validate CodeSystem-reaction-event-certainty.json", () => {
		 const codesystemExample54 = require("../r4-resources/CodeSystem-reaction-event-certainty.json");
		 expect(codesystemValidateFunction(codesystemExample54)).toBe(true);
	 });

	 test("validate CodeSystem-recommendation-strength.json", () => {
		 const codesystemExample55 = require("../r4-resources/CodeSystem-recommendation-strength.json");
		 expect(codesystemValidateFunction(codesystemExample55)).toBe(true);
	 });

	 test("validate CodeSystem-request-priority.json", () => {
		 const codesystemExample56 = require("../r4-resources/CodeSystem-request-priority.json");
		 expect(codesystemValidateFunction(codesystemExample56)).toBe(true);
	 });

	 test("validate CodeSystem-resource-security-category.json", () => {
		 const codesystemExample57 = require("../r4-resources/CodeSystem-resource-security-category.json");
		 expect(codesystemValidateFunction(codesystemExample57)).toBe(true);
	 });

	 test("validate CodeSystem-resource-type-link.json", () => {
		 const codesystemExample58 = require("../r4-resources/CodeSystem-resource-type-link.json");
		 expect(codesystemValidateFunction(codesystemExample58)).toBe(true);
	 });

	 test("validate CodeSystem-resource-validation-mode.json", () => {
		 const codesystemExample59 = require("../r4-resources/CodeSystem-resource-validation-mode.json");
		 expect(codesystemValidateFunction(codesystemExample59)).toBe(true);
	 });

	 test("validate CodeSystem-secondary-finding.json", () => {
		 const codesystemExample60 = require("../r4-resources/CodeSystem-secondary-finding.json");
		 expect(codesystemValidateFunction(codesystemExample60)).toBe(true);
	 });

	 test("validate CodeSystem-service-modifiers.json", () => {
		 const codesystemExample61 = require("../r4-resources/CodeSystem-service-modifiers.json");
		 expect(codesystemValidateFunction(codesystemExample61)).toBe(true);
	 });

	 test("validate CodeSystem-service-pharmacy.json", () => {
		 const codesystemExample62 = require("../r4-resources/CodeSystem-service-pharmacy.json");
		 expect(codesystemValidateFunction(codesystemExample62)).toBe(true);
	 });

	 test("validate CodeSystem-service-product.json", () => {
		 const codesystemExample63 = require("../r4-resources/CodeSystem-service-product.json");
		 expect(codesystemValidateFunction(codesystemExample63)).toBe(true);
	 });

	 test("validate CodeSystem-smart-capabilities.json", () => {
		 const codesystemExample64 = require("../r4-resources/CodeSystem-smart-capabilities.json");
		 expect(codesystemValidateFunction(codesystemExample64)).toBe(true);
	 });

	 test("validate CodeSystem-standards-status.json", () => {
		 const codesystemExample65 = require("../r4-resources/CodeSystem-standards-status.json");
		 expect(codesystemValidateFunction(codesystemExample65)).toBe(true);
	 });

	 test("validate CodeSystem-subscription-tag.json", () => {
		 const codesystemExample66 = require("../r4-resources/CodeSystem-subscription-tag.json");
		 expect(codesystemValidateFunction(codesystemExample66)).toBe(true);
	 });

	 test("validate CodeSystem-teeth.json", () => {
		 const codesystemExample67 = require("../r4-resources/CodeSystem-teeth.json");
		 expect(codesystemValidateFunction(codesystemExample67)).toBe(true);
	 });

	 test("validate CodeSystem-tldc.json", () => {
		 const codesystemExample68 = require("../r4-resources/CodeSystem-tldc.json");
		 expect(codesystemValidateFunction(codesystemExample68)).toBe(true);
	 });

	 test("validate CodeSystem-transaction-mode.json", () => {
		 const codesystemExample69 = require("../r4-resources/CodeSystem-transaction-mode.json");
		 expect(codesystemValidateFunction(codesystemExample69)).toBe(true);
	 });

	 test("validate CodeSystem-udi.json", () => {
		 const codesystemExample70 = require("../r4-resources/CodeSystem-udi.json");
		 expect(codesystemValidateFunction(codesystemExample70)).toBe(true);
	 });

	 test("validate CodeSystem-unknown-content-code.json", () => {
		 const codesystemExample71 = require("../r4-resources/CodeSystem-unknown-content-code.json");
		 expect(codesystemValidateFunction(codesystemExample71)).toBe(true);
	 });

	 test("validate CodeSystem-variant-state.json", () => {
		 const codesystemExample72 = require("../r4-resources/CodeSystem-variant-state.json");
		 expect(codesystemValidateFunction(codesystemExample72)).toBe(true);
	 });

	 test("validate CodeSystem-w3c-provenance-activity-type.json", () => {
		 const codesystemExample73 = require("../r4-resources/CodeSystem-w3c-provenance-activity-type.json");
		 expect(codesystemValidateFunction(codesystemExample73)).toBe(true);
	 });

});