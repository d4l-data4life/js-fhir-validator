const dataelementValidateFunction = require("../../stu3/js/DataElement");

describe("DataElement", () => {
	 test("validate DataElement-Account.active.json", () => {
		 const dataelementExample1 = require("../stu3-resources/DataElement-Account.active.json");
		 expect(dataelementValidateFunction(dataelementExample1)).toBe(true);
	 });

	 test("validate DataElement-Account.balance.json", () => {
		 const dataelementExample2 = require("../stu3-resources/DataElement-Account.balance.json");
		 expect(dataelementValidateFunction(dataelementExample2)).toBe(true);
	 });

	 test("validate DataElement-Account.coverage.coverage.json", () => {
		 const dataelementExample3 = require("../stu3-resources/DataElement-Account.coverage.coverage.json");
		 expect(dataelementValidateFunction(dataelementExample3)).toBe(true);
	 });

	 test("validate DataElement-Account.coverage.json", () => {
		 const dataelementExample4 = require("../stu3-resources/DataElement-Account.coverage.json");
		 expect(dataelementValidateFunction(dataelementExample4)).toBe(true);
	 });

	 test("validate DataElement-Account.coverage.priority.json", () => {
		 const dataelementExample5 = require("../stu3-resources/DataElement-Account.coverage.priority.json");
		 expect(dataelementValidateFunction(dataelementExample5)).toBe(true);
	 });

	 test("validate DataElement-Account.description.json", () => {
		 const dataelementExample6 = require("../stu3-resources/DataElement-Account.description.json");
		 expect(dataelementValidateFunction(dataelementExample6)).toBe(true);
	 });

	 test("validate DataElement-Account.guarantor.json", () => {
		 const dataelementExample7 = require("../stu3-resources/DataElement-Account.guarantor.json");
		 expect(dataelementValidateFunction(dataelementExample7)).toBe(true);
	 });

	 test("validate DataElement-Account.guarantor.onHold.json", () => {
		 const dataelementExample8 = require("../stu3-resources/DataElement-Account.guarantor.onHold.json");
		 expect(dataelementValidateFunction(dataelementExample8)).toBe(true);
	 });

	 test("validate DataElement-Account.guarantor.party.json", () => {
		 const dataelementExample9 = require("../stu3-resources/DataElement-Account.guarantor.party.json");
		 expect(dataelementValidateFunction(dataelementExample9)).toBe(true);
	 });

	 test("validate DataElement-Account.guarantor.period.json", () => {
		 const dataelementExample10 = require("../stu3-resources/DataElement-Account.guarantor.period.json");
		 expect(dataelementValidateFunction(dataelementExample10)).toBe(true);
	 });

	 test("validate DataElement-Account.identifier.json", () => {
		 const dataelementExample11 = require("../stu3-resources/DataElement-Account.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample11)).toBe(true);
	 });

	 test("validate DataElement-Account.json", () => {
		 const dataelementExample12 = require("../stu3-resources/DataElement-Account.json");
		 expect(dataelementValidateFunction(dataelementExample12)).toBe(true);
	 });

	 test("validate DataElement-Account.name.json", () => {
		 const dataelementExample13 = require("../stu3-resources/DataElement-Account.name.json");
		 expect(dataelementValidateFunction(dataelementExample13)).toBe(true);
	 });

	 test("validate DataElement-Account.owner.json", () => {
		 const dataelementExample14 = require("../stu3-resources/DataElement-Account.owner.json");
		 expect(dataelementValidateFunction(dataelementExample14)).toBe(true);
	 });

	 test("validate DataElement-Account.period.json", () => {
		 const dataelementExample15 = require("../stu3-resources/DataElement-Account.period.json");
		 expect(dataelementValidateFunction(dataelementExample15)).toBe(true);
	 });

	 test("validate DataElement-Account.status.json", () => {
		 const dataelementExample16 = require("../stu3-resources/DataElement-Account.status.json");
		 expect(dataelementValidateFunction(dataelementExample16)).toBe(true);
	 });

	 test("validate DataElement-Account.subject.json", () => {
		 const dataelementExample17 = require("../stu3-resources/DataElement-Account.subject.json");
		 expect(dataelementValidateFunction(dataelementExample17)).toBe(true);
	 });

	 test("validate DataElement-Account.type.json", () => {
		 const dataelementExample18 = require("../stu3-resources/DataElement-Account.type.json");
		 expect(dataelementValidateFunction(dataelementExample18)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.approvalDate.json", () => {
		 const dataelementExample19 = require("../stu3-resources/DataElement-ActivityDefinition.approvalDate.json");
		 expect(dataelementValidateFunction(dataelementExample19)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.bodySite.json", () => {
		 const dataelementExample20 = require("../stu3-resources/DataElement-ActivityDefinition.bodySite.json");
		 expect(dataelementValidateFunction(dataelementExample20)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.code.json", () => {
		 const dataelementExample21 = require("../stu3-resources/DataElement-ActivityDefinition.code.json");
		 expect(dataelementValidateFunction(dataelementExample21)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.contact.json", () => {
		 const dataelementExample22 = require("../stu3-resources/DataElement-ActivityDefinition.contact.json");
		 expect(dataelementValidateFunction(dataelementExample22)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.contributor.json", () => {
		 const dataelementExample23 = require("../stu3-resources/DataElement-ActivityDefinition.contributor.json");
		 expect(dataelementValidateFunction(dataelementExample23)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.copyright.json", () => {
		 const dataelementExample24 = require("../stu3-resources/DataElement-ActivityDefinition.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample24)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.date.json", () => {
		 const dataelementExample25 = require("../stu3-resources/DataElement-ActivityDefinition.date.json");
		 expect(dataelementValidateFunction(dataelementExample25)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.description.json", () => {
		 const dataelementExample26 = require("../stu3-resources/DataElement-ActivityDefinition.description.json");
		 expect(dataelementValidateFunction(dataelementExample26)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.dosage.json", () => {
		 const dataelementExample27 = require("../stu3-resources/DataElement-ActivityDefinition.dosage.json");
		 expect(dataelementValidateFunction(dataelementExample27)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.dynamicValue.description.json", () => {
		 const dataelementExample28 = require("../stu3-resources/DataElement-ActivityDefinition.dynamicValue.description.json");
		 expect(dataelementValidateFunction(dataelementExample28)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.dynamicValue.expression.json", () => {
		 const dataelementExample29 = require("../stu3-resources/DataElement-ActivityDefinition.dynamicValue.expression.json");
		 expect(dataelementValidateFunction(dataelementExample29)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.dynamicValue.json", () => {
		 const dataelementExample30 = require("../stu3-resources/DataElement-ActivityDefinition.dynamicValue.json");
		 expect(dataelementValidateFunction(dataelementExample30)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.dynamicValue.language.json", () => {
		 const dataelementExample31 = require("../stu3-resources/DataElement-ActivityDefinition.dynamicValue.language.json");
		 expect(dataelementValidateFunction(dataelementExample31)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.dynamicValue.path.json", () => {
		 const dataelementExample32 = require("../stu3-resources/DataElement-ActivityDefinition.dynamicValue.path.json");
		 expect(dataelementValidateFunction(dataelementExample32)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.effectivePeriod.json", () => {
		 const dataelementExample33 = require("../stu3-resources/DataElement-ActivityDefinition.effectivePeriod.json");
		 expect(dataelementValidateFunction(dataelementExample33)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.experimental.json", () => {
		 const dataelementExample34 = require("../stu3-resources/DataElement-ActivityDefinition.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample34)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.identifier.json", () => {
		 const dataelementExample35 = require("../stu3-resources/DataElement-ActivityDefinition.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample35)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.json", () => {
		 const dataelementExample36 = require("../stu3-resources/DataElement-ActivityDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample36)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.jurisdiction.json", () => {
		 const dataelementExample37 = require("../stu3-resources/DataElement-ActivityDefinition.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample37)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.kind.json", () => {
		 const dataelementExample38 = require("../stu3-resources/DataElement-ActivityDefinition.kind.json");
		 expect(dataelementValidateFunction(dataelementExample38)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.lastReviewDate.json", () => {
		 const dataelementExample39 = require("../stu3-resources/DataElement-ActivityDefinition.lastReviewDate.json");
		 expect(dataelementValidateFunction(dataelementExample39)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.library.json", () => {
		 const dataelementExample40 = require("../stu3-resources/DataElement-ActivityDefinition.library.json");
		 expect(dataelementValidateFunction(dataelementExample40)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.location.json", () => {
		 const dataelementExample41 = require("../stu3-resources/DataElement-ActivityDefinition.location.json");
		 expect(dataelementValidateFunction(dataelementExample41)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.name.json", () => {
		 const dataelementExample42 = require("../stu3-resources/DataElement-ActivityDefinition.name.json");
		 expect(dataelementValidateFunction(dataelementExample42)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.participant.json", () => {
		 const dataelementExample43 = require("../stu3-resources/DataElement-ActivityDefinition.participant.json");
		 expect(dataelementValidateFunction(dataelementExample43)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.participant.role.json", () => {
		 const dataelementExample44 = require("../stu3-resources/DataElement-ActivityDefinition.participant.role.json");
		 expect(dataelementValidateFunction(dataelementExample44)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.participant.type.json", () => {
		 const dataelementExample45 = require("../stu3-resources/DataElement-ActivityDefinition.participant.type.json");
		 expect(dataelementValidateFunction(dataelementExample45)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.productX.json", () => {
		 const dataelementExample46 = require("../stu3-resources/DataElement-ActivityDefinition.productX.json");
		 expect(dataelementValidateFunction(dataelementExample46)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.publisher.json", () => {
		 const dataelementExample47 = require("../stu3-resources/DataElement-ActivityDefinition.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample47)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.purpose.json", () => {
		 const dataelementExample48 = require("../stu3-resources/DataElement-ActivityDefinition.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample48)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.quantity.json", () => {
		 const dataelementExample49 = require("../stu3-resources/DataElement-ActivityDefinition.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample49)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.relatedArtifact.json", () => {
		 const dataelementExample50 = require("../stu3-resources/DataElement-ActivityDefinition.relatedArtifact.json");
		 expect(dataelementValidateFunction(dataelementExample50)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.status.json", () => {
		 const dataelementExample51 = require("../stu3-resources/DataElement-ActivityDefinition.status.json");
		 expect(dataelementValidateFunction(dataelementExample51)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.timingX.json", () => {
		 const dataelementExample52 = require("../stu3-resources/DataElement-ActivityDefinition.timingX.json");
		 expect(dataelementValidateFunction(dataelementExample52)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.title.json", () => {
		 const dataelementExample53 = require("../stu3-resources/DataElement-ActivityDefinition.title.json");
		 expect(dataelementValidateFunction(dataelementExample53)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.topic.json", () => {
		 const dataelementExample54 = require("../stu3-resources/DataElement-ActivityDefinition.topic.json");
		 expect(dataelementValidateFunction(dataelementExample54)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.transform.json", () => {
		 const dataelementExample55 = require("../stu3-resources/DataElement-ActivityDefinition.transform.json");
		 expect(dataelementValidateFunction(dataelementExample55)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.url.json", () => {
		 const dataelementExample56 = require("../stu3-resources/DataElement-ActivityDefinition.url.json");
		 expect(dataelementValidateFunction(dataelementExample56)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.usage.json", () => {
		 const dataelementExample57 = require("../stu3-resources/DataElement-ActivityDefinition.usage.json");
		 expect(dataelementValidateFunction(dataelementExample57)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.useContext.json", () => {
		 const dataelementExample58 = require("../stu3-resources/DataElement-ActivityDefinition.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample58)).toBe(true);
	 });

	 test("validate DataElement-ActivityDefinition.version.json", () => {
		 const dataelementExample59 = require("../stu3-resources/DataElement-ActivityDefinition.version.json");
		 expect(dataelementValidateFunction(dataelementExample59)).toBe(true);
	 });

	 test("validate DataElement-Address.city.json", () => {
		 const dataelementExample60 = require("../stu3-resources/DataElement-Address.city.json");
		 expect(dataelementValidateFunction(dataelementExample60)).toBe(true);
	 });

	 test("validate DataElement-Address.country.json", () => {
		 const dataelementExample61 = require("../stu3-resources/DataElement-Address.country.json");
		 expect(dataelementValidateFunction(dataelementExample61)).toBe(true);
	 });

	 test("validate DataElement-Address.district.json", () => {
		 const dataelementExample62 = require("../stu3-resources/DataElement-Address.district.json");
		 expect(dataelementValidateFunction(dataelementExample62)).toBe(true);
	 });

	 test("validate DataElement-Address.json", () => {
		 const dataelementExample63 = require("../stu3-resources/DataElement-Address.json");
		 expect(dataelementValidateFunction(dataelementExample63)).toBe(true);
	 });

	 test("validate DataElement-Address.line.json", () => {
		 const dataelementExample64 = require("../stu3-resources/DataElement-Address.line.json");
		 expect(dataelementValidateFunction(dataelementExample64)).toBe(true);
	 });

	 test("validate DataElement-Address.period.json", () => {
		 const dataelementExample65 = require("../stu3-resources/DataElement-Address.period.json");
		 expect(dataelementValidateFunction(dataelementExample65)).toBe(true);
	 });

	 test("validate DataElement-Address.postalCode.json", () => {
		 const dataelementExample66 = require("../stu3-resources/DataElement-Address.postalCode.json");
		 expect(dataelementValidateFunction(dataelementExample66)).toBe(true);
	 });

	 test("validate DataElement-Address.state.json", () => {
		 const dataelementExample67 = require("../stu3-resources/DataElement-Address.state.json");
		 expect(dataelementValidateFunction(dataelementExample67)).toBe(true);
	 });

	 test("validate DataElement-Address.text.json", () => {
		 const dataelementExample68 = require("../stu3-resources/DataElement-Address.text.json");
		 expect(dataelementValidateFunction(dataelementExample68)).toBe(true);
	 });

	 test("validate DataElement-Address.type.json", () => {
		 const dataelementExample69 = require("../stu3-resources/DataElement-Address.type.json");
		 expect(dataelementValidateFunction(dataelementExample69)).toBe(true);
	 });

	 test("validate DataElement-Address.use.json", () => {
		 const dataelementExample70 = require("../stu3-resources/DataElement-Address.use.json");
		 expect(dataelementValidateFunction(dataelementExample70)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.category.json", () => {
		 const dataelementExample71 = require("../stu3-resources/DataElement-AdverseEvent.category.json");
		 expect(dataelementValidateFunction(dataelementExample71)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.date.json", () => {
		 const dataelementExample72 = require("../stu3-resources/DataElement-AdverseEvent.date.json");
		 expect(dataelementValidateFunction(dataelementExample72)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.description.json", () => {
		 const dataelementExample73 = require("../stu3-resources/DataElement-AdverseEvent.description.json");
		 expect(dataelementValidateFunction(dataelementExample73)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.eventParticipant.json", () => {
		 const dataelementExample74 = require("../stu3-resources/DataElement-AdverseEvent.eventParticipant.json");
		 expect(dataelementValidateFunction(dataelementExample74)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.identifier.json", () => {
		 const dataelementExample75 = require("../stu3-resources/DataElement-AdverseEvent.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample75)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.json", () => {
		 const dataelementExample76 = require("../stu3-resources/DataElement-AdverseEvent.json");
		 expect(dataelementValidateFunction(dataelementExample76)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.location.json", () => {
		 const dataelementExample77 = require("../stu3-resources/DataElement-AdverseEvent.location.json");
		 expect(dataelementValidateFunction(dataelementExample77)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.outcome.json", () => {
		 const dataelementExample78 = require("../stu3-resources/DataElement-AdverseEvent.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample78)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.reaction.json", () => {
		 const dataelementExample79 = require("../stu3-resources/DataElement-AdverseEvent.reaction.json");
		 expect(dataelementValidateFunction(dataelementExample79)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.recorder.json", () => {
		 const dataelementExample80 = require("../stu3-resources/DataElement-AdverseEvent.recorder.json");
		 expect(dataelementValidateFunction(dataelementExample80)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.referenceDocument.json", () => {
		 const dataelementExample81 = require("../stu3-resources/DataElement-AdverseEvent.referenceDocument.json");
		 expect(dataelementValidateFunction(dataelementExample81)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.seriousness.json", () => {
		 const dataelementExample82 = require("../stu3-resources/DataElement-AdverseEvent.seriousness.json");
		 expect(dataelementValidateFunction(dataelementExample82)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.study.json", () => {
		 const dataelementExample83 = require("../stu3-resources/DataElement-AdverseEvent.study.json");
		 expect(dataelementValidateFunction(dataelementExample83)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.subject.json", () => {
		 const dataelementExample84 = require("../stu3-resources/DataElement-AdverseEvent.subject.json");
		 expect(dataelementValidateFunction(dataelementExample84)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.subjectMedicalHistory.json", () => {
		 const dataelementExample85 = require("../stu3-resources/DataElement-AdverseEvent.subjectMedicalHistory.json");
		 expect(dataelementValidateFunction(dataelementExample85)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.suspectEntity.causality.json", () => {
		 const dataelementExample86 = require("../stu3-resources/DataElement-AdverseEvent.suspectEntity.causality.json");
		 expect(dataelementValidateFunction(dataelementExample86)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.suspectEntity.causalityAssessment.json", () => {
		 const dataelementExample87 = require("../stu3-resources/DataElement-AdverseEvent.suspectEntity.causalityAssessment.json");
		 expect(dataelementValidateFunction(dataelementExample87)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.suspectEntity.causalityAuthor.json", () => {
		 const dataelementExample88 = require("../stu3-resources/DataElement-AdverseEvent.suspectEntity.causalityAuthor.json");
		 expect(dataelementValidateFunction(dataelementExample88)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.suspectEntity.causalityMethod.json", () => {
		 const dataelementExample89 = require("../stu3-resources/DataElement-AdverseEvent.suspectEntity.causalityMethod.json");
		 expect(dataelementValidateFunction(dataelementExample89)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.suspectEntity.causalityProductRelatedness.json", () => {
		 const dataelementExample90 = require("../stu3-resources/DataElement-AdverseEvent.suspectEntity.causalityProductRelatedness.json");
		 expect(dataelementValidateFunction(dataelementExample90)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.suspectEntity.causalityResult.json", () => {
		 const dataelementExample91 = require("../stu3-resources/DataElement-AdverseEvent.suspectEntity.causalityResult.json");
		 expect(dataelementValidateFunction(dataelementExample91)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.suspectEntity.instance.json", () => {
		 const dataelementExample92 = require("../stu3-resources/DataElement-AdverseEvent.suspectEntity.instance.json");
		 expect(dataelementValidateFunction(dataelementExample92)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.suspectEntity.json", () => {
		 const dataelementExample93 = require("../stu3-resources/DataElement-AdverseEvent.suspectEntity.json");
		 expect(dataelementValidateFunction(dataelementExample93)).toBe(true);
	 });

	 test("validate DataElement-AdverseEvent.type.json", () => {
		 const dataelementExample94 = require("../stu3-resources/DataElement-AdverseEvent.type.json");
		 expect(dataelementValidateFunction(dataelementExample94)).toBe(true);
	 });

	 test("validate DataElement-Age.json", () => {
		 const dataelementExample95 = require("../stu3-resources/DataElement-Age.json");
		 expect(dataelementValidateFunction(dataelementExample95)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.assertedDate.json", () => {
		 const dataelementExample96 = require("../stu3-resources/DataElement-AllergyIntolerance.assertedDate.json");
		 expect(dataelementValidateFunction(dataelementExample96)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.asserter.json", () => {
		 const dataelementExample97 = require("../stu3-resources/DataElement-AllergyIntolerance.asserter.json");
		 expect(dataelementValidateFunction(dataelementExample97)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.category.json", () => {
		 const dataelementExample98 = require("../stu3-resources/DataElement-AllergyIntolerance.category.json");
		 expect(dataelementValidateFunction(dataelementExample98)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.clinicalStatus.json", () => {
		 const dataelementExample99 = require("../stu3-resources/DataElement-AllergyIntolerance.clinicalStatus.json");
		 expect(dataelementValidateFunction(dataelementExample99)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.code.json", () => {
		 const dataelementExample100 = require("../stu3-resources/DataElement-AllergyIntolerance.code.json");
		 expect(dataelementValidateFunction(dataelementExample100)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.criticality.json", () => {
		 const dataelementExample101 = require("../stu3-resources/DataElement-AllergyIntolerance.criticality.json");
		 expect(dataelementValidateFunction(dataelementExample101)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.identifier.json", () => {
		 const dataelementExample102 = require("../stu3-resources/DataElement-AllergyIntolerance.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample102)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.json", () => {
		 const dataelementExample103 = require("../stu3-resources/DataElement-AllergyIntolerance.json");
		 expect(dataelementValidateFunction(dataelementExample103)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.lastOccurrence.json", () => {
		 const dataelementExample104 = require("../stu3-resources/DataElement-AllergyIntolerance.lastOccurrence.json");
		 expect(dataelementValidateFunction(dataelementExample104)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.note.json", () => {
		 const dataelementExample105 = require("../stu3-resources/DataElement-AllergyIntolerance.note.json");
		 expect(dataelementValidateFunction(dataelementExample105)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.onsetX.json", () => {
		 const dataelementExample106 = require("../stu3-resources/DataElement-AllergyIntolerance.onsetX.json");
		 expect(dataelementValidateFunction(dataelementExample106)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.patient.json", () => {
		 const dataelementExample107 = require("../stu3-resources/DataElement-AllergyIntolerance.patient.json");
		 expect(dataelementValidateFunction(dataelementExample107)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.reaction.description.json", () => {
		 const dataelementExample108 = require("../stu3-resources/DataElement-AllergyIntolerance.reaction.description.json");
		 expect(dataelementValidateFunction(dataelementExample108)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.reaction.exposureRoute.json", () => {
		 const dataelementExample109 = require("../stu3-resources/DataElement-AllergyIntolerance.reaction.exposureRoute.json");
		 expect(dataelementValidateFunction(dataelementExample109)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.reaction.json", () => {
		 const dataelementExample110 = require("../stu3-resources/DataElement-AllergyIntolerance.reaction.json");
		 expect(dataelementValidateFunction(dataelementExample110)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.reaction.manifestation.json", () => {
		 const dataelementExample111 = require("../stu3-resources/DataElement-AllergyIntolerance.reaction.manifestation.json");
		 expect(dataelementValidateFunction(dataelementExample111)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.reaction.note.json", () => {
		 const dataelementExample112 = require("../stu3-resources/DataElement-AllergyIntolerance.reaction.note.json");
		 expect(dataelementValidateFunction(dataelementExample112)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.reaction.onset.json", () => {
		 const dataelementExample113 = require("../stu3-resources/DataElement-AllergyIntolerance.reaction.onset.json");
		 expect(dataelementValidateFunction(dataelementExample113)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.reaction.severity.json", () => {
		 const dataelementExample114 = require("../stu3-resources/DataElement-AllergyIntolerance.reaction.severity.json");
		 expect(dataelementValidateFunction(dataelementExample114)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.reaction.substance.json", () => {
		 const dataelementExample115 = require("../stu3-resources/DataElement-AllergyIntolerance.reaction.substance.json");
		 expect(dataelementValidateFunction(dataelementExample115)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.recorder.json", () => {
		 const dataelementExample116 = require("../stu3-resources/DataElement-AllergyIntolerance.recorder.json");
		 expect(dataelementValidateFunction(dataelementExample116)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.type.json", () => {
		 const dataelementExample117 = require("../stu3-resources/DataElement-AllergyIntolerance.type.json");
		 expect(dataelementValidateFunction(dataelementExample117)).toBe(true);
	 });

	 test("validate DataElement-AllergyIntolerance.verificationStatus.json", () => {
		 const dataelementExample118 = require("../stu3-resources/DataElement-AllergyIntolerance.verificationStatus.json");
		 expect(dataelementValidateFunction(dataelementExample118)).toBe(true);
	 });

	 test("validate DataElement-Annotation.authorX.json", () => {
		 const dataelementExample119 = require("../stu3-resources/DataElement-Annotation.authorX.json");
		 expect(dataelementValidateFunction(dataelementExample119)).toBe(true);
	 });

	 test("validate DataElement-Annotation.json", () => {
		 const dataelementExample120 = require("../stu3-resources/DataElement-Annotation.json");
		 expect(dataelementValidateFunction(dataelementExample120)).toBe(true);
	 });

	 test("validate DataElement-Annotation.text.json", () => {
		 const dataelementExample121 = require("../stu3-resources/DataElement-Annotation.text.json");
		 expect(dataelementValidateFunction(dataelementExample121)).toBe(true);
	 });

	 test("validate DataElement-Annotation.time.json", () => {
		 const dataelementExample122 = require("../stu3-resources/DataElement-Annotation.time.json");
		 expect(dataelementValidateFunction(dataelementExample122)).toBe(true);
	 });

	 test("validate DataElement-Appointment.appointmentType.json", () => {
		 const dataelementExample123 = require("../stu3-resources/DataElement-Appointment.appointmentType.json");
		 expect(dataelementValidateFunction(dataelementExample123)).toBe(true);
	 });

	 test("validate DataElement-Appointment.comment.json", () => {
		 const dataelementExample124 = require("../stu3-resources/DataElement-Appointment.comment.json");
		 expect(dataelementValidateFunction(dataelementExample124)).toBe(true);
	 });

	 test("validate DataElement-Appointment.created.json", () => {
		 const dataelementExample125 = require("../stu3-resources/DataElement-Appointment.created.json");
		 expect(dataelementValidateFunction(dataelementExample125)).toBe(true);
	 });

	 test("validate DataElement-Appointment.description.json", () => {
		 const dataelementExample126 = require("../stu3-resources/DataElement-Appointment.description.json");
		 expect(dataelementValidateFunction(dataelementExample126)).toBe(true);
	 });

	 test("validate DataElement-Appointment.end.json", () => {
		 const dataelementExample127 = require("../stu3-resources/DataElement-Appointment.end.json");
		 expect(dataelementValidateFunction(dataelementExample127)).toBe(true);
	 });

	 test("validate DataElement-Appointment.identifier.json", () => {
		 const dataelementExample128 = require("../stu3-resources/DataElement-Appointment.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample128)).toBe(true);
	 });

	 test("validate DataElement-Appointment.incomingReferral.json", () => {
		 const dataelementExample129 = require("../stu3-resources/DataElement-Appointment.incomingReferral.json");
		 expect(dataelementValidateFunction(dataelementExample129)).toBe(true);
	 });

	 test("validate DataElement-Appointment.indication.json", () => {
		 const dataelementExample130 = require("../stu3-resources/DataElement-Appointment.indication.json");
		 expect(dataelementValidateFunction(dataelementExample130)).toBe(true);
	 });

	 test("validate DataElement-Appointment.json", () => {
		 const dataelementExample131 = require("../stu3-resources/DataElement-Appointment.json");
		 expect(dataelementValidateFunction(dataelementExample131)).toBe(true);
	 });

	 test("validate DataElement-Appointment.minutesDuration.json", () => {
		 const dataelementExample132 = require("../stu3-resources/DataElement-Appointment.minutesDuration.json");
		 expect(dataelementValidateFunction(dataelementExample132)).toBe(true);
	 });

	 test("validate DataElement-Appointment.participant.actor.json", () => {
		 const dataelementExample133 = require("../stu3-resources/DataElement-Appointment.participant.actor.json");
		 expect(dataelementValidateFunction(dataelementExample133)).toBe(true);
	 });

	 test("validate DataElement-Appointment.participant.json", () => {
		 const dataelementExample134 = require("../stu3-resources/DataElement-Appointment.participant.json");
		 expect(dataelementValidateFunction(dataelementExample134)).toBe(true);
	 });

	 test("validate DataElement-Appointment.participant.required.json", () => {
		 const dataelementExample135 = require("../stu3-resources/DataElement-Appointment.participant.required.json");
		 expect(dataelementValidateFunction(dataelementExample135)).toBe(true);
	 });

	 test("validate DataElement-Appointment.participant.status.json", () => {
		 const dataelementExample136 = require("../stu3-resources/DataElement-Appointment.participant.status.json");
		 expect(dataelementValidateFunction(dataelementExample136)).toBe(true);
	 });

	 test("validate DataElement-Appointment.participant.type.json", () => {
		 const dataelementExample137 = require("../stu3-resources/DataElement-Appointment.participant.type.json");
		 expect(dataelementValidateFunction(dataelementExample137)).toBe(true);
	 });

	 test("validate DataElement-Appointment.priority.json", () => {
		 const dataelementExample138 = require("../stu3-resources/DataElement-Appointment.priority.json");
		 expect(dataelementValidateFunction(dataelementExample138)).toBe(true);
	 });

	 test("validate DataElement-Appointment.reason.json", () => {
		 const dataelementExample139 = require("../stu3-resources/DataElement-Appointment.reason.json");
		 expect(dataelementValidateFunction(dataelementExample139)).toBe(true);
	 });

	 test("validate DataElement-Appointment.requestedPeriod.json", () => {
		 const dataelementExample140 = require("../stu3-resources/DataElement-Appointment.requestedPeriod.json");
		 expect(dataelementValidateFunction(dataelementExample140)).toBe(true);
	 });

	 test("validate DataElement-Appointment.serviceCategory.json", () => {
		 const dataelementExample141 = require("../stu3-resources/DataElement-Appointment.serviceCategory.json");
		 expect(dataelementValidateFunction(dataelementExample141)).toBe(true);
	 });

	 test("validate DataElement-Appointment.serviceType.json", () => {
		 const dataelementExample142 = require("../stu3-resources/DataElement-Appointment.serviceType.json");
		 expect(dataelementValidateFunction(dataelementExample142)).toBe(true);
	 });

	 test("validate DataElement-Appointment.slot.json", () => {
		 const dataelementExample143 = require("../stu3-resources/DataElement-Appointment.slot.json");
		 expect(dataelementValidateFunction(dataelementExample143)).toBe(true);
	 });

	 test("validate DataElement-Appointment.specialty.json", () => {
		 const dataelementExample144 = require("../stu3-resources/DataElement-Appointment.specialty.json");
		 expect(dataelementValidateFunction(dataelementExample144)).toBe(true);
	 });

	 test("validate DataElement-Appointment.start.json", () => {
		 const dataelementExample145 = require("../stu3-resources/DataElement-Appointment.start.json");
		 expect(dataelementValidateFunction(dataelementExample145)).toBe(true);
	 });

	 test("validate DataElement-Appointment.status.json", () => {
		 const dataelementExample146 = require("../stu3-resources/DataElement-Appointment.status.json");
		 expect(dataelementValidateFunction(dataelementExample146)).toBe(true);
	 });

	 test("validate DataElement-Appointment.supportingInformation.json", () => {
		 const dataelementExample147 = require("../stu3-resources/DataElement-Appointment.supportingInformation.json");
		 expect(dataelementValidateFunction(dataelementExample147)).toBe(true);
	 });

	 test("validate DataElement-AppointmentResponse.actor.json", () => {
		 const dataelementExample148 = require("../stu3-resources/DataElement-AppointmentResponse.actor.json");
		 expect(dataelementValidateFunction(dataelementExample148)).toBe(true);
	 });

	 test("validate DataElement-AppointmentResponse.appointment.json", () => {
		 const dataelementExample149 = require("../stu3-resources/DataElement-AppointmentResponse.appointment.json");
		 expect(dataelementValidateFunction(dataelementExample149)).toBe(true);
	 });

	 test("validate DataElement-AppointmentResponse.comment.json", () => {
		 const dataelementExample150 = require("../stu3-resources/DataElement-AppointmentResponse.comment.json");
		 expect(dataelementValidateFunction(dataelementExample150)).toBe(true);
	 });

	 test("validate DataElement-AppointmentResponse.end.json", () => {
		 const dataelementExample151 = require("../stu3-resources/DataElement-AppointmentResponse.end.json");
		 expect(dataelementValidateFunction(dataelementExample151)).toBe(true);
	 });

	 test("validate DataElement-AppointmentResponse.identifier.json", () => {
		 const dataelementExample152 = require("../stu3-resources/DataElement-AppointmentResponse.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample152)).toBe(true);
	 });

	 test("validate DataElement-AppointmentResponse.json", () => {
		 const dataelementExample153 = require("../stu3-resources/DataElement-AppointmentResponse.json");
		 expect(dataelementValidateFunction(dataelementExample153)).toBe(true);
	 });

	 test("validate DataElement-AppointmentResponse.participantStatus.json", () => {
		 const dataelementExample154 = require("../stu3-resources/DataElement-AppointmentResponse.participantStatus.json");
		 expect(dataelementValidateFunction(dataelementExample154)).toBe(true);
	 });

	 test("validate DataElement-AppointmentResponse.participantType.json", () => {
		 const dataelementExample155 = require("../stu3-resources/DataElement-AppointmentResponse.participantType.json");
		 expect(dataelementValidateFunction(dataelementExample155)).toBe(true);
	 });

	 test("validate DataElement-AppointmentResponse.start.json", () => {
		 const dataelementExample156 = require("../stu3-resources/DataElement-AppointmentResponse.start.json");
		 expect(dataelementValidateFunction(dataelementExample156)).toBe(true);
	 });

	 test("validate DataElement-Attachment.contentType.json", () => {
		 const dataelementExample157 = require("../stu3-resources/DataElement-Attachment.contentType.json");
		 expect(dataelementValidateFunction(dataelementExample157)).toBe(true);
	 });

	 test("validate DataElement-Attachment.creation.json", () => {
		 const dataelementExample158 = require("../stu3-resources/DataElement-Attachment.creation.json");
		 expect(dataelementValidateFunction(dataelementExample158)).toBe(true);
	 });

	 test("validate DataElement-Attachment.data.json", () => {
		 const dataelementExample159 = require("../stu3-resources/DataElement-Attachment.data.json");
		 expect(dataelementValidateFunction(dataelementExample159)).toBe(true);
	 });

	 test("validate DataElement-Attachment.hash.json", () => {
		 const dataelementExample160 = require("../stu3-resources/DataElement-Attachment.hash.json");
		 expect(dataelementValidateFunction(dataelementExample160)).toBe(true);
	 });

	 test("validate DataElement-Attachment.json", () => {
		 const dataelementExample161 = require("../stu3-resources/DataElement-Attachment.json");
		 expect(dataelementValidateFunction(dataelementExample161)).toBe(true);
	 });

	 test("validate DataElement-Attachment.language.json", () => {
		 const dataelementExample162 = require("../stu3-resources/DataElement-Attachment.language.json");
		 expect(dataelementValidateFunction(dataelementExample162)).toBe(true);
	 });

	 test("validate DataElement-Attachment.size.json", () => {
		 const dataelementExample163 = require("../stu3-resources/DataElement-Attachment.size.json");
		 expect(dataelementValidateFunction(dataelementExample163)).toBe(true);
	 });

	 test("validate DataElement-Attachment.title.json", () => {
		 const dataelementExample164 = require("../stu3-resources/DataElement-Attachment.title.json");
		 expect(dataelementValidateFunction(dataelementExample164)).toBe(true);
	 });

	 test("validate DataElement-Attachment.url.json", () => {
		 const dataelementExample165 = require("../stu3-resources/DataElement-Attachment.url.json");
		 expect(dataelementValidateFunction(dataelementExample165)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.action.json", () => {
		 const dataelementExample166 = require("../stu3-resources/DataElement-AuditEvent.action.json");
		 expect(dataelementValidateFunction(dataelementExample166)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.altId.json", () => {
		 const dataelementExample167 = require("../stu3-resources/DataElement-AuditEvent.agent.altId.json");
		 expect(dataelementValidateFunction(dataelementExample167)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.json", () => {
		 const dataelementExample168 = require("../stu3-resources/DataElement-AuditEvent.agent.json");
		 expect(dataelementValidateFunction(dataelementExample168)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.location.json", () => {
		 const dataelementExample169 = require("../stu3-resources/DataElement-AuditEvent.agent.location.json");
		 expect(dataelementValidateFunction(dataelementExample169)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.media.json", () => {
		 const dataelementExample170 = require("../stu3-resources/DataElement-AuditEvent.agent.media.json");
		 expect(dataelementValidateFunction(dataelementExample170)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.name.json", () => {
		 const dataelementExample171 = require("../stu3-resources/DataElement-AuditEvent.agent.name.json");
		 expect(dataelementValidateFunction(dataelementExample171)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.network.address.json", () => {
		 const dataelementExample172 = require("../stu3-resources/DataElement-AuditEvent.agent.network.address.json");
		 expect(dataelementValidateFunction(dataelementExample172)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.network.json", () => {
		 const dataelementExample173 = require("../stu3-resources/DataElement-AuditEvent.agent.network.json");
		 expect(dataelementValidateFunction(dataelementExample173)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.network.type.json", () => {
		 const dataelementExample174 = require("../stu3-resources/DataElement-AuditEvent.agent.network.type.json");
		 expect(dataelementValidateFunction(dataelementExample174)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.policy.json", () => {
		 const dataelementExample175 = require("../stu3-resources/DataElement-AuditEvent.agent.policy.json");
		 expect(dataelementValidateFunction(dataelementExample175)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.purposeOfUse.json", () => {
		 const dataelementExample176 = require("../stu3-resources/DataElement-AuditEvent.agent.purposeOfUse.json");
		 expect(dataelementValidateFunction(dataelementExample176)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.reference.json", () => {
		 const dataelementExample177 = require("../stu3-resources/DataElement-AuditEvent.agent.reference.json");
		 expect(dataelementValidateFunction(dataelementExample177)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.requestor.json", () => {
		 const dataelementExample178 = require("../stu3-resources/DataElement-AuditEvent.agent.requestor.json");
		 expect(dataelementValidateFunction(dataelementExample178)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.role.json", () => {
		 const dataelementExample179 = require("../stu3-resources/DataElement-AuditEvent.agent.role.json");
		 expect(dataelementValidateFunction(dataelementExample179)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.agent.userId.json", () => {
		 const dataelementExample180 = require("../stu3-resources/DataElement-AuditEvent.agent.userId.json");
		 expect(dataelementValidateFunction(dataelementExample180)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.description.json", () => {
		 const dataelementExample181 = require("../stu3-resources/DataElement-AuditEvent.entity.description.json");
		 expect(dataelementValidateFunction(dataelementExample181)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.detail.json", () => {
		 const dataelementExample182 = require("../stu3-resources/DataElement-AuditEvent.entity.detail.json");
		 expect(dataelementValidateFunction(dataelementExample182)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.detail.type.json", () => {
		 const dataelementExample183 = require("../stu3-resources/DataElement-AuditEvent.entity.detail.type.json");
		 expect(dataelementValidateFunction(dataelementExample183)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.detail.value.json", () => {
		 const dataelementExample184 = require("../stu3-resources/DataElement-AuditEvent.entity.detail.value.json");
		 expect(dataelementValidateFunction(dataelementExample184)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.identifier.json", () => {
		 const dataelementExample185 = require("../stu3-resources/DataElement-AuditEvent.entity.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample185)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.json", () => {
		 const dataelementExample186 = require("../stu3-resources/DataElement-AuditEvent.entity.json");
		 expect(dataelementValidateFunction(dataelementExample186)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.lifecycle.json", () => {
		 const dataelementExample187 = require("../stu3-resources/DataElement-AuditEvent.entity.lifecycle.json");
		 expect(dataelementValidateFunction(dataelementExample187)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.name.json", () => {
		 const dataelementExample188 = require("../stu3-resources/DataElement-AuditEvent.entity.name.json");
		 expect(dataelementValidateFunction(dataelementExample188)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.query.json", () => {
		 const dataelementExample189 = require("../stu3-resources/DataElement-AuditEvent.entity.query.json");
		 expect(dataelementValidateFunction(dataelementExample189)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.reference.json", () => {
		 const dataelementExample190 = require("../stu3-resources/DataElement-AuditEvent.entity.reference.json");
		 expect(dataelementValidateFunction(dataelementExample190)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.role.json", () => {
		 const dataelementExample191 = require("../stu3-resources/DataElement-AuditEvent.entity.role.json");
		 expect(dataelementValidateFunction(dataelementExample191)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.securityLabel.json", () => {
		 const dataelementExample192 = require("../stu3-resources/DataElement-AuditEvent.entity.securityLabel.json");
		 expect(dataelementValidateFunction(dataelementExample192)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.entity.type.json", () => {
		 const dataelementExample193 = require("../stu3-resources/DataElement-AuditEvent.entity.type.json");
		 expect(dataelementValidateFunction(dataelementExample193)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.json", () => {
		 const dataelementExample194 = require("../stu3-resources/DataElement-AuditEvent.json");
		 expect(dataelementValidateFunction(dataelementExample194)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.outcome.json", () => {
		 const dataelementExample195 = require("../stu3-resources/DataElement-AuditEvent.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample195)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.outcomeDesc.json", () => {
		 const dataelementExample196 = require("../stu3-resources/DataElement-AuditEvent.outcomeDesc.json");
		 expect(dataelementValidateFunction(dataelementExample196)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.purposeOfEvent.json", () => {
		 const dataelementExample197 = require("../stu3-resources/DataElement-AuditEvent.purposeOfEvent.json");
		 expect(dataelementValidateFunction(dataelementExample197)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.recorded.json", () => {
		 const dataelementExample198 = require("../stu3-resources/DataElement-AuditEvent.recorded.json");
		 expect(dataelementValidateFunction(dataelementExample198)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.source.identifier.json", () => {
		 const dataelementExample199 = require("../stu3-resources/DataElement-AuditEvent.source.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample199)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.source.json", () => {
		 const dataelementExample200 = require("../stu3-resources/DataElement-AuditEvent.source.json");
		 expect(dataelementValidateFunction(dataelementExample200)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.source.site.json", () => {
		 const dataelementExample201 = require("../stu3-resources/DataElement-AuditEvent.source.site.json");
		 expect(dataelementValidateFunction(dataelementExample201)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.source.type.json", () => {
		 const dataelementExample202 = require("../stu3-resources/DataElement-AuditEvent.source.type.json");
		 expect(dataelementValidateFunction(dataelementExample202)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.subtype.json", () => {
		 const dataelementExample203 = require("../stu3-resources/DataElement-AuditEvent.subtype.json");
		 expect(dataelementValidateFunction(dataelementExample203)).toBe(true);
	 });

	 test("validate DataElement-AuditEvent.type.json", () => {
		 const dataelementExample204 = require("../stu3-resources/DataElement-AuditEvent.type.json");
		 expect(dataelementValidateFunction(dataelementExample204)).toBe(true);
	 });

	 test("validate DataElement-BackboneElement.json", () => {
		 const dataelementExample205 = require("../stu3-resources/DataElement-BackboneElement.json");
		 expect(dataelementValidateFunction(dataelementExample205)).toBe(true);
	 });

	 test("validate DataElement-BackboneElement.modifierExtension.json", () => {
		 const dataelementExample206 = require("../stu3-resources/DataElement-BackboneElement.modifierExtension.json");
		 expect(dataelementValidateFunction(dataelementExample206)).toBe(true);
	 });

	 test("validate DataElement-Basic.author.json", () => {
		 const dataelementExample207 = require("../stu3-resources/DataElement-Basic.author.json");
		 expect(dataelementValidateFunction(dataelementExample207)).toBe(true);
	 });

	 test("validate DataElement-Basic.code.json", () => {
		 const dataelementExample208 = require("../stu3-resources/DataElement-Basic.code.json");
		 expect(dataelementValidateFunction(dataelementExample208)).toBe(true);
	 });

	 test("validate DataElement-Basic.created.json", () => {
		 const dataelementExample209 = require("../stu3-resources/DataElement-Basic.created.json");
		 expect(dataelementValidateFunction(dataelementExample209)).toBe(true);
	 });

	 test("validate DataElement-Basic.identifier.json", () => {
		 const dataelementExample210 = require("../stu3-resources/DataElement-Basic.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample210)).toBe(true);
	 });

	 test("validate DataElement-Basic.json", () => {
		 const dataelementExample211 = require("../stu3-resources/DataElement-Basic.json");
		 expect(dataelementValidateFunction(dataelementExample211)).toBe(true);
	 });

	 test("validate DataElement-Basic.subject.json", () => {
		 const dataelementExample212 = require("../stu3-resources/DataElement-Basic.subject.json");
		 expect(dataelementValidateFunction(dataelementExample212)).toBe(true);
	 });

	 test("validate DataElement-Binary.content.json", () => {
		 const dataelementExample213 = require("../stu3-resources/DataElement-Binary.content.json");
		 expect(dataelementValidateFunction(dataelementExample213)).toBe(true);
	 });

	 test("validate DataElement-Binary.contentType.json", () => {
		 const dataelementExample214 = require("../stu3-resources/DataElement-Binary.contentType.json");
		 expect(dataelementValidateFunction(dataelementExample214)).toBe(true);
	 });

	 test("validate DataElement-Binary.json", () => {
		 const dataelementExample215 = require("../stu3-resources/DataElement-Binary.json");
		 expect(dataelementValidateFunction(dataelementExample215)).toBe(true);
	 });

	 test("validate DataElement-Binary.securityContext.json", () => {
		 const dataelementExample216 = require("../stu3-resources/DataElement-Binary.securityContext.json");
		 expect(dataelementValidateFunction(dataelementExample216)).toBe(true);
	 });

	 test("validate DataElement-BodySite.active.json", () => {
		 const dataelementExample217 = require("../stu3-resources/DataElement-BodySite.active.json");
		 expect(dataelementValidateFunction(dataelementExample217)).toBe(true);
	 });

	 test("validate DataElement-BodySite.code.json", () => {
		 const dataelementExample218 = require("../stu3-resources/DataElement-BodySite.code.json");
		 expect(dataelementValidateFunction(dataelementExample218)).toBe(true);
	 });

	 test("validate DataElement-BodySite.description.json", () => {
		 const dataelementExample219 = require("../stu3-resources/DataElement-BodySite.description.json");
		 expect(dataelementValidateFunction(dataelementExample219)).toBe(true);
	 });

	 test("validate DataElement-BodySite.identifier.json", () => {
		 const dataelementExample220 = require("../stu3-resources/DataElement-BodySite.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample220)).toBe(true);
	 });

	 test("validate DataElement-BodySite.image.json", () => {
		 const dataelementExample221 = require("../stu3-resources/DataElement-BodySite.image.json");
		 expect(dataelementValidateFunction(dataelementExample221)).toBe(true);
	 });

	 test("validate DataElement-BodySite.json", () => {
		 const dataelementExample222 = require("../stu3-resources/DataElement-BodySite.json");
		 expect(dataelementValidateFunction(dataelementExample222)).toBe(true);
	 });

	 test("validate DataElement-BodySite.patient.json", () => {
		 const dataelementExample223 = require("../stu3-resources/DataElement-BodySite.patient.json");
		 expect(dataelementValidateFunction(dataelementExample223)).toBe(true);
	 });

	 test("validate DataElement-BodySite.qualifier.json", () => {
		 const dataelementExample224 = require("../stu3-resources/DataElement-BodySite.qualifier.json");
		 expect(dataelementValidateFunction(dataelementExample224)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.fullUrl.json", () => {
		 const dataelementExample225 = require("../stu3-resources/DataElement-Bundle.entry.fullUrl.json");
		 expect(dataelementValidateFunction(dataelementExample225)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.json", () => {
		 const dataelementExample226 = require("../stu3-resources/DataElement-Bundle.entry.json");
		 expect(dataelementValidateFunction(dataelementExample226)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.link.json", () => {
		 const dataelementExample227 = require("../stu3-resources/DataElement-Bundle.entry.link.json");
		 expect(dataelementValidateFunction(dataelementExample227)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.request.ifMatch.json", () => {
		 const dataelementExample228 = require("../stu3-resources/DataElement-Bundle.entry.request.ifMatch.json");
		 expect(dataelementValidateFunction(dataelementExample228)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.request.ifModifiedSince.json", () => {
		 const dataelementExample229 = require("../stu3-resources/DataElement-Bundle.entry.request.ifModifiedSince.json");
		 expect(dataelementValidateFunction(dataelementExample229)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.request.ifNoneExist.json", () => {
		 const dataelementExample230 = require("../stu3-resources/DataElement-Bundle.entry.request.ifNoneExist.json");
		 expect(dataelementValidateFunction(dataelementExample230)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.request.ifNoneMatch.json", () => {
		 const dataelementExample231 = require("../stu3-resources/DataElement-Bundle.entry.request.ifNoneMatch.json");
		 expect(dataelementValidateFunction(dataelementExample231)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.request.json", () => {
		 const dataelementExample232 = require("../stu3-resources/DataElement-Bundle.entry.request.json");
		 expect(dataelementValidateFunction(dataelementExample232)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.request.method.json", () => {
		 const dataelementExample233 = require("../stu3-resources/DataElement-Bundle.entry.request.method.json");
		 expect(dataelementValidateFunction(dataelementExample233)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.request.url.json", () => {
		 const dataelementExample234 = require("../stu3-resources/DataElement-Bundle.entry.request.url.json");
		 expect(dataelementValidateFunction(dataelementExample234)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.resource.json", () => {
		 const dataelementExample235 = require("../stu3-resources/DataElement-Bundle.entry.resource.json");
		 expect(dataelementValidateFunction(dataelementExample235)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.response.etag.json", () => {
		 const dataelementExample236 = require("../stu3-resources/DataElement-Bundle.entry.response.etag.json");
		 expect(dataelementValidateFunction(dataelementExample236)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.response.json", () => {
		 const dataelementExample237 = require("../stu3-resources/DataElement-Bundle.entry.response.json");
		 expect(dataelementValidateFunction(dataelementExample237)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.response.lastModified.json", () => {
		 const dataelementExample238 = require("../stu3-resources/DataElement-Bundle.entry.response.lastModified.json");
		 expect(dataelementValidateFunction(dataelementExample238)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.response.location.json", () => {
		 const dataelementExample239 = require("../stu3-resources/DataElement-Bundle.entry.response.location.json");
		 expect(dataelementValidateFunction(dataelementExample239)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.response.outcome.json", () => {
		 const dataelementExample240 = require("../stu3-resources/DataElement-Bundle.entry.response.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample240)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.response.status.json", () => {
		 const dataelementExample241 = require("../stu3-resources/DataElement-Bundle.entry.response.status.json");
		 expect(dataelementValidateFunction(dataelementExample241)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.search.json", () => {
		 const dataelementExample242 = require("../stu3-resources/DataElement-Bundle.entry.search.json");
		 expect(dataelementValidateFunction(dataelementExample242)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.search.mode.json", () => {
		 const dataelementExample243 = require("../stu3-resources/DataElement-Bundle.entry.search.mode.json");
		 expect(dataelementValidateFunction(dataelementExample243)).toBe(true);
	 });

	 test("validate DataElement-Bundle.entry.search.score.json", () => {
		 const dataelementExample244 = require("../stu3-resources/DataElement-Bundle.entry.search.score.json");
		 expect(dataelementValidateFunction(dataelementExample244)).toBe(true);
	 });

	 test("validate DataElement-Bundle.identifier.json", () => {
		 const dataelementExample245 = require("../stu3-resources/DataElement-Bundle.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample245)).toBe(true);
	 });

	 test("validate DataElement-Bundle.json", () => {
		 const dataelementExample246 = require("../stu3-resources/DataElement-Bundle.json");
		 expect(dataelementValidateFunction(dataelementExample246)).toBe(true);
	 });

	 test("validate DataElement-Bundle.link.json", () => {
		 const dataelementExample247 = require("../stu3-resources/DataElement-Bundle.link.json");
		 expect(dataelementValidateFunction(dataelementExample247)).toBe(true);
	 });

	 test("validate DataElement-Bundle.link.relation.json", () => {
		 const dataelementExample248 = require("../stu3-resources/DataElement-Bundle.link.relation.json");
		 expect(dataelementValidateFunction(dataelementExample248)).toBe(true);
	 });

	 test("validate DataElement-Bundle.link.url.json", () => {
		 const dataelementExample249 = require("../stu3-resources/DataElement-Bundle.link.url.json");
		 expect(dataelementValidateFunction(dataelementExample249)).toBe(true);
	 });

	 test("validate DataElement-Bundle.signature.json", () => {
		 const dataelementExample250 = require("../stu3-resources/DataElement-Bundle.signature.json");
		 expect(dataelementValidateFunction(dataelementExample250)).toBe(true);
	 });

	 test("validate DataElement-Bundle.total.json", () => {
		 const dataelementExample251 = require("../stu3-resources/DataElement-Bundle.total.json");
		 expect(dataelementValidateFunction(dataelementExample251)).toBe(true);
	 });

	 test("validate DataElement-Bundle.type.json", () => {
		 const dataelementExample252 = require("../stu3-resources/DataElement-Bundle.type.json");
		 expect(dataelementValidateFunction(dataelementExample252)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.acceptUnknown.json", () => {
		 const dataelementExample253 = require("../stu3-resources/DataElement-CapabilityStatement.acceptUnknown.json");
		 expect(dataelementValidateFunction(dataelementExample253)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.contact.json", () => {
		 const dataelementExample254 = require("../stu3-resources/DataElement-CapabilityStatement.contact.json");
		 expect(dataelementValidateFunction(dataelementExample254)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.copyright.json", () => {
		 const dataelementExample255 = require("../stu3-resources/DataElement-CapabilityStatement.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample255)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.date.json", () => {
		 const dataelementExample256 = require("../stu3-resources/DataElement-CapabilityStatement.date.json");
		 expect(dataelementValidateFunction(dataelementExample256)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.description.json", () => {
		 const dataelementExample257 = require("../stu3-resources/DataElement-CapabilityStatement.description.json");
		 expect(dataelementValidateFunction(dataelementExample257)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.document.documentation.json", () => {
		 const dataelementExample258 = require("../stu3-resources/DataElement-CapabilityStatement.document.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample258)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.document.json", () => {
		 const dataelementExample259 = require("../stu3-resources/DataElement-CapabilityStatement.document.json");
		 expect(dataelementValidateFunction(dataelementExample259)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.document.mode.json", () => {
		 const dataelementExample260 = require("../stu3-resources/DataElement-CapabilityStatement.document.mode.json");
		 expect(dataelementValidateFunction(dataelementExample260)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.document.profile.json", () => {
		 const dataelementExample261 = require("../stu3-resources/DataElement-CapabilityStatement.document.profile.json");
		 expect(dataelementValidateFunction(dataelementExample261)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.experimental.json", () => {
		 const dataelementExample262 = require("../stu3-resources/DataElement-CapabilityStatement.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample262)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.fhirVersion.json", () => {
		 const dataelementExample263 = require("../stu3-resources/DataElement-CapabilityStatement.fhirVersion.json");
		 expect(dataelementValidateFunction(dataelementExample263)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.format.json", () => {
		 const dataelementExample264 = require("../stu3-resources/DataElement-CapabilityStatement.format.json");
		 expect(dataelementValidateFunction(dataelementExample264)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.implementation.description.json", () => {
		 const dataelementExample265 = require("../stu3-resources/DataElement-CapabilityStatement.implementation.description.json");
		 expect(dataelementValidateFunction(dataelementExample265)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.implementation.json", () => {
		 const dataelementExample266 = require("../stu3-resources/DataElement-CapabilityStatement.implementation.json");
		 expect(dataelementValidateFunction(dataelementExample266)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.implementation.url.json", () => {
		 const dataelementExample267 = require("../stu3-resources/DataElement-CapabilityStatement.implementation.url.json");
		 expect(dataelementValidateFunction(dataelementExample267)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.implementationGuide.json", () => {
		 const dataelementExample268 = require("../stu3-resources/DataElement-CapabilityStatement.implementationGuide.json");
		 expect(dataelementValidateFunction(dataelementExample268)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.instantiates.json", () => {
		 const dataelementExample269 = require("../stu3-resources/DataElement-CapabilityStatement.instantiates.json");
		 expect(dataelementValidateFunction(dataelementExample269)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.json", () => {
		 const dataelementExample270 = require("../stu3-resources/DataElement-CapabilityStatement.json");
		 expect(dataelementValidateFunction(dataelementExample270)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.jurisdiction.json", () => {
		 const dataelementExample271 = require("../stu3-resources/DataElement-CapabilityStatement.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample271)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.kind.json", () => {
		 const dataelementExample272 = require("../stu3-resources/DataElement-CapabilityStatement.kind.json");
		 expect(dataelementValidateFunction(dataelementExample272)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.documentation.json", () => {
		 const dataelementExample273 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample273)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.endpoint.address.json", () => {
		 const dataelementExample274 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.endpoint.address.json");
		 expect(dataelementValidateFunction(dataelementExample274)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.endpoint.json", () => {
		 const dataelementExample275 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample275)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.endpoint.protocol.json", () => {
		 const dataelementExample276 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.endpoint.protocol.json");
		 expect(dataelementValidateFunction(dataelementExample276)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.event.category.json", () => {
		 const dataelementExample277 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.event.category.json");
		 expect(dataelementValidateFunction(dataelementExample277)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.event.code.json", () => {
		 const dataelementExample278 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.event.code.json");
		 expect(dataelementValidateFunction(dataelementExample278)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.event.documentation.json", () => {
		 const dataelementExample279 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.event.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample279)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.event.focus.json", () => {
		 const dataelementExample280 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.event.focus.json");
		 expect(dataelementValidateFunction(dataelementExample280)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.event.json", () => {
		 const dataelementExample281 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.event.json");
		 expect(dataelementValidateFunction(dataelementExample281)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.event.mode.json", () => {
		 const dataelementExample282 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.event.mode.json");
		 expect(dataelementValidateFunction(dataelementExample282)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.event.request.json", () => {
		 const dataelementExample283 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.event.request.json");
		 expect(dataelementValidateFunction(dataelementExample283)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.event.response.json", () => {
		 const dataelementExample284 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.event.response.json");
		 expect(dataelementValidateFunction(dataelementExample284)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.json", () => {
		 const dataelementExample285 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.json");
		 expect(dataelementValidateFunction(dataelementExample285)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.reliableCache.json", () => {
		 const dataelementExample286 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.reliableCache.json");
		 expect(dataelementValidateFunction(dataelementExample286)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.supportedMessage.definition.json", () => {
		 const dataelementExample287 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.supportedMessage.definition.json");
		 expect(dataelementValidateFunction(dataelementExample287)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.supportedMessage.json", () => {
		 const dataelementExample288 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.supportedMessage.json");
		 expect(dataelementValidateFunction(dataelementExample288)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.messaging.supportedMessage.mode.json", () => {
		 const dataelementExample289 = require("../stu3-resources/DataElement-CapabilityStatement.messaging.supportedMessage.mode.json");
		 expect(dataelementValidateFunction(dataelementExample289)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.name.json", () => {
		 const dataelementExample290 = require("../stu3-resources/DataElement-CapabilityStatement.name.json");
		 expect(dataelementValidateFunction(dataelementExample290)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.patchFormat.json", () => {
		 const dataelementExample291 = require("../stu3-resources/DataElement-CapabilityStatement.patchFormat.json");
		 expect(dataelementValidateFunction(dataelementExample291)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.profile.json", () => {
		 const dataelementExample292 = require("../stu3-resources/DataElement-CapabilityStatement.profile.json");
		 expect(dataelementValidateFunction(dataelementExample292)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.publisher.json", () => {
		 const dataelementExample293 = require("../stu3-resources/DataElement-CapabilityStatement.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample293)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.purpose.json", () => {
		 const dataelementExample294 = require("../stu3-resources/DataElement-CapabilityStatement.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample294)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.compartment.json", () => {
		 const dataelementExample295 = require("../stu3-resources/DataElement-CapabilityStatement.rest.compartment.json");
		 expect(dataelementValidateFunction(dataelementExample295)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.documentation.json", () => {
		 const dataelementExample296 = require("../stu3-resources/DataElement-CapabilityStatement.rest.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample296)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.interaction.code.json", () => {
		 const dataelementExample297 = require("../stu3-resources/DataElement-CapabilityStatement.rest.interaction.code.json");
		 expect(dataelementValidateFunction(dataelementExample297)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.interaction.documentation.json", () => {
		 const dataelementExample298 = require("../stu3-resources/DataElement-CapabilityStatement.rest.interaction.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample298)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.interaction.json", () => {
		 const dataelementExample299 = require("../stu3-resources/DataElement-CapabilityStatement.rest.interaction.json");
		 expect(dataelementValidateFunction(dataelementExample299)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.json", () => {
		 const dataelementExample300 = require("../stu3-resources/DataElement-CapabilityStatement.rest.json");
		 expect(dataelementValidateFunction(dataelementExample300)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.mode.json", () => {
		 const dataelementExample301 = require("../stu3-resources/DataElement-CapabilityStatement.rest.mode.json");
		 expect(dataelementValidateFunction(dataelementExample301)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.operation.definition.json", () => {
		 const dataelementExample302 = require("../stu3-resources/DataElement-CapabilityStatement.rest.operation.definition.json");
		 expect(dataelementValidateFunction(dataelementExample302)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.operation.json", () => {
		 const dataelementExample303 = require("../stu3-resources/DataElement-CapabilityStatement.rest.operation.json");
		 expect(dataelementValidateFunction(dataelementExample303)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.operation.name.json", () => {
		 const dataelementExample304 = require("../stu3-resources/DataElement-CapabilityStatement.rest.operation.name.json");
		 expect(dataelementValidateFunction(dataelementExample304)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.conditionalCreate.json", () => {
		 const dataelementExample305 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.conditionalCreate.json");
		 expect(dataelementValidateFunction(dataelementExample305)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.conditionalDelete.json", () => {
		 const dataelementExample306 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.conditionalDelete.json");
		 expect(dataelementValidateFunction(dataelementExample306)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.conditionalRead.json", () => {
		 const dataelementExample307 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.conditionalRead.json");
		 expect(dataelementValidateFunction(dataelementExample307)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.conditionalUpdate.json", () => {
		 const dataelementExample308 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.conditionalUpdate.json");
		 expect(dataelementValidateFunction(dataelementExample308)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.documentation.json", () => {
		 const dataelementExample309 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample309)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.interaction.code.json", () => {
		 const dataelementExample310 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.interaction.code.json");
		 expect(dataelementValidateFunction(dataelementExample310)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.interaction.documentation.json", () => {
		 const dataelementExample311 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.interaction.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample311)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.interaction.json", () => {
		 const dataelementExample312 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.interaction.json");
		 expect(dataelementValidateFunction(dataelementExample312)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.json", () => {
		 const dataelementExample313 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.json");
		 expect(dataelementValidateFunction(dataelementExample313)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.profile.json", () => {
		 const dataelementExample314 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.profile.json");
		 expect(dataelementValidateFunction(dataelementExample314)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.readHistory.json", () => {
		 const dataelementExample315 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.readHistory.json");
		 expect(dataelementValidateFunction(dataelementExample315)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.referencePolicy.json", () => {
		 const dataelementExample316 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.referencePolicy.json");
		 expect(dataelementValidateFunction(dataelementExample316)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.searchInclude.json", () => {
		 const dataelementExample317 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.searchInclude.json");
		 expect(dataelementValidateFunction(dataelementExample317)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.searchParam.definition.json", () => {
		 const dataelementExample318 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.searchParam.definition.json");
		 expect(dataelementValidateFunction(dataelementExample318)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.searchParam.documentation.json", () => {
		 const dataelementExample319 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.searchParam.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample319)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.searchParam.json", () => {
		 const dataelementExample320 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.searchParam.json");
		 expect(dataelementValidateFunction(dataelementExample320)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.searchParam.name.json", () => {
		 const dataelementExample321 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.searchParam.name.json");
		 expect(dataelementValidateFunction(dataelementExample321)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.searchParam.type.json", () => {
		 const dataelementExample322 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.searchParam.type.json");
		 expect(dataelementValidateFunction(dataelementExample322)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.searchRevInclude.json", () => {
		 const dataelementExample323 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.searchRevInclude.json");
		 expect(dataelementValidateFunction(dataelementExample323)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.type.json", () => {
		 const dataelementExample324 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.type.json");
		 expect(dataelementValidateFunction(dataelementExample324)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.updateCreate.json", () => {
		 const dataelementExample325 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.updateCreate.json");
		 expect(dataelementValidateFunction(dataelementExample325)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.resource.versioning.json", () => {
		 const dataelementExample326 = require("../stu3-resources/DataElement-CapabilityStatement.rest.resource.versioning.json");
		 expect(dataelementValidateFunction(dataelementExample326)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.searchParam.json", () => {
		 const dataelementExample327 = require("../stu3-resources/DataElement-CapabilityStatement.rest.searchParam.json");
		 expect(dataelementValidateFunction(dataelementExample327)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.security.certificate.blob.json", () => {
		 const dataelementExample328 = require("../stu3-resources/DataElement-CapabilityStatement.rest.security.certificate.blob.json");
		 expect(dataelementValidateFunction(dataelementExample328)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.security.certificate.json", () => {
		 const dataelementExample329 = require("../stu3-resources/DataElement-CapabilityStatement.rest.security.certificate.json");
		 expect(dataelementValidateFunction(dataelementExample329)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.security.certificate.type.json", () => {
		 const dataelementExample330 = require("../stu3-resources/DataElement-CapabilityStatement.rest.security.certificate.type.json");
		 expect(dataelementValidateFunction(dataelementExample330)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.security.cors.json", () => {
		 const dataelementExample331 = require("../stu3-resources/DataElement-CapabilityStatement.rest.security.cors.json");
		 expect(dataelementValidateFunction(dataelementExample331)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.security.description.json", () => {
		 const dataelementExample332 = require("../stu3-resources/DataElement-CapabilityStatement.rest.security.description.json");
		 expect(dataelementValidateFunction(dataelementExample332)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.security.json", () => {
		 const dataelementExample333 = require("../stu3-resources/DataElement-CapabilityStatement.rest.security.json");
		 expect(dataelementValidateFunction(dataelementExample333)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.rest.security.service.json", () => {
		 const dataelementExample334 = require("../stu3-resources/DataElement-CapabilityStatement.rest.security.service.json");
		 expect(dataelementValidateFunction(dataelementExample334)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.software.json", () => {
		 const dataelementExample335 = require("../stu3-resources/DataElement-CapabilityStatement.software.json");
		 expect(dataelementValidateFunction(dataelementExample335)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.software.name.json", () => {
		 const dataelementExample336 = require("../stu3-resources/DataElement-CapabilityStatement.software.name.json");
		 expect(dataelementValidateFunction(dataelementExample336)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.software.releaseDate.json", () => {
		 const dataelementExample337 = require("../stu3-resources/DataElement-CapabilityStatement.software.releaseDate.json");
		 expect(dataelementValidateFunction(dataelementExample337)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.software.version.json", () => {
		 const dataelementExample338 = require("../stu3-resources/DataElement-CapabilityStatement.software.version.json");
		 expect(dataelementValidateFunction(dataelementExample338)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.status.json", () => {
		 const dataelementExample339 = require("../stu3-resources/DataElement-CapabilityStatement.status.json");
		 expect(dataelementValidateFunction(dataelementExample339)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.title.json", () => {
		 const dataelementExample340 = require("../stu3-resources/DataElement-CapabilityStatement.title.json");
		 expect(dataelementValidateFunction(dataelementExample340)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.url.json", () => {
		 const dataelementExample341 = require("../stu3-resources/DataElement-CapabilityStatement.url.json");
		 expect(dataelementValidateFunction(dataelementExample341)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.useContext.json", () => {
		 const dataelementExample342 = require("../stu3-resources/DataElement-CapabilityStatement.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample342)).toBe(true);
	 });

	 test("validate DataElement-CapabilityStatement.version.json", () => {
		 const dataelementExample343 = require("../stu3-resources/DataElement-CapabilityStatement.version.json");
		 expect(dataelementValidateFunction(dataelementExample343)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.category.json", () => {
		 const dataelementExample344 = require("../stu3-resources/DataElement-CarePlan.activity.detail.category.json");
		 expect(dataelementValidateFunction(dataelementExample344)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.code.json", () => {
		 const dataelementExample345 = require("../stu3-resources/DataElement-CarePlan.activity.detail.code.json");
		 expect(dataelementValidateFunction(dataelementExample345)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.dailyAmount.json", () => {
		 const dataelementExample346 = require("../stu3-resources/DataElement-CarePlan.activity.detail.dailyAmount.json");
		 expect(dataelementValidateFunction(dataelementExample346)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.definition.json", () => {
		 const dataelementExample347 = require("../stu3-resources/DataElement-CarePlan.activity.detail.definition.json");
		 expect(dataelementValidateFunction(dataelementExample347)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.description.json", () => {
		 const dataelementExample348 = require("../stu3-resources/DataElement-CarePlan.activity.detail.description.json");
		 expect(dataelementValidateFunction(dataelementExample348)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.goal.json", () => {
		 const dataelementExample349 = require("../stu3-resources/DataElement-CarePlan.activity.detail.goal.json");
		 expect(dataelementValidateFunction(dataelementExample349)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.json", () => {
		 const dataelementExample350 = require("../stu3-resources/DataElement-CarePlan.activity.detail.json");
		 expect(dataelementValidateFunction(dataelementExample350)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.location.json", () => {
		 const dataelementExample351 = require("../stu3-resources/DataElement-CarePlan.activity.detail.location.json");
		 expect(dataelementValidateFunction(dataelementExample351)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.performer.json", () => {
		 const dataelementExample352 = require("../stu3-resources/DataElement-CarePlan.activity.detail.performer.json");
		 expect(dataelementValidateFunction(dataelementExample352)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.productX.json", () => {
		 const dataelementExample353 = require("../stu3-resources/DataElement-CarePlan.activity.detail.productX.json");
		 expect(dataelementValidateFunction(dataelementExample353)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.prohibited.json", () => {
		 const dataelementExample354 = require("../stu3-resources/DataElement-CarePlan.activity.detail.prohibited.json");
		 expect(dataelementValidateFunction(dataelementExample354)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.quantity.json", () => {
		 const dataelementExample355 = require("../stu3-resources/DataElement-CarePlan.activity.detail.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample355)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.reasonCode.json", () => {
		 const dataelementExample356 = require("../stu3-resources/DataElement-CarePlan.activity.detail.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample356)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.reasonReference.json", () => {
		 const dataelementExample357 = require("../stu3-resources/DataElement-CarePlan.activity.detail.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample357)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.scheduledX.json", () => {
		 const dataelementExample358 = require("../stu3-resources/DataElement-CarePlan.activity.detail.scheduledX.json");
		 expect(dataelementValidateFunction(dataelementExample358)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.status.json", () => {
		 const dataelementExample359 = require("../stu3-resources/DataElement-CarePlan.activity.detail.status.json");
		 expect(dataelementValidateFunction(dataelementExample359)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.detail.statusReason.json", () => {
		 const dataelementExample360 = require("../stu3-resources/DataElement-CarePlan.activity.detail.statusReason.json");
		 expect(dataelementValidateFunction(dataelementExample360)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.json", () => {
		 const dataelementExample361 = require("../stu3-resources/DataElement-CarePlan.activity.json");
		 expect(dataelementValidateFunction(dataelementExample361)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.outcomeCodeableConcept.json", () => {
		 const dataelementExample362 = require("../stu3-resources/DataElement-CarePlan.activity.outcomeCodeableConcept.json");
		 expect(dataelementValidateFunction(dataelementExample362)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.outcomeReference.json", () => {
		 const dataelementExample363 = require("../stu3-resources/DataElement-CarePlan.activity.outcomeReference.json");
		 expect(dataelementValidateFunction(dataelementExample363)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.progress.json", () => {
		 const dataelementExample364 = require("../stu3-resources/DataElement-CarePlan.activity.progress.json");
		 expect(dataelementValidateFunction(dataelementExample364)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.activity.reference.json", () => {
		 const dataelementExample365 = require("../stu3-resources/DataElement-CarePlan.activity.reference.json");
		 expect(dataelementValidateFunction(dataelementExample365)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.addresses.json", () => {
		 const dataelementExample366 = require("../stu3-resources/DataElement-CarePlan.addresses.json");
		 expect(dataelementValidateFunction(dataelementExample366)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.author.json", () => {
		 const dataelementExample367 = require("../stu3-resources/DataElement-CarePlan.author.json");
		 expect(dataelementValidateFunction(dataelementExample367)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.basedOn.json", () => {
		 const dataelementExample368 = require("../stu3-resources/DataElement-CarePlan.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample368)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.careTeam.json", () => {
		 const dataelementExample369 = require("../stu3-resources/DataElement-CarePlan.careTeam.json");
		 expect(dataelementValidateFunction(dataelementExample369)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.category.json", () => {
		 const dataelementExample370 = require("../stu3-resources/DataElement-CarePlan.category.json");
		 expect(dataelementValidateFunction(dataelementExample370)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.context.json", () => {
		 const dataelementExample371 = require("../stu3-resources/DataElement-CarePlan.context.json");
		 expect(dataelementValidateFunction(dataelementExample371)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.definition.json", () => {
		 const dataelementExample372 = require("../stu3-resources/DataElement-CarePlan.definition.json");
		 expect(dataelementValidateFunction(dataelementExample372)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.description.json", () => {
		 const dataelementExample373 = require("../stu3-resources/DataElement-CarePlan.description.json");
		 expect(dataelementValidateFunction(dataelementExample373)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.goal.json", () => {
		 const dataelementExample374 = require("../stu3-resources/DataElement-CarePlan.goal.json");
		 expect(dataelementValidateFunction(dataelementExample374)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.identifier.json", () => {
		 const dataelementExample375 = require("../stu3-resources/DataElement-CarePlan.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample375)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.intent.json", () => {
		 const dataelementExample376 = require("../stu3-resources/DataElement-CarePlan.intent.json");
		 expect(dataelementValidateFunction(dataelementExample376)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.json", () => {
		 const dataelementExample377 = require("../stu3-resources/DataElement-CarePlan.json");
		 expect(dataelementValidateFunction(dataelementExample377)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.note.json", () => {
		 const dataelementExample378 = require("../stu3-resources/DataElement-CarePlan.note.json");
		 expect(dataelementValidateFunction(dataelementExample378)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.partOf.json", () => {
		 const dataelementExample379 = require("../stu3-resources/DataElement-CarePlan.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample379)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.period.json", () => {
		 const dataelementExample380 = require("../stu3-resources/DataElement-CarePlan.period.json");
		 expect(dataelementValidateFunction(dataelementExample380)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.replaces.json", () => {
		 const dataelementExample381 = require("../stu3-resources/DataElement-CarePlan.replaces.json");
		 expect(dataelementValidateFunction(dataelementExample381)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.status.json", () => {
		 const dataelementExample382 = require("../stu3-resources/DataElement-CarePlan.status.json");
		 expect(dataelementValidateFunction(dataelementExample382)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.subject.json", () => {
		 const dataelementExample383 = require("../stu3-resources/DataElement-CarePlan.subject.json");
		 expect(dataelementValidateFunction(dataelementExample383)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.supportingInfo.json", () => {
		 const dataelementExample384 = require("../stu3-resources/DataElement-CarePlan.supportingInfo.json");
		 expect(dataelementValidateFunction(dataelementExample384)).toBe(true);
	 });

	 test("validate DataElement-CarePlan.title.json", () => {
		 const dataelementExample385 = require("../stu3-resources/DataElement-CarePlan.title.json");
		 expect(dataelementValidateFunction(dataelementExample385)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.category.json", () => {
		 const dataelementExample386 = require("../stu3-resources/DataElement-CareTeam.category.json");
		 expect(dataelementValidateFunction(dataelementExample386)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.context.json", () => {
		 const dataelementExample387 = require("../stu3-resources/DataElement-CareTeam.context.json");
		 expect(dataelementValidateFunction(dataelementExample387)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.identifier.json", () => {
		 const dataelementExample388 = require("../stu3-resources/DataElement-CareTeam.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample388)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.json", () => {
		 const dataelementExample389 = require("../stu3-resources/DataElement-CareTeam.json");
		 expect(dataelementValidateFunction(dataelementExample389)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.managingOrganization.json", () => {
		 const dataelementExample390 = require("../stu3-resources/DataElement-CareTeam.managingOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample390)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.name.json", () => {
		 const dataelementExample391 = require("../stu3-resources/DataElement-CareTeam.name.json");
		 expect(dataelementValidateFunction(dataelementExample391)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.note.json", () => {
		 const dataelementExample392 = require("../stu3-resources/DataElement-CareTeam.note.json");
		 expect(dataelementValidateFunction(dataelementExample392)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.participant.json", () => {
		 const dataelementExample393 = require("../stu3-resources/DataElement-CareTeam.participant.json");
		 expect(dataelementValidateFunction(dataelementExample393)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.participant.member.json", () => {
		 const dataelementExample394 = require("../stu3-resources/DataElement-CareTeam.participant.member.json");
		 expect(dataelementValidateFunction(dataelementExample394)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.participant.onBehalfOf.json", () => {
		 const dataelementExample395 = require("../stu3-resources/DataElement-CareTeam.participant.onBehalfOf.json");
		 expect(dataelementValidateFunction(dataelementExample395)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.participant.period.json", () => {
		 const dataelementExample396 = require("../stu3-resources/DataElement-CareTeam.participant.period.json");
		 expect(dataelementValidateFunction(dataelementExample396)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.participant.role.json", () => {
		 const dataelementExample397 = require("../stu3-resources/DataElement-CareTeam.participant.role.json");
		 expect(dataelementValidateFunction(dataelementExample397)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.period.json", () => {
		 const dataelementExample398 = require("../stu3-resources/DataElement-CareTeam.period.json");
		 expect(dataelementValidateFunction(dataelementExample398)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.reasonCode.json", () => {
		 const dataelementExample399 = require("../stu3-resources/DataElement-CareTeam.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample399)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.reasonReference.json", () => {
		 const dataelementExample400 = require("../stu3-resources/DataElement-CareTeam.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample400)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.status.json", () => {
		 const dataelementExample401 = require("../stu3-resources/DataElement-CareTeam.status.json");
		 expect(dataelementValidateFunction(dataelementExample401)).toBe(true);
	 });

	 test("validate DataElement-CareTeam.subject.json", () => {
		 const dataelementExample402 = require("../stu3-resources/DataElement-CareTeam.subject.json");
		 expect(dataelementValidateFunction(dataelementExample402)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.account.json", () => {
		 const dataelementExample403 = require("../stu3-resources/DataElement-ChargeItem.account.json");
		 expect(dataelementValidateFunction(dataelementExample403)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.bodysite.json", () => {
		 const dataelementExample404 = require("../stu3-resources/DataElement-ChargeItem.bodysite.json");
		 expect(dataelementValidateFunction(dataelementExample404)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.code.json", () => {
		 const dataelementExample405 = require("../stu3-resources/DataElement-ChargeItem.code.json");
		 expect(dataelementValidateFunction(dataelementExample405)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.context.json", () => {
		 const dataelementExample406 = require("../stu3-resources/DataElement-ChargeItem.context.json");
		 expect(dataelementValidateFunction(dataelementExample406)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.definition.json", () => {
		 const dataelementExample407 = require("../stu3-resources/DataElement-ChargeItem.definition.json");
		 expect(dataelementValidateFunction(dataelementExample407)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.enteredDate.json", () => {
		 const dataelementExample408 = require("../stu3-resources/DataElement-ChargeItem.enteredDate.json");
		 expect(dataelementValidateFunction(dataelementExample408)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.enterer.json", () => {
		 const dataelementExample409 = require("../stu3-resources/DataElement-ChargeItem.enterer.json");
		 expect(dataelementValidateFunction(dataelementExample409)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.factorOverride.json", () => {
		 const dataelementExample410 = require("../stu3-resources/DataElement-ChargeItem.factorOverride.json");
		 expect(dataelementValidateFunction(dataelementExample410)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.identifier.json", () => {
		 const dataelementExample411 = require("../stu3-resources/DataElement-ChargeItem.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample411)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.json", () => {
		 const dataelementExample412 = require("../stu3-resources/DataElement-ChargeItem.json");
		 expect(dataelementValidateFunction(dataelementExample412)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.note.json", () => {
		 const dataelementExample413 = require("../stu3-resources/DataElement-ChargeItem.note.json");
		 expect(dataelementValidateFunction(dataelementExample413)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.occurrenceX.json", () => {
		 const dataelementExample414 = require("../stu3-resources/DataElement-ChargeItem.occurrenceX.json");
		 expect(dataelementValidateFunction(dataelementExample414)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.overrideReason.json", () => {
		 const dataelementExample415 = require("../stu3-resources/DataElement-ChargeItem.overrideReason.json");
		 expect(dataelementValidateFunction(dataelementExample415)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.partOf.json", () => {
		 const dataelementExample416 = require("../stu3-resources/DataElement-ChargeItem.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample416)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.participant.actor.json", () => {
		 const dataelementExample417 = require("../stu3-resources/DataElement-ChargeItem.participant.actor.json");
		 expect(dataelementValidateFunction(dataelementExample417)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.participant.json", () => {
		 const dataelementExample418 = require("../stu3-resources/DataElement-ChargeItem.participant.json");
		 expect(dataelementValidateFunction(dataelementExample418)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.participant.role.json", () => {
		 const dataelementExample419 = require("../stu3-resources/DataElement-ChargeItem.participant.role.json");
		 expect(dataelementValidateFunction(dataelementExample419)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.performingOrganization.json", () => {
		 const dataelementExample420 = require("../stu3-resources/DataElement-ChargeItem.performingOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample420)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.priceOverride.json", () => {
		 const dataelementExample421 = require("../stu3-resources/DataElement-ChargeItem.priceOverride.json");
		 expect(dataelementValidateFunction(dataelementExample421)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.quantity.json", () => {
		 const dataelementExample422 = require("../stu3-resources/DataElement-ChargeItem.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample422)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.reason.json", () => {
		 const dataelementExample423 = require("../stu3-resources/DataElement-ChargeItem.reason.json");
		 expect(dataelementValidateFunction(dataelementExample423)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.requestingOrganization.json", () => {
		 const dataelementExample424 = require("../stu3-resources/DataElement-ChargeItem.requestingOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample424)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.service.json", () => {
		 const dataelementExample425 = require("../stu3-resources/DataElement-ChargeItem.service.json");
		 expect(dataelementValidateFunction(dataelementExample425)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.status.json", () => {
		 const dataelementExample426 = require("../stu3-resources/DataElement-ChargeItem.status.json");
		 expect(dataelementValidateFunction(dataelementExample426)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.subject.json", () => {
		 const dataelementExample427 = require("../stu3-resources/DataElement-ChargeItem.subject.json");
		 expect(dataelementValidateFunction(dataelementExample427)).toBe(true);
	 });

	 test("validate DataElement-ChargeItem.supportingInformation.json", () => {
		 const dataelementExample428 = require("../stu3-resources/DataElement-ChargeItem.supportingInformation.json");
		 expect(dataelementValidateFunction(dataelementExample428)).toBe(true);
	 });

	 test("validate DataElement-Claim.accident.date.json", () => {
		 const dataelementExample429 = require("../stu3-resources/DataElement-Claim.accident.date.json");
		 expect(dataelementValidateFunction(dataelementExample429)).toBe(true);
	 });

	 test("validate DataElement-Claim.accident.json", () => {
		 const dataelementExample430 = require("../stu3-resources/DataElement-Claim.accident.json");
		 expect(dataelementValidateFunction(dataelementExample430)).toBe(true);
	 });

	 test("validate DataElement-Claim.accident.locationX.json", () => {
		 const dataelementExample431 = require("../stu3-resources/DataElement-Claim.accident.locationX.json");
		 expect(dataelementValidateFunction(dataelementExample431)).toBe(true);
	 });

	 test("validate DataElement-Claim.accident.type.json", () => {
		 const dataelementExample432 = require("../stu3-resources/DataElement-Claim.accident.type.json");
		 expect(dataelementValidateFunction(dataelementExample432)).toBe(true);
	 });

	 test("validate DataElement-Claim.billablePeriod.json", () => {
		 const dataelementExample433 = require("../stu3-resources/DataElement-Claim.billablePeriod.json");
		 expect(dataelementValidateFunction(dataelementExample433)).toBe(true);
	 });

	 test("validate DataElement-Claim.careTeam.json", () => {
		 const dataelementExample434 = require("../stu3-resources/DataElement-Claim.careTeam.json");
		 expect(dataelementValidateFunction(dataelementExample434)).toBe(true);
	 });

	 test("validate DataElement-Claim.careTeam.provider.json", () => {
		 const dataelementExample435 = require("../stu3-resources/DataElement-Claim.careTeam.provider.json");
		 expect(dataelementValidateFunction(dataelementExample435)).toBe(true);
	 });

	 test("validate DataElement-Claim.careTeam.qualification.json", () => {
		 const dataelementExample436 = require("../stu3-resources/DataElement-Claim.careTeam.qualification.json");
		 expect(dataelementValidateFunction(dataelementExample436)).toBe(true);
	 });

	 test("validate DataElement-Claim.careTeam.responsible.json", () => {
		 const dataelementExample437 = require("../stu3-resources/DataElement-Claim.careTeam.responsible.json");
		 expect(dataelementValidateFunction(dataelementExample437)).toBe(true);
	 });

	 test("validate DataElement-Claim.careTeam.role.json", () => {
		 const dataelementExample438 = require("../stu3-resources/DataElement-Claim.careTeam.role.json");
		 expect(dataelementValidateFunction(dataelementExample438)).toBe(true);
	 });

	 test("validate DataElement-Claim.careTeam.sequence.json", () => {
		 const dataelementExample439 = require("../stu3-resources/DataElement-Claim.careTeam.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample439)).toBe(true);
	 });

	 test("validate DataElement-Claim.created.json", () => {
		 const dataelementExample440 = require("../stu3-resources/DataElement-Claim.created.json");
		 expect(dataelementValidateFunction(dataelementExample440)).toBe(true);
	 });

	 test("validate DataElement-Claim.diagnosis.diagnosisX.json", () => {
		 const dataelementExample441 = require("../stu3-resources/DataElement-Claim.diagnosis.diagnosisX.json");
		 expect(dataelementValidateFunction(dataelementExample441)).toBe(true);
	 });

	 test("validate DataElement-Claim.diagnosis.json", () => {
		 const dataelementExample442 = require("../stu3-resources/DataElement-Claim.diagnosis.json");
		 expect(dataelementValidateFunction(dataelementExample442)).toBe(true);
	 });

	 test("validate DataElement-Claim.diagnosis.packageCode.json", () => {
		 const dataelementExample443 = require("../stu3-resources/DataElement-Claim.diagnosis.packageCode.json");
		 expect(dataelementValidateFunction(dataelementExample443)).toBe(true);
	 });

	 test("validate DataElement-Claim.diagnosis.sequence.json", () => {
		 const dataelementExample444 = require("../stu3-resources/DataElement-Claim.diagnosis.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample444)).toBe(true);
	 });

	 test("validate DataElement-Claim.diagnosis.type.json", () => {
		 const dataelementExample445 = require("../stu3-resources/DataElement-Claim.diagnosis.type.json");
		 expect(dataelementValidateFunction(dataelementExample445)).toBe(true);
	 });

	 test("validate DataElement-Claim.employmentImpacted.json", () => {
		 const dataelementExample446 = require("../stu3-resources/DataElement-Claim.employmentImpacted.json");
		 expect(dataelementValidateFunction(dataelementExample446)).toBe(true);
	 });

	 test("validate DataElement-Claim.enterer.json", () => {
		 const dataelementExample447 = require("../stu3-resources/DataElement-Claim.enterer.json");
		 expect(dataelementValidateFunction(dataelementExample447)).toBe(true);
	 });

	 test("validate DataElement-Claim.facility.json", () => {
		 const dataelementExample448 = require("../stu3-resources/DataElement-Claim.facility.json");
		 expect(dataelementValidateFunction(dataelementExample448)).toBe(true);
	 });

	 test("validate DataElement-Claim.fundsReserve.json", () => {
		 const dataelementExample449 = require("../stu3-resources/DataElement-Claim.fundsReserve.json");
		 expect(dataelementValidateFunction(dataelementExample449)).toBe(true);
	 });

	 test("validate DataElement-Claim.hospitalization.json", () => {
		 const dataelementExample450 = require("../stu3-resources/DataElement-Claim.hospitalization.json");
		 expect(dataelementValidateFunction(dataelementExample450)).toBe(true);
	 });

	 test("validate DataElement-Claim.identifier.json", () => {
		 const dataelementExample451 = require("../stu3-resources/DataElement-Claim.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample451)).toBe(true);
	 });

	 test("validate DataElement-Claim.information.category.json", () => {
		 const dataelementExample452 = require("../stu3-resources/DataElement-Claim.information.category.json");
		 expect(dataelementValidateFunction(dataelementExample452)).toBe(true);
	 });

	 test("validate DataElement-Claim.information.code.json", () => {
		 const dataelementExample453 = require("../stu3-resources/DataElement-Claim.information.code.json");
		 expect(dataelementValidateFunction(dataelementExample453)).toBe(true);
	 });

	 test("validate DataElement-Claim.information.json", () => {
		 const dataelementExample454 = require("../stu3-resources/DataElement-Claim.information.json");
		 expect(dataelementValidateFunction(dataelementExample454)).toBe(true);
	 });

	 test("validate DataElement-Claim.information.reason.json", () => {
		 const dataelementExample455 = require("../stu3-resources/DataElement-Claim.information.reason.json");
		 expect(dataelementValidateFunction(dataelementExample455)).toBe(true);
	 });

	 test("validate DataElement-Claim.information.sequence.json", () => {
		 const dataelementExample456 = require("../stu3-resources/DataElement-Claim.information.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample456)).toBe(true);
	 });

	 test("validate DataElement-Claim.information.timingX.json", () => {
		 const dataelementExample457 = require("../stu3-resources/DataElement-Claim.information.timingX.json");
		 expect(dataelementValidateFunction(dataelementExample457)).toBe(true);
	 });

	 test("validate DataElement-Claim.information.valueX.json", () => {
		 const dataelementExample458 = require("../stu3-resources/DataElement-Claim.information.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample458)).toBe(true);
	 });

	 test("validate DataElement-Claim.insurance.businessArrangement.json", () => {
		 const dataelementExample459 = require("../stu3-resources/DataElement-Claim.insurance.businessArrangement.json");
		 expect(dataelementValidateFunction(dataelementExample459)).toBe(true);
	 });

	 test("validate DataElement-Claim.insurance.claimResponse.json", () => {
		 const dataelementExample460 = require("../stu3-resources/DataElement-Claim.insurance.claimResponse.json");
		 expect(dataelementValidateFunction(dataelementExample460)).toBe(true);
	 });

	 test("validate DataElement-Claim.insurance.coverage.json", () => {
		 const dataelementExample461 = require("../stu3-resources/DataElement-Claim.insurance.coverage.json");
		 expect(dataelementValidateFunction(dataelementExample461)).toBe(true);
	 });

	 test("validate DataElement-Claim.insurance.focal.json", () => {
		 const dataelementExample462 = require("../stu3-resources/DataElement-Claim.insurance.focal.json");
		 expect(dataelementValidateFunction(dataelementExample462)).toBe(true);
	 });

	 test("validate DataElement-Claim.insurance.json", () => {
		 const dataelementExample463 = require("../stu3-resources/DataElement-Claim.insurance.json");
		 expect(dataelementValidateFunction(dataelementExample463)).toBe(true);
	 });

	 test("validate DataElement-Claim.insurance.preAuthRef.json", () => {
		 const dataelementExample464 = require("../stu3-resources/DataElement-Claim.insurance.preAuthRef.json");
		 expect(dataelementValidateFunction(dataelementExample464)).toBe(true);
	 });

	 test("validate DataElement-Claim.insurance.sequence.json", () => {
		 const dataelementExample465 = require("../stu3-resources/DataElement-Claim.insurance.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample465)).toBe(true);
	 });

	 test("validate DataElement-Claim.insurer.json", () => {
		 const dataelementExample466 = require("../stu3-resources/DataElement-Claim.insurer.json");
		 expect(dataelementValidateFunction(dataelementExample466)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.bodySite.json", () => {
		 const dataelementExample467 = require("../stu3-resources/DataElement-Claim.item.bodySite.json");
		 expect(dataelementValidateFunction(dataelementExample467)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.careTeamLinkId.json", () => {
		 const dataelementExample468 = require("../stu3-resources/DataElement-Claim.item.careTeamLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample468)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.category.json", () => {
		 const dataelementExample469 = require("../stu3-resources/DataElement-Claim.item.category.json");
		 expect(dataelementValidateFunction(dataelementExample469)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.category.json", () => {
		 const dataelementExample470 = require("../stu3-resources/DataElement-Claim.item.detail.category.json");
		 expect(dataelementValidateFunction(dataelementExample470)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.factor.json", () => {
		 const dataelementExample471 = require("../stu3-resources/DataElement-Claim.item.detail.factor.json");
		 expect(dataelementValidateFunction(dataelementExample471)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.json", () => {
		 const dataelementExample472 = require("../stu3-resources/DataElement-Claim.item.detail.json");
		 expect(dataelementValidateFunction(dataelementExample472)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.modifier.json", () => {
		 const dataelementExample473 = require("../stu3-resources/DataElement-Claim.item.detail.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample473)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.net.json", () => {
		 const dataelementExample474 = require("../stu3-resources/DataElement-Claim.item.detail.net.json");
		 expect(dataelementValidateFunction(dataelementExample474)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.programCode.json", () => {
		 const dataelementExample475 = require("../stu3-resources/DataElement-Claim.item.detail.programCode.json");
		 expect(dataelementValidateFunction(dataelementExample475)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.quantity.json", () => {
		 const dataelementExample476 = require("../stu3-resources/DataElement-Claim.item.detail.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample476)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.revenue.json", () => {
		 const dataelementExample477 = require("../stu3-resources/DataElement-Claim.item.detail.revenue.json");
		 expect(dataelementValidateFunction(dataelementExample477)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.sequence.json", () => {
		 const dataelementExample478 = require("../stu3-resources/DataElement-Claim.item.detail.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample478)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.service.json", () => {
		 const dataelementExample479 = require("../stu3-resources/DataElement-Claim.item.detail.service.json");
		 expect(dataelementValidateFunction(dataelementExample479)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.category.json", () => {
		 const dataelementExample480 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.category.json");
		 expect(dataelementValidateFunction(dataelementExample480)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.factor.json", () => {
		 const dataelementExample481 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.factor.json");
		 expect(dataelementValidateFunction(dataelementExample481)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.json", () => {
		 const dataelementExample482 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.json");
		 expect(dataelementValidateFunction(dataelementExample482)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.modifier.json", () => {
		 const dataelementExample483 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample483)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.net.json", () => {
		 const dataelementExample484 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.net.json");
		 expect(dataelementValidateFunction(dataelementExample484)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.programCode.json", () => {
		 const dataelementExample485 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.programCode.json");
		 expect(dataelementValidateFunction(dataelementExample485)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.quantity.json", () => {
		 const dataelementExample486 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample486)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.revenue.json", () => {
		 const dataelementExample487 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.revenue.json");
		 expect(dataelementValidateFunction(dataelementExample487)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.sequence.json", () => {
		 const dataelementExample488 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample488)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.service.json", () => {
		 const dataelementExample489 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.service.json");
		 expect(dataelementValidateFunction(dataelementExample489)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.udi.json", () => {
		 const dataelementExample490 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.udi.json");
		 expect(dataelementValidateFunction(dataelementExample490)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.subDetail.unitPrice.json", () => {
		 const dataelementExample491 = require("../stu3-resources/DataElement-Claim.item.detail.subDetail.unitPrice.json");
		 expect(dataelementValidateFunction(dataelementExample491)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.udi.json", () => {
		 const dataelementExample492 = require("../stu3-resources/DataElement-Claim.item.detail.udi.json");
		 expect(dataelementValidateFunction(dataelementExample492)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.detail.unitPrice.json", () => {
		 const dataelementExample493 = require("../stu3-resources/DataElement-Claim.item.detail.unitPrice.json");
		 expect(dataelementValidateFunction(dataelementExample493)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.diagnosisLinkId.json", () => {
		 const dataelementExample494 = require("../stu3-resources/DataElement-Claim.item.diagnosisLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample494)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.encounter.json", () => {
		 const dataelementExample495 = require("../stu3-resources/DataElement-Claim.item.encounter.json");
		 expect(dataelementValidateFunction(dataelementExample495)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.factor.json", () => {
		 const dataelementExample496 = require("../stu3-resources/DataElement-Claim.item.factor.json");
		 expect(dataelementValidateFunction(dataelementExample496)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.informationLinkId.json", () => {
		 const dataelementExample497 = require("../stu3-resources/DataElement-Claim.item.informationLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample497)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.json", () => {
		 const dataelementExample498 = require("../stu3-resources/DataElement-Claim.item.json");
		 expect(dataelementValidateFunction(dataelementExample498)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.locationX.json", () => {
		 const dataelementExample499 = require("../stu3-resources/DataElement-Claim.item.locationX.json");
		 expect(dataelementValidateFunction(dataelementExample499)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.modifier.json", () => {
		 const dataelementExample500 = require("../stu3-resources/DataElement-Claim.item.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample500)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.net.json", () => {
		 const dataelementExample501 = require("../stu3-resources/DataElement-Claim.item.net.json");
		 expect(dataelementValidateFunction(dataelementExample501)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.procedureLinkId.json", () => {
		 const dataelementExample502 = require("../stu3-resources/DataElement-Claim.item.procedureLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample502)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.programCode.json", () => {
		 const dataelementExample503 = require("../stu3-resources/DataElement-Claim.item.programCode.json");
		 expect(dataelementValidateFunction(dataelementExample503)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.quantity.json", () => {
		 const dataelementExample504 = require("../stu3-resources/DataElement-Claim.item.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample504)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.revenue.json", () => {
		 const dataelementExample505 = require("../stu3-resources/DataElement-Claim.item.revenue.json");
		 expect(dataelementValidateFunction(dataelementExample505)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.sequence.json", () => {
		 const dataelementExample506 = require("../stu3-resources/DataElement-Claim.item.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample506)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.service.json", () => {
		 const dataelementExample507 = require("../stu3-resources/DataElement-Claim.item.service.json");
		 expect(dataelementValidateFunction(dataelementExample507)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.servicedX.json", () => {
		 const dataelementExample508 = require("../stu3-resources/DataElement-Claim.item.servicedX.json");
		 expect(dataelementValidateFunction(dataelementExample508)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.subSite.json", () => {
		 const dataelementExample509 = require("../stu3-resources/DataElement-Claim.item.subSite.json");
		 expect(dataelementValidateFunction(dataelementExample509)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.udi.json", () => {
		 const dataelementExample510 = require("../stu3-resources/DataElement-Claim.item.udi.json");
		 expect(dataelementValidateFunction(dataelementExample510)).toBe(true);
	 });

	 test("validate DataElement-Claim.item.unitPrice.json", () => {
		 const dataelementExample511 = require("../stu3-resources/DataElement-Claim.item.unitPrice.json");
		 expect(dataelementValidateFunction(dataelementExample511)).toBe(true);
	 });

	 test("validate DataElement-Claim.json", () => {
		 const dataelementExample512 = require("../stu3-resources/DataElement-Claim.json");
		 expect(dataelementValidateFunction(dataelementExample512)).toBe(true);
	 });

	 test("validate DataElement-Claim.organization.json", () => {
		 const dataelementExample513 = require("../stu3-resources/DataElement-Claim.organization.json");
		 expect(dataelementValidateFunction(dataelementExample513)).toBe(true);
	 });

	 test("validate DataElement-Claim.originalPrescription.json", () => {
		 const dataelementExample514 = require("../stu3-resources/DataElement-Claim.originalPrescription.json");
		 expect(dataelementValidateFunction(dataelementExample514)).toBe(true);
	 });

	 test("validate DataElement-Claim.patient.json", () => {
		 const dataelementExample515 = require("../stu3-resources/DataElement-Claim.patient.json");
		 expect(dataelementValidateFunction(dataelementExample515)).toBe(true);
	 });

	 test("validate DataElement-Claim.payee.json", () => {
		 const dataelementExample516 = require("../stu3-resources/DataElement-Claim.payee.json");
		 expect(dataelementValidateFunction(dataelementExample516)).toBe(true);
	 });

	 test("validate DataElement-Claim.payee.party.json", () => {
		 const dataelementExample517 = require("../stu3-resources/DataElement-Claim.payee.party.json");
		 expect(dataelementValidateFunction(dataelementExample517)).toBe(true);
	 });

	 test("validate DataElement-Claim.payee.resourceType.json", () => {
		 const dataelementExample518 = require("../stu3-resources/DataElement-Claim.payee.resourceType.json");
		 expect(dataelementValidateFunction(dataelementExample518)).toBe(true);
	 });

	 test("validate DataElement-Claim.payee.type.json", () => {
		 const dataelementExample519 = require("../stu3-resources/DataElement-Claim.payee.type.json");
		 expect(dataelementValidateFunction(dataelementExample519)).toBe(true);
	 });

	 test("validate DataElement-Claim.prescription.json", () => {
		 const dataelementExample520 = require("../stu3-resources/DataElement-Claim.prescription.json");
		 expect(dataelementValidateFunction(dataelementExample520)).toBe(true);
	 });

	 test("validate DataElement-Claim.priority.json", () => {
		 const dataelementExample521 = require("../stu3-resources/DataElement-Claim.priority.json");
		 expect(dataelementValidateFunction(dataelementExample521)).toBe(true);
	 });

	 test("validate DataElement-Claim.procedure.date.json", () => {
		 const dataelementExample522 = require("../stu3-resources/DataElement-Claim.procedure.date.json");
		 expect(dataelementValidateFunction(dataelementExample522)).toBe(true);
	 });

	 test("validate DataElement-Claim.procedure.json", () => {
		 const dataelementExample523 = require("../stu3-resources/DataElement-Claim.procedure.json");
		 expect(dataelementValidateFunction(dataelementExample523)).toBe(true);
	 });

	 test("validate DataElement-Claim.procedure.procedureX.json", () => {
		 const dataelementExample524 = require("../stu3-resources/DataElement-Claim.procedure.procedureX.json");
		 expect(dataelementValidateFunction(dataelementExample524)).toBe(true);
	 });

	 test("validate DataElement-Claim.procedure.sequence.json", () => {
		 const dataelementExample525 = require("../stu3-resources/DataElement-Claim.procedure.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample525)).toBe(true);
	 });

	 test("validate DataElement-Claim.provider.json", () => {
		 const dataelementExample526 = require("../stu3-resources/DataElement-Claim.provider.json");
		 expect(dataelementValidateFunction(dataelementExample526)).toBe(true);
	 });

	 test("validate DataElement-Claim.referral.json", () => {
		 const dataelementExample527 = require("../stu3-resources/DataElement-Claim.referral.json");
		 expect(dataelementValidateFunction(dataelementExample527)).toBe(true);
	 });

	 test("validate DataElement-Claim.related.claim.json", () => {
		 const dataelementExample528 = require("../stu3-resources/DataElement-Claim.related.claim.json");
		 expect(dataelementValidateFunction(dataelementExample528)).toBe(true);
	 });

	 test("validate DataElement-Claim.related.json", () => {
		 const dataelementExample529 = require("../stu3-resources/DataElement-Claim.related.json");
		 expect(dataelementValidateFunction(dataelementExample529)).toBe(true);
	 });

	 test("validate DataElement-Claim.related.reference.json", () => {
		 const dataelementExample530 = require("../stu3-resources/DataElement-Claim.related.reference.json");
		 expect(dataelementValidateFunction(dataelementExample530)).toBe(true);
	 });

	 test("validate DataElement-Claim.related.relationship.json", () => {
		 const dataelementExample531 = require("../stu3-resources/DataElement-Claim.related.relationship.json");
		 expect(dataelementValidateFunction(dataelementExample531)).toBe(true);
	 });

	 test("validate DataElement-Claim.status.json", () => {
		 const dataelementExample532 = require("../stu3-resources/DataElement-Claim.status.json");
		 expect(dataelementValidateFunction(dataelementExample532)).toBe(true);
	 });

	 test("validate DataElement-Claim.subType.json", () => {
		 const dataelementExample533 = require("../stu3-resources/DataElement-Claim.subType.json");
		 expect(dataelementValidateFunction(dataelementExample533)).toBe(true);
	 });

	 test("validate DataElement-Claim.total.json", () => {
		 const dataelementExample534 = require("../stu3-resources/DataElement-Claim.total.json");
		 expect(dataelementValidateFunction(dataelementExample534)).toBe(true);
	 });

	 test("validate DataElement-Claim.type.json", () => {
		 const dataelementExample535 = require("../stu3-resources/DataElement-Claim.type.json");
		 expect(dataelementValidateFunction(dataelementExample535)).toBe(true);
	 });

	 test("validate DataElement-Claim.use.json", () => {
		 const dataelementExample536 = require("../stu3-resources/DataElement-Claim.use.json");
		 expect(dataelementValidateFunction(dataelementExample536)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.adjudication.json", () => {
		 const dataelementExample537 = require("../stu3-resources/DataElement-ClaimResponse.addItem.adjudication.json");
		 expect(dataelementValidateFunction(dataelementExample537)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.category.json", () => {
		 const dataelementExample538 = require("../stu3-resources/DataElement-ClaimResponse.addItem.category.json");
		 expect(dataelementValidateFunction(dataelementExample538)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.detail.adjudication.json", () => {
		 const dataelementExample539 = require("../stu3-resources/DataElement-ClaimResponse.addItem.detail.adjudication.json");
		 expect(dataelementValidateFunction(dataelementExample539)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.detail.category.json", () => {
		 const dataelementExample540 = require("../stu3-resources/DataElement-ClaimResponse.addItem.detail.category.json");
		 expect(dataelementValidateFunction(dataelementExample540)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.detail.fee.json", () => {
		 const dataelementExample541 = require("../stu3-resources/DataElement-ClaimResponse.addItem.detail.fee.json");
		 expect(dataelementValidateFunction(dataelementExample541)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.detail.json", () => {
		 const dataelementExample542 = require("../stu3-resources/DataElement-ClaimResponse.addItem.detail.json");
		 expect(dataelementValidateFunction(dataelementExample542)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.detail.modifier.json", () => {
		 const dataelementExample543 = require("../stu3-resources/DataElement-ClaimResponse.addItem.detail.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample543)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.detail.noteNumber.json", () => {
		 const dataelementExample544 = require("../stu3-resources/DataElement-ClaimResponse.addItem.detail.noteNumber.json");
		 expect(dataelementValidateFunction(dataelementExample544)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.detail.revenue.json", () => {
		 const dataelementExample545 = require("../stu3-resources/DataElement-ClaimResponse.addItem.detail.revenue.json");
		 expect(dataelementValidateFunction(dataelementExample545)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.detail.service.json", () => {
		 const dataelementExample546 = require("../stu3-resources/DataElement-ClaimResponse.addItem.detail.service.json");
		 expect(dataelementValidateFunction(dataelementExample546)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.fee.json", () => {
		 const dataelementExample547 = require("../stu3-resources/DataElement-ClaimResponse.addItem.fee.json");
		 expect(dataelementValidateFunction(dataelementExample547)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.json", () => {
		 const dataelementExample548 = require("../stu3-resources/DataElement-ClaimResponse.addItem.json");
		 expect(dataelementValidateFunction(dataelementExample548)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.modifier.json", () => {
		 const dataelementExample549 = require("../stu3-resources/DataElement-ClaimResponse.addItem.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample549)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.noteNumber.json", () => {
		 const dataelementExample550 = require("../stu3-resources/DataElement-ClaimResponse.addItem.noteNumber.json");
		 expect(dataelementValidateFunction(dataelementExample550)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.revenue.json", () => {
		 const dataelementExample551 = require("../stu3-resources/DataElement-ClaimResponse.addItem.revenue.json");
		 expect(dataelementValidateFunction(dataelementExample551)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.sequenceLinkId.json", () => {
		 const dataelementExample552 = require("../stu3-resources/DataElement-ClaimResponse.addItem.sequenceLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample552)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.addItem.service.json", () => {
		 const dataelementExample553 = require("../stu3-resources/DataElement-ClaimResponse.addItem.service.json");
		 expect(dataelementValidateFunction(dataelementExample553)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.communicationRequest.json", () => {
		 const dataelementExample554 = require("../stu3-resources/DataElement-ClaimResponse.communicationRequest.json");
		 expect(dataelementValidateFunction(dataelementExample554)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.created.json", () => {
		 const dataelementExample555 = require("../stu3-resources/DataElement-ClaimResponse.created.json");
		 expect(dataelementValidateFunction(dataelementExample555)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.disposition.json", () => {
		 const dataelementExample556 = require("../stu3-resources/DataElement-ClaimResponse.disposition.json");
		 expect(dataelementValidateFunction(dataelementExample556)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.error.code.json", () => {
		 const dataelementExample557 = require("../stu3-resources/DataElement-ClaimResponse.error.code.json");
		 expect(dataelementValidateFunction(dataelementExample557)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.error.detailSequenceLinkId.json", () => {
		 const dataelementExample558 = require("../stu3-resources/DataElement-ClaimResponse.error.detailSequenceLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample558)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.error.json", () => {
		 const dataelementExample559 = require("../stu3-resources/DataElement-ClaimResponse.error.json");
		 expect(dataelementValidateFunction(dataelementExample559)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.error.sequenceLinkId.json", () => {
		 const dataelementExample560 = require("../stu3-resources/DataElement-ClaimResponse.error.sequenceLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample560)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.error.subdetailSequenceLinkId.json", () => {
		 const dataelementExample561 = require("../stu3-resources/DataElement-ClaimResponse.error.subdetailSequenceLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample561)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.form.json", () => {
		 const dataelementExample562 = require("../stu3-resources/DataElement-ClaimResponse.form.json");
		 expect(dataelementValidateFunction(dataelementExample562)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.identifier.json", () => {
		 const dataelementExample563 = require("../stu3-resources/DataElement-ClaimResponse.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample563)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.insurance.businessArrangement.json", () => {
		 const dataelementExample564 = require("../stu3-resources/DataElement-ClaimResponse.insurance.businessArrangement.json");
		 expect(dataelementValidateFunction(dataelementExample564)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.insurance.claimResponse.json", () => {
		 const dataelementExample565 = require("../stu3-resources/DataElement-ClaimResponse.insurance.claimResponse.json");
		 expect(dataelementValidateFunction(dataelementExample565)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.insurance.coverage.json", () => {
		 const dataelementExample566 = require("../stu3-resources/DataElement-ClaimResponse.insurance.coverage.json");
		 expect(dataelementValidateFunction(dataelementExample566)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.insurance.focal.json", () => {
		 const dataelementExample567 = require("../stu3-resources/DataElement-ClaimResponse.insurance.focal.json");
		 expect(dataelementValidateFunction(dataelementExample567)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.insurance.json", () => {
		 const dataelementExample568 = require("../stu3-resources/DataElement-ClaimResponse.insurance.json");
		 expect(dataelementValidateFunction(dataelementExample568)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.insurance.preAuthRef.json", () => {
		 const dataelementExample569 = require("../stu3-resources/DataElement-ClaimResponse.insurance.preAuthRef.json");
		 expect(dataelementValidateFunction(dataelementExample569)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.insurance.sequence.json", () => {
		 const dataelementExample570 = require("../stu3-resources/DataElement-ClaimResponse.insurance.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample570)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.insurer.json", () => {
		 const dataelementExample571 = require("../stu3-resources/DataElement-ClaimResponse.insurer.json");
		 expect(dataelementValidateFunction(dataelementExample571)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.adjudication.amount.json", () => {
		 const dataelementExample572 = require("../stu3-resources/DataElement-ClaimResponse.item.adjudication.amount.json");
		 expect(dataelementValidateFunction(dataelementExample572)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.adjudication.category.json", () => {
		 const dataelementExample573 = require("../stu3-resources/DataElement-ClaimResponse.item.adjudication.category.json");
		 expect(dataelementValidateFunction(dataelementExample573)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.adjudication.json", () => {
		 const dataelementExample574 = require("../stu3-resources/DataElement-ClaimResponse.item.adjudication.json");
		 expect(dataelementValidateFunction(dataelementExample574)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.adjudication.reason.json", () => {
		 const dataelementExample575 = require("../stu3-resources/DataElement-ClaimResponse.item.adjudication.reason.json");
		 expect(dataelementValidateFunction(dataelementExample575)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.adjudication.value.json", () => {
		 const dataelementExample576 = require("../stu3-resources/DataElement-ClaimResponse.item.adjudication.value.json");
		 expect(dataelementValidateFunction(dataelementExample576)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.detail.adjudication.json", () => {
		 const dataelementExample577 = require("../stu3-resources/DataElement-ClaimResponse.item.detail.adjudication.json");
		 expect(dataelementValidateFunction(dataelementExample577)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.detail.json", () => {
		 const dataelementExample578 = require("../stu3-resources/DataElement-ClaimResponse.item.detail.json");
		 expect(dataelementValidateFunction(dataelementExample578)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.detail.noteNumber.json", () => {
		 const dataelementExample579 = require("../stu3-resources/DataElement-ClaimResponse.item.detail.noteNumber.json");
		 expect(dataelementValidateFunction(dataelementExample579)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.detail.sequenceLinkId.json", () => {
		 const dataelementExample580 = require("../stu3-resources/DataElement-ClaimResponse.item.detail.sequenceLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample580)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.detail.subDetail.adjudication.json", () => {
		 const dataelementExample581 = require("../stu3-resources/DataElement-ClaimResponse.item.detail.subDetail.adjudication.json");
		 expect(dataelementValidateFunction(dataelementExample581)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.detail.subDetail.json", () => {
		 const dataelementExample582 = require("../stu3-resources/DataElement-ClaimResponse.item.detail.subDetail.json");
		 expect(dataelementValidateFunction(dataelementExample582)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.detail.subDetail.noteNumber.json", () => {
		 const dataelementExample583 = require("../stu3-resources/DataElement-ClaimResponse.item.detail.subDetail.noteNumber.json");
		 expect(dataelementValidateFunction(dataelementExample583)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.detail.subDetail.sequenceLinkId.json", () => {
		 const dataelementExample584 = require("../stu3-resources/DataElement-ClaimResponse.item.detail.subDetail.sequenceLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample584)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.json", () => {
		 const dataelementExample585 = require("../stu3-resources/DataElement-ClaimResponse.item.json");
		 expect(dataelementValidateFunction(dataelementExample585)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.noteNumber.json", () => {
		 const dataelementExample586 = require("../stu3-resources/DataElement-ClaimResponse.item.noteNumber.json");
		 expect(dataelementValidateFunction(dataelementExample586)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.item.sequenceLinkId.json", () => {
		 const dataelementExample587 = require("../stu3-resources/DataElement-ClaimResponse.item.sequenceLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample587)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.json", () => {
		 const dataelementExample588 = require("../stu3-resources/DataElement-ClaimResponse.json");
		 expect(dataelementValidateFunction(dataelementExample588)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.outcome.json", () => {
		 const dataelementExample589 = require("../stu3-resources/DataElement-ClaimResponse.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample589)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.patient.json", () => {
		 const dataelementExample590 = require("../stu3-resources/DataElement-ClaimResponse.patient.json");
		 expect(dataelementValidateFunction(dataelementExample590)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.payeeType.json", () => {
		 const dataelementExample591 = require("../stu3-resources/DataElement-ClaimResponse.payeeType.json");
		 expect(dataelementValidateFunction(dataelementExample591)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.payment.adjustment.json", () => {
		 const dataelementExample592 = require("../stu3-resources/DataElement-ClaimResponse.payment.adjustment.json");
		 expect(dataelementValidateFunction(dataelementExample592)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.payment.adjustmentReason.json", () => {
		 const dataelementExample593 = require("../stu3-resources/DataElement-ClaimResponse.payment.adjustmentReason.json");
		 expect(dataelementValidateFunction(dataelementExample593)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.payment.amount.json", () => {
		 const dataelementExample594 = require("../stu3-resources/DataElement-ClaimResponse.payment.amount.json");
		 expect(dataelementValidateFunction(dataelementExample594)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.payment.date.json", () => {
		 const dataelementExample595 = require("../stu3-resources/DataElement-ClaimResponse.payment.date.json");
		 expect(dataelementValidateFunction(dataelementExample595)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.payment.identifier.json", () => {
		 const dataelementExample596 = require("../stu3-resources/DataElement-ClaimResponse.payment.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample596)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.payment.json", () => {
		 const dataelementExample597 = require("../stu3-resources/DataElement-ClaimResponse.payment.json");
		 expect(dataelementValidateFunction(dataelementExample597)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.payment.type.json", () => {
		 const dataelementExample598 = require("../stu3-resources/DataElement-ClaimResponse.payment.type.json");
		 expect(dataelementValidateFunction(dataelementExample598)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.processNote.json", () => {
		 const dataelementExample599 = require("../stu3-resources/DataElement-ClaimResponse.processNote.json");
		 expect(dataelementValidateFunction(dataelementExample599)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.processNote.language.json", () => {
		 const dataelementExample600 = require("../stu3-resources/DataElement-ClaimResponse.processNote.language.json");
		 expect(dataelementValidateFunction(dataelementExample600)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.processNote.number.json", () => {
		 const dataelementExample601 = require("../stu3-resources/DataElement-ClaimResponse.processNote.number.json");
		 expect(dataelementValidateFunction(dataelementExample601)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.processNote.text.json", () => {
		 const dataelementExample602 = require("../stu3-resources/DataElement-ClaimResponse.processNote.text.json");
		 expect(dataelementValidateFunction(dataelementExample602)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.processNote.type.json", () => {
		 const dataelementExample603 = require("../stu3-resources/DataElement-ClaimResponse.processNote.type.json");
		 expect(dataelementValidateFunction(dataelementExample603)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.request.json", () => {
		 const dataelementExample604 = require("../stu3-resources/DataElement-ClaimResponse.request.json");
		 expect(dataelementValidateFunction(dataelementExample604)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.requestOrganization.json", () => {
		 const dataelementExample605 = require("../stu3-resources/DataElement-ClaimResponse.requestOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample605)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.requestProvider.json", () => {
		 const dataelementExample606 = require("../stu3-resources/DataElement-ClaimResponse.requestProvider.json");
		 expect(dataelementValidateFunction(dataelementExample606)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.reserved.json", () => {
		 const dataelementExample607 = require("../stu3-resources/DataElement-ClaimResponse.reserved.json");
		 expect(dataelementValidateFunction(dataelementExample607)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.status.json", () => {
		 const dataelementExample608 = require("../stu3-resources/DataElement-ClaimResponse.status.json");
		 expect(dataelementValidateFunction(dataelementExample608)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.totalBenefit.json", () => {
		 const dataelementExample609 = require("../stu3-resources/DataElement-ClaimResponse.totalBenefit.json");
		 expect(dataelementValidateFunction(dataelementExample609)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.totalCost.json", () => {
		 const dataelementExample610 = require("../stu3-resources/DataElement-ClaimResponse.totalCost.json");
		 expect(dataelementValidateFunction(dataelementExample610)).toBe(true);
	 });

	 test("validate DataElement-ClaimResponse.unallocDeductable.json", () => {
		 const dataelementExample611 = require("../stu3-resources/DataElement-ClaimResponse.unallocDeductable.json");
		 expect(dataelementValidateFunction(dataelementExample611)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.action.json", () => {
		 const dataelementExample612 = require("../stu3-resources/DataElement-ClinicalImpression.action.json");
		 expect(dataelementValidateFunction(dataelementExample612)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.assessor.json", () => {
		 const dataelementExample613 = require("../stu3-resources/DataElement-ClinicalImpression.assessor.json");
		 expect(dataelementValidateFunction(dataelementExample613)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.code.json", () => {
		 const dataelementExample614 = require("../stu3-resources/DataElement-ClinicalImpression.code.json");
		 expect(dataelementValidateFunction(dataelementExample614)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.context.json", () => {
		 const dataelementExample615 = require("../stu3-resources/DataElement-ClinicalImpression.context.json");
		 expect(dataelementValidateFunction(dataelementExample615)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.date.json", () => {
		 const dataelementExample616 = require("../stu3-resources/DataElement-ClinicalImpression.date.json");
		 expect(dataelementValidateFunction(dataelementExample616)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.description.json", () => {
		 const dataelementExample617 = require("../stu3-resources/DataElement-ClinicalImpression.description.json");
		 expect(dataelementValidateFunction(dataelementExample617)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.effectiveX.json", () => {
		 const dataelementExample618 = require("../stu3-resources/DataElement-ClinicalImpression.effectiveX.json");
		 expect(dataelementValidateFunction(dataelementExample618)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.finding.basis.json", () => {
		 const dataelementExample619 = require("../stu3-resources/DataElement-ClinicalImpression.finding.basis.json");
		 expect(dataelementValidateFunction(dataelementExample619)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.finding.itemX.json", () => {
		 const dataelementExample620 = require("../stu3-resources/DataElement-ClinicalImpression.finding.itemX.json");
		 expect(dataelementValidateFunction(dataelementExample620)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.finding.json", () => {
		 const dataelementExample621 = require("../stu3-resources/DataElement-ClinicalImpression.finding.json");
		 expect(dataelementValidateFunction(dataelementExample621)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.identifier.json", () => {
		 const dataelementExample622 = require("../stu3-resources/DataElement-ClinicalImpression.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample622)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.investigation.code.json", () => {
		 const dataelementExample623 = require("../stu3-resources/DataElement-ClinicalImpression.investigation.code.json");
		 expect(dataelementValidateFunction(dataelementExample623)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.investigation.item.json", () => {
		 const dataelementExample624 = require("../stu3-resources/DataElement-ClinicalImpression.investigation.item.json");
		 expect(dataelementValidateFunction(dataelementExample624)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.investigation.json", () => {
		 const dataelementExample625 = require("../stu3-resources/DataElement-ClinicalImpression.investigation.json");
		 expect(dataelementValidateFunction(dataelementExample625)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.json", () => {
		 const dataelementExample626 = require("../stu3-resources/DataElement-ClinicalImpression.json");
		 expect(dataelementValidateFunction(dataelementExample626)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.note.json", () => {
		 const dataelementExample627 = require("../stu3-resources/DataElement-ClinicalImpression.note.json");
		 expect(dataelementValidateFunction(dataelementExample627)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.previous.json", () => {
		 const dataelementExample628 = require("../stu3-resources/DataElement-ClinicalImpression.previous.json");
		 expect(dataelementValidateFunction(dataelementExample628)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.problem.json", () => {
		 const dataelementExample629 = require("../stu3-resources/DataElement-ClinicalImpression.problem.json");
		 expect(dataelementValidateFunction(dataelementExample629)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.prognosisCodeableConcept.json", () => {
		 const dataelementExample630 = require("../stu3-resources/DataElement-ClinicalImpression.prognosisCodeableConcept.json");
		 expect(dataelementValidateFunction(dataelementExample630)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.prognosisReference.json", () => {
		 const dataelementExample631 = require("../stu3-resources/DataElement-ClinicalImpression.prognosisReference.json");
		 expect(dataelementValidateFunction(dataelementExample631)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.protocol.json", () => {
		 const dataelementExample632 = require("../stu3-resources/DataElement-ClinicalImpression.protocol.json");
		 expect(dataelementValidateFunction(dataelementExample632)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.status.json", () => {
		 const dataelementExample633 = require("../stu3-resources/DataElement-ClinicalImpression.status.json");
		 expect(dataelementValidateFunction(dataelementExample633)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.subject.json", () => {
		 const dataelementExample634 = require("../stu3-resources/DataElement-ClinicalImpression.subject.json");
		 expect(dataelementValidateFunction(dataelementExample634)).toBe(true);
	 });

	 test("validate DataElement-ClinicalImpression.summary.json", () => {
		 const dataelementExample635 = require("../stu3-resources/DataElement-ClinicalImpression.summary.json");
		 expect(dataelementValidateFunction(dataelementExample635)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.caseSensitive.json", () => {
		 const dataelementExample636 = require("../stu3-resources/DataElement-CodeSystem.caseSensitive.json");
		 expect(dataelementValidateFunction(dataelementExample636)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.compositional.json", () => {
		 const dataelementExample637 = require("../stu3-resources/DataElement-CodeSystem.compositional.json");
		 expect(dataelementValidateFunction(dataelementExample637)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.code.json", () => {
		 const dataelementExample638 = require("../stu3-resources/DataElement-CodeSystem.concept.code.json");
		 expect(dataelementValidateFunction(dataelementExample638)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.concept.json", () => {
		 const dataelementExample639 = require("../stu3-resources/DataElement-CodeSystem.concept.concept.json");
		 expect(dataelementValidateFunction(dataelementExample639)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.definition.json", () => {
		 const dataelementExample640 = require("../stu3-resources/DataElement-CodeSystem.concept.definition.json");
		 expect(dataelementValidateFunction(dataelementExample640)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.designation.json", () => {
		 const dataelementExample641 = require("../stu3-resources/DataElement-CodeSystem.concept.designation.json");
		 expect(dataelementValidateFunction(dataelementExample641)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.designation.language.json", () => {
		 const dataelementExample642 = require("../stu3-resources/DataElement-CodeSystem.concept.designation.language.json");
		 expect(dataelementValidateFunction(dataelementExample642)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.designation.use.json", () => {
		 const dataelementExample643 = require("../stu3-resources/DataElement-CodeSystem.concept.designation.use.json");
		 expect(dataelementValidateFunction(dataelementExample643)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.designation.value.json", () => {
		 const dataelementExample644 = require("../stu3-resources/DataElement-CodeSystem.concept.designation.value.json");
		 expect(dataelementValidateFunction(dataelementExample644)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.display.json", () => {
		 const dataelementExample645 = require("../stu3-resources/DataElement-CodeSystem.concept.display.json");
		 expect(dataelementValidateFunction(dataelementExample645)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.json", () => {
		 const dataelementExample646 = require("../stu3-resources/DataElement-CodeSystem.concept.json");
		 expect(dataelementValidateFunction(dataelementExample646)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.property.code.json", () => {
		 const dataelementExample647 = require("../stu3-resources/DataElement-CodeSystem.concept.property.code.json");
		 expect(dataelementValidateFunction(dataelementExample647)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.property.json", () => {
		 const dataelementExample648 = require("../stu3-resources/DataElement-CodeSystem.concept.property.json");
		 expect(dataelementValidateFunction(dataelementExample648)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.concept.property.valueX.json", () => {
		 const dataelementExample649 = require("../stu3-resources/DataElement-CodeSystem.concept.property.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample649)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.contact.json", () => {
		 const dataelementExample650 = require("../stu3-resources/DataElement-CodeSystem.contact.json");
		 expect(dataelementValidateFunction(dataelementExample650)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.content.json", () => {
		 const dataelementExample651 = require("../stu3-resources/DataElement-CodeSystem.content.json");
		 expect(dataelementValidateFunction(dataelementExample651)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.copyright.json", () => {
		 const dataelementExample652 = require("../stu3-resources/DataElement-CodeSystem.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample652)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.count.json", () => {
		 const dataelementExample653 = require("../stu3-resources/DataElement-CodeSystem.count.json");
		 expect(dataelementValidateFunction(dataelementExample653)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.date.json", () => {
		 const dataelementExample654 = require("../stu3-resources/DataElement-CodeSystem.date.json");
		 expect(dataelementValidateFunction(dataelementExample654)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.description.json", () => {
		 const dataelementExample655 = require("../stu3-resources/DataElement-CodeSystem.description.json");
		 expect(dataelementValidateFunction(dataelementExample655)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.experimental.json", () => {
		 const dataelementExample656 = require("../stu3-resources/DataElement-CodeSystem.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample656)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.filter.code.json", () => {
		 const dataelementExample657 = require("../stu3-resources/DataElement-CodeSystem.filter.code.json");
		 expect(dataelementValidateFunction(dataelementExample657)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.filter.description.json", () => {
		 const dataelementExample658 = require("../stu3-resources/DataElement-CodeSystem.filter.description.json");
		 expect(dataelementValidateFunction(dataelementExample658)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.filter.json", () => {
		 const dataelementExample659 = require("../stu3-resources/DataElement-CodeSystem.filter.json");
		 expect(dataelementValidateFunction(dataelementExample659)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.filter.operator.json", () => {
		 const dataelementExample660 = require("../stu3-resources/DataElement-CodeSystem.filter.operator.json");
		 expect(dataelementValidateFunction(dataelementExample660)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.filter.value.json", () => {
		 const dataelementExample661 = require("../stu3-resources/DataElement-CodeSystem.filter.value.json");
		 expect(dataelementValidateFunction(dataelementExample661)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.hierarchyMeaning.json", () => {
		 const dataelementExample662 = require("../stu3-resources/DataElement-CodeSystem.hierarchyMeaning.json");
		 expect(dataelementValidateFunction(dataelementExample662)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.identifier.json", () => {
		 const dataelementExample663 = require("../stu3-resources/DataElement-CodeSystem.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample663)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.json", () => {
		 const dataelementExample664 = require("../stu3-resources/DataElement-CodeSystem.json");
		 expect(dataelementValidateFunction(dataelementExample664)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.jurisdiction.json", () => {
		 const dataelementExample665 = require("../stu3-resources/DataElement-CodeSystem.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample665)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.name.json", () => {
		 const dataelementExample666 = require("../stu3-resources/DataElement-CodeSystem.name.json");
		 expect(dataelementValidateFunction(dataelementExample666)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.property.code.json", () => {
		 const dataelementExample667 = require("../stu3-resources/DataElement-CodeSystem.property.code.json");
		 expect(dataelementValidateFunction(dataelementExample667)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.property.description.json", () => {
		 const dataelementExample668 = require("../stu3-resources/DataElement-CodeSystem.property.description.json");
		 expect(dataelementValidateFunction(dataelementExample668)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.property.json", () => {
		 const dataelementExample669 = require("../stu3-resources/DataElement-CodeSystem.property.json");
		 expect(dataelementValidateFunction(dataelementExample669)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.property.type.json", () => {
		 const dataelementExample670 = require("../stu3-resources/DataElement-CodeSystem.property.type.json");
		 expect(dataelementValidateFunction(dataelementExample670)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.property.uri.json", () => {
		 const dataelementExample671 = require("../stu3-resources/DataElement-CodeSystem.property.uri.json");
		 expect(dataelementValidateFunction(dataelementExample671)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.publisher.json", () => {
		 const dataelementExample672 = require("../stu3-resources/DataElement-CodeSystem.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample672)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.purpose.json", () => {
		 const dataelementExample673 = require("../stu3-resources/DataElement-CodeSystem.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample673)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.status.json", () => {
		 const dataelementExample674 = require("../stu3-resources/DataElement-CodeSystem.status.json");
		 expect(dataelementValidateFunction(dataelementExample674)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.title.json", () => {
		 const dataelementExample675 = require("../stu3-resources/DataElement-CodeSystem.title.json");
		 expect(dataelementValidateFunction(dataelementExample675)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.url.json", () => {
		 const dataelementExample676 = require("../stu3-resources/DataElement-CodeSystem.url.json");
		 expect(dataelementValidateFunction(dataelementExample676)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.useContext.json", () => {
		 const dataelementExample677 = require("../stu3-resources/DataElement-CodeSystem.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample677)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.valueSet.json", () => {
		 const dataelementExample678 = require("../stu3-resources/DataElement-CodeSystem.valueSet.json");
		 expect(dataelementValidateFunction(dataelementExample678)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.version.json", () => {
		 const dataelementExample679 = require("../stu3-resources/DataElement-CodeSystem.version.json");
		 expect(dataelementValidateFunction(dataelementExample679)).toBe(true);
	 });

	 test("validate DataElement-CodeSystem.versionNeeded.json", () => {
		 const dataelementExample680 = require("../stu3-resources/DataElement-CodeSystem.versionNeeded.json");
		 expect(dataelementValidateFunction(dataelementExample680)).toBe(true);
	 });

	 test("validate DataElement-CodeableConcept.coding.json", () => {
		 const dataelementExample681 = require("../stu3-resources/DataElement-CodeableConcept.coding.json");
		 expect(dataelementValidateFunction(dataelementExample681)).toBe(true);
	 });

	 test("validate DataElement-CodeableConcept.json", () => {
		 const dataelementExample682 = require("../stu3-resources/DataElement-CodeableConcept.json");
		 expect(dataelementValidateFunction(dataelementExample682)).toBe(true);
	 });

	 test("validate DataElement-CodeableConcept.text.json", () => {
		 const dataelementExample683 = require("../stu3-resources/DataElement-CodeableConcept.text.json");
		 expect(dataelementValidateFunction(dataelementExample683)).toBe(true);
	 });

	 test("validate DataElement-Coding.code.json", () => {
		 const dataelementExample684 = require("../stu3-resources/DataElement-Coding.code.json");
		 expect(dataelementValidateFunction(dataelementExample684)).toBe(true);
	 });

	 test("validate DataElement-Coding.display.json", () => {
		 const dataelementExample685 = require("../stu3-resources/DataElement-Coding.display.json");
		 expect(dataelementValidateFunction(dataelementExample685)).toBe(true);
	 });

	 test("validate DataElement-Coding.json", () => {
		 const dataelementExample686 = require("../stu3-resources/DataElement-Coding.json");
		 expect(dataelementValidateFunction(dataelementExample686)).toBe(true);
	 });

	 test("validate DataElement-Coding.system.json", () => {
		 const dataelementExample687 = require("../stu3-resources/DataElement-Coding.system.json");
		 expect(dataelementValidateFunction(dataelementExample687)).toBe(true);
	 });

	 test("validate DataElement-Coding.userSelected.json", () => {
		 const dataelementExample688 = require("../stu3-resources/DataElement-Coding.userSelected.json");
		 expect(dataelementValidateFunction(dataelementExample688)).toBe(true);
	 });

	 test("validate DataElement-Coding.version.json", () => {
		 const dataelementExample689 = require("../stu3-resources/DataElement-Coding.version.json");
		 expect(dataelementValidateFunction(dataelementExample689)).toBe(true);
	 });

	 test("validate DataElement-Communication.basedOn.json", () => {
		 const dataelementExample690 = require("../stu3-resources/DataElement-Communication.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample690)).toBe(true);
	 });

	 test("validate DataElement-Communication.category.json", () => {
		 const dataelementExample691 = require("../stu3-resources/DataElement-Communication.category.json");
		 expect(dataelementValidateFunction(dataelementExample691)).toBe(true);
	 });

	 test("validate DataElement-Communication.context.json", () => {
		 const dataelementExample692 = require("../stu3-resources/DataElement-Communication.context.json");
		 expect(dataelementValidateFunction(dataelementExample692)).toBe(true);
	 });

	 test("validate DataElement-Communication.definition.json", () => {
		 const dataelementExample693 = require("../stu3-resources/DataElement-Communication.definition.json");
		 expect(dataelementValidateFunction(dataelementExample693)).toBe(true);
	 });

	 test("validate DataElement-Communication.identifier.json", () => {
		 const dataelementExample694 = require("../stu3-resources/DataElement-Communication.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample694)).toBe(true);
	 });

	 test("validate DataElement-Communication.json", () => {
		 const dataelementExample695 = require("../stu3-resources/DataElement-Communication.json");
		 expect(dataelementValidateFunction(dataelementExample695)).toBe(true);
	 });

	 test("validate DataElement-Communication.medium.json", () => {
		 const dataelementExample696 = require("../stu3-resources/DataElement-Communication.medium.json");
		 expect(dataelementValidateFunction(dataelementExample696)).toBe(true);
	 });

	 test("validate DataElement-Communication.notDone.json", () => {
		 const dataelementExample697 = require("../stu3-resources/DataElement-Communication.notDone.json");
		 expect(dataelementValidateFunction(dataelementExample697)).toBe(true);
	 });

	 test("validate DataElement-Communication.notDoneReason.json", () => {
		 const dataelementExample698 = require("../stu3-resources/DataElement-Communication.notDoneReason.json");
		 expect(dataelementValidateFunction(dataelementExample698)).toBe(true);
	 });

	 test("validate DataElement-Communication.note.json", () => {
		 const dataelementExample699 = require("../stu3-resources/DataElement-Communication.note.json");
		 expect(dataelementValidateFunction(dataelementExample699)).toBe(true);
	 });

	 test("validate DataElement-Communication.partOf.json", () => {
		 const dataelementExample700 = require("../stu3-resources/DataElement-Communication.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample700)).toBe(true);
	 });

	 test("validate DataElement-Communication.payload.contentX.json", () => {
		 const dataelementExample701 = require("../stu3-resources/DataElement-Communication.payload.contentX.json");
		 expect(dataelementValidateFunction(dataelementExample701)).toBe(true);
	 });

	 test("validate DataElement-Communication.payload.json", () => {
		 const dataelementExample702 = require("../stu3-resources/DataElement-Communication.payload.json");
		 expect(dataelementValidateFunction(dataelementExample702)).toBe(true);
	 });

	 test("validate DataElement-Communication.reasonCode.json", () => {
		 const dataelementExample703 = require("../stu3-resources/DataElement-Communication.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample703)).toBe(true);
	 });

	 test("validate DataElement-Communication.reasonReference.json", () => {
		 const dataelementExample704 = require("../stu3-resources/DataElement-Communication.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample704)).toBe(true);
	 });

	 test("validate DataElement-Communication.received.json", () => {
		 const dataelementExample705 = require("../stu3-resources/DataElement-Communication.received.json");
		 expect(dataelementValidateFunction(dataelementExample705)).toBe(true);
	 });

	 test("validate DataElement-Communication.recipient.json", () => {
		 const dataelementExample706 = require("../stu3-resources/DataElement-Communication.recipient.json");
		 expect(dataelementValidateFunction(dataelementExample706)).toBe(true);
	 });

	 test("validate DataElement-Communication.sender.json", () => {
		 const dataelementExample707 = require("../stu3-resources/DataElement-Communication.sender.json");
		 expect(dataelementValidateFunction(dataelementExample707)).toBe(true);
	 });

	 test("validate DataElement-Communication.sent.json", () => {
		 const dataelementExample708 = require("../stu3-resources/DataElement-Communication.sent.json");
		 expect(dataelementValidateFunction(dataelementExample708)).toBe(true);
	 });

	 test("validate DataElement-Communication.status.json", () => {
		 const dataelementExample709 = require("../stu3-resources/DataElement-Communication.status.json");
		 expect(dataelementValidateFunction(dataelementExample709)).toBe(true);
	 });

	 test("validate DataElement-Communication.subject.json", () => {
		 const dataelementExample710 = require("../stu3-resources/DataElement-Communication.subject.json");
		 expect(dataelementValidateFunction(dataelementExample710)).toBe(true);
	 });

	 test("validate DataElement-Communication.topic.json", () => {
		 const dataelementExample711 = require("../stu3-resources/DataElement-Communication.topic.json");
		 expect(dataelementValidateFunction(dataelementExample711)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.authoredOn.json", () => {
		 const dataelementExample712 = require("../stu3-resources/DataElement-CommunicationRequest.authoredOn.json");
		 expect(dataelementValidateFunction(dataelementExample712)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.basedOn.json", () => {
		 const dataelementExample713 = require("../stu3-resources/DataElement-CommunicationRequest.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample713)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.category.json", () => {
		 const dataelementExample714 = require("../stu3-resources/DataElement-CommunicationRequest.category.json");
		 expect(dataelementValidateFunction(dataelementExample714)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.context.json", () => {
		 const dataelementExample715 = require("../stu3-resources/DataElement-CommunicationRequest.context.json");
		 expect(dataelementValidateFunction(dataelementExample715)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.groupIdentifier.json", () => {
		 const dataelementExample716 = require("../stu3-resources/DataElement-CommunicationRequest.groupIdentifier.json");
		 expect(dataelementValidateFunction(dataelementExample716)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.identifier.json", () => {
		 const dataelementExample717 = require("../stu3-resources/DataElement-CommunicationRequest.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample717)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.json", () => {
		 const dataelementExample718 = require("../stu3-resources/DataElement-CommunicationRequest.json");
		 expect(dataelementValidateFunction(dataelementExample718)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.medium.json", () => {
		 const dataelementExample719 = require("../stu3-resources/DataElement-CommunicationRequest.medium.json");
		 expect(dataelementValidateFunction(dataelementExample719)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.note.json", () => {
		 const dataelementExample720 = require("../stu3-resources/DataElement-CommunicationRequest.note.json");
		 expect(dataelementValidateFunction(dataelementExample720)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.occurrenceX.json", () => {
		 const dataelementExample721 = require("../stu3-resources/DataElement-CommunicationRequest.occurrenceX.json");
		 expect(dataelementValidateFunction(dataelementExample721)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.payload.contentX.json", () => {
		 const dataelementExample722 = require("../stu3-resources/DataElement-CommunicationRequest.payload.contentX.json");
		 expect(dataelementValidateFunction(dataelementExample722)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.payload.json", () => {
		 const dataelementExample723 = require("../stu3-resources/DataElement-CommunicationRequest.payload.json");
		 expect(dataelementValidateFunction(dataelementExample723)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.priority.json", () => {
		 const dataelementExample724 = require("../stu3-resources/DataElement-CommunicationRequest.priority.json");
		 expect(dataelementValidateFunction(dataelementExample724)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.reasonCode.json", () => {
		 const dataelementExample725 = require("../stu3-resources/DataElement-CommunicationRequest.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample725)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.reasonReference.json", () => {
		 const dataelementExample726 = require("../stu3-resources/DataElement-CommunicationRequest.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample726)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.recipient.json", () => {
		 const dataelementExample727 = require("../stu3-resources/DataElement-CommunicationRequest.recipient.json");
		 expect(dataelementValidateFunction(dataelementExample727)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.replaces.json", () => {
		 const dataelementExample728 = require("../stu3-resources/DataElement-CommunicationRequest.replaces.json");
		 expect(dataelementValidateFunction(dataelementExample728)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.requester.agent.json", () => {
		 const dataelementExample729 = require("../stu3-resources/DataElement-CommunicationRequest.requester.agent.json");
		 expect(dataelementValidateFunction(dataelementExample729)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.requester.json", () => {
		 const dataelementExample730 = require("../stu3-resources/DataElement-CommunicationRequest.requester.json");
		 expect(dataelementValidateFunction(dataelementExample730)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.requester.onBehalfOf.json", () => {
		 const dataelementExample731 = require("../stu3-resources/DataElement-CommunicationRequest.requester.onBehalfOf.json");
		 expect(dataelementValidateFunction(dataelementExample731)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.sender.json", () => {
		 const dataelementExample732 = require("../stu3-resources/DataElement-CommunicationRequest.sender.json");
		 expect(dataelementValidateFunction(dataelementExample732)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.status.json", () => {
		 const dataelementExample733 = require("../stu3-resources/DataElement-CommunicationRequest.status.json");
		 expect(dataelementValidateFunction(dataelementExample733)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.subject.json", () => {
		 const dataelementExample734 = require("../stu3-resources/DataElement-CommunicationRequest.subject.json");
		 expect(dataelementValidateFunction(dataelementExample734)).toBe(true);
	 });

	 test("validate DataElement-CommunicationRequest.topic.json", () => {
		 const dataelementExample735 = require("../stu3-resources/DataElement-CommunicationRequest.topic.json");
		 expect(dataelementValidateFunction(dataelementExample735)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.code.json", () => {
		 const dataelementExample736 = require("../stu3-resources/DataElement-CompartmentDefinition.code.json");
		 expect(dataelementValidateFunction(dataelementExample736)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.contact.json", () => {
		 const dataelementExample737 = require("../stu3-resources/DataElement-CompartmentDefinition.contact.json");
		 expect(dataelementValidateFunction(dataelementExample737)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.date.json", () => {
		 const dataelementExample738 = require("../stu3-resources/DataElement-CompartmentDefinition.date.json");
		 expect(dataelementValidateFunction(dataelementExample738)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.description.json", () => {
		 const dataelementExample739 = require("../stu3-resources/DataElement-CompartmentDefinition.description.json");
		 expect(dataelementValidateFunction(dataelementExample739)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.experimental.json", () => {
		 const dataelementExample740 = require("../stu3-resources/DataElement-CompartmentDefinition.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample740)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.json", () => {
		 const dataelementExample741 = require("../stu3-resources/DataElement-CompartmentDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample741)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.jurisdiction.json", () => {
		 const dataelementExample742 = require("../stu3-resources/DataElement-CompartmentDefinition.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample742)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.name.json", () => {
		 const dataelementExample743 = require("../stu3-resources/DataElement-CompartmentDefinition.name.json");
		 expect(dataelementValidateFunction(dataelementExample743)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.publisher.json", () => {
		 const dataelementExample744 = require("../stu3-resources/DataElement-CompartmentDefinition.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample744)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.purpose.json", () => {
		 const dataelementExample745 = require("../stu3-resources/DataElement-CompartmentDefinition.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample745)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.resource.code.json", () => {
		 const dataelementExample746 = require("../stu3-resources/DataElement-CompartmentDefinition.resource.code.json");
		 expect(dataelementValidateFunction(dataelementExample746)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.resource.documentation.json", () => {
		 const dataelementExample747 = require("../stu3-resources/DataElement-CompartmentDefinition.resource.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample747)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.resource.json", () => {
		 const dataelementExample748 = require("../stu3-resources/DataElement-CompartmentDefinition.resource.json");
		 expect(dataelementValidateFunction(dataelementExample748)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.resource.param.json", () => {
		 const dataelementExample749 = require("../stu3-resources/DataElement-CompartmentDefinition.resource.param.json");
		 expect(dataelementValidateFunction(dataelementExample749)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.search.json", () => {
		 const dataelementExample750 = require("../stu3-resources/DataElement-CompartmentDefinition.search.json");
		 expect(dataelementValidateFunction(dataelementExample750)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.status.json", () => {
		 const dataelementExample751 = require("../stu3-resources/DataElement-CompartmentDefinition.status.json");
		 expect(dataelementValidateFunction(dataelementExample751)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.title.json", () => {
		 const dataelementExample752 = require("../stu3-resources/DataElement-CompartmentDefinition.title.json");
		 expect(dataelementValidateFunction(dataelementExample752)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.url.json", () => {
		 const dataelementExample753 = require("../stu3-resources/DataElement-CompartmentDefinition.url.json");
		 expect(dataelementValidateFunction(dataelementExample753)).toBe(true);
	 });

	 test("validate DataElement-CompartmentDefinition.useContext.json", () => {
		 const dataelementExample754 = require("../stu3-resources/DataElement-CompartmentDefinition.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample754)).toBe(true);
	 });

	 test("validate DataElement-Composition.attester.json", () => {
		 const dataelementExample755 = require("../stu3-resources/DataElement-Composition.attester.json");
		 expect(dataelementValidateFunction(dataelementExample755)).toBe(true);
	 });

	 test("validate DataElement-Composition.attester.mode.json", () => {
		 const dataelementExample756 = require("../stu3-resources/DataElement-Composition.attester.mode.json");
		 expect(dataelementValidateFunction(dataelementExample756)).toBe(true);
	 });

	 test("validate DataElement-Composition.attester.party.json", () => {
		 const dataelementExample757 = require("../stu3-resources/DataElement-Composition.attester.party.json");
		 expect(dataelementValidateFunction(dataelementExample757)).toBe(true);
	 });

	 test("validate DataElement-Composition.attester.time.json", () => {
		 const dataelementExample758 = require("../stu3-resources/DataElement-Composition.attester.time.json");
		 expect(dataelementValidateFunction(dataelementExample758)).toBe(true);
	 });

	 test("validate DataElement-Composition.author.json", () => {
		 const dataelementExample759 = require("../stu3-resources/DataElement-Composition.author.json");
		 expect(dataelementValidateFunction(dataelementExample759)).toBe(true);
	 });

	 test("validate DataElement-Composition.class.json", () => {
		 const dataelementExample760 = require("../stu3-resources/DataElement-Composition.class.json");
		 expect(dataelementValidateFunction(dataelementExample760)).toBe(true);
	 });

	 test("validate DataElement-Composition.confidentiality.json", () => {
		 const dataelementExample761 = require("../stu3-resources/DataElement-Composition.confidentiality.json");
		 expect(dataelementValidateFunction(dataelementExample761)).toBe(true);
	 });

	 test("validate DataElement-Composition.custodian.json", () => {
		 const dataelementExample762 = require("../stu3-resources/DataElement-Composition.custodian.json");
		 expect(dataelementValidateFunction(dataelementExample762)).toBe(true);
	 });

	 test("validate DataElement-Composition.date.json", () => {
		 const dataelementExample763 = require("../stu3-resources/DataElement-Composition.date.json");
		 expect(dataelementValidateFunction(dataelementExample763)).toBe(true);
	 });

	 test("validate DataElement-Composition.encounter.json", () => {
		 const dataelementExample764 = require("../stu3-resources/DataElement-Composition.encounter.json");
		 expect(dataelementValidateFunction(dataelementExample764)).toBe(true);
	 });

	 test("validate DataElement-Composition.event.code.json", () => {
		 const dataelementExample765 = require("../stu3-resources/DataElement-Composition.event.code.json");
		 expect(dataelementValidateFunction(dataelementExample765)).toBe(true);
	 });

	 test("validate DataElement-Composition.event.detail.json", () => {
		 const dataelementExample766 = require("../stu3-resources/DataElement-Composition.event.detail.json");
		 expect(dataelementValidateFunction(dataelementExample766)).toBe(true);
	 });

	 test("validate DataElement-Composition.event.json", () => {
		 const dataelementExample767 = require("../stu3-resources/DataElement-Composition.event.json");
		 expect(dataelementValidateFunction(dataelementExample767)).toBe(true);
	 });

	 test("validate DataElement-Composition.event.period.json", () => {
		 const dataelementExample768 = require("../stu3-resources/DataElement-Composition.event.period.json");
		 expect(dataelementValidateFunction(dataelementExample768)).toBe(true);
	 });

	 test("validate DataElement-Composition.identifier.json", () => {
		 const dataelementExample769 = require("../stu3-resources/DataElement-Composition.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample769)).toBe(true);
	 });

	 test("validate DataElement-Composition.json", () => {
		 const dataelementExample770 = require("../stu3-resources/DataElement-Composition.json");
		 expect(dataelementValidateFunction(dataelementExample770)).toBe(true);
	 });

	 test("validate DataElement-Composition.relatesTo.code.json", () => {
		 const dataelementExample771 = require("../stu3-resources/DataElement-Composition.relatesTo.code.json");
		 expect(dataelementValidateFunction(dataelementExample771)).toBe(true);
	 });

	 test("validate DataElement-Composition.relatesTo.json", () => {
		 const dataelementExample772 = require("../stu3-resources/DataElement-Composition.relatesTo.json");
		 expect(dataelementValidateFunction(dataelementExample772)).toBe(true);
	 });

	 test("validate DataElement-Composition.relatesTo.targetX.json", () => {
		 const dataelementExample773 = require("../stu3-resources/DataElement-Composition.relatesTo.targetX.json");
		 expect(dataelementValidateFunction(dataelementExample773)).toBe(true);
	 });

	 test("validate DataElement-Composition.section.code.json", () => {
		 const dataelementExample774 = require("../stu3-resources/DataElement-Composition.section.code.json");
		 expect(dataelementValidateFunction(dataelementExample774)).toBe(true);
	 });

	 test("validate DataElement-Composition.section.emptyReason.json", () => {
		 const dataelementExample775 = require("../stu3-resources/DataElement-Composition.section.emptyReason.json");
		 expect(dataelementValidateFunction(dataelementExample775)).toBe(true);
	 });

	 test("validate DataElement-Composition.section.entry.json", () => {
		 const dataelementExample776 = require("../stu3-resources/DataElement-Composition.section.entry.json");
		 expect(dataelementValidateFunction(dataelementExample776)).toBe(true);
	 });

	 test("validate DataElement-Composition.section.json", () => {
		 const dataelementExample777 = require("../stu3-resources/DataElement-Composition.section.json");
		 expect(dataelementValidateFunction(dataelementExample777)).toBe(true);
	 });

	 test("validate DataElement-Composition.section.mode.json", () => {
		 const dataelementExample778 = require("../stu3-resources/DataElement-Composition.section.mode.json");
		 expect(dataelementValidateFunction(dataelementExample778)).toBe(true);
	 });

	 test("validate DataElement-Composition.section.orderedBy.json", () => {
		 const dataelementExample779 = require("../stu3-resources/DataElement-Composition.section.orderedBy.json");
		 expect(dataelementValidateFunction(dataelementExample779)).toBe(true);
	 });

	 test("validate DataElement-Composition.section.section.json", () => {
		 const dataelementExample780 = require("../stu3-resources/DataElement-Composition.section.section.json");
		 expect(dataelementValidateFunction(dataelementExample780)).toBe(true);
	 });

	 test("validate DataElement-Composition.section.text.json", () => {
		 const dataelementExample781 = require("../stu3-resources/DataElement-Composition.section.text.json");
		 expect(dataelementValidateFunction(dataelementExample781)).toBe(true);
	 });

	 test("validate DataElement-Composition.section.title.json", () => {
		 const dataelementExample782 = require("../stu3-resources/DataElement-Composition.section.title.json");
		 expect(dataelementValidateFunction(dataelementExample782)).toBe(true);
	 });

	 test("validate DataElement-Composition.status.json", () => {
		 const dataelementExample783 = require("../stu3-resources/DataElement-Composition.status.json");
		 expect(dataelementValidateFunction(dataelementExample783)).toBe(true);
	 });

	 test("validate DataElement-Composition.subject.json", () => {
		 const dataelementExample784 = require("../stu3-resources/DataElement-Composition.subject.json");
		 expect(dataelementValidateFunction(dataelementExample784)).toBe(true);
	 });

	 test("validate DataElement-Composition.title.json", () => {
		 const dataelementExample785 = require("../stu3-resources/DataElement-Composition.title.json");
		 expect(dataelementValidateFunction(dataelementExample785)).toBe(true);
	 });

	 test("validate DataElement-Composition.type.json", () => {
		 const dataelementExample786 = require("../stu3-resources/DataElement-Composition.type.json");
		 expect(dataelementValidateFunction(dataelementExample786)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.contact.json", () => {
		 const dataelementExample787 = require("../stu3-resources/DataElement-ConceptMap.contact.json");
		 expect(dataelementValidateFunction(dataelementExample787)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.copyright.json", () => {
		 const dataelementExample788 = require("../stu3-resources/DataElement-ConceptMap.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample788)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.date.json", () => {
		 const dataelementExample789 = require("../stu3-resources/DataElement-ConceptMap.date.json");
		 expect(dataelementValidateFunction(dataelementExample789)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.description.json", () => {
		 const dataelementExample790 = require("../stu3-resources/DataElement-ConceptMap.description.json");
		 expect(dataelementValidateFunction(dataelementExample790)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.experimental.json", () => {
		 const dataelementExample791 = require("../stu3-resources/DataElement-ConceptMap.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample791)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.code.json", () => {
		 const dataelementExample792 = require("../stu3-resources/DataElement-ConceptMap.group.element.code.json");
		 expect(dataelementValidateFunction(dataelementExample792)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.display.json", () => {
		 const dataelementExample793 = require("../stu3-resources/DataElement-ConceptMap.group.element.display.json");
		 expect(dataelementValidateFunction(dataelementExample793)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.json", () => {
		 const dataelementExample794 = require("../stu3-resources/DataElement-ConceptMap.group.element.json");
		 expect(dataelementValidateFunction(dataelementExample794)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.target.code.json", () => {
		 const dataelementExample795 = require("../stu3-resources/DataElement-ConceptMap.group.element.target.code.json");
		 expect(dataelementValidateFunction(dataelementExample795)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.target.comment.json", () => {
		 const dataelementExample796 = require("../stu3-resources/DataElement-ConceptMap.group.element.target.comment.json");
		 expect(dataelementValidateFunction(dataelementExample796)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.target.dependsOn.code.json", () => {
		 const dataelementExample797 = require("../stu3-resources/DataElement-ConceptMap.group.element.target.dependsOn.code.json");
		 expect(dataelementValidateFunction(dataelementExample797)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.target.dependsOn.display.json", () => {
		 const dataelementExample798 = require("../stu3-resources/DataElement-ConceptMap.group.element.target.dependsOn.display.json");
		 expect(dataelementValidateFunction(dataelementExample798)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.target.dependsOn.json", () => {
		 const dataelementExample799 = require("../stu3-resources/DataElement-ConceptMap.group.element.target.dependsOn.json");
		 expect(dataelementValidateFunction(dataelementExample799)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.target.dependsOn.property.json", () => {
		 const dataelementExample800 = require("../stu3-resources/DataElement-ConceptMap.group.element.target.dependsOn.property.json");
		 expect(dataelementValidateFunction(dataelementExample800)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.target.dependsOn.system.json", () => {
		 const dataelementExample801 = require("../stu3-resources/DataElement-ConceptMap.group.element.target.dependsOn.system.json");
		 expect(dataelementValidateFunction(dataelementExample801)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.target.display.json", () => {
		 const dataelementExample802 = require("../stu3-resources/DataElement-ConceptMap.group.element.target.display.json");
		 expect(dataelementValidateFunction(dataelementExample802)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.target.equivalence.json", () => {
		 const dataelementExample803 = require("../stu3-resources/DataElement-ConceptMap.group.element.target.equivalence.json");
		 expect(dataelementValidateFunction(dataelementExample803)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.target.json", () => {
		 const dataelementExample804 = require("../stu3-resources/DataElement-ConceptMap.group.element.target.json");
		 expect(dataelementValidateFunction(dataelementExample804)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.element.target.product.json", () => {
		 const dataelementExample805 = require("../stu3-resources/DataElement-ConceptMap.group.element.target.product.json");
		 expect(dataelementValidateFunction(dataelementExample805)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.json", () => {
		 const dataelementExample806 = require("../stu3-resources/DataElement-ConceptMap.group.json");
		 expect(dataelementValidateFunction(dataelementExample806)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.source.json", () => {
		 const dataelementExample807 = require("../stu3-resources/DataElement-ConceptMap.group.source.json");
		 expect(dataelementValidateFunction(dataelementExample807)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.sourceVersion.json", () => {
		 const dataelementExample808 = require("../stu3-resources/DataElement-ConceptMap.group.sourceVersion.json");
		 expect(dataelementValidateFunction(dataelementExample808)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.target.json", () => {
		 const dataelementExample809 = require("../stu3-resources/DataElement-ConceptMap.group.target.json");
		 expect(dataelementValidateFunction(dataelementExample809)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.targetVersion.json", () => {
		 const dataelementExample810 = require("../stu3-resources/DataElement-ConceptMap.group.targetVersion.json");
		 expect(dataelementValidateFunction(dataelementExample810)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.unmapped.code.json", () => {
		 const dataelementExample811 = require("../stu3-resources/DataElement-ConceptMap.group.unmapped.code.json");
		 expect(dataelementValidateFunction(dataelementExample811)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.unmapped.display.json", () => {
		 const dataelementExample812 = require("../stu3-resources/DataElement-ConceptMap.group.unmapped.display.json");
		 expect(dataelementValidateFunction(dataelementExample812)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.unmapped.json", () => {
		 const dataelementExample813 = require("../stu3-resources/DataElement-ConceptMap.group.unmapped.json");
		 expect(dataelementValidateFunction(dataelementExample813)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.unmapped.mode.json", () => {
		 const dataelementExample814 = require("../stu3-resources/DataElement-ConceptMap.group.unmapped.mode.json");
		 expect(dataelementValidateFunction(dataelementExample814)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.group.unmapped.url.json", () => {
		 const dataelementExample815 = require("../stu3-resources/DataElement-ConceptMap.group.unmapped.url.json");
		 expect(dataelementValidateFunction(dataelementExample815)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.identifier.json", () => {
		 const dataelementExample816 = require("../stu3-resources/DataElement-ConceptMap.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample816)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.json", () => {
		 const dataelementExample817 = require("../stu3-resources/DataElement-ConceptMap.json");
		 expect(dataelementValidateFunction(dataelementExample817)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.jurisdiction.json", () => {
		 const dataelementExample818 = require("../stu3-resources/DataElement-ConceptMap.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample818)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.name.json", () => {
		 const dataelementExample819 = require("../stu3-resources/DataElement-ConceptMap.name.json");
		 expect(dataelementValidateFunction(dataelementExample819)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.publisher.json", () => {
		 const dataelementExample820 = require("../stu3-resources/DataElement-ConceptMap.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample820)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.purpose.json", () => {
		 const dataelementExample821 = require("../stu3-resources/DataElement-ConceptMap.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample821)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.sourceX.json", () => {
		 const dataelementExample822 = require("../stu3-resources/DataElement-ConceptMap.sourceX.json");
		 expect(dataelementValidateFunction(dataelementExample822)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.status.json", () => {
		 const dataelementExample823 = require("../stu3-resources/DataElement-ConceptMap.status.json");
		 expect(dataelementValidateFunction(dataelementExample823)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.targetX.json", () => {
		 const dataelementExample824 = require("../stu3-resources/DataElement-ConceptMap.targetX.json");
		 expect(dataelementValidateFunction(dataelementExample824)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.title.json", () => {
		 const dataelementExample825 = require("../stu3-resources/DataElement-ConceptMap.title.json");
		 expect(dataelementValidateFunction(dataelementExample825)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.url.json", () => {
		 const dataelementExample826 = require("../stu3-resources/DataElement-ConceptMap.url.json");
		 expect(dataelementValidateFunction(dataelementExample826)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.useContext.json", () => {
		 const dataelementExample827 = require("../stu3-resources/DataElement-ConceptMap.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample827)).toBe(true);
	 });

	 test("validate DataElement-ConceptMap.version.json", () => {
		 const dataelementExample828 = require("../stu3-resources/DataElement-ConceptMap.version.json");
		 expect(dataelementValidateFunction(dataelementExample828)).toBe(true);
	 });

	 test("validate DataElement-Condition.abatementX.json", () => {
		 const dataelementExample829 = require("../stu3-resources/DataElement-Condition.abatementX.json");
		 expect(dataelementValidateFunction(dataelementExample829)).toBe(true);
	 });

	 test("validate DataElement-Condition.assertedDate.json", () => {
		 const dataelementExample830 = require("../stu3-resources/DataElement-Condition.assertedDate.json");
		 expect(dataelementValidateFunction(dataelementExample830)).toBe(true);
	 });

	 test("validate DataElement-Condition.asserter.json", () => {
		 const dataelementExample831 = require("../stu3-resources/DataElement-Condition.asserter.json");
		 expect(dataelementValidateFunction(dataelementExample831)).toBe(true);
	 });

	 test("validate DataElement-Condition.bodySite.json", () => {
		 const dataelementExample832 = require("../stu3-resources/DataElement-Condition.bodySite.json");
		 expect(dataelementValidateFunction(dataelementExample832)).toBe(true);
	 });

	 test("validate DataElement-Condition.category.json", () => {
		 const dataelementExample833 = require("../stu3-resources/DataElement-Condition.category.json");
		 expect(dataelementValidateFunction(dataelementExample833)).toBe(true);
	 });

	 test("validate DataElement-Condition.clinicalStatus.json", () => {
		 const dataelementExample834 = require("../stu3-resources/DataElement-Condition.clinicalStatus.json");
		 expect(dataelementValidateFunction(dataelementExample834)).toBe(true);
	 });

	 test("validate DataElement-Condition.code.json", () => {
		 const dataelementExample835 = require("../stu3-resources/DataElement-Condition.code.json");
		 expect(dataelementValidateFunction(dataelementExample835)).toBe(true);
	 });

	 test("validate DataElement-Condition.context.json", () => {
		 const dataelementExample836 = require("../stu3-resources/DataElement-Condition.context.json");
		 expect(dataelementValidateFunction(dataelementExample836)).toBe(true);
	 });

	 test("validate DataElement-Condition.evidence.code.json", () => {
		 const dataelementExample837 = require("../stu3-resources/DataElement-Condition.evidence.code.json");
		 expect(dataelementValidateFunction(dataelementExample837)).toBe(true);
	 });

	 test("validate DataElement-Condition.evidence.detail.json", () => {
		 const dataelementExample838 = require("../stu3-resources/DataElement-Condition.evidence.detail.json");
		 expect(dataelementValidateFunction(dataelementExample838)).toBe(true);
	 });

	 test("validate DataElement-Condition.evidence.json", () => {
		 const dataelementExample839 = require("../stu3-resources/DataElement-Condition.evidence.json");
		 expect(dataelementValidateFunction(dataelementExample839)).toBe(true);
	 });

	 test("validate DataElement-Condition.identifier.json", () => {
		 const dataelementExample840 = require("../stu3-resources/DataElement-Condition.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample840)).toBe(true);
	 });

	 test("validate DataElement-Condition.json", () => {
		 const dataelementExample841 = require("../stu3-resources/DataElement-Condition.json");
		 expect(dataelementValidateFunction(dataelementExample841)).toBe(true);
	 });

	 test("validate DataElement-Condition.note.json", () => {
		 const dataelementExample842 = require("../stu3-resources/DataElement-Condition.note.json");
		 expect(dataelementValidateFunction(dataelementExample842)).toBe(true);
	 });

	 test("validate DataElement-Condition.onsetX.json", () => {
		 const dataelementExample843 = require("../stu3-resources/DataElement-Condition.onsetX.json");
		 expect(dataelementValidateFunction(dataelementExample843)).toBe(true);
	 });

	 test("validate DataElement-Condition.severity.json", () => {
		 const dataelementExample844 = require("../stu3-resources/DataElement-Condition.severity.json");
		 expect(dataelementValidateFunction(dataelementExample844)).toBe(true);
	 });

	 test("validate DataElement-Condition.stage.assessment.json", () => {
		 const dataelementExample845 = require("../stu3-resources/DataElement-Condition.stage.assessment.json");
		 expect(dataelementValidateFunction(dataelementExample845)).toBe(true);
	 });

	 test("validate DataElement-Condition.stage.json", () => {
		 const dataelementExample846 = require("../stu3-resources/DataElement-Condition.stage.json");
		 expect(dataelementValidateFunction(dataelementExample846)).toBe(true);
	 });

	 test("validate DataElement-Condition.stage.summary.json", () => {
		 const dataelementExample847 = require("../stu3-resources/DataElement-Condition.stage.summary.json");
		 expect(dataelementValidateFunction(dataelementExample847)).toBe(true);
	 });

	 test("validate DataElement-Condition.subject.json", () => {
		 const dataelementExample848 = require("../stu3-resources/DataElement-Condition.subject.json");
		 expect(dataelementValidateFunction(dataelementExample848)).toBe(true);
	 });

	 test("validate DataElement-Condition.verificationStatus.json", () => {
		 const dataelementExample849 = require("../stu3-resources/DataElement-Condition.verificationStatus.json");
		 expect(dataelementValidateFunction(dataelementExample849)).toBe(true);
	 });

	 test("validate DataElement-Consent.action.json", () => {
		 const dataelementExample850 = require("../stu3-resources/DataElement-Consent.action.json");
		 expect(dataelementValidateFunction(dataelementExample850)).toBe(true);
	 });

	 test("validate DataElement-Consent.actor.json", () => {
		 const dataelementExample851 = require("../stu3-resources/DataElement-Consent.actor.json");
		 expect(dataelementValidateFunction(dataelementExample851)).toBe(true);
	 });

	 test("validate DataElement-Consent.actor.reference.json", () => {
		 const dataelementExample852 = require("../stu3-resources/DataElement-Consent.actor.reference.json");
		 expect(dataelementValidateFunction(dataelementExample852)).toBe(true);
	 });

	 test("validate DataElement-Consent.actor.role.json", () => {
		 const dataelementExample853 = require("../stu3-resources/DataElement-Consent.actor.role.json");
		 expect(dataelementValidateFunction(dataelementExample853)).toBe(true);
	 });

	 test("validate DataElement-Consent.category.json", () => {
		 const dataelementExample854 = require("../stu3-resources/DataElement-Consent.category.json");
		 expect(dataelementValidateFunction(dataelementExample854)).toBe(true);
	 });

	 test("validate DataElement-Consent.consentingParty.json", () => {
		 const dataelementExample855 = require("../stu3-resources/DataElement-Consent.consentingParty.json");
		 expect(dataelementValidateFunction(dataelementExample855)).toBe(true);
	 });

	 test("validate DataElement-Consent.data.json", () => {
		 const dataelementExample856 = require("../stu3-resources/DataElement-Consent.data.json");
		 expect(dataelementValidateFunction(dataelementExample856)).toBe(true);
	 });

	 test("validate DataElement-Consent.data.meaning.json", () => {
		 const dataelementExample857 = require("../stu3-resources/DataElement-Consent.data.meaning.json");
		 expect(dataelementValidateFunction(dataelementExample857)).toBe(true);
	 });

	 test("validate DataElement-Consent.data.reference.json", () => {
		 const dataelementExample858 = require("../stu3-resources/DataElement-Consent.data.reference.json");
		 expect(dataelementValidateFunction(dataelementExample858)).toBe(true);
	 });

	 test("validate DataElement-Consent.dataPeriod.json", () => {
		 const dataelementExample859 = require("../stu3-resources/DataElement-Consent.dataPeriod.json");
		 expect(dataelementValidateFunction(dataelementExample859)).toBe(true);
	 });

	 test("validate DataElement-Consent.dateTime.json", () => {
		 const dataelementExample860 = require("../stu3-resources/DataElement-Consent.dateTime.json");
		 expect(dataelementValidateFunction(dataelementExample860)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.action.json", () => {
		 const dataelementExample861 = require("../stu3-resources/DataElement-Consent.except.action.json");
		 expect(dataelementValidateFunction(dataelementExample861)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.actor.json", () => {
		 const dataelementExample862 = require("../stu3-resources/DataElement-Consent.except.actor.json");
		 expect(dataelementValidateFunction(dataelementExample862)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.actor.reference.json", () => {
		 const dataelementExample863 = require("../stu3-resources/DataElement-Consent.except.actor.reference.json");
		 expect(dataelementValidateFunction(dataelementExample863)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.actor.role.json", () => {
		 const dataelementExample864 = require("../stu3-resources/DataElement-Consent.except.actor.role.json");
		 expect(dataelementValidateFunction(dataelementExample864)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.class.json", () => {
		 const dataelementExample865 = require("../stu3-resources/DataElement-Consent.except.class.json");
		 expect(dataelementValidateFunction(dataelementExample865)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.code.json", () => {
		 const dataelementExample866 = require("../stu3-resources/DataElement-Consent.except.code.json");
		 expect(dataelementValidateFunction(dataelementExample866)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.data.json", () => {
		 const dataelementExample867 = require("../stu3-resources/DataElement-Consent.except.data.json");
		 expect(dataelementValidateFunction(dataelementExample867)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.data.meaning.json", () => {
		 const dataelementExample868 = require("../stu3-resources/DataElement-Consent.except.data.meaning.json");
		 expect(dataelementValidateFunction(dataelementExample868)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.data.reference.json", () => {
		 const dataelementExample869 = require("../stu3-resources/DataElement-Consent.except.data.reference.json");
		 expect(dataelementValidateFunction(dataelementExample869)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.dataPeriod.json", () => {
		 const dataelementExample870 = require("../stu3-resources/DataElement-Consent.except.dataPeriod.json");
		 expect(dataelementValidateFunction(dataelementExample870)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.json", () => {
		 const dataelementExample871 = require("../stu3-resources/DataElement-Consent.except.json");
		 expect(dataelementValidateFunction(dataelementExample871)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.period.json", () => {
		 const dataelementExample872 = require("../stu3-resources/DataElement-Consent.except.period.json");
		 expect(dataelementValidateFunction(dataelementExample872)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.purpose.json", () => {
		 const dataelementExample873 = require("../stu3-resources/DataElement-Consent.except.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample873)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.securityLabel.json", () => {
		 const dataelementExample874 = require("../stu3-resources/DataElement-Consent.except.securityLabel.json");
		 expect(dataelementValidateFunction(dataelementExample874)).toBe(true);
	 });

	 test("validate DataElement-Consent.except.type.json", () => {
		 const dataelementExample875 = require("../stu3-resources/DataElement-Consent.except.type.json");
		 expect(dataelementValidateFunction(dataelementExample875)).toBe(true);
	 });

	 test("validate DataElement-Consent.identifier.json", () => {
		 const dataelementExample876 = require("../stu3-resources/DataElement-Consent.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample876)).toBe(true);
	 });

	 test("validate DataElement-Consent.json", () => {
		 const dataelementExample877 = require("../stu3-resources/DataElement-Consent.json");
		 expect(dataelementValidateFunction(dataelementExample877)).toBe(true);
	 });

	 test("validate DataElement-Consent.organization.json", () => {
		 const dataelementExample878 = require("../stu3-resources/DataElement-Consent.organization.json");
		 expect(dataelementValidateFunction(dataelementExample878)).toBe(true);
	 });

	 test("validate DataElement-Consent.patient.json", () => {
		 const dataelementExample879 = require("../stu3-resources/DataElement-Consent.patient.json");
		 expect(dataelementValidateFunction(dataelementExample879)).toBe(true);
	 });

	 test("validate DataElement-Consent.period.json", () => {
		 const dataelementExample880 = require("../stu3-resources/DataElement-Consent.period.json");
		 expect(dataelementValidateFunction(dataelementExample880)).toBe(true);
	 });

	 test("validate DataElement-Consent.policy.authority.json", () => {
		 const dataelementExample881 = require("../stu3-resources/DataElement-Consent.policy.authority.json");
		 expect(dataelementValidateFunction(dataelementExample881)).toBe(true);
	 });

	 test("validate DataElement-Consent.policy.json", () => {
		 const dataelementExample882 = require("../stu3-resources/DataElement-Consent.policy.json");
		 expect(dataelementValidateFunction(dataelementExample882)).toBe(true);
	 });

	 test("validate DataElement-Consent.policy.uri.json", () => {
		 const dataelementExample883 = require("../stu3-resources/DataElement-Consent.policy.uri.json");
		 expect(dataelementValidateFunction(dataelementExample883)).toBe(true);
	 });

	 test("validate DataElement-Consent.policyRule.json", () => {
		 const dataelementExample884 = require("../stu3-resources/DataElement-Consent.policyRule.json");
		 expect(dataelementValidateFunction(dataelementExample884)).toBe(true);
	 });

	 test("validate DataElement-Consent.purpose.json", () => {
		 const dataelementExample885 = require("../stu3-resources/DataElement-Consent.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample885)).toBe(true);
	 });

	 test("validate DataElement-Consent.securityLabel.json", () => {
		 const dataelementExample886 = require("../stu3-resources/DataElement-Consent.securityLabel.json");
		 expect(dataelementValidateFunction(dataelementExample886)).toBe(true);
	 });

	 test("validate DataElement-Consent.sourceX.json", () => {
		 const dataelementExample887 = require("../stu3-resources/DataElement-Consent.sourceX.json");
		 expect(dataelementValidateFunction(dataelementExample887)).toBe(true);
	 });

	 test("validate DataElement-Consent.status.json", () => {
		 const dataelementExample888 = require("../stu3-resources/DataElement-Consent.status.json");
		 expect(dataelementValidateFunction(dataelementExample888)).toBe(true);
	 });

	 test("validate DataElement-ContactDetail.json", () => {
		 const dataelementExample889 = require("../stu3-resources/DataElement-ContactDetail.json");
		 expect(dataelementValidateFunction(dataelementExample889)).toBe(true);
	 });

	 test("validate DataElement-ContactDetail.name.json", () => {
		 const dataelementExample890 = require("../stu3-resources/DataElement-ContactDetail.name.json");
		 expect(dataelementValidateFunction(dataelementExample890)).toBe(true);
	 });

	 test("validate DataElement-ContactDetail.telecom.json", () => {
		 const dataelementExample891 = require("../stu3-resources/DataElement-ContactDetail.telecom.json");
		 expect(dataelementValidateFunction(dataelementExample891)).toBe(true);
	 });

	 test("validate DataElement-ContactPoint.json", () => {
		 const dataelementExample892 = require("../stu3-resources/DataElement-ContactPoint.json");
		 expect(dataelementValidateFunction(dataelementExample892)).toBe(true);
	 });

	 test("validate DataElement-ContactPoint.period.json", () => {
		 const dataelementExample893 = require("../stu3-resources/DataElement-ContactPoint.period.json");
		 expect(dataelementValidateFunction(dataelementExample893)).toBe(true);
	 });

	 test("validate DataElement-ContactPoint.rank.json", () => {
		 const dataelementExample894 = require("../stu3-resources/DataElement-ContactPoint.rank.json");
		 expect(dataelementValidateFunction(dataelementExample894)).toBe(true);
	 });

	 test("validate DataElement-ContactPoint.system.json", () => {
		 const dataelementExample895 = require("../stu3-resources/DataElement-ContactPoint.system.json");
		 expect(dataelementValidateFunction(dataelementExample895)).toBe(true);
	 });

	 test("validate DataElement-ContactPoint.use.json", () => {
		 const dataelementExample896 = require("../stu3-resources/DataElement-ContactPoint.use.json");
		 expect(dataelementValidateFunction(dataelementExample896)).toBe(true);
	 });

	 test("validate DataElement-ContactPoint.value.json", () => {
		 const dataelementExample897 = require("../stu3-resources/DataElement-ContactPoint.value.json");
		 expect(dataelementValidateFunction(dataelementExample897)).toBe(true);
	 });

	 test("validate DataElement-Contract.action.json", () => {
		 const dataelementExample898 = require("../stu3-resources/DataElement-Contract.action.json");
		 expect(dataelementValidateFunction(dataelementExample898)).toBe(true);
	 });

	 test("validate DataElement-Contract.actionReason.json", () => {
		 const dataelementExample899 = require("../stu3-resources/DataElement-Contract.actionReason.json");
		 expect(dataelementValidateFunction(dataelementExample899)).toBe(true);
	 });

	 test("validate DataElement-Contract.agent.actor.json", () => {
		 const dataelementExample900 = require("../stu3-resources/DataElement-Contract.agent.actor.json");
		 expect(dataelementValidateFunction(dataelementExample900)).toBe(true);
	 });

	 test("validate DataElement-Contract.agent.json", () => {
		 const dataelementExample901 = require("../stu3-resources/DataElement-Contract.agent.json");
		 expect(dataelementValidateFunction(dataelementExample901)).toBe(true);
	 });

	 test("validate DataElement-Contract.agent.role.json", () => {
		 const dataelementExample902 = require("../stu3-resources/DataElement-Contract.agent.role.json");
		 expect(dataelementValidateFunction(dataelementExample902)).toBe(true);
	 });

	 test("validate DataElement-Contract.applies.json", () => {
		 const dataelementExample903 = require("../stu3-resources/DataElement-Contract.applies.json");
		 expect(dataelementValidateFunction(dataelementExample903)).toBe(true);
	 });

	 test("validate DataElement-Contract.authority.json", () => {
		 const dataelementExample904 = require("../stu3-resources/DataElement-Contract.authority.json");
		 expect(dataelementValidateFunction(dataelementExample904)).toBe(true);
	 });

	 test("validate DataElement-Contract.bindingX.json", () => {
		 const dataelementExample905 = require("../stu3-resources/DataElement-Contract.bindingX.json");
		 expect(dataelementValidateFunction(dataelementExample905)).toBe(true);
	 });

	 test("validate DataElement-Contract.contentDerivative.json", () => {
		 const dataelementExample906 = require("../stu3-resources/DataElement-Contract.contentDerivative.json");
		 expect(dataelementValidateFunction(dataelementExample906)).toBe(true);
	 });

	 test("validate DataElement-Contract.decisionType.json", () => {
		 const dataelementExample907 = require("../stu3-resources/DataElement-Contract.decisionType.json");
		 expect(dataelementValidateFunction(dataelementExample907)).toBe(true);
	 });

	 test("validate DataElement-Contract.domain.json", () => {
		 const dataelementExample908 = require("../stu3-resources/DataElement-Contract.domain.json");
		 expect(dataelementValidateFunction(dataelementExample908)).toBe(true);
	 });

	 test("validate DataElement-Contract.friendly.contentX.json", () => {
		 const dataelementExample909 = require("../stu3-resources/DataElement-Contract.friendly.contentX.json");
		 expect(dataelementValidateFunction(dataelementExample909)).toBe(true);
	 });

	 test("validate DataElement-Contract.friendly.json", () => {
		 const dataelementExample910 = require("../stu3-resources/DataElement-Contract.friendly.json");
		 expect(dataelementValidateFunction(dataelementExample910)).toBe(true);
	 });

	 test("validate DataElement-Contract.identifier.json", () => {
		 const dataelementExample911 = require("../stu3-resources/DataElement-Contract.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample911)).toBe(true);
	 });

	 test("validate DataElement-Contract.issued.json", () => {
		 const dataelementExample912 = require("../stu3-resources/DataElement-Contract.issued.json");
		 expect(dataelementValidateFunction(dataelementExample912)).toBe(true);
	 });

	 test("validate DataElement-Contract.json", () => {
		 const dataelementExample913 = require("../stu3-resources/DataElement-Contract.json");
		 expect(dataelementValidateFunction(dataelementExample913)).toBe(true);
	 });

	 test("validate DataElement-Contract.legal.contentX.json", () => {
		 const dataelementExample914 = require("../stu3-resources/DataElement-Contract.legal.contentX.json");
		 expect(dataelementValidateFunction(dataelementExample914)).toBe(true);
	 });

	 test("validate DataElement-Contract.legal.json", () => {
		 const dataelementExample915 = require("../stu3-resources/DataElement-Contract.legal.json");
		 expect(dataelementValidateFunction(dataelementExample915)).toBe(true);
	 });

	 test("validate DataElement-Contract.rule.contentX.json", () => {
		 const dataelementExample916 = require("../stu3-resources/DataElement-Contract.rule.contentX.json");
		 expect(dataelementValidateFunction(dataelementExample916)).toBe(true);
	 });

	 test("validate DataElement-Contract.rule.json", () => {
		 const dataelementExample917 = require("../stu3-resources/DataElement-Contract.rule.json");
		 expect(dataelementValidateFunction(dataelementExample917)).toBe(true);
	 });

	 test("validate DataElement-Contract.securityLabel.json", () => {
		 const dataelementExample918 = require("../stu3-resources/DataElement-Contract.securityLabel.json");
		 expect(dataelementValidateFunction(dataelementExample918)).toBe(true);
	 });

	 test("validate DataElement-Contract.signer.json", () => {
		 const dataelementExample919 = require("../stu3-resources/DataElement-Contract.signer.json");
		 expect(dataelementValidateFunction(dataelementExample919)).toBe(true);
	 });

	 test("validate DataElement-Contract.signer.party.json", () => {
		 const dataelementExample920 = require("../stu3-resources/DataElement-Contract.signer.party.json");
		 expect(dataelementValidateFunction(dataelementExample920)).toBe(true);
	 });

	 test("validate DataElement-Contract.signer.signature.json", () => {
		 const dataelementExample921 = require("../stu3-resources/DataElement-Contract.signer.signature.json");
		 expect(dataelementValidateFunction(dataelementExample921)).toBe(true);
	 });

	 test("validate DataElement-Contract.signer.type.json", () => {
		 const dataelementExample922 = require("../stu3-resources/DataElement-Contract.signer.type.json");
		 expect(dataelementValidateFunction(dataelementExample922)).toBe(true);
	 });

	 test("validate DataElement-Contract.status.json", () => {
		 const dataelementExample923 = require("../stu3-resources/DataElement-Contract.status.json");
		 expect(dataelementValidateFunction(dataelementExample923)).toBe(true);
	 });

	 test("validate DataElement-Contract.subType.json", () => {
		 const dataelementExample924 = require("../stu3-resources/DataElement-Contract.subType.json");
		 expect(dataelementValidateFunction(dataelementExample924)).toBe(true);
	 });

	 test("validate DataElement-Contract.subject.json", () => {
		 const dataelementExample925 = require("../stu3-resources/DataElement-Contract.subject.json");
		 expect(dataelementValidateFunction(dataelementExample925)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.action.json", () => {
		 const dataelementExample926 = require("../stu3-resources/DataElement-Contract.term.action.json");
		 expect(dataelementValidateFunction(dataelementExample926)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.actionReason.json", () => {
		 const dataelementExample927 = require("../stu3-resources/DataElement-Contract.term.actionReason.json");
		 expect(dataelementValidateFunction(dataelementExample927)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.agent.actor.json", () => {
		 const dataelementExample928 = require("../stu3-resources/DataElement-Contract.term.agent.actor.json");
		 expect(dataelementValidateFunction(dataelementExample928)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.agent.json", () => {
		 const dataelementExample929 = require("../stu3-resources/DataElement-Contract.term.agent.json");
		 expect(dataelementValidateFunction(dataelementExample929)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.agent.role.json", () => {
		 const dataelementExample930 = require("../stu3-resources/DataElement-Contract.term.agent.role.json");
		 expect(dataelementValidateFunction(dataelementExample930)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.applies.json", () => {
		 const dataelementExample931 = require("../stu3-resources/DataElement-Contract.term.applies.json");
		 expect(dataelementValidateFunction(dataelementExample931)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.group.json", () => {
		 const dataelementExample932 = require("../stu3-resources/DataElement-Contract.term.group.json");
		 expect(dataelementValidateFunction(dataelementExample932)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.identifier.json", () => {
		 const dataelementExample933 = require("../stu3-resources/DataElement-Contract.term.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample933)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.issued.json", () => {
		 const dataelementExample934 = require("../stu3-resources/DataElement-Contract.term.issued.json");
		 expect(dataelementValidateFunction(dataelementExample934)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.json", () => {
		 const dataelementExample935 = require("../stu3-resources/DataElement-Contract.term.json");
		 expect(dataelementValidateFunction(dataelementExample935)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.securityLabel.json", () => {
		 const dataelementExample936 = require("../stu3-resources/DataElement-Contract.term.securityLabel.json");
		 expect(dataelementValidateFunction(dataelementExample936)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.subType.json", () => {
		 const dataelementExample937 = require("../stu3-resources/DataElement-Contract.term.subType.json");
		 expect(dataelementValidateFunction(dataelementExample937)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.text.json", () => {
		 const dataelementExample938 = require("../stu3-resources/DataElement-Contract.term.text.json");
		 expect(dataelementValidateFunction(dataelementExample938)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.topic.json", () => {
		 const dataelementExample939 = require("../stu3-resources/DataElement-Contract.term.topic.json");
		 expect(dataelementValidateFunction(dataelementExample939)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.type.json", () => {
		 const dataelementExample940 = require("../stu3-resources/DataElement-Contract.term.type.json");
		 expect(dataelementValidateFunction(dataelementExample940)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.valuedItem.effectiveTime.json", () => {
		 const dataelementExample941 = require("../stu3-resources/DataElement-Contract.term.valuedItem.effectiveTime.json");
		 expect(dataelementValidateFunction(dataelementExample941)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.valuedItem.entityX.json", () => {
		 const dataelementExample942 = require("../stu3-resources/DataElement-Contract.term.valuedItem.entityX.json");
		 expect(dataelementValidateFunction(dataelementExample942)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.valuedItem.factor.json", () => {
		 const dataelementExample943 = require("../stu3-resources/DataElement-Contract.term.valuedItem.factor.json");
		 expect(dataelementValidateFunction(dataelementExample943)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.valuedItem.identifier.json", () => {
		 const dataelementExample944 = require("../stu3-resources/DataElement-Contract.term.valuedItem.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample944)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.valuedItem.json", () => {
		 const dataelementExample945 = require("../stu3-resources/DataElement-Contract.term.valuedItem.json");
		 expect(dataelementValidateFunction(dataelementExample945)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.valuedItem.net.json", () => {
		 const dataelementExample946 = require("../stu3-resources/DataElement-Contract.term.valuedItem.net.json");
		 expect(dataelementValidateFunction(dataelementExample946)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.valuedItem.points.json", () => {
		 const dataelementExample947 = require("../stu3-resources/DataElement-Contract.term.valuedItem.points.json");
		 expect(dataelementValidateFunction(dataelementExample947)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.valuedItem.quantity.json", () => {
		 const dataelementExample948 = require("../stu3-resources/DataElement-Contract.term.valuedItem.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample948)).toBe(true);
	 });

	 test("validate DataElement-Contract.term.valuedItem.unitPrice.json", () => {
		 const dataelementExample949 = require("../stu3-resources/DataElement-Contract.term.valuedItem.unitPrice.json");
		 expect(dataelementValidateFunction(dataelementExample949)).toBe(true);
	 });

	 test("validate DataElement-Contract.topic.json", () => {
		 const dataelementExample950 = require("../stu3-resources/DataElement-Contract.topic.json");
		 expect(dataelementValidateFunction(dataelementExample950)).toBe(true);
	 });

	 test("validate DataElement-Contract.type.json", () => {
		 const dataelementExample951 = require("../stu3-resources/DataElement-Contract.type.json");
		 expect(dataelementValidateFunction(dataelementExample951)).toBe(true);
	 });

	 test("validate DataElement-Contract.valuedItem.effectiveTime.json", () => {
		 const dataelementExample952 = require("../stu3-resources/DataElement-Contract.valuedItem.effectiveTime.json");
		 expect(dataelementValidateFunction(dataelementExample952)).toBe(true);
	 });

	 test("validate DataElement-Contract.valuedItem.entityX.json", () => {
		 const dataelementExample953 = require("../stu3-resources/DataElement-Contract.valuedItem.entityX.json");
		 expect(dataelementValidateFunction(dataelementExample953)).toBe(true);
	 });

	 test("validate DataElement-Contract.valuedItem.factor.json", () => {
		 const dataelementExample954 = require("../stu3-resources/DataElement-Contract.valuedItem.factor.json");
		 expect(dataelementValidateFunction(dataelementExample954)).toBe(true);
	 });

	 test("validate DataElement-Contract.valuedItem.identifier.json", () => {
		 const dataelementExample955 = require("../stu3-resources/DataElement-Contract.valuedItem.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample955)).toBe(true);
	 });

	 test("validate DataElement-Contract.valuedItem.json", () => {
		 const dataelementExample956 = require("../stu3-resources/DataElement-Contract.valuedItem.json");
		 expect(dataelementValidateFunction(dataelementExample956)).toBe(true);
	 });

	 test("validate DataElement-Contract.valuedItem.net.json", () => {
		 const dataelementExample957 = require("../stu3-resources/DataElement-Contract.valuedItem.net.json");
		 expect(dataelementValidateFunction(dataelementExample957)).toBe(true);
	 });

	 test("validate DataElement-Contract.valuedItem.points.json", () => {
		 const dataelementExample958 = require("../stu3-resources/DataElement-Contract.valuedItem.points.json");
		 expect(dataelementValidateFunction(dataelementExample958)).toBe(true);
	 });

	 test("validate DataElement-Contract.valuedItem.quantity.json", () => {
		 const dataelementExample959 = require("../stu3-resources/DataElement-Contract.valuedItem.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample959)).toBe(true);
	 });

	 test("validate DataElement-Contract.valuedItem.unitPrice.json", () => {
		 const dataelementExample960 = require("../stu3-resources/DataElement-Contract.valuedItem.unitPrice.json");
		 expect(dataelementValidateFunction(dataelementExample960)).toBe(true);
	 });

	 test("validate DataElement-Contributor.contact.json", () => {
		 const dataelementExample961 = require("../stu3-resources/DataElement-Contributor.contact.json");
		 expect(dataelementValidateFunction(dataelementExample961)).toBe(true);
	 });

	 test("validate DataElement-Contributor.json", () => {
		 const dataelementExample962 = require("../stu3-resources/DataElement-Contributor.json");
		 expect(dataelementValidateFunction(dataelementExample962)).toBe(true);
	 });

	 test("validate DataElement-Contributor.name.json", () => {
		 const dataelementExample963 = require("../stu3-resources/DataElement-Contributor.name.json");
		 expect(dataelementValidateFunction(dataelementExample963)).toBe(true);
	 });

	 test("validate DataElement-Contributor.type.json", () => {
		 const dataelementExample964 = require("../stu3-resources/DataElement-Contributor.type.json");
		 expect(dataelementValidateFunction(dataelementExample964)).toBe(true);
	 });

	 test("validate DataElement-Count.json", () => {
		 const dataelementExample965 = require("../stu3-resources/DataElement-Count.json");
		 expect(dataelementValidateFunction(dataelementExample965)).toBe(true);
	 });

	 test("validate DataElement-Coverage.beneficiary.json", () => {
		 const dataelementExample966 = require("../stu3-resources/DataElement-Coverage.beneficiary.json");
		 expect(dataelementValidateFunction(dataelementExample966)).toBe(true);
	 });

	 test("validate DataElement-Coverage.contract.json", () => {
		 const dataelementExample967 = require("../stu3-resources/DataElement-Coverage.contract.json");
		 expect(dataelementValidateFunction(dataelementExample967)).toBe(true);
	 });

	 test("validate DataElement-Coverage.dependent.json", () => {
		 const dataelementExample968 = require("../stu3-resources/DataElement-Coverage.dependent.json");
		 expect(dataelementValidateFunction(dataelementExample968)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.class.json", () => {
		 const dataelementExample969 = require("../stu3-resources/DataElement-Coverage.grouping.class.json");
		 expect(dataelementValidateFunction(dataelementExample969)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.classDisplay.json", () => {
		 const dataelementExample970 = require("../stu3-resources/DataElement-Coverage.grouping.classDisplay.json");
		 expect(dataelementValidateFunction(dataelementExample970)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.group.json", () => {
		 const dataelementExample971 = require("../stu3-resources/DataElement-Coverage.grouping.group.json");
		 expect(dataelementValidateFunction(dataelementExample971)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.groupDisplay.json", () => {
		 const dataelementExample972 = require("../stu3-resources/DataElement-Coverage.grouping.groupDisplay.json");
		 expect(dataelementValidateFunction(dataelementExample972)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.json", () => {
		 const dataelementExample973 = require("../stu3-resources/DataElement-Coverage.grouping.json");
		 expect(dataelementValidateFunction(dataelementExample973)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.plan.json", () => {
		 const dataelementExample974 = require("../stu3-resources/DataElement-Coverage.grouping.plan.json");
		 expect(dataelementValidateFunction(dataelementExample974)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.planDisplay.json", () => {
		 const dataelementExample975 = require("../stu3-resources/DataElement-Coverage.grouping.planDisplay.json");
		 expect(dataelementValidateFunction(dataelementExample975)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.subClass.json", () => {
		 const dataelementExample976 = require("../stu3-resources/DataElement-Coverage.grouping.subClass.json");
		 expect(dataelementValidateFunction(dataelementExample976)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.subClassDisplay.json", () => {
		 const dataelementExample977 = require("../stu3-resources/DataElement-Coverage.grouping.subClassDisplay.json");
		 expect(dataelementValidateFunction(dataelementExample977)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.subGroup.json", () => {
		 const dataelementExample978 = require("../stu3-resources/DataElement-Coverage.grouping.subGroup.json");
		 expect(dataelementValidateFunction(dataelementExample978)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.subGroupDisplay.json", () => {
		 const dataelementExample979 = require("../stu3-resources/DataElement-Coverage.grouping.subGroupDisplay.json");
		 expect(dataelementValidateFunction(dataelementExample979)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.subPlan.json", () => {
		 const dataelementExample980 = require("../stu3-resources/DataElement-Coverage.grouping.subPlan.json");
		 expect(dataelementValidateFunction(dataelementExample980)).toBe(true);
	 });

	 test("validate DataElement-Coverage.grouping.subPlanDisplay.json", () => {
		 const dataelementExample981 = require("../stu3-resources/DataElement-Coverage.grouping.subPlanDisplay.json");
		 expect(dataelementValidateFunction(dataelementExample981)).toBe(true);
	 });

	 test("validate DataElement-Coverage.identifier.json", () => {
		 const dataelementExample982 = require("../stu3-resources/DataElement-Coverage.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample982)).toBe(true);
	 });

	 test("validate DataElement-Coverage.json", () => {
		 const dataelementExample983 = require("../stu3-resources/DataElement-Coverage.json");
		 expect(dataelementValidateFunction(dataelementExample983)).toBe(true);
	 });

	 test("validate DataElement-Coverage.network.json", () => {
		 const dataelementExample984 = require("../stu3-resources/DataElement-Coverage.network.json");
		 expect(dataelementValidateFunction(dataelementExample984)).toBe(true);
	 });

	 test("validate DataElement-Coverage.order.json", () => {
		 const dataelementExample985 = require("../stu3-resources/DataElement-Coverage.order.json");
		 expect(dataelementValidateFunction(dataelementExample985)).toBe(true);
	 });

	 test("validate DataElement-Coverage.payor.json", () => {
		 const dataelementExample986 = require("../stu3-resources/DataElement-Coverage.payor.json");
		 expect(dataelementValidateFunction(dataelementExample986)).toBe(true);
	 });

	 test("validate DataElement-Coverage.period.json", () => {
		 const dataelementExample987 = require("../stu3-resources/DataElement-Coverage.period.json");
		 expect(dataelementValidateFunction(dataelementExample987)).toBe(true);
	 });

	 test("validate DataElement-Coverage.policyHolder.json", () => {
		 const dataelementExample988 = require("../stu3-resources/DataElement-Coverage.policyHolder.json");
		 expect(dataelementValidateFunction(dataelementExample988)).toBe(true);
	 });

	 test("validate DataElement-Coverage.relationship.json", () => {
		 const dataelementExample989 = require("../stu3-resources/DataElement-Coverage.relationship.json");
		 expect(dataelementValidateFunction(dataelementExample989)).toBe(true);
	 });

	 test("validate DataElement-Coverage.sequence.json", () => {
		 const dataelementExample990 = require("../stu3-resources/DataElement-Coverage.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample990)).toBe(true);
	 });

	 test("validate DataElement-Coverage.status.json", () => {
		 const dataelementExample991 = require("../stu3-resources/DataElement-Coverage.status.json");
		 expect(dataelementValidateFunction(dataelementExample991)).toBe(true);
	 });

	 test("validate DataElement-Coverage.subscriber.json", () => {
		 const dataelementExample992 = require("../stu3-resources/DataElement-Coverage.subscriber.json");
		 expect(dataelementValidateFunction(dataelementExample992)).toBe(true);
	 });

	 test("validate DataElement-Coverage.subscriberId.json", () => {
		 const dataelementExample993 = require("../stu3-resources/DataElement-Coverage.subscriberId.json");
		 expect(dataelementValidateFunction(dataelementExample993)).toBe(true);
	 });

	 test("validate DataElement-Coverage.type.json", () => {
		 const dataelementExample994 = require("../stu3-resources/DataElement-Coverage.type.json");
		 expect(dataelementValidateFunction(dataelementExample994)).toBe(true);
	 });

	 test("validate DataElement-DataElement.contact.json", () => {
		 const dataelementExample995 = require("../stu3-resources/DataElement-DataElement.contact.json");
		 expect(dataelementValidateFunction(dataelementExample995)).toBe(true);
	 });

	 test("validate DataElement-DataElement.copyright.json", () => {
		 const dataelementExample996 = require("../stu3-resources/DataElement-DataElement.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample996)).toBe(true);
	 });

	 test("validate DataElement-DataElement.date.json", () => {
		 const dataelementExample997 = require("../stu3-resources/DataElement-DataElement.date.json");
		 expect(dataelementValidateFunction(dataelementExample997)).toBe(true);
	 });

	 test("validate DataElement-DataElement.element.json", () => {
		 const dataelementExample998 = require("../stu3-resources/DataElement-DataElement.element.json");
		 expect(dataelementValidateFunction(dataelementExample998)).toBe(true);
	 });

	 test("validate DataElement-DataElement.experimental.json", () => {
		 const dataelementExample999 = require("../stu3-resources/DataElement-DataElement.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample999)).toBe(true);
	 });

	 test("validate DataElement-DataElement.identifier.json", () => {
		 const dataelementExample1000 = require("../stu3-resources/DataElement-DataElement.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1000)).toBe(true);
	 });

	 test("validate DataElement-DataElement.json", () => {
		 const dataelementExample1001 = require("../stu3-resources/DataElement-DataElement.json");
		 expect(dataelementValidateFunction(dataelementExample1001)).toBe(true);
	 });

	 test("validate DataElement-DataElement.jurisdiction.json", () => {
		 const dataelementExample1002 = require("../stu3-resources/DataElement-DataElement.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample1002)).toBe(true);
	 });

	 test("validate DataElement-DataElement.mapping.comment.json", () => {
		 const dataelementExample1003 = require("../stu3-resources/DataElement-DataElement.mapping.comment.json");
		 expect(dataelementValidateFunction(dataelementExample1003)).toBe(true);
	 });

	 test("validate DataElement-DataElement.mapping.identity.json", () => {
		 const dataelementExample1004 = require("../stu3-resources/DataElement-DataElement.mapping.identity.json");
		 expect(dataelementValidateFunction(dataelementExample1004)).toBe(true);
	 });

	 test("validate DataElement-DataElement.mapping.json", () => {
		 const dataelementExample1005 = require("../stu3-resources/DataElement-DataElement.mapping.json");
		 expect(dataelementValidateFunction(dataelementExample1005)).toBe(true);
	 });

	 test("validate DataElement-DataElement.mapping.name.json", () => {
		 const dataelementExample1006 = require("../stu3-resources/DataElement-DataElement.mapping.name.json");
		 expect(dataelementValidateFunction(dataelementExample1006)).toBe(true);
	 });

	 test("validate DataElement-DataElement.mapping.uri.json", () => {
		 const dataelementExample1007 = require("../stu3-resources/DataElement-DataElement.mapping.uri.json");
		 expect(dataelementValidateFunction(dataelementExample1007)).toBe(true);
	 });

	 test("validate DataElement-DataElement.name.json", () => {
		 const dataelementExample1008 = require("../stu3-resources/DataElement-DataElement.name.json");
		 expect(dataelementValidateFunction(dataelementExample1008)).toBe(true);
	 });

	 test("validate DataElement-DataElement.publisher.json", () => {
		 const dataelementExample1009 = require("../stu3-resources/DataElement-DataElement.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample1009)).toBe(true);
	 });

	 test("validate DataElement-DataElement.status.json", () => {
		 const dataelementExample1010 = require("../stu3-resources/DataElement-DataElement.status.json");
		 expect(dataelementValidateFunction(dataelementExample1010)).toBe(true);
	 });

	 test("validate DataElement-DataElement.stringency.json", () => {
		 const dataelementExample1011 = require("../stu3-resources/DataElement-DataElement.stringency.json");
		 expect(dataelementValidateFunction(dataelementExample1011)).toBe(true);
	 });

	 test("validate DataElement-DataElement.title.json", () => {
		 const dataelementExample1012 = require("../stu3-resources/DataElement-DataElement.title.json");
		 expect(dataelementValidateFunction(dataelementExample1012)).toBe(true);
	 });

	 test("validate DataElement-DataElement.url.json", () => {
		 const dataelementExample1013 = require("../stu3-resources/DataElement-DataElement.url.json");
		 expect(dataelementValidateFunction(dataelementExample1013)).toBe(true);
	 });

	 test("validate DataElement-DataElement.useContext.json", () => {
		 const dataelementExample1014 = require("../stu3-resources/DataElement-DataElement.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample1014)).toBe(true);
	 });

	 test("validate DataElement-DataElement.version.json", () => {
		 const dataelementExample1015 = require("../stu3-resources/DataElement-DataElement.version.json");
		 expect(dataelementValidateFunction(dataelementExample1015)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.codeFilter.json", () => {
		 const dataelementExample1016 = require("../stu3-resources/DataElement-DataRequirement.codeFilter.json");
		 expect(dataelementValidateFunction(dataelementExample1016)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.codeFilter.path.json", () => {
		 const dataelementExample1017 = require("../stu3-resources/DataElement-DataRequirement.codeFilter.path.json");
		 expect(dataelementValidateFunction(dataelementExample1017)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.codeFilter.valueCode.json", () => {
		 const dataelementExample1018 = require("../stu3-resources/DataElement-DataRequirement.codeFilter.valueCode.json");
		 expect(dataelementValidateFunction(dataelementExample1018)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.codeFilter.valueCodeableConcept.json", () => {
		 const dataelementExample1019 = require("../stu3-resources/DataElement-DataRequirement.codeFilter.valueCodeableConcept.json");
		 expect(dataelementValidateFunction(dataelementExample1019)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.codeFilter.valueCoding.json", () => {
		 const dataelementExample1020 = require("../stu3-resources/DataElement-DataRequirement.codeFilter.valueCoding.json");
		 expect(dataelementValidateFunction(dataelementExample1020)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.codeFilter.valueSetX.json", () => {
		 const dataelementExample1021 = require("../stu3-resources/DataElement-DataRequirement.codeFilter.valueSetX.json");
		 expect(dataelementValidateFunction(dataelementExample1021)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.dateFilter.json", () => {
		 const dataelementExample1022 = require("../stu3-resources/DataElement-DataRequirement.dateFilter.json");
		 expect(dataelementValidateFunction(dataelementExample1022)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.dateFilter.path.json", () => {
		 const dataelementExample1023 = require("../stu3-resources/DataElement-DataRequirement.dateFilter.path.json");
		 expect(dataelementValidateFunction(dataelementExample1023)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.dateFilter.valueX.json", () => {
		 const dataelementExample1024 = require("../stu3-resources/DataElement-DataRequirement.dateFilter.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample1024)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.json", () => {
		 const dataelementExample1025 = require("../stu3-resources/DataElement-DataRequirement.json");
		 expect(dataelementValidateFunction(dataelementExample1025)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.mustSupport.json", () => {
		 const dataelementExample1026 = require("../stu3-resources/DataElement-DataRequirement.mustSupport.json");
		 expect(dataelementValidateFunction(dataelementExample1026)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.profile.json", () => {
		 const dataelementExample1027 = require("../stu3-resources/DataElement-DataRequirement.profile.json");
		 expect(dataelementValidateFunction(dataelementExample1027)).toBe(true);
	 });

	 test("validate DataElement-DataRequirement.type.json", () => {
		 const dataelementExample1028 = require("../stu3-resources/DataElement-DataRequirement.type.json");
		 expect(dataelementValidateFunction(dataelementExample1028)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.author.json", () => {
		 const dataelementExample1029 = require("../stu3-resources/DataElement-DetectedIssue.author.json");
		 expect(dataelementValidateFunction(dataelementExample1029)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.category.json", () => {
		 const dataelementExample1030 = require("../stu3-resources/DataElement-DetectedIssue.category.json");
		 expect(dataelementValidateFunction(dataelementExample1030)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.date.json", () => {
		 const dataelementExample1031 = require("../stu3-resources/DataElement-DetectedIssue.date.json");
		 expect(dataelementValidateFunction(dataelementExample1031)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.detail.json", () => {
		 const dataelementExample1032 = require("../stu3-resources/DataElement-DetectedIssue.detail.json");
		 expect(dataelementValidateFunction(dataelementExample1032)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.identifier.json", () => {
		 const dataelementExample1033 = require("../stu3-resources/DataElement-DetectedIssue.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1033)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.implicated.json", () => {
		 const dataelementExample1034 = require("../stu3-resources/DataElement-DetectedIssue.implicated.json");
		 expect(dataelementValidateFunction(dataelementExample1034)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.json", () => {
		 const dataelementExample1035 = require("../stu3-resources/DataElement-DetectedIssue.json");
		 expect(dataelementValidateFunction(dataelementExample1035)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.mitigation.action.json", () => {
		 const dataelementExample1036 = require("../stu3-resources/DataElement-DetectedIssue.mitigation.action.json");
		 expect(dataelementValidateFunction(dataelementExample1036)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.mitigation.author.json", () => {
		 const dataelementExample1037 = require("../stu3-resources/DataElement-DetectedIssue.mitigation.author.json");
		 expect(dataelementValidateFunction(dataelementExample1037)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.mitigation.date.json", () => {
		 const dataelementExample1038 = require("../stu3-resources/DataElement-DetectedIssue.mitigation.date.json");
		 expect(dataelementValidateFunction(dataelementExample1038)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.mitigation.json", () => {
		 const dataelementExample1039 = require("../stu3-resources/DataElement-DetectedIssue.mitigation.json");
		 expect(dataelementValidateFunction(dataelementExample1039)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.patient.json", () => {
		 const dataelementExample1040 = require("../stu3-resources/DataElement-DetectedIssue.patient.json");
		 expect(dataelementValidateFunction(dataelementExample1040)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.reference.json", () => {
		 const dataelementExample1041 = require("../stu3-resources/DataElement-DetectedIssue.reference.json");
		 expect(dataelementValidateFunction(dataelementExample1041)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.severity.json", () => {
		 const dataelementExample1042 = require("../stu3-resources/DataElement-DetectedIssue.severity.json");
		 expect(dataelementValidateFunction(dataelementExample1042)).toBe(true);
	 });

	 test("validate DataElement-DetectedIssue.status.json", () => {
		 const dataelementExample1043 = require("../stu3-resources/DataElement-DetectedIssue.status.json");
		 expect(dataelementValidateFunction(dataelementExample1043)).toBe(true);
	 });

	 test("validate DataElement-Device.contact.json", () => {
		 const dataelementExample1044 = require("../stu3-resources/DataElement-Device.contact.json");
		 expect(dataelementValidateFunction(dataelementExample1044)).toBe(true);
	 });

	 test("validate DataElement-Device.expirationDate.json", () => {
		 const dataelementExample1045 = require("../stu3-resources/DataElement-Device.expirationDate.json");
		 expect(dataelementValidateFunction(dataelementExample1045)).toBe(true);
	 });

	 test("validate DataElement-Device.identifier.json", () => {
		 const dataelementExample1046 = require("../stu3-resources/DataElement-Device.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1046)).toBe(true);
	 });

	 test("validate DataElement-Device.json", () => {
		 const dataelementExample1047 = require("../stu3-resources/DataElement-Device.json");
		 expect(dataelementValidateFunction(dataelementExample1047)).toBe(true);
	 });

	 test("validate DataElement-Device.location.json", () => {
		 const dataelementExample1048 = require("../stu3-resources/DataElement-Device.location.json");
		 expect(dataelementValidateFunction(dataelementExample1048)).toBe(true);
	 });

	 test("validate DataElement-Device.lotNumber.json", () => {
		 const dataelementExample1049 = require("../stu3-resources/DataElement-Device.lotNumber.json");
		 expect(dataelementValidateFunction(dataelementExample1049)).toBe(true);
	 });

	 test("validate DataElement-Device.manufactureDate.json", () => {
		 const dataelementExample1050 = require("../stu3-resources/DataElement-Device.manufactureDate.json");
		 expect(dataelementValidateFunction(dataelementExample1050)).toBe(true);
	 });

	 test("validate DataElement-Device.manufacturer.json", () => {
		 const dataelementExample1051 = require("../stu3-resources/DataElement-Device.manufacturer.json");
		 expect(dataelementValidateFunction(dataelementExample1051)).toBe(true);
	 });

	 test("validate DataElement-Device.model.json", () => {
		 const dataelementExample1052 = require("../stu3-resources/DataElement-Device.model.json");
		 expect(dataelementValidateFunction(dataelementExample1052)).toBe(true);
	 });

	 test("validate DataElement-Device.note.json", () => {
		 const dataelementExample1053 = require("../stu3-resources/DataElement-Device.note.json");
		 expect(dataelementValidateFunction(dataelementExample1053)).toBe(true);
	 });

	 test("validate DataElement-Device.owner.json", () => {
		 const dataelementExample1054 = require("../stu3-resources/DataElement-Device.owner.json");
		 expect(dataelementValidateFunction(dataelementExample1054)).toBe(true);
	 });

	 test("validate DataElement-Device.patient.json", () => {
		 const dataelementExample1055 = require("../stu3-resources/DataElement-Device.patient.json");
		 expect(dataelementValidateFunction(dataelementExample1055)).toBe(true);
	 });

	 test("validate DataElement-Device.safety.json", () => {
		 const dataelementExample1056 = require("../stu3-resources/DataElement-Device.safety.json");
		 expect(dataelementValidateFunction(dataelementExample1056)).toBe(true);
	 });

	 test("validate DataElement-Device.status.json", () => {
		 const dataelementExample1057 = require("../stu3-resources/DataElement-Device.status.json");
		 expect(dataelementValidateFunction(dataelementExample1057)).toBe(true);
	 });

	 test("validate DataElement-Device.type.json", () => {
		 const dataelementExample1058 = require("../stu3-resources/DataElement-Device.type.json");
		 expect(dataelementValidateFunction(dataelementExample1058)).toBe(true);
	 });

	 test("validate DataElement-Device.udi.carrierAIDC.json", () => {
		 const dataelementExample1059 = require("../stu3-resources/DataElement-Device.udi.carrierAIDC.json");
		 expect(dataelementValidateFunction(dataelementExample1059)).toBe(true);
	 });

	 test("validate DataElement-Device.udi.carrierHRF.json", () => {
		 const dataelementExample1060 = require("../stu3-resources/DataElement-Device.udi.carrierHRF.json");
		 expect(dataelementValidateFunction(dataelementExample1060)).toBe(true);
	 });

	 test("validate DataElement-Device.udi.deviceIdentifier.json", () => {
		 const dataelementExample1061 = require("../stu3-resources/DataElement-Device.udi.deviceIdentifier.json");
		 expect(dataelementValidateFunction(dataelementExample1061)).toBe(true);
	 });

	 test("validate DataElement-Device.udi.entryType.json", () => {
		 const dataelementExample1062 = require("../stu3-resources/DataElement-Device.udi.entryType.json");
		 expect(dataelementValidateFunction(dataelementExample1062)).toBe(true);
	 });

	 test("validate DataElement-Device.udi.issuer.json", () => {
		 const dataelementExample1063 = require("../stu3-resources/DataElement-Device.udi.issuer.json");
		 expect(dataelementValidateFunction(dataelementExample1063)).toBe(true);
	 });

	 test("validate DataElement-Device.udi.json", () => {
		 const dataelementExample1064 = require("../stu3-resources/DataElement-Device.udi.json");
		 expect(dataelementValidateFunction(dataelementExample1064)).toBe(true);
	 });

	 test("validate DataElement-Device.udi.jurisdiction.json", () => {
		 const dataelementExample1065 = require("../stu3-resources/DataElement-Device.udi.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample1065)).toBe(true);
	 });

	 test("validate DataElement-Device.udi.name.json", () => {
		 const dataelementExample1066 = require("../stu3-resources/DataElement-Device.udi.name.json");
		 expect(dataelementValidateFunction(dataelementExample1066)).toBe(true);
	 });

	 test("validate DataElement-Device.url.json", () => {
		 const dataelementExample1067 = require("../stu3-resources/DataElement-Device.url.json");
		 expect(dataelementValidateFunction(dataelementExample1067)).toBe(true);
	 });

	 test("validate DataElement-Device.version.json", () => {
		 const dataelementExample1068 = require("../stu3-resources/DataElement-Device.version.json");
		 expect(dataelementValidateFunction(dataelementExample1068)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.identifier.json", () => {
		 const dataelementExample1069 = require("../stu3-resources/DataElement-DeviceComponent.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1069)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.json", () => {
		 const dataelementExample1070 = require("../stu3-resources/DataElement-DeviceComponent.json");
		 expect(dataelementValidateFunction(dataelementExample1070)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.languageCode.json", () => {
		 const dataelementExample1071 = require("../stu3-resources/DataElement-DeviceComponent.languageCode.json");
		 expect(dataelementValidateFunction(dataelementExample1071)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.lastSystemChange.json", () => {
		 const dataelementExample1072 = require("../stu3-resources/DataElement-DeviceComponent.lastSystemChange.json");
		 expect(dataelementValidateFunction(dataelementExample1072)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.measurementPrinciple.json", () => {
		 const dataelementExample1073 = require("../stu3-resources/DataElement-DeviceComponent.measurementPrinciple.json");
		 expect(dataelementValidateFunction(dataelementExample1073)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.operationalStatus.json", () => {
		 const dataelementExample1074 = require("../stu3-resources/DataElement-DeviceComponent.operationalStatus.json");
		 expect(dataelementValidateFunction(dataelementExample1074)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.parameterGroup.json", () => {
		 const dataelementExample1075 = require("../stu3-resources/DataElement-DeviceComponent.parameterGroup.json");
		 expect(dataelementValidateFunction(dataelementExample1075)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.parent.json", () => {
		 const dataelementExample1076 = require("../stu3-resources/DataElement-DeviceComponent.parent.json");
		 expect(dataelementValidateFunction(dataelementExample1076)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.productionSpecification.componentId.json", () => {
		 const dataelementExample1077 = require("../stu3-resources/DataElement-DeviceComponent.productionSpecification.componentId.json");
		 expect(dataelementValidateFunction(dataelementExample1077)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.productionSpecification.json", () => {
		 const dataelementExample1078 = require("../stu3-resources/DataElement-DeviceComponent.productionSpecification.json");
		 expect(dataelementValidateFunction(dataelementExample1078)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.productionSpecification.productionSpec.json", () => {
		 const dataelementExample1079 = require("../stu3-resources/DataElement-DeviceComponent.productionSpecification.productionSpec.json");
		 expect(dataelementValidateFunction(dataelementExample1079)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.productionSpecification.specType.json", () => {
		 const dataelementExample1080 = require("../stu3-resources/DataElement-DeviceComponent.productionSpecification.specType.json");
		 expect(dataelementValidateFunction(dataelementExample1080)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.source.json", () => {
		 const dataelementExample1081 = require("../stu3-resources/DataElement-DeviceComponent.source.json");
		 expect(dataelementValidateFunction(dataelementExample1081)).toBe(true);
	 });

	 test("validate DataElement-DeviceComponent.type.json", () => {
		 const dataelementExample1082 = require("../stu3-resources/DataElement-DeviceComponent.type.json");
		 expect(dataelementValidateFunction(dataelementExample1082)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.calibration.json", () => {
		 const dataelementExample1083 = require("../stu3-resources/DataElement-DeviceMetric.calibration.json");
		 expect(dataelementValidateFunction(dataelementExample1083)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.calibration.state.json", () => {
		 const dataelementExample1084 = require("../stu3-resources/DataElement-DeviceMetric.calibration.state.json");
		 expect(dataelementValidateFunction(dataelementExample1084)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.calibration.time.json", () => {
		 const dataelementExample1085 = require("../stu3-resources/DataElement-DeviceMetric.calibration.time.json");
		 expect(dataelementValidateFunction(dataelementExample1085)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.calibration.type.json", () => {
		 const dataelementExample1086 = require("../stu3-resources/DataElement-DeviceMetric.calibration.type.json");
		 expect(dataelementValidateFunction(dataelementExample1086)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.category.json", () => {
		 const dataelementExample1087 = require("../stu3-resources/DataElement-DeviceMetric.category.json");
		 expect(dataelementValidateFunction(dataelementExample1087)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.color.json", () => {
		 const dataelementExample1088 = require("../stu3-resources/DataElement-DeviceMetric.color.json");
		 expect(dataelementValidateFunction(dataelementExample1088)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.identifier.json", () => {
		 const dataelementExample1089 = require("../stu3-resources/DataElement-DeviceMetric.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1089)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.json", () => {
		 const dataelementExample1090 = require("../stu3-resources/DataElement-DeviceMetric.json");
		 expect(dataelementValidateFunction(dataelementExample1090)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.measurementPeriod.json", () => {
		 const dataelementExample1091 = require("../stu3-resources/DataElement-DeviceMetric.measurementPeriod.json");
		 expect(dataelementValidateFunction(dataelementExample1091)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.operationalStatus.json", () => {
		 const dataelementExample1092 = require("../stu3-resources/DataElement-DeviceMetric.operationalStatus.json");
		 expect(dataelementValidateFunction(dataelementExample1092)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.parent.json", () => {
		 const dataelementExample1093 = require("../stu3-resources/DataElement-DeviceMetric.parent.json");
		 expect(dataelementValidateFunction(dataelementExample1093)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.source.json", () => {
		 const dataelementExample1094 = require("../stu3-resources/DataElement-DeviceMetric.source.json");
		 expect(dataelementValidateFunction(dataelementExample1094)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.type.json", () => {
		 const dataelementExample1095 = require("../stu3-resources/DataElement-DeviceMetric.type.json");
		 expect(dataelementValidateFunction(dataelementExample1095)).toBe(true);
	 });

	 test("validate DataElement-DeviceMetric.unit.json", () => {
		 const dataelementExample1096 = require("../stu3-resources/DataElement-DeviceMetric.unit.json");
		 expect(dataelementValidateFunction(dataelementExample1096)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.authoredOn.json", () => {
		 const dataelementExample1097 = require("../stu3-resources/DataElement-DeviceRequest.authoredOn.json");
		 expect(dataelementValidateFunction(dataelementExample1097)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.basedOn.json", () => {
		 const dataelementExample1098 = require("../stu3-resources/DataElement-DeviceRequest.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample1098)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.codeX.json", () => {
		 const dataelementExample1099 = require("../stu3-resources/DataElement-DeviceRequest.codeX.json");
		 expect(dataelementValidateFunction(dataelementExample1099)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.context.json", () => {
		 const dataelementExample1100 = require("../stu3-resources/DataElement-DeviceRequest.context.json");
		 expect(dataelementValidateFunction(dataelementExample1100)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.definition.json", () => {
		 const dataelementExample1101 = require("../stu3-resources/DataElement-DeviceRequest.definition.json");
		 expect(dataelementValidateFunction(dataelementExample1101)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.groupIdentifier.json", () => {
		 const dataelementExample1102 = require("../stu3-resources/DataElement-DeviceRequest.groupIdentifier.json");
		 expect(dataelementValidateFunction(dataelementExample1102)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.identifier.json", () => {
		 const dataelementExample1103 = require("../stu3-resources/DataElement-DeviceRequest.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1103)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.intent.json", () => {
		 const dataelementExample1104 = require("../stu3-resources/DataElement-DeviceRequest.intent.json");
		 expect(dataelementValidateFunction(dataelementExample1104)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.json", () => {
		 const dataelementExample1105 = require("../stu3-resources/DataElement-DeviceRequest.json");
		 expect(dataelementValidateFunction(dataelementExample1105)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.note.json", () => {
		 const dataelementExample1106 = require("../stu3-resources/DataElement-DeviceRequest.note.json");
		 expect(dataelementValidateFunction(dataelementExample1106)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.occurrenceX.json", () => {
		 const dataelementExample1107 = require("../stu3-resources/DataElement-DeviceRequest.occurrenceX.json");
		 expect(dataelementValidateFunction(dataelementExample1107)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.performer.json", () => {
		 const dataelementExample1108 = require("../stu3-resources/DataElement-DeviceRequest.performer.json");
		 expect(dataelementValidateFunction(dataelementExample1108)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.performerType.json", () => {
		 const dataelementExample1109 = require("../stu3-resources/DataElement-DeviceRequest.performerType.json");
		 expect(dataelementValidateFunction(dataelementExample1109)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.priorRequest.json", () => {
		 const dataelementExample1110 = require("../stu3-resources/DataElement-DeviceRequest.priorRequest.json");
		 expect(dataelementValidateFunction(dataelementExample1110)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.priority.json", () => {
		 const dataelementExample1111 = require("../stu3-resources/DataElement-DeviceRequest.priority.json");
		 expect(dataelementValidateFunction(dataelementExample1111)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.reasonCode.json", () => {
		 const dataelementExample1112 = require("../stu3-resources/DataElement-DeviceRequest.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample1112)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.reasonReference.json", () => {
		 const dataelementExample1113 = require("../stu3-resources/DataElement-DeviceRequest.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample1113)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.relevantHistory.json", () => {
		 const dataelementExample1114 = require("../stu3-resources/DataElement-DeviceRequest.relevantHistory.json");
		 expect(dataelementValidateFunction(dataelementExample1114)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.requester.agent.json", () => {
		 const dataelementExample1115 = require("../stu3-resources/DataElement-DeviceRequest.requester.agent.json");
		 expect(dataelementValidateFunction(dataelementExample1115)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.requester.json", () => {
		 const dataelementExample1116 = require("../stu3-resources/DataElement-DeviceRequest.requester.json");
		 expect(dataelementValidateFunction(dataelementExample1116)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.requester.onBehalfOf.json", () => {
		 const dataelementExample1117 = require("../stu3-resources/DataElement-DeviceRequest.requester.onBehalfOf.json");
		 expect(dataelementValidateFunction(dataelementExample1117)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.status.json", () => {
		 const dataelementExample1118 = require("../stu3-resources/DataElement-DeviceRequest.status.json");
		 expect(dataelementValidateFunction(dataelementExample1118)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.subject.json", () => {
		 const dataelementExample1119 = require("../stu3-resources/DataElement-DeviceRequest.subject.json");
		 expect(dataelementValidateFunction(dataelementExample1119)).toBe(true);
	 });

	 test("validate DataElement-DeviceRequest.supportingInfo.json", () => {
		 const dataelementExample1120 = require("../stu3-resources/DataElement-DeviceRequest.supportingInfo.json");
		 expect(dataelementValidateFunction(dataelementExample1120)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.bodySite.json", () => {
		 const dataelementExample1121 = require("../stu3-resources/DataElement-DeviceUseStatement.bodySite.json");
		 expect(dataelementValidateFunction(dataelementExample1121)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.device.json", () => {
		 const dataelementExample1122 = require("../stu3-resources/DataElement-DeviceUseStatement.device.json");
		 expect(dataelementValidateFunction(dataelementExample1122)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.identifier.json", () => {
		 const dataelementExample1123 = require("../stu3-resources/DataElement-DeviceUseStatement.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1123)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.indication.json", () => {
		 const dataelementExample1124 = require("../stu3-resources/DataElement-DeviceUseStatement.indication.json");
		 expect(dataelementValidateFunction(dataelementExample1124)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.json", () => {
		 const dataelementExample1125 = require("../stu3-resources/DataElement-DeviceUseStatement.json");
		 expect(dataelementValidateFunction(dataelementExample1125)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.note.json", () => {
		 const dataelementExample1126 = require("../stu3-resources/DataElement-DeviceUseStatement.note.json");
		 expect(dataelementValidateFunction(dataelementExample1126)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.recordedOn.json", () => {
		 const dataelementExample1127 = require("../stu3-resources/DataElement-DeviceUseStatement.recordedOn.json");
		 expect(dataelementValidateFunction(dataelementExample1127)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.source.json", () => {
		 const dataelementExample1128 = require("../stu3-resources/DataElement-DeviceUseStatement.source.json");
		 expect(dataelementValidateFunction(dataelementExample1128)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.status.json", () => {
		 const dataelementExample1129 = require("../stu3-resources/DataElement-DeviceUseStatement.status.json");
		 expect(dataelementValidateFunction(dataelementExample1129)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.subject.json", () => {
		 const dataelementExample1130 = require("../stu3-resources/DataElement-DeviceUseStatement.subject.json");
		 expect(dataelementValidateFunction(dataelementExample1130)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.timingX.json", () => {
		 const dataelementExample1131 = require("../stu3-resources/DataElement-DeviceUseStatement.timingX.json");
		 expect(dataelementValidateFunction(dataelementExample1131)).toBe(true);
	 });

	 test("validate DataElement-DeviceUseStatement.whenUsed.json", () => {
		 const dataelementExample1132 = require("../stu3-resources/DataElement-DeviceUseStatement.whenUsed.json");
		 expect(dataelementValidateFunction(dataelementExample1132)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.basedOn.json", () => {
		 const dataelementExample1133 = require("../stu3-resources/DataElement-DiagnosticReport.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample1133)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.category.json", () => {
		 const dataelementExample1134 = require("../stu3-resources/DataElement-DiagnosticReport.category.json");
		 expect(dataelementValidateFunction(dataelementExample1134)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.code.json", () => {
		 const dataelementExample1135 = require("../stu3-resources/DataElement-DiagnosticReport.code.json");
		 expect(dataelementValidateFunction(dataelementExample1135)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.codedDiagnosis.json", () => {
		 const dataelementExample1136 = require("../stu3-resources/DataElement-DiagnosticReport.codedDiagnosis.json");
		 expect(dataelementValidateFunction(dataelementExample1136)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.conclusion.json", () => {
		 const dataelementExample1137 = require("../stu3-resources/DataElement-DiagnosticReport.conclusion.json");
		 expect(dataelementValidateFunction(dataelementExample1137)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.context.json", () => {
		 const dataelementExample1138 = require("../stu3-resources/DataElement-DiagnosticReport.context.json");
		 expect(dataelementValidateFunction(dataelementExample1138)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.effectiveX.json", () => {
		 const dataelementExample1139 = require("../stu3-resources/DataElement-DiagnosticReport.effectiveX.json");
		 expect(dataelementValidateFunction(dataelementExample1139)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.identifier.json", () => {
		 const dataelementExample1140 = require("../stu3-resources/DataElement-DiagnosticReport.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1140)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.image.comment.json", () => {
		 const dataelementExample1141 = require("../stu3-resources/DataElement-DiagnosticReport.image.comment.json");
		 expect(dataelementValidateFunction(dataelementExample1141)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.image.json", () => {
		 const dataelementExample1142 = require("../stu3-resources/DataElement-DiagnosticReport.image.json");
		 expect(dataelementValidateFunction(dataelementExample1142)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.image.link.json", () => {
		 const dataelementExample1143 = require("../stu3-resources/DataElement-DiagnosticReport.image.link.json");
		 expect(dataelementValidateFunction(dataelementExample1143)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.imagingStudy.json", () => {
		 const dataelementExample1144 = require("../stu3-resources/DataElement-DiagnosticReport.imagingStudy.json");
		 expect(dataelementValidateFunction(dataelementExample1144)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.issued.json", () => {
		 const dataelementExample1145 = require("../stu3-resources/DataElement-DiagnosticReport.issued.json");
		 expect(dataelementValidateFunction(dataelementExample1145)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.json", () => {
		 const dataelementExample1146 = require("../stu3-resources/DataElement-DiagnosticReport.json");
		 expect(dataelementValidateFunction(dataelementExample1146)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.performer.actor.json", () => {
		 const dataelementExample1147 = require("../stu3-resources/DataElement-DiagnosticReport.performer.actor.json");
		 expect(dataelementValidateFunction(dataelementExample1147)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.performer.json", () => {
		 const dataelementExample1148 = require("../stu3-resources/DataElement-DiagnosticReport.performer.json");
		 expect(dataelementValidateFunction(dataelementExample1148)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.performer.role.json", () => {
		 const dataelementExample1149 = require("../stu3-resources/DataElement-DiagnosticReport.performer.role.json");
		 expect(dataelementValidateFunction(dataelementExample1149)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.presentedForm.json", () => {
		 const dataelementExample1150 = require("../stu3-resources/DataElement-DiagnosticReport.presentedForm.json");
		 expect(dataelementValidateFunction(dataelementExample1150)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.result.json", () => {
		 const dataelementExample1151 = require("../stu3-resources/DataElement-DiagnosticReport.result.json");
		 expect(dataelementValidateFunction(dataelementExample1151)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.specimen.json", () => {
		 const dataelementExample1152 = require("../stu3-resources/DataElement-DiagnosticReport.specimen.json");
		 expect(dataelementValidateFunction(dataelementExample1152)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.status.json", () => {
		 const dataelementExample1153 = require("../stu3-resources/DataElement-DiagnosticReport.status.json");
		 expect(dataelementValidateFunction(dataelementExample1153)).toBe(true);
	 });

	 test("validate DataElement-DiagnosticReport.subject.json", () => {
		 const dataelementExample1154 = require("../stu3-resources/DataElement-DiagnosticReport.subject.json");
		 expect(dataelementValidateFunction(dataelementExample1154)).toBe(true);
	 });

	 test("validate DataElement-Distance.json", () => {
		 const dataelementExample1155 = require("../stu3-resources/DataElement-Distance.json");
		 expect(dataelementValidateFunction(dataelementExample1155)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.author.json", () => {
		 const dataelementExample1156 = require("../stu3-resources/DataElement-DocumentManifest.author.json");
		 expect(dataelementValidateFunction(dataelementExample1156)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.content.json", () => {
		 const dataelementExample1157 = require("../stu3-resources/DataElement-DocumentManifest.content.json");
		 expect(dataelementValidateFunction(dataelementExample1157)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.content.pX.json", () => {
		 const dataelementExample1158 = require("../stu3-resources/DataElement-DocumentManifest.content.pX.json");
		 expect(dataelementValidateFunction(dataelementExample1158)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.created.json", () => {
		 const dataelementExample1159 = require("../stu3-resources/DataElement-DocumentManifest.created.json");
		 expect(dataelementValidateFunction(dataelementExample1159)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.description.json", () => {
		 const dataelementExample1160 = require("../stu3-resources/DataElement-DocumentManifest.description.json");
		 expect(dataelementValidateFunction(dataelementExample1160)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.identifier.json", () => {
		 const dataelementExample1161 = require("../stu3-resources/DataElement-DocumentManifest.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1161)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.json", () => {
		 const dataelementExample1162 = require("../stu3-resources/DataElement-DocumentManifest.json");
		 expect(dataelementValidateFunction(dataelementExample1162)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.masterIdentifier.json", () => {
		 const dataelementExample1163 = require("../stu3-resources/DataElement-DocumentManifest.masterIdentifier.json");
		 expect(dataelementValidateFunction(dataelementExample1163)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.recipient.json", () => {
		 const dataelementExample1164 = require("../stu3-resources/DataElement-DocumentManifest.recipient.json");
		 expect(dataelementValidateFunction(dataelementExample1164)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.related.identifier.json", () => {
		 const dataelementExample1165 = require("../stu3-resources/DataElement-DocumentManifest.related.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1165)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.related.json", () => {
		 const dataelementExample1166 = require("../stu3-resources/DataElement-DocumentManifest.related.json");
		 expect(dataelementValidateFunction(dataelementExample1166)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.related.ref.json", () => {
		 const dataelementExample1167 = require("../stu3-resources/DataElement-DocumentManifest.related.ref.json");
		 expect(dataelementValidateFunction(dataelementExample1167)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.source.json", () => {
		 const dataelementExample1168 = require("../stu3-resources/DataElement-DocumentManifest.source.json");
		 expect(dataelementValidateFunction(dataelementExample1168)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.status.json", () => {
		 const dataelementExample1169 = require("../stu3-resources/DataElement-DocumentManifest.status.json");
		 expect(dataelementValidateFunction(dataelementExample1169)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.subject.json", () => {
		 const dataelementExample1170 = require("../stu3-resources/DataElement-DocumentManifest.subject.json");
		 expect(dataelementValidateFunction(dataelementExample1170)).toBe(true);
	 });

	 test("validate DataElement-DocumentManifest.type.json", () => {
		 const dataelementExample1171 = require("../stu3-resources/DataElement-DocumentManifest.type.json");
		 expect(dataelementValidateFunction(dataelementExample1171)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.authenticator.json", () => {
		 const dataelementExample1172 = require("../stu3-resources/DataElement-DocumentReference.authenticator.json");
		 expect(dataelementValidateFunction(dataelementExample1172)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.author.json", () => {
		 const dataelementExample1173 = require("../stu3-resources/DataElement-DocumentReference.author.json");
		 expect(dataelementValidateFunction(dataelementExample1173)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.class.json", () => {
		 const dataelementExample1174 = require("../stu3-resources/DataElement-DocumentReference.class.json");
		 expect(dataelementValidateFunction(dataelementExample1174)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.content.attachment.json", () => {
		 const dataelementExample1175 = require("../stu3-resources/DataElement-DocumentReference.content.attachment.json");
		 expect(dataelementValidateFunction(dataelementExample1175)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.content.format.json", () => {
		 const dataelementExample1176 = require("../stu3-resources/DataElement-DocumentReference.content.format.json");
		 expect(dataelementValidateFunction(dataelementExample1176)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.content.json", () => {
		 const dataelementExample1177 = require("../stu3-resources/DataElement-DocumentReference.content.json");
		 expect(dataelementValidateFunction(dataelementExample1177)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.context.encounter.json", () => {
		 const dataelementExample1178 = require("../stu3-resources/DataElement-DocumentReference.context.encounter.json");
		 expect(dataelementValidateFunction(dataelementExample1178)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.context.event.json", () => {
		 const dataelementExample1179 = require("../stu3-resources/DataElement-DocumentReference.context.event.json");
		 expect(dataelementValidateFunction(dataelementExample1179)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.context.facilityType.json", () => {
		 const dataelementExample1180 = require("../stu3-resources/DataElement-DocumentReference.context.facilityType.json");
		 expect(dataelementValidateFunction(dataelementExample1180)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.context.json", () => {
		 const dataelementExample1181 = require("../stu3-resources/DataElement-DocumentReference.context.json");
		 expect(dataelementValidateFunction(dataelementExample1181)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.context.period.json", () => {
		 const dataelementExample1182 = require("../stu3-resources/DataElement-DocumentReference.context.period.json");
		 expect(dataelementValidateFunction(dataelementExample1182)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.context.practiceSetting.json", () => {
		 const dataelementExample1183 = require("../stu3-resources/DataElement-DocumentReference.context.practiceSetting.json");
		 expect(dataelementValidateFunction(dataelementExample1183)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.context.related.identifier.json", () => {
		 const dataelementExample1184 = require("../stu3-resources/DataElement-DocumentReference.context.related.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1184)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.context.related.json", () => {
		 const dataelementExample1185 = require("../stu3-resources/DataElement-DocumentReference.context.related.json");
		 expect(dataelementValidateFunction(dataelementExample1185)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.context.related.ref.json", () => {
		 const dataelementExample1186 = require("../stu3-resources/DataElement-DocumentReference.context.related.ref.json");
		 expect(dataelementValidateFunction(dataelementExample1186)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.context.sourcePatientInfo.json", () => {
		 const dataelementExample1187 = require("../stu3-resources/DataElement-DocumentReference.context.sourcePatientInfo.json");
		 expect(dataelementValidateFunction(dataelementExample1187)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.created.json", () => {
		 const dataelementExample1188 = require("../stu3-resources/DataElement-DocumentReference.created.json");
		 expect(dataelementValidateFunction(dataelementExample1188)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.custodian.json", () => {
		 const dataelementExample1189 = require("../stu3-resources/DataElement-DocumentReference.custodian.json");
		 expect(dataelementValidateFunction(dataelementExample1189)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.description.json", () => {
		 const dataelementExample1190 = require("../stu3-resources/DataElement-DocumentReference.description.json");
		 expect(dataelementValidateFunction(dataelementExample1190)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.docStatus.json", () => {
		 const dataelementExample1191 = require("../stu3-resources/DataElement-DocumentReference.docStatus.json");
		 expect(dataelementValidateFunction(dataelementExample1191)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.identifier.json", () => {
		 const dataelementExample1192 = require("../stu3-resources/DataElement-DocumentReference.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1192)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.indexed.json", () => {
		 const dataelementExample1193 = require("../stu3-resources/DataElement-DocumentReference.indexed.json");
		 expect(dataelementValidateFunction(dataelementExample1193)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.json", () => {
		 const dataelementExample1194 = require("../stu3-resources/DataElement-DocumentReference.json");
		 expect(dataelementValidateFunction(dataelementExample1194)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.masterIdentifier.json", () => {
		 const dataelementExample1195 = require("../stu3-resources/DataElement-DocumentReference.masterIdentifier.json");
		 expect(dataelementValidateFunction(dataelementExample1195)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.relatesTo.code.json", () => {
		 const dataelementExample1196 = require("../stu3-resources/DataElement-DocumentReference.relatesTo.code.json");
		 expect(dataelementValidateFunction(dataelementExample1196)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.relatesTo.json", () => {
		 const dataelementExample1197 = require("../stu3-resources/DataElement-DocumentReference.relatesTo.json");
		 expect(dataelementValidateFunction(dataelementExample1197)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.relatesTo.target.json", () => {
		 const dataelementExample1198 = require("../stu3-resources/DataElement-DocumentReference.relatesTo.target.json");
		 expect(dataelementValidateFunction(dataelementExample1198)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.securityLabel.json", () => {
		 const dataelementExample1199 = require("../stu3-resources/DataElement-DocumentReference.securityLabel.json");
		 expect(dataelementValidateFunction(dataelementExample1199)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.status.json", () => {
		 const dataelementExample1200 = require("../stu3-resources/DataElement-DocumentReference.status.json");
		 expect(dataelementValidateFunction(dataelementExample1200)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.subject.json", () => {
		 const dataelementExample1201 = require("../stu3-resources/DataElement-DocumentReference.subject.json");
		 expect(dataelementValidateFunction(dataelementExample1201)).toBe(true);
	 });

	 test("validate DataElement-DocumentReference.type.json", () => {
		 const dataelementExample1202 = require("../stu3-resources/DataElement-DocumentReference.type.json");
		 expect(dataelementValidateFunction(dataelementExample1202)).toBe(true);
	 });

	 test("validate DataElement-DomainResource.contained.json", () => {
		 const dataelementExample1203 = require("../stu3-resources/DataElement-DomainResource.contained.json");
		 expect(dataelementValidateFunction(dataelementExample1203)).toBe(true);
	 });

	 test("validate DataElement-DomainResource.extension.json", () => {
		 const dataelementExample1204 = require("../stu3-resources/DataElement-DomainResource.extension.json");
		 expect(dataelementValidateFunction(dataelementExample1204)).toBe(true);
	 });

	 test("validate DataElement-DomainResource.json", () => {
		 const dataelementExample1205 = require("../stu3-resources/DataElement-DomainResource.json");
		 expect(dataelementValidateFunction(dataelementExample1205)).toBe(true);
	 });

	 test("validate DataElement-DomainResource.modifierExtension.json", () => {
		 const dataelementExample1206 = require("../stu3-resources/DataElement-DomainResource.modifierExtension.json");
		 expect(dataelementValidateFunction(dataelementExample1206)).toBe(true);
	 });

	 test("validate DataElement-DomainResource.text.json", () => {
		 const dataelementExample1207 = require("../stu3-resources/DataElement-DomainResource.text.json");
		 expect(dataelementValidateFunction(dataelementExample1207)).toBe(true);
	 });

	 test("validate DataElement-Dosage.additionalInstruction.json", () => {
		 const dataelementExample1208 = require("../stu3-resources/DataElement-Dosage.additionalInstruction.json");
		 expect(dataelementValidateFunction(dataelementExample1208)).toBe(true);
	 });

	 test("validate DataElement-Dosage.asNeededX.json", () => {
		 const dataelementExample1209 = require("../stu3-resources/DataElement-Dosage.asNeededX.json");
		 expect(dataelementValidateFunction(dataelementExample1209)).toBe(true);
	 });

	 test("validate DataElement-Dosage.doseX.json", () => {
		 const dataelementExample1210 = require("../stu3-resources/DataElement-Dosage.doseX.json");
		 expect(dataelementValidateFunction(dataelementExample1210)).toBe(true);
	 });

	 test("validate DataElement-Dosage.json", () => {
		 const dataelementExample1211 = require("../stu3-resources/DataElement-Dosage.json");
		 expect(dataelementValidateFunction(dataelementExample1211)).toBe(true);
	 });

	 test("validate DataElement-Dosage.maxDosePerAdministration.json", () => {
		 const dataelementExample1212 = require("../stu3-resources/DataElement-Dosage.maxDosePerAdministration.json");
		 expect(dataelementValidateFunction(dataelementExample1212)).toBe(true);
	 });

	 test("validate DataElement-Dosage.maxDosePerLifetime.json", () => {
		 const dataelementExample1213 = require("../stu3-resources/DataElement-Dosage.maxDosePerLifetime.json");
		 expect(dataelementValidateFunction(dataelementExample1213)).toBe(true);
	 });

	 test("validate DataElement-Dosage.maxDosePerPeriod.json", () => {
		 const dataelementExample1214 = require("../stu3-resources/DataElement-Dosage.maxDosePerPeriod.json");
		 expect(dataelementValidateFunction(dataelementExample1214)).toBe(true);
	 });

	 test("validate DataElement-Dosage.method.json", () => {
		 const dataelementExample1215 = require("../stu3-resources/DataElement-Dosage.method.json");
		 expect(dataelementValidateFunction(dataelementExample1215)).toBe(true);
	 });

	 test("validate DataElement-Dosage.patientInstruction.json", () => {
		 const dataelementExample1216 = require("../stu3-resources/DataElement-Dosage.patientInstruction.json");
		 expect(dataelementValidateFunction(dataelementExample1216)).toBe(true);
	 });

	 test("validate DataElement-Dosage.rateX.json", () => {
		 const dataelementExample1217 = require("../stu3-resources/DataElement-Dosage.rateX.json");
		 expect(dataelementValidateFunction(dataelementExample1217)).toBe(true);
	 });

	 test("validate DataElement-Dosage.route.json", () => {
		 const dataelementExample1218 = require("../stu3-resources/DataElement-Dosage.route.json");
		 expect(dataelementValidateFunction(dataelementExample1218)).toBe(true);
	 });

	 test("validate DataElement-Dosage.sequence.json", () => {
		 const dataelementExample1219 = require("../stu3-resources/DataElement-Dosage.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample1219)).toBe(true);
	 });

	 test("validate DataElement-Dosage.site.json", () => {
		 const dataelementExample1220 = require("../stu3-resources/DataElement-Dosage.site.json");
		 expect(dataelementValidateFunction(dataelementExample1220)).toBe(true);
	 });

	 test("validate DataElement-Dosage.text.json", () => {
		 const dataelementExample1221 = require("../stu3-resources/DataElement-Dosage.text.json");
		 expect(dataelementValidateFunction(dataelementExample1221)).toBe(true);
	 });

	 test("validate DataElement-Dosage.timing.json", () => {
		 const dataelementExample1222 = require("../stu3-resources/DataElement-Dosage.timing.json");
		 expect(dataelementValidateFunction(dataelementExample1222)).toBe(true);
	 });

	 test("validate DataElement-Duration.json", () => {
		 const dataelementExample1223 = require("../stu3-resources/DataElement-Duration.json");
		 expect(dataelementValidateFunction(dataelementExample1223)).toBe(true);
	 });

	 test("validate DataElement-Element.extension.json", () => {
		 const dataelementExample1224 = require("../stu3-resources/DataElement-Element.extension.json");
		 expect(dataelementValidateFunction(dataelementExample1224)).toBe(true);
	 });

	 test("validate DataElement-Element.id.json", () => {
		 const dataelementExample1225 = require("../stu3-resources/DataElement-Element.id.json");
		 expect(dataelementValidateFunction(dataelementExample1225)).toBe(true);
	 });

	 test("validate DataElement-Element.json", () => {
		 const dataelementExample1226 = require("../stu3-resources/DataElement-Element.json");
		 expect(dataelementValidateFunction(dataelementExample1226)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.alias.json", () => {
		 const dataelementExample1227 = require("../stu3-resources/DataElement-ElementDefinition.alias.json");
		 expect(dataelementValidateFunction(dataelementExample1227)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.base.json", () => {
		 const dataelementExample1228 = require("../stu3-resources/DataElement-ElementDefinition.base.json");
		 expect(dataelementValidateFunction(dataelementExample1228)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.base.max.json", () => {
		 const dataelementExample1229 = require("../stu3-resources/DataElement-ElementDefinition.base.max.json");
		 expect(dataelementValidateFunction(dataelementExample1229)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.base.min.json", () => {
		 const dataelementExample1230 = require("../stu3-resources/DataElement-ElementDefinition.base.min.json");
		 expect(dataelementValidateFunction(dataelementExample1230)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.base.path.json", () => {
		 const dataelementExample1231 = require("../stu3-resources/DataElement-ElementDefinition.base.path.json");
		 expect(dataelementValidateFunction(dataelementExample1231)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.binding.description.json", () => {
		 const dataelementExample1232 = require("../stu3-resources/DataElement-ElementDefinition.binding.description.json");
		 expect(dataelementValidateFunction(dataelementExample1232)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.binding.json", () => {
		 const dataelementExample1233 = require("../stu3-resources/DataElement-ElementDefinition.binding.json");
		 expect(dataelementValidateFunction(dataelementExample1233)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.binding.strength.json", () => {
		 const dataelementExample1234 = require("../stu3-resources/DataElement-ElementDefinition.binding.strength.json");
		 expect(dataelementValidateFunction(dataelementExample1234)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.binding.valueSetX.json", () => {
		 const dataelementExample1235 = require("../stu3-resources/DataElement-ElementDefinition.binding.valueSetX.json");
		 expect(dataelementValidateFunction(dataelementExample1235)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.code.json", () => {
		 const dataelementExample1236 = require("../stu3-resources/DataElement-ElementDefinition.code.json");
		 expect(dataelementValidateFunction(dataelementExample1236)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.comment.json", () => {
		 const dataelementExample1237 = require("../stu3-resources/DataElement-ElementDefinition.comment.json");
		 expect(dataelementValidateFunction(dataelementExample1237)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.condition.json", () => {
		 const dataelementExample1238 = require("../stu3-resources/DataElement-ElementDefinition.condition.json");
		 expect(dataelementValidateFunction(dataelementExample1238)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.constraint.expression.json", () => {
		 const dataelementExample1239 = require("../stu3-resources/DataElement-ElementDefinition.constraint.expression.json");
		 expect(dataelementValidateFunction(dataelementExample1239)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.constraint.human.json", () => {
		 const dataelementExample1240 = require("../stu3-resources/DataElement-ElementDefinition.constraint.human.json");
		 expect(dataelementValidateFunction(dataelementExample1240)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.constraint.json", () => {
		 const dataelementExample1241 = require("../stu3-resources/DataElement-ElementDefinition.constraint.json");
		 expect(dataelementValidateFunction(dataelementExample1241)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.constraint.key.json", () => {
		 const dataelementExample1242 = require("../stu3-resources/DataElement-ElementDefinition.constraint.key.json");
		 expect(dataelementValidateFunction(dataelementExample1242)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.constraint.requirements.json", () => {
		 const dataelementExample1243 = require("../stu3-resources/DataElement-ElementDefinition.constraint.requirements.json");
		 expect(dataelementValidateFunction(dataelementExample1243)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.constraint.severity.json", () => {
		 const dataelementExample1244 = require("../stu3-resources/DataElement-ElementDefinition.constraint.severity.json");
		 expect(dataelementValidateFunction(dataelementExample1244)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.constraint.source.json", () => {
		 const dataelementExample1245 = require("../stu3-resources/DataElement-ElementDefinition.constraint.source.json");
		 expect(dataelementValidateFunction(dataelementExample1245)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.constraint.xpath.json", () => {
		 const dataelementExample1246 = require("../stu3-resources/DataElement-ElementDefinition.constraint.xpath.json");
		 expect(dataelementValidateFunction(dataelementExample1246)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.contentReference.json", () => {
		 const dataelementExample1247 = require("../stu3-resources/DataElement-ElementDefinition.contentReference.json");
		 expect(dataelementValidateFunction(dataelementExample1247)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.defaultValueX.json", () => {
		 const dataelementExample1248 = require("../stu3-resources/DataElement-ElementDefinition.defaultValueX.json");
		 expect(dataelementValidateFunction(dataelementExample1248)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.definition.json", () => {
		 const dataelementExample1249 = require("../stu3-resources/DataElement-ElementDefinition.definition.json");
		 expect(dataelementValidateFunction(dataelementExample1249)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.example.json", () => {
		 const dataelementExample1250 = require("../stu3-resources/DataElement-ElementDefinition.example.json");
		 expect(dataelementValidateFunction(dataelementExample1250)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.example.label.json", () => {
		 const dataelementExample1251 = require("../stu3-resources/DataElement-ElementDefinition.example.label.json");
		 expect(dataelementValidateFunction(dataelementExample1251)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.example.valueX.json", () => {
		 const dataelementExample1252 = require("../stu3-resources/DataElement-ElementDefinition.example.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample1252)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.fixedX.json", () => {
		 const dataelementExample1253 = require("../stu3-resources/DataElement-ElementDefinition.fixedX.json");
		 expect(dataelementValidateFunction(dataelementExample1253)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.isModifier.json", () => {
		 const dataelementExample1254 = require("../stu3-resources/DataElement-ElementDefinition.isModifier.json");
		 expect(dataelementValidateFunction(dataelementExample1254)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.isSummary.json", () => {
		 const dataelementExample1255 = require("../stu3-resources/DataElement-ElementDefinition.isSummary.json");
		 expect(dataelementValidateFunction(dataelementExample1255)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.json", () => {
		 const dataelementExample1256 = require("../stu3-resources/DataElement-ElementDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample1256)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.label.json", () => {
		 const dataelementExample1257 = require("../stu3-resources/DataElement-ElementDefinition.label.json");
		 expect(dataelementValidateFunction(dataelementExample1257)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.mapping.comment.json", () => {
		 const dataelementExample1258 = require("../stu3-resources/DataElement-ElementDefinition.mapping.comment.json");
		 expect(dataelementValidateFunction(dataelementExample1258)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.mapping.identity.json", () => {
		 const dataelementExample1259 = require("../stu3-resources/DataElement-ElementDefinition.mapping.identity.json");
		 expect(dataelementValidateFunction(dataelementExample1259)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.mapping.json", () => {
		 const dataelementExample1260 = require("../stu3-resources/DataElement-ElementDefinition.mapping.json");
		 expect(dataelementValidateFunction(dataelementExample1260)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.mapping.language.json", () => {
		 const dataelementExample1261 = require("../stu3-resources/DataElement-ElementDefinition.mapping.language.json");
		 expect(dataelementValidateFunction(dataelementExample1261)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.mapping.map.json", () => {
		 const dataelementExample1262 = require("../stu3-resources/DataElement-ElementDefinition.mapping.map.json");
		 expect(dataelementValidateFunction(dataelementExample1262)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.max.json", () => {
		 const dataelementExample1263 = require("../stu3-resources/DataElement-ElementDefinition.max.json");
		 expect(dataelementValidateFunction(dataelementExample1263)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.maxLength.json", () => {
		 const dataelementExample1264 = require("../stu3-resources/DataElement-ElementDefinition.maxLength.json");
		 expect(dataelementValidateFunction(dataelementExample1264)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.maxValueX.json", () => {
		 const dataelementExample1265 = require("../stu3-resources/DataElement-ElementDefinition.maxValueX.json");
		 expect(dataelementValidateFunction(dataelementExample1265)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.meaningWhenMissing.json", () => {
		 const dataelementExample1266 = require("../stu3-resources/DataElement-ElementDefinition.meaningWhenMissing.json");
		 expect(dataelementValidateFunction(dataelementExample1266)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.min.json", () => {
		 const dataelementExample1267 = require("../stu3-resources/DataElement-ElementDefinition.min.json");
		 expect(dataelementValidateFunction(dataelementExample1267)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.minValueX.json", () => {
		 const dataelementExample1268 = require("../stu3-resources/DataElement-ElementDefinition.minValueX.json");
		 expect(dataelementValidateFunction(dataelementExample1268)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.mustSupport.json", () => {
		 const dataelementExample1269 = require("../stu3-resources/DataElement-ElementDefinition.mustSupport.json");
		 expect(dataelementValidateFunction(dataelementExample1269)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.orderMeaning.json", () => {
		 const dataelementExample1270 = require("../stu3-resources/DataElement-ElementDefinition.orderMeaning.json");
		 expect(dataelementValidateFunction(dataelementExample1270)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.path.json", () => {
		 const dataelementExample1271 = require("../stu3-resources/DataElement-ElementDefinition.path.json");
		 expect(dataelementValidateFunction(dataelementExample1271)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.patternX.json", () => {
		 const dataelementExample1272 = require("../stu3-resources/DataElement-ElementDefinition.patternX.json");
		 expect(dataelementValidateFunction(dataelementExample1272)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.representation.json", () => {
		 const dataelementExample1273 = require("../stu3-resources/DataElement-ElementDefinition.representation.json");
		 expect(dataelementValidateFunction(dataelementExample1273)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.requirements.json", () => {
		 const dataelementExample1274 = require("../stu3-resources/DataElement-ElementDefinition.requirements.json");
		 expect(dataelementValidateFunction(dataelementExample1274)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.short.json", () => {
		 const dataelementExample1275 = require("../stu3-resources/DataElement-ElementDefinition.short.json");
		 expect(dataelementValidateFunction(dataelementExample1275)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.sliceName.json", () => {
		 const dataelementExample1276 = require("../stu3-resources/DataElement-ElementDefinition.sliceName.json");
		 expect(dataelementValidateFunction(dataelementExample1276)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.slicing.description.json", () => {
		 const dataelementExample1277 = require("../stu3-resources/DataElement-ElementDefinition.slicing.description.json");
		 expect(dataelementValidateFunction(dataelementExample1277)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.slicing.discriminator.json", () => {
		 const dataelementExample1278 = require("../stu3-resources/DataElement-ElementDefinition.slicing.discriminator.json");
		 expect(dataelementValidateFunction(dataelementExample1278)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.slicing.discriminator.path.json", () => {
		 const dataelementExample1279 = require("../stu3-resources/DataElement-ElementDefinition.slicing.discriminator.path.json");
		 expect(dataelementValidateFunction(dataelementExample1279)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.slicing.discriminator.type.json", () => {
		 const dataelementExample1280 = require("../stu3-resources/DataElement-ElementDefinition.slicing.discriminator.type.json");
		 expect(dataelementValidateFunction(dataelementExample1280)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.slicing.json", () => {
		 const dataelementExample1281 = require("../stu3-resources/DataElement-ElementDefinition.slicing.json");
		 expect(dataelementValidateFunction(dataelementExample1281)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.slicing.ordered.json", () => {
		 const dataelementExample1282 = require("../stu3-resources/DataElement-ElementDefinition.slicing.ordered.json");
		 expect(dataelementValidateFunction(dataelementExample1282)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.slicing.rules.json", () => {
		 const dataelementExample1283 = require("../stu3-resources/DataElement-ElementDefinition.slicing.rules.json");
		 expect(dataelementValidateFunction(dataelementExample1283)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.type.aggregation.json", () => {
		 const dataelementExample1284 = require("../stu3-resources/DataElement-ElementDefinition.type.aggregation.json");
		 expect(dataelementValidateFunction(dataelementExample1284)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.type.code.json", () => {
		 const dataelementExample1285 = require("../stu3-resources/DataElement-ElementDefinition.type.code.json");
		 expect(dataelementValidateFunction(dataelementExample1285)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.type.json", () => {
		 const dataelementExample1286 = require("../stu3-resources/DataElement-ElementDefinition.type.json");
		 expect(dataelementValidateFunction(dataelementExample1286)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.type.profile.json", () => {
		 const dataelementExample1287 = require("../stu3-resources/DataElement-ElementDefinition.type.profile.json");
		 expect(dataelementValidateFunction(dataelementExample1287)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.type.targetProfile.json", () => {
		 const dataelementExample1288 = require("../stu3-resources/DataElement-ElementDefinition.type.targetProfile.json");
		 expect(dataelementValidateFunction(dataelementExample1288)).toBe(true);
	 });

	 test("validate DataElement-ElementDefinition.type.versioning.json", () => {
		 const dataelementExample1289 = require("../stu3-resources/DataElement-ElementDefinition.type.versioning.json");
		 expect(dataelementValidateFunction(dataelementExample1289)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.benefitCategory.json", () => {
		 const dataelementExample1290 = require("../stu3-resources/DataElement-EligibilityRequest.benefitCategory.json");
		 expect(dataelementValidateFunction(dataelementExample1290)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.benefitSubCategory.json", () => {
		 const dataelementExample1291 = require("../stu3-resources/DataElement-EligibilityRequest.benefitSubCategory.json");
		 expect(dataelementValidateFunction(dataelementExample1291)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.businessArrangement.json", () => {
		 const dataelementExample1292 = require("../stu3-resources/DataElement-EligibilityRequest.businessArrangement.json");
		 expect(dataelementValidateFunction(dataelementExample1292)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.coverage.json", () => {
		 const dataelementExample1293 = require("../stu3-resources/DataElement-EligibilityRequest.coverage.json");
		 expect(dataelementValidateFunction(dataelementExample1293)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.created.json", () => {
		 const dataelementExample1294 = require("../stu3-resources/DataElement-EligibilityRequest.created.json");
		 expect(dataelementValidateFunction(dataelementExample1294)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.enterer.json", () => {
		 const dataelementExample1295 = require("../stu3-resources/DataElement-EligibilityRequest.enterer.json");
		 expect(dataelementValidateFunction(dataelementExample1295)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.facility.json", () => {
		 const dataelementExample1296 = require("../stu3-resources/DataElement-EligibilityRequest.facility.json");
		 expect(dataelementValidateFunction(dataelementExample1296)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.identifier.json", () => {
		 const dataelementExample1297 = require("../stu3-resources/DataElement-EligibilityRequest.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1297)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.insurer.json", () => {
		 const dataelementExample1298 = require("../stu3-resources/DataElement-EligibilityRequest.insurer.json");
		 expect(dataelementValidateFunction(dataelementExample1298)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.json", () => {
		 const dataelementExample1299 = require("../stu3-resources/DataElement-EligibilityRequest.json");
		 expect(dataelementValidateFunction(dataelementExample1299)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.organization.json", () => {
		 const dataelementExample1300 = require("../stu3-resources/DataElement-EligibilityRequest.organization.json");
		 expect(dataelementValidateFunction(dataelementExample1300)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.patient.json", () => {
		 const dataelementExample1301 = require("../stu3-resources/DataElement-EligibilityRequest.patient.json");
		 expect(dataelementValidateFunction(dataelementExample1301)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.priority.json", () => {
		 const dataelementExample1302 = require("../stu3-resources/DataElement-EligibilityRequest.priority.json");
		 expect(dataelementValidateFunction(dataelementExample1302)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.provider.json", () => {
		 const dataelementExample1303 = require("../stu3-resources/DataElement-EligibilityRequest.provider.json");
		 expect(dataelementValidateFunction(dataelementExample1303)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.servicedX.json", () => {
		 const dataelementExample1304 = require("../stu3-resources/DataElement-EligibilityRequest.servicedX.json");
		 expect(dataelementValidateFunction(dataelementExample1304)).toBe(true);
	 });

	 test("validate DataElement-EligibilityRequest.status.json", () => {
		 const dataelementExample1305 = require("../stu3-resources/DataElement-EligibilityRequest.status.json");
		 expect(dataelementValidateFunction(dataelementExample1305)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.created.json", () => {
		 const dataelementExample1306 = require("../stu3-resources/DataElement-EligibilityResponse.created.json");
		 expect(dataelementValidateFunction(dataelementExample1306)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.disposition.json", () => {
		 const dataelementExample1307 = require("../stu3-resources/DataElement-EligibilityResponse.disposition.json");
		 expect(dataelementValidateFunction(dataelementExample1307)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.error.code.json", () => {
		 const dataelementExample1308 = require("../stu3-resources/DataElement-EligibilityResponse.error.code.json");
		 expect(dataelementValidateFunction(dataelementExample1308)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.error.json", () => {
		 const dataelementExample1309 = require("../stu3-resources/DataElement-EligibilityResponse.error.json");
		 expect(dataelementValidateFunction(dataelementExample1309)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.form.json", () => {
		 const dataelementExample1310 = require("../stu3-resources/DataElement-EligibilityResponse.form.json");
		 expect(dataelementValidateFunction(dataelementExample1310)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.identifier.json", () => {
		 const dataelementExample1311 = require("../stu3-resources/DataElement-EligibilityResponse.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1311)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.inforce.json", () => {
		 const dataelementExample1312 = require("../stu3-resources/DataElement-EligibilityResponse.inforce.json");
		 expect(dataelementValidateFunction(dataelementExample1312)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.category.json", () => {
		 const dataelementExample1313 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.category.json");
		 expect(dataelementValidateFunction(dataelementExample1313)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.description.json", () => {
		 const dataelementExample1314 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.description.json");
		 expect(dataelementValidateFunction(dataelementExample1314)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.excluded.json", () => {
		 const dataelementExample1315 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.excluded.json");
		 expect(dataelementValidateFunction(dataelementExample1315)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.financial.allowedX.json", () => {
		 const dataelementExample1316 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.financial.allowedX.json");
		 expect(dataelementValidateFunction(dataelementExample1316)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.financial.json", () => {
		 const dataelementExample1317 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.financial.json");
		 expect(dataelementValidateFunction(dataelementExample1317)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.financial.type.json", () => {
		 const dataelementExample1318 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.financial.type.json");
		 expect(dataelementValidateFunction(dataelementExample1318)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.financial.usedX.json", () => {
		 const dataelementExample1319 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.financial.usedX.json");
		 expect(dataelementValidateFunction(dataelementExample1319)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.json", () => {
		 const dataelementExample1320 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.json");
		 expect(dataelementValidateFunction(dataelementExample1320)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.name.json", () => {
		 const dataelementExample1321 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.name.json");
		 expect(dataelementValidateFunction(dataelementExample1321)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.network.json", () => {
		 const dataelementExample1322 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.network.json");
		 expect(dataelementValidateFunction(dataelementExample1322)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.subCategory.json", () => {
		 const dataelementExample1323 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.subCategory.json");
		 expect(dataelementValidateFunction(dataelementExample1323)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.term.json", () => {
		 const dataelementExample1324 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.term.json");
		 expect(dataelementValidateFunction(dataelementExample1324)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.benefitBalance.unit.json", () => {
		 const dataelementExample1325 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.benefitBalance.unit.json");
		 expect(dataelementValidateFunction(dataelementExample1325)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.contract.json", () => {
		 const dataelementExample1326 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.contract.json");
		 expect(dataelementValidateFunction(dataelementExample1326)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.coverage.json", () => {
		 const dataelementExample1327 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.coverage.json");
		 expect(dataelementValidateFunction(dataelementExample1327)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurance.json", () => {
		 const dataelementExample1328 = require("../stu3-resources/DataElement-EligibilityResponse.insurance.json");
		 expect(dataelementValidateFunction(dataelementExample1328)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.insurer.json", () => {
		 const dataelementExample1329 = require("../stu3-resources/DataElement-EligibilityResponse.insurer.json");
		 expect(dataelementValidateFunction(dataelementExample1329)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.json", () => {
		 const dataelementExample1330 = require("../stu3-resources/DataElement-EligibilityResponse.json");
		 expect(dataelementValidateFunction(dataelementExample1330)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.outcome.json", () => {
		 const dataelementExample1331 = require("../stu3-resources/DataElement-EligibilityResponse.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample1331)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.request.json", () => {
		 const dataelementExample1332 = require("../stu3-resources/DataElement-EligibilityResponse.request.json");
		 expect(dataelementValidateFunction(dataelementExample1332)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.requestOrganization.json", () => {
		 const dataelementExample1333 = require("../stu3-resources/DataElement-EligibilityResponse.requestOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample1333)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.requestProvider.json", () => {
		 const dataelementExample1334 = require("../stu3-resources/DataElement-EligibilityResponse.requestProvider.json");
		 expect(dataelementValidateFunction(dataelementExample1334)).toBe(true);
	 });

	 test("validate DataElement-EligibilityResponse.status.json", () => {
		 const dataelementExample1335 = require("../stu3-resources/DataElement-EligibilityResponse.status.json");
		 expect(dataelementValidateFunction(dataelementExample1335)).toBe(true);
	 });

	 test("validate DataElement-Encounter.account.json", () => {
		 const dataelementExample1336 = require("../stu3-resources/DataElement-Encounter.account.json");
		 expect(dataelementValidateFunction(dataelementExample1336)).toBe(true);
	 });

	 test("validate DataElement-Encounter.appointment.json", () => {
		 const dataelementExample1337 = require("../stu3-resources/DataElement-Encounter.appointment.json");
		 expect(dataelementValidateFunction(dataelementExample1337)).toBe(true);
	 });

	 test("validate DataElement-Encounter.class.json", () => {
		 const dataelementExample1338 = require("../stu3-resources/DataElement-Encounter.class.json");
		 expect(dataelementValidateFunction(dataelementExample1338)).toBe(true);
	 });

	 test("validate DataElement-Encounter.classHistory.class.json", () => {
		 const dataelementExample1339 = require("../stu3-resources/DataElement-Encounter.classHistory.class.json");
		 expect(dataelementValidateFunction(dataelementExample1339)).toBe(true);
	 });

	 test("validate DataElement-Encounter.classHistory.json", () => {
		 const dataelementExample1340 = require("../stu3-resources/DataElement-Encounter.classHistory.json");
		 expect(dataelementValidateFunction(dataelementExample1340)).toBe(true);
	 });

	 test("validate DataElement-Encounter.classHistory.period.json", () => {
		 const dataelementExample1341 = require("../stu3-resources/DataElement-Encounter.classHistory.period.json");
		 expect(dataelementValidateFunction(dataelementExample1341)).toBe(true);
	 });

	 test("validate DataElement-Encounter.diagnosis.condition.json", () => {
		 const dataelementExample1342 = require("../stu3-resources/DataElement-Encounter.diagnosis.condition.json");
		 expect(dataelementValidateFunction(dataelementExample1342)).toBe(true);
	 });

	 test("validate DataElement-Encounter.diagnosis.json", () => {
		 const dataelementExample1343 = require("../stu3-resources/DataElement-Encounter.diagnosis.json");
		 expect(dataelementValidateFunction(dataelementExample1343)).toBe(true);
	 });

	 test("validate DataElement-Encounter.diagnosis.rank.json", () => {
		 const dataelementExample1344 = require("../stu3-resources/DataElement-Encounter.diagnosis.rank.json");
		 expect(dataelementValidateFunction(dataelementExample1344)).toBe(true);
	 });

	 test("validate DataElement-Encounter.diagnosis.role.json", () => {
		 const dataelementExample1345 = require("../stu3-resources/DataElement-Encounter.diagnosis.role.json");
		 expect(dataelementValidateFunction(dataelementExample1345)).toBe(true);
	 });

	 test("validate DataElement-Encounter.episodeOfCare.json", () => {
		 const dataelementExample1346 = require("../stu3-resources/DataElement-Encounter.episodeOfCare.json");
		 expect(dataelementValidateFunction(dataelementExample1346)).toBe(true);
	 });

	 test("validate DataElement-Encounter.hospitalization.admitSource.json", () => {
		 const dataelementExample1347 = require("../stu3-resources/DataElement-Encounter.hospitalization.admitSource.json");
		 expect(dataelementValidateFunction(dataelementExample1347)).toBe(true);
	 });

	 test("validate DataElement-Encounter.hospitalization.destination.json", () => {
		 const dataelementExample1348 = require("../stu3-resources/DataElement-Encounter.hospitalization.destination.json");
		 expect(dataelementValidateFunction(dataelementExample1348)).toBe(true);
	 });

	 test("validate DataElement-Encounter.hospitalization.dietPreference.json", () => {
		 const dataelementExample1349 = require("../stu3-resources/DataElement-Encounter.hospitalization.dietPreference.json");
		 expect(dataelementValidateFunction(dataelementExample1349)).toBe(true);
	 });

	 test("validate DataElement-Encounter.hospitalization.dischargeDisposition.json", () => {
		 const dataelementExample1350 = require("../stu3-resources/DataElement-Encounter.hospitalization.dischargeDisposition.json");
		 expect(dataelementValidateFunction(dataelementExample1350)).toBe(true);
	 });

	 test("validate DataElement-Encounter.hospitalization.json", () => {
		 const dataelementExample1351 = require("../stu3-resources/DataElement-Encounter.hospitalization.json");
		 expect(dataelementValidateFunction(dataelementExample1351)).toBe(true);
	 });

	 test("validate DataElement-Encounter.hospitalization.origin.json", () => {
		 const dataelementExample1352 = require("../stu3-resources/DataElement-Encounter.hospitalization.origin.json");
		 expect(dataelementValidateFunction(dataelementExample1352)).toBe(true);
	 });

	 test("validate DataElement-Encounter.hospitalization.preAdmissionIdentifier.json", () => {
		 const dataelementExample1353 = require("../stu3-resources/DataElement-Encounter.hospitalization.preAdmissionIdentifier.json");
		 expect(dataelementValidateFunction(dataelementExample1353)).toBe(true);
	 });

	 test("validate DataElement-Encounter.hospitalization.reAdmission.json", () => {
		 const dataelementExample1354 = require("../stu3-resources/DataElement-Encounter.hospitalization.reAdmission.json");
		 expect(dataelementValidateFunction(dataelementExample1354)).toBe(true);
	 });

	 test("validate DataElement-Encounter.hospitalization.specialArrangement.json", () => {
		 const dataelementExample1355 = require("../stu3-resources/DataElement-Encounter.hospitalization.specialArrangement.json");
		 expect(dataelementValidateFunction(dataelementExample1355)).toBe(true);
	 });

	 test("validate DataElement-Encounter.hospitalization.specialCourtesy.json", () => {
		 const dataelementExample1356 = require("../stu3-resources/DataElement-Encounter.hospitalization.specialCourtesy.json");
		 expect(dataelementValidateFunction(dataelementExample1356)).toBe(true);
	 });

	 test("validate DataElement-Encounter.identifier.json", () => {
		 const dataelementExample1357 = require("../stu3-resources/DataElement-Encounter.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1357)).toBe(true);
	 });

	 test("validate DataElement-Encounter.incomingReferral.json", () => {
		 const dataelementExample1358 = require("../stu3-resources/DataElement-Encounter.incomingReferral.json");
		 expect(dataelementValidateFunction(dataelementExample1358)).toBe(true);
	 });

	 test("validate DataElement-Encounter.json", () => {
		 const dataelementExample1359 = require("../stu3-resources/DataElement-Encounter.json");
		 expect(dataelementValidateFunction(dataelementExample1359)).toBe(true);
	 });

	 test("validate DataElement-Encounter.length.json", () => {
		 const dataelementExample1360 = require("../stu3-resources/DataElement-Encounter.length.json");
		 expect(dataelementValidateFunction(dataelementExample1360)).toBe(true);
	 });

	 test("validate DataElement-Encounter.location.json", () => {
		 const dataelementExample1361 = require("../stu3-resources/DataElement-Encounter.location.json");
		 expect(dataelementValidateFunction(dataelementExample1361)).toBe(true);
	 });

	 test("validate DataElement-Encounter.location.location.json", () => {
		 const dataelementExample1362 = require("../stu3-resources/DataElement-Encounter.location.location.json");
		 expect(dataelementValidateFunction(dataelementExample1362)).toBe(true);
	 });

	 test("validate DataElement-Encounter.location.period.json", () => {
		 const dataelementExample1363 = require("../stu3-resources/DataElement-Encounter.location.period.json");
		 expect(dataelementValidateFunction(dataelementExample1363)).toBe(true);
	 });

	 test("validate DataElement-Encounter.location.status.json", () => {
		 const dataelementExample1364 = require("../stu3-resources/DataElement-Encounter.location.status.json");
		 expect(dataelementValidateFunction(dataelementExample1364)).toBe(true);
	 });

	 test("validate DataElement-Encounter.partOf.json", () => {
		 const dataelementExample1365 = require("../stu3-resources/DataElement-Encounter.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample1365)).toBe(true);
	 });

	 test("validate DataElement-Encounter.participant.individual.json", () => {
		 const dataelementExample1366 = require("../stu3-resources/DataElement-Encounter.participant.individual.json");
		 expect(dataelementValidateFunction(dataelementExample1366)).toBe(true);
	 });

	 test("validate DataElement-Encounter.participant.json", () => {
		 const dataelementExample1367 = require("../stu3-resources/DataElement-Encounter.participant.json");
		 expect(dataelementValidateFunction(dataelementExample1367)).toBe(true);
	 });

	 test("validate DataElement-Encounter.participant.period.json", () => {
		 const dataelementExample1368 = require("../stu3-resources/DataElement-Encounter.participant.period.json");
		 expect(dataelementValidateFunction(dataelementExample1368)).toBe(true);
	 });

	 test("validate DataElement-Encounter.participant.type.json", () => {
		 const dataelementExample1369 = require("../stu3-resources/DataElement-Encounter.participant.type.json");
		 expect(dataelementValidateFunction(dataelementExample1369)).toBe(true);
	 });

	 test("validate DataElement-Encounter.period.json", () => {
		 const dataelementExample1370 = require("../stu3-resources/DataElement-Encounter.period.json");
		 expect(dataelementValidateFunction(dataelementExample1370)).toBe(true);
	 });

	 test("validate DataElement-Encounter.priority.json", () => {
		 const dataelementExample1371 = require("../stu3-resources/DataElement-Encounter.priority.json");
		 expect(dataelementValidateFunction(dataelementExample1371)).toBe(true);
	 });

	 test("validate DataElement-Encounter.reason.json", () => {
		 const dataelementExample1372 = require("../stu3-resources/DataElement-Encounter.reason.json");
		 expect(dataelementValidateFunction(dataelementExample1372)).toBe(true);
	 });

	 test("validate DataElement-Encounter.serviceProvider.json", () => {
		 const dataelementExample1373 = require("../stu3-resources/DataElement-Encounter.serviceProvider.json");
		 expect(dataelementValidateFunction(dataelementExample1373)).toBe(true);
	 });

	 test("validate DataElement-Encounter.status.json", () => {
		 const dataelementExample1374 = require("../stu3-resources/DataElement-Encounter.status.json");
		 expect(dataelementValidateFunction(dataelementExample1374)).toBe(true);
	 });

	 test("validate DataElement-Encounter.statusHistory.json", () => {
		 const dataelementExample1375 = require("../stu3-resources/DataElement-Encounter.statusHistory.json");
		 expect(dataelementValidateFunction(dataelementExample1375)).toBe(true);
	 });

	 test("validate DataElement-Encounter.statusHistory.period.json", () => {
		 const dataelementExample1376 = require("../stu3-resources/DataElement-Encounter.statusHistory.period.json");
		 expect(dataelementValidateFunction(dataelementExample1376)).toBe(true);
	 });

	 test("validate DataElement-Encounter.statusHistory.status.json", () => {
		 const dataelementExample1377 = require("../stu3-resources/DataElement-Encounter.statusHistory.status.json");
		 expect(dataelementValidateFunction(dataelementExample1377)).toBe(true);
	 });

	 test("validate DataElement-Encounter.subject.json", () => {
		 const dataelementExample1378 = require("../stu3-resources/DataElement-Encounter.subject.json");
		 expect(dataelementValidateFunction(dataelementExample1378)).toBe(true);
	 });

	 test("validate DataElement-Encounter.type.json", () => {
		 const dataelementExample1379 = require("../stu3-resources/DataElement-Encounter.type.json");
		 expect(dataelementValidateFunction(dataelementExample1379)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.address.json", () => {
		 const dataelementExample1380 = require("../stu3-resources/DataElement-Endpoint.address.json");
		 expect(dataelementValidateFunction(dataelementExample1380)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.connectionType.json", () => {
		 const dataelementExample1381 = require("../stu3-resources/DataElement-Endpoint.connectionType.json");
		 expect(dataelementValidateFunction(dataelementExample1381)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.contact.json", () => {
		 const dataelementExample1382 = require("../stu3-resources/DataElement-Endpoint.contact.json");
		 expect(dataelementValidateFunction(dataelementExample1382)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.header.json", () => {
		 const dataelementExample1383 = require("../stu3-resources/DataElement-Endpoint.header.json");
		 expect(dataelementValidateFunction(dataelementExample1383)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.identifier.json", () => {
		 const dataelementExample1384 = require("../stu3-resources/DataElement-Endpoint.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1384)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.json", () => {
		 const dataelementExample1385 = require("../stu3-resources/DataElement-Endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample1385)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.managingOrganization.json", () => {
		 const dataelementExample1386 = require("../stu3-resources/DataElement-Endpoint.managingOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample1386)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.name.json", () => {
		 const dataelementExample1387 = require("../stu3-resources/DataElement-Endpoint.name.json");
		 expect(dataelementValidateFunction(dataelementExample1387)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.payloadMimeType.json", () => {
		 const dataelementExample1388 = require("../stu3-resources/DataElement-Endpoint.payloadMimeType.json");
		 expect(dataelementValidateFunction(dataelementExample1388)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.payloadType.json", () => {
		 const dataelementExample1389 = require("../stu3-resources/DataElement-Endpoint.payloadType.json");
		 expect(dataelementValidateFunction(dataelementExample1389)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.period.json", () => {
		 const dataelementExample1390 = require("../stu3-resources/DataElement-Endpoint.period.json");
		 expect(dataelementValidateFunction(dataelementExample1390)).toBe(true);
	 });

	 test("validate DataElement-Endpoint.status.json", () => {
		 const dataelementExample1391 = require("../stu3-resources/DataElement-Endpoint.status.json");
		 expect(dataelementValidateFunction(dataelementExample1391)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentRequest.coverage.json", () => {
		 const dataelementExample1392 = require("../stu3-resources/DataElement-EnrollmentRequest.coverage.json");
		 expect(dataelementValidateFunction(dataelementExample1392)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentRequest.created.json", () => {
		 const dataelementExample1393 = require("../stu3-resources/DataElement-EnrollmentRequest.created.json");
		 expect(dataelementValidateFunction(dataelementExample1393)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentRequest.identifier.json", () => {
		 const dataelementExample1394 = require("../stu3-resources/DataElement-EnrollmentRequest.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1394)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentRequest.insurer.json", () => {
		 const dataelementExample1395 = require("../stu3-resources/DataElement-EnrollmentRequest.insurer.json");
		 expect(dataelementValidateFunction(dataelementExample1395)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentRequest.json", () => {
		 const dataelementExample1396 = require("../stu3-resources/DataElement-EnrollmentRequest.json");
		 expect(dataelementValidateFunction(dataelementExample1396)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentRequest.organization.json", () => {
		 const dataelementExample1397 = require("../stu3-resources/DataElement-EnrollmentRequest.organization.json");
		 expect(dataelementValidateFunction(dataelementExample1397)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentRequest.provider.json", () => {
		 const dataelementExample1398 = require("../stu3-resources/DataElement-EnrollmentRequest.provider.json");
		 expect(dataelementValidateFunction(dataelementExample1398)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentRequest.status.json", () => {
		 const dataelementExample1399 = require("../stu3-resources/DataElement-EnrollmentRequest.status.json");
		 expect(dataelementValidateFunction(dataelementExample1399)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentRequest.subject.json", () => {
		 const dataelementExample1400 = require("../stu3-resources/DataElement-EnrollmentRequest.subject.json");
		 expect(dataelementValidateFunction(dataelementExample1400)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentResponse.created.json", () => {
		 const dataelementExample1401 = require("../stu3-resources/DataElement-EnrollmentResponse.created.json");
		 expect(dataelementValidateFunction(dataelementExample1401)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentResponse.disposition.json", () => {
		 const dataelementExample1402 = require("../stu3-resources/DataElement-EnrollmentResponse.disposition.json");
		 expect(dataelementValidateFunction(dataelementExample1402)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentResponse.identifier.json", () => {
		 const dataelementExample1403 = require("../stu3-resources/DataElement-EnrollmentResponse.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1403)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentResponse.json", () => {
		 const dataelementExample1404 = require("../stu3-resources/DataElement-EnrollmentResponse.json");
		 expect(dataelementValidateFunction(dataelementExample1404)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentResponse.organization.json", () => {
		 const dataelementExample1405 = require("../stu3-resources/DataElement-EnrollmentResponse.organization.json");
		 expect(dataelementValidateFunction(dataelementExample1405)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentResponse.outcome.json", () => {
		 const dataelementExample1406 = require("../stu3-resources/DataElement-EnrollmentResponse.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample1406)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentResponse.request.json", () => {
		 const dataelementExample1407 = require("../stu3-resources/DataElement-EnrollmentResponse.request.json");
		 expect(dataelementValidateFunction(dataelementExample1407)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentResponse.requestOrganization.json", () => {
		 const dataelementExample1408 = require("../stu3-resources/DataElement-EnrollmentResponse.requestOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample1408)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentResponse.requestProvider.json", () => {
		 const dataelementExample1409 = require("../stu3-resources/DataElement-EnrollmentResponse.requestProvider.json");
		 expect(dataelementValidateFunction(dataelementExample1409)).toBe(true);
	 });

	 test("validate DataElement-EnrollmentResponse.status.json", () => {
		 const dataelementExample1410 = require("../stu3-resources/DataElement-EnrollmentResponse.status.json");
		 expect(dataelementValidateFunction(dataelementExample1410)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.account.json", () => {
		 const dataelementExample1411 = require("../stu3-resources/DataElement-EpisodeOfCare.account.json");
		 expect(dataelementValidateFunction(dataelementExample1411)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.careManager.json", () => {
		 const dataelementExample1412 = require("../stu3-resources/DataElement-EpisodeOfCare.careManager.json");
		 expect(dataelementValidateFunction(dataelementExample1412)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.diagnosis.condition.json", () => {
		 const dataelementExample1413 = require("../stu3-resources/DataElement-EpisodeOfCare.diagnosis.condition.json");
		 expect(dataelementValidateFunction(dataelementExample1413)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.diagnosis.json", () => {
		 const dataelementExample1414 = require("../stu3-resources/DataElement-EpisodeOfCare.diagnosis.json");
		 expect(dataelementValidateFunction(dataelementExample1414)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.diagnosis.rank.json", () => {
		 const dataelementExample1415 = require("../stu3-resources/DataElement-EpisodeOfCare.diagnosis.rank.json");
		 expect(dataelementValidateFunction(dataelementExample1415)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.diagnosis.role.json", () => {
		 const dataelementExample1416 = require("../stu3-resources/DataElement-EpisodeOfCare.diagnosis.role.json");
		 expect(dataelementValidateFunction(dataelementExample1416)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.identifier.json", () => {
		 const dataelementExample1417 = require("../stu3-resources/DataElement-EpisodeOfCare.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1417)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.json", () => {
		 const dataelementExample1418 = require("../stu3-resources/DataElement-EpisodeOfCare.json");
		 expect(dataelementValidateFunction(dataelementExample1418)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.managingOrganization.json", () => {
		 const dataelementExample1419 = require("../stu3-resources/DataElement-EpisodeOfCare.managingOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample1419)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.patient.json", () => {
		 const dataelementExample1420 = require("../stu3-resources/DataElement-EpisodeOfCare.patient.json");
		 expect(dataelementValidateFunction(dataelementExample1420)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.period.json", () => {
		 const dataelementExample1421 = require("../stu3-resources/DataElement-EpisodeOfCare.period.json");
		 expect(dataelementValidateFunction(dataelementExample1421)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.referralRequest.json", () => {
		 const dataelementExample1422 = require("../stu3-resources/DataElement-EpisodeOfCare.referralRequest.json");
		 expect(dataelementValidateFunction(dataelementExample1422)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.status.json", () => {
		 const dataelementExample1423 = require("../stu3-resources/DataElement-EpisodeOfCare.status.json");
		 expect(dataelementValidateFunction(dataelementExample1423)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.statusHistory.json", () => {
		 const dataelementExample1424 = require("../stu3-resources/DataElement-EpisodeOfCare.statusHistory.json");
		 expect(dataelementValidateFunction(dataelementExample1424)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.statusHistory.period.json", () => {
		 const dataelementExample1425 = require("../stu3-resources/DataElement-EpisodeOfCare.statusHistory.period.json");
		 expect(dataelementValidateFunction(dataelementExample1425)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.statusHistory.status.json", () => {
		 const dataelementExample1426 = require("../stu3-resources/DataElement-EpisodeOfCare.statusHistory.status.json");
		 expect(dataelementValidateFunction(dataelementExample1426)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.team.json", () => {
		 const dataelementExample1427 = require("../stu3-resources/DataElement-EpisodeOfCare.team.json");
		 expect(dataelementValidateFunction(dataelementExample1427)).toBe(true);
	 });

	 test("validate DataElement-EpisodeOfCare.type.json", () => {
		 const dataelementExample1428 = require("../stu3-resources/DataElement-EpisodeOfCare.type.json");
		 expect(dataelementValidateFunction(dataelementExample1428)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.activeOnly.json", () => {
		 const dataelementExample1429 = require("../stu3-resources/DataElement-ExpansionProfile.activeOnly.json");
		 expect(dataelementValidateFunction(dataelementExample1429)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.contact.json", () => {
		 const dataelementExample1430 = require("../stu3-resources/DataElement-ExpansionProfile.contact.json");
		 expect(dataelementValidateFunction(dataelementExample1430)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.date.json", () => {
		 const dataelementExample1431 = require("../stu3-resources/DataElement-ExpansionProfile.date.json");
		 expect(dataelementValidateFunction(dataelementExample1431)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.description.json", () => {
		 const dataelementExample1432 = require("../stu3-resources/DataElement-ExpansionProfile.description.json");
		 expect(dataelementValidateFunction(dataelementExample1432)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.designation.exclude.designation.json", () => {
		 const dataelementExample1433 = require("../stu3-resources/DataElement-ExpansionProfile.designation.exclude.designation.json");
		 expect(dataelementValidateFunction(dataelementExample1433)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.designation.exclude.designation.language.json", () => {
		 const dataelementExample1434 = require("../stu3-resources/DataElement-ExpansionProfile.designation.exclude.designation.language.json");
		 expect(dataelementValidateFunction(dataelementExample1434)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.designation.exclude.designation.use.json", () => {
		 const dataelementExample1435 = require("../stu3-resources/DataElement-ExpansionProfile.designation.exclude.designation.use.json");
		 expect(dataelementValidateFunction(dataelementExample1435)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.designation.exclude.json", () => {
		 const dataelementExample1436 = require("../stu3-resources/DataElement-ExpansionProfile.designation.exclude.json");
		 expect(dataelementValidateFunction(dataelementExample1436)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.designation.include.designation.json", () => {
		 const dataelementExample1437 = require("../stu3-resources/DataElement-ExpansionProfile.designation.include.designation.json");
		 expect(dataelementValidateFunction(dataelementExample1437)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.designation.include.designation.language.json", () => {
		 const dataelementExample1438 = require("../stu3-resources/DataElement-ExpansionProfile.designation.include.designation.language.json");
		 expect(dataelementValidateFunction(dataelementExample1438)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.designation.include.designation.use.json", () => {
		 const dataelementExample1439 = require("../stu3-resources/DataElement-ExpansionProfile.designation.include.designation.use.json");
		 expect(dataelementValidateFunction(dataelementExample1439)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.designation.include.json", () => {
		 const dataelementExample1440 = require("../stu3-resources/DataElement-ExpansionProfile.designation.include.json");
		 expect(dataelementValidateFunction(dataelementExample1440)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.designation.json", () => {
		 const dataelementExample1441 = require("../stu3-resources/DataElement-ExpansionProfile.designation.json");
		 expect(dataelementValidateFunction(dataelementExample1441)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.displayLanguage.json", () => {
		 const dataelementExample1442 = require("../stu3-resources/DataElement-ExpansionProfile.displayLanguage.json");
		 expect(dataelementValidateFunction(dataelementExample1442)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.excludeNested.json", () => {
		 const dataelementExample1443 = require("../stu3-resources/DataElement-ExpansionProfile.excludeNested.json");
		 expect(dataelementValidateFunction(dataelementExample1443)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.excludeNotForUI.json", () => {
		 const dataelementExample1444 = require("../stu3-resources/DataElement-ExpansionProfile.excludeNotForUI.json");
		 expect(dataelementValidateFunction(dataelementExample1444)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.excludePostCoordinated.json", () => {
		 const dataelementExample1445 = require("../stu3-resources/DataElement-ExpansionProfile.excludePostCoordinated.json");
		 expect(dataelementValidateFunction(dataelementExample1445)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.excludedSystem.json", () => {
		 const dataelementExample1446 = require("../stu3-resources/DataElement-ExpansionProfile.excludedSystem.json");
		 expect(dataelementValidateFunction(dataelementExample1446)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.excludedSystem.system.json", () => {
		 const dataelementExample1447 = require("../stu3-resources/DataElement-ExpansionProfile.excludedSystem.system.json");
		 expect(dataelementValidateFunction(dataelementExample1447)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.excludedSystem.version.json", () => {
		 const dataelementExample1448 = require("../stu3-resources/DataElement-ExpansionProfile.excludedSystem.version.json");
		 expect(dataelementValidateFunction(dataelementExample1448)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.experimental.json", () => {
		 const dataelementExample1449 = require("../stu3-resources/DataElement-ExpansionProfile.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample1449)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.fixedVersion.json", () => {
		 const dataelementExample1450 = require("../stu3-resources/DataElement-ExpansionProfile.fixedVersion.json");
		 expect(dataelementValidateFunction(dataelementExample1450)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.fixedVersion.mode.json", () => {
		 const dataelementExample1451 = require("../stu3-resources/DataElement-ExpansionProfile.fixedVersion.mode.json");
		 expect(dataelementValidateFunction(dataelementExample1451)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.fixedVersion.system.json", () => {
		 const dataelementExample1452 = require("../stu3-resources/DataElement-ExpansionProfile.fixedVersion.system.json");
		 expect(dataelementValidateFunction(dataelementExample1452)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.fixedVersion.version.json", () => {
		 const dataelementExample1453 = require("../stu3-resources/DataElement-ExpansionProfile.fixedVersion.version.json");
		 expect(dataelementValidateFunction(dataelementExample1453)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.identifier.json", () => {
		 const dataelementExample1454 = require("../stu3-resources/DataElement-ExpansionProfile.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1454)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.includeDefinition.json", () => {
		 const dataelementExample1455 = require("../stu3-resources/DataElement-ExpansionProfile.includeDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample1455)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.includeDesignations.json", () => {
		 const dataelementExample1456 = require("../stu3-resources/DataElement-ExpansionProfile.includeDesignations.json");
		 expect(dataelementValidateFunction(dataelementExample1456)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.json", () => {
		 const dataelementExample1457 = require("../stu3-resources/DataElement-ExpansionProfile.json");
		 expect(dataelementValidateFunction(dataelementExample1457)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.jurisdiction.json", () => {
		 const dataelementExample1458 = require("../stu3-resources/DataElement-ExpansionProfile.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample1458)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.limitedExpansion.json", () => {
		 const dataelementExample1459 = require("../stu3-resources/DataElement-ExpansionProfile.limitedExpansion.json");
		 expect(dataelementValidateFunction(dataelementExample1459)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.name.json", () => {
		 const dataelementExample1460 = require("../stu3-resources/DataElement-ExpansionProfile.name.json");
		 expect(dataelementValidateFunction(dataelementExample1460)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.publisher.json", () => {
		 const dataelementExample1461 = require("../stu3-resources/DataElement-ExpansionProfile.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample1461)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.status.json", () => {
		 const dataelementExample1462 = require("../stu3-resources/DataElement-ExpansionProfile.status.json");
		 expect(dataelementValidateFunction(dataelementExample1462)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.url.json", () => {
		 const dataelementExample1463 = require("../stu3-resources/DataElement-ExpansionProfile.url.json");
		 expect(dataelementValidateFunction(dataelementExample1463)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.useContext.json", () => {
		 const dataelementExample1464 = require("../stu3-resources/DataElement-ExpansionProfile.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample1464)).toBe(true);
	 });

	 test("validate DataElement-ExpansionProfile.version.json", () => {
		 const dataelementExample1465 = require("../stu3-resources/DataElement-ExpansionProfile.version.json");
		 expect(dataelementValidateFunction(dataelementExample1465)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.accident.date.json", () => {
		 const dataelementExample1466 = require("../stu3-resources/DataElement-ExplanationOfBenefit.accident.date.json");
		 expect(dataelementValidateFunction(dataelementExample1466)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.accident.json", () => {
		 const dataelementExample1467 = require("../stu3-resources/DataElement-ExplanationOfBenefit.accident.json");
		 expect(dataelementValidateFunction(dataelementExample1467)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.accident.locationX.json", () => {
		 const dataelementExample1468 = require("../stu3-resources/DataElement-ExplanationOfBenefit.accident.locationX.json");
		 expect(dataelementValidateFunction(dataelementExample1468)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.accident.type.json", () => {
		 const dataelementExample1469 = require("../stu3-resources/DataElement-ExplanationOfBenefit.accident.type.json");
		 expect(dataelementValidateFunction(dataelementExample1469)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.adjudication.json", () => {
		 const dataelementExample1470 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.adjudication.json");
		 expect(dataelementValidateFunction(dataelementExample1470)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.category.json", () => {
		 const dataelementExample1471 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.category.json");
		 expect(dataelementValidateFunction(dataelementExample1471)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.detail.adjudication.json", () => {
		 const dataelementExample1472 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.detail.adjudication.json");
		 expect(dataelementValidateFunction(dataelementExample1472)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.detail.category.json", () => {
		 const dataelementExample1473 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.detail.category.json");
		 expect(dataelementValidateFunction(dataelementExample1473)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.detail.fee.json", () => {
		 const dataelementExample1474 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.detail.fee.json");
		 expect(dataelementValidateFunction(dataelementExample1474)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.detail.json", () => {
		 const dataelementExample1475 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.detail.json");
		 expect(dataelementValidateFunction(dataelementExample1475)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.detail.modifier.json", () => {
		 const dataelementExample1476 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.detail.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample1476)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.detail.noteNumber.json", () => {
		 const dataelementExample1477 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.detail.noteNumber.json");
		 expect(dataelementValidateFunction(dataelementExample1477)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.detail.revenue.json", () => {
		 const dataelementExample1478 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.detail.revenue.json");
		 expect(dataelementValidateFunction(dataelementExample1478)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.detail.service.json", () => {
		 const dataelementExample1479 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.detail.service.json");
		 expect(dataelementValidateFunction(dataelementExample1479)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.fee.json", () => {
		 const dataelementExample1480 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.fee.json");
		 expect(dataelementValidateFunction(dataelementExample1480)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.json", () => {
		 const dataelementExample1481 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.json");
		 expect(dataelementValidateFunction(dataelementExample1481)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.modifier.json", () => {
		 const dataelementExample1482 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample1482)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.noteNumber.json", () => {
		 const dataelementExample1483 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.noteNumber.json");
		 expect(dataelementValidateFunction(dataelementExample1483)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.revenue.json", () => {
		 const dataelementExample1484 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.revenue.json");
		 expect(dataelementValidateFunction(dataelementExample1484)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.sequenceLinkId.json", () => {
		 const dataelementExample1485 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.sequenceLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample1485)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.addItem.service.json", () => {
		 const dataelementExample1486 = require("../stu3-resources/DataElement-ExplanationOfBenefit.addItem.service.json");
		 expect(dataelementValidateFunction(dataelementExample1486)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.category.json", () => {
		 const dataelementExample1487 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.category.json");
		 expect(dataelementValidateFunction(dataelementExample1487)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.description.json", () => {
		 const dataelementExample1488 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.description.json");
		 expect(dataelementValidateFunction(dataelementExample1488)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.excluded.json", () => {
		 const dataelementExample1489 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.excluded.json");
		 expect(dataelementValidateFunction(dataelementExample1489)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.financial.allowedX.json", () => {
		 const dataelementExample1490 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.financial.allowedX.json");
		 expect(dataelementValidateFunction(dataelementExample1490)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.financial.json", () => {
		 const dataelementExample1491 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.financial.json");
		 expect(dataelementValidateFunction(dataelementExample1491)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.financial.type.json", () => {
		 const dataelementExample1492 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.financial.type.json");
		 expect(dataelementValidateFunction(dataelementExample1492)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.financial.usedX.json", () => {
		 const dataelementExample1493 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.financial.usedX.json");
		 expect(dataelementValidateFunction(dataelementExample1493)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.json", () => {
		 const dataelementExample1494 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.json");
		 expect(dataelementValidateFunction(dataelementExample1494)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.name.json", () => {
		 const dataelementExample1495 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.name.json");
		 expect(dataelementValidateFunction(dataelementExample1495)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.network.json", () => {
		 const dataelementExample1496 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.network.json");
		 expect(dataelementValidateFunction(dataelementExample1496)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.subCategory.json", () => {
		 const dataelementExample1497 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.subCategory.json");
		 expect(dataelementValidateFunction(dataelementExample1497)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.term.json", () => {
		 const dataelementExample1498 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.term.json");
		 expect(dataelementValidateFunction(dataelementExample1498)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.benefitBalance.unit.json", () => {
		 const dataelementExample1499 = require("../stu3-resources/DataElement-ExplanationOfBenefit.benefitBalance.unit.json");
		 expect(dataelementValidateFunction(dataelementExample1499)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.billablePeriod.json", () => {
		 const dataelementExample1500 = require("../stu3-resources/DataElement-ExplanationOfBenefit.billablePeriod.json");
		 expect(dataelementValidateFunction(dataelementExample1500)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.careTeam.json", () => {
		 const dataelementExample1501 = require("../stu3-resources/DataElement-ExplanationOfBenefit.careTeam.json");
		 expect(dataelementValidateFunction(dataelementExample1501)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.careTeam.provider.json", () => {
		 const dataelementExample1502 = require("../stu3-resources/DataElement-ExplanationOfBenefit.careTeam.provider.json");
		 expect(dataelementValidateFunction(dataelementExample1502)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.careTeam.qualification.json", () => {
		 const dataelementExample1503 = require("../stu3-resources/DataElement-ExplanationOfBenefit.careTeam.qualification.json");
		 expect(dataelementValidateFunction(dataelementExample1503)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.careTeam.responsible.json", () => {
		 const dataelementExample1504 = require("../stu3-resources/DataElement-ExplanationOfBenefit.careTeam.responsible.json");
		 expect(dataelementValidateFunction(dataelementExample1504)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.careTeam.role.json", () => {
		 const dataelementExample1505 = require("../stu3-resources/DataElement-ExplanationOfBenefit.careTeam.role.json");
		 expect(dataelementValidateFunction(dataelementExample1505)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.careTeam.sequence.json", () => {
		 const dataelementExample1506 = require("../stu3-resources/DataElement-ExplanationOfBenefit.careTeam.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample1506)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.claim.json", () => {
		 const dataelementExample1507 = require("../stu3-resources/DataElement-ExplanationOfBenefit.claim.json");
		 expect(dataelementValidateFunction(dataelementExample1507)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.claimResponse.json", () => {
		 const dataelementExample1508 = require("../stu3-resources/DataElement-ExplanationOfBenefit.claimResponse.json");
		 expect(dataelementValidateFunction(dataelementExample1508)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.created.json", () => {
		 const dataelementExample1509 = require("../stu3-resources/DataElement-ExplanationOfBenefit.created.json");
		 expect(dataelementValidateFunction(dataelementExample1509)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.diagnosis.diagnosisX.json", () => {
		 const dataelementExample1510 = require("../stu3-resources/DataElement-ExplanationOfBenefit.diagnosis.diagnosisX.json");
		 expect(dataelementValidateFunction(dataelementExample1510)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.diagnosis.json", () => {
		 const dataelementExample1511 = require("../stu3-resources/DataElement-ExplanationOfBenefit.diagnosis.json");
		 expect(dataelementValidateFunction(dataelementExample1511)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.diagnosis.packageCode.json", () => {
		 const dataelementExample1512 = require("../stu3-resources/DataElement-ExplanationOfBenefit.diagnosis.packageCode.json");
		 expect(dataelementValidateFunction(dataelementExample1512)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.diagnosis.sequence.json", () => {
		 const dataelementExample1513 = require("../stu3-resources/DataElement-ExplanationOfBenefit.diagnosis.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample1513)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.diagnosis.type.json", () => {
		 const dataelementExample1514 = require("../stu3-resources/DataElement-ExplanationOfBenefit.diagnosis.type.json");
		 expect(dataelementValidateFunction(dataelementExample1514)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.disposition.json", () => {
		 const dataelementExample1515 = require("../stu3-resources/DataElement-ExplanationOfBenefit.disposition.json");
		 expect(dataelementValidateFunction(dataelementExample1515)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.employmentImpacted.json", () => {
		 const dataelementExample1516 = require("../stu3-resources/DataElement-ExplanationOfBenefit.employmentImpacted.json");
		 expect(dataelementValidateFunction(dataelementExample1516)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.enterer.json", () => {
		 const dataelementExample1517 = require("../stu3-resources/DataElement-ExplanationOfBenefit.enterer.json");
		 expect(dataelementValidateFunction(dataelementExample1517)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.facility.json", () => {
		 const dataelementExample1518 = require("../stu3-resources/DataElement-ExplanationOfBenefit.facility.json");
		 expect(dataelementValidateFunction(dataelementExample1518)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.form.json", () => {
		 const dataelementExample1519 = require("../stu3-resources/DataElement-ExplanationOfBenefit.form.json");
		 expect(dataelementValidateFunction(dataelementExample1519)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.hospitalization.json", () => {
		 const dataelementExample1520 = require("../stu3-resources/DataElement-ExplanationOfBenefit.hospitalization.json");
		 expect(dataelementValidateFunction(dataelementExample1520)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.identifier.json", () => {
		 const dataelementExample1521 = require("../stu3-resources/DataElement-ExplanationOfBenefit.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1521)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.information.category.json", () => {
		 const dataelementExample1522 = require("../stu3-resources/DataElement-ExplanationOfBenefit.information.category.json");
		 expect(dataelementValidateFunction(dataelementExample1522)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.information.code.json", () => {
		 const dataelementExample1523 = require("../stu3-resources/DataElement-ExplanationOfBenefit.information.code.json");
		 expect(dataelementValidateFunction(dataelementExample1523)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.information.json", () => {
		 const dataelementExample1524 = require("../stu3-resources/DataElement-ExplanationOfBenefit.information.json");
		 expect(dataelementValidateFunction(dataelementExample1524)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.information.reason.json", () => {
		 const dataelementExample1525 = require("../stu3-resources/DataElement-ExplanationOfBenefit.information.reason.json");
		 expect(dataelementValidateFunction(dataelementExample1525)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.information.sequence.json", () => {
		 const dataelementExample1526 = require("../stu3-resources/DataElement-ExplanationOfBenefit.information.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample1526)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.information.timingX.json", () => {
		 const dataelementExample1527 = require("../stu3-resources/DataElement-ExplanationOfBenefit.information.timingX.json");
		 expect(dataelementValidateFunction(dataelementExample1527)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.information.valueX.json", () => {
		 const dataelementExample1528 = require("../stu3-resources/DataElement-ExplanationOfBenefit.information.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample1528)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.insurance.coverage.json", () => {
		 const dataelementExample1529 = require("../stu3-resources/DataElement-ExplanationOfBenefit.insurance.coverage.json");
		 expect(dataelementValidateFunction(dataelementExample1529)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.insurance.json", () => {
		 const dataelementExample1530 = require("../stu3-resources/DataElement-ExplanationOfBenefit.insurance.json");
		 expect(dataelementValidateFunction(dataelementExample1530)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.insurance.preAuthRef.json", () => {
		 const dataelementExample1531 = require("../stu3-resources/DataElement-ExplanationOfBenefit.insurance.preAuthRef.json");
		 expect(dataelementValidateFunction(dataelementExample1531)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.insurer.json", () => {
		 const dataelementExample1532 = require("../stu3-resources/DataElement-ExplanationOfBenefit.insurer.json");
		 expect(dataelementValidateFunction(dataelementExample1532)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.adjudication.amount.json", () => {
		 const dataelementExample1533 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.adjudication.amount.json");
		 expect(dataelementValidateFunction(dataelementExample1533)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.adjudication.category.json", () => {
		 const dataelementExample1534 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.adjudication.category.json");
		 expect(dataelementValidateFunction(dataelementExample1534)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.adjudication.json", () => {
		 const dataelementExample1535 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.adjudication.json");
		 expect(dataelementValidateFunction(dataelementExample1535)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.adjudication.reason.json", () => {
		 const dataelementExample1536 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.adjudication.reason.json");
		 expect(dataelementValidateFunction(dataelementExample1536)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.adjudication.value.json", () => {
		 const dataelementExample1537 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.adjudication.value.json");
		 expect(dataelementValidateFunction(dataelementExample1537)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.bodySite.json", () => {
		 const dataelementExample1538 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.bodySite.json");
		 expect(dataelementValidateFunction(dataelementExample1538)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.careTeamLinkId.json", () => {
		 const dataelementExample1539 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.careTeamLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample1539)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.category.json", () => {
		 const dataelementExample1540 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.category.json");
		 expect(dataelementValidateFunction(dataelementExample1540)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.adjudication.json", () => {
		 const dataelementExample1541 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.adjudication.json");
		 expect(dataelementValidateFunction(dataelementExample1541)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.category.json", () => {
		 const dataelementExample1542 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.category.json");
		 expect(dataelementValidateFunction(dataelementExample1542)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.factor.json", () => {
		 const dataelementExample1543 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.factor.json");
		 expect(dataelementValidateFunction(dataelementExample1543)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.json", () => {
		 const dataelementExample1544 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.json");
		 expect(dataelementValidateFunction(dataelementExample1544)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.modifier.json", () => {
		 const dataelementExample1545 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample1545)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.net.json", () => {
		 const dataelementExample1546 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.net.json");
		 expect(dataelementValidateFunction(dataelementExample1546)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.noteNumber.json", () => {
		 const dataelementExample1547 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.noteNumber.json");
		 expect(dataelementValidateFunction(dataelementExample1547)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.programCode.json", () => {
		 const dataelementExample1548 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.programCode.json");
		 expect(dataelementValidateFunction(dataelementExample1548)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.quantity.json", () => {
		 const dataelementExample1549 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample1549)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.revenue.json", () => {
		 const dataelementExample1550 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.revenue.json");
		 expect(dataelementValidateFunction(dataelementExample1550)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.sequence.json", () => {
		 const dataelementExample1551 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample1551)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.service.json", () => {
		 const dataelementExample1552 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.service.json");
		 expect(dataelementValidateFunction(dataelementExample1552)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.adjudication.json", () => {
		 const dataelementExample1553 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.adjudication.json");
		 expect(dataelementValidateFunction(dataelementExample1553)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.category.json", () => {
		 const dataelementExample1554 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.category.json");
		 expect(dataelementValidateFunction(dataelementExample1554)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.factor.json", () => {
		 const dataelementExample1555 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.factor.json");
		 expect(dataelementValidateFunction(dataelementExample1555)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.json", () => {
		 const dataelementExample1556 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.json");
		 expect(dataelementValidateFunction(dataelementExample1556)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.modifier.json", () => {
		 const dataelementExample1557 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample1557)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.net.json", () => {
		 const dataelementExample1558 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.net.json");
		 expect(dataelementValidateFunction(dataelementExample1558)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.noteNumber.json", () => {
		 const dataelementExample1559 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.noteNumber.json");
		 expect(dataelementValidateFunction(dataelementExample1559)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.programCode.json", () => {
		 const dataelementExample1560 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.programCode.json");
		 expect(dataelementValidateFunction(dataelementExample1560)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.quantity.json", () => {
		 const dataelementExample1561 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample1561)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.revenue.json", () => {
		 const dataelementExample1562 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.revenue.json");
		 expect(dataelementValidateFunction(dataelementExample1562)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.sequence.json", () => {
		 const dataelementExample1563 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample1563)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.service.json", () => {
		 const dataelementExample1564 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.service.json");
		 expect(dataelementValidateFunction(dataelementExample1564)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.type.json", () => {
		 const dataelementExample1565 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.type.json");
		 expect(dataelementValidateFunction(dataelementExample1565)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.udi.json", () => {
		 const dataelementExample1566 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.udi.json");
		 expect(dataelementValidateFunction(dataelementExample1566)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.subDetail.unitPrice.json", () => {
		 const dataelementExample1567 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.subDetail.unitPrice.json");
		 expect(dataelementValidateFunction(dataelementExample1567)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.type.json", () => {
		 const dataelementExample1568 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.type.json");
		 expect(dataelementValidateFunction(dataelementExample1568)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.udi.json", () => {
		 const dataelementExample1569 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.udi.json");
		 expect(dataelementValidateFunction(dataelementExample1569)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.detail.unitPrice.json", () => {
		 const dataelementExample1570 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.detail.unitPrice.json");
		 expect(dataelementValidateFunction(dataelementExample1570)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.diagnosisLinkId.json", () => {
		 const dataelementExample1571 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.diagnosisLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample1571)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.encounter.json", () => {
		 const dataelementExample1572 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.encounter.json");
		 expect(dataelementValidateFunction(dataelementExample1572)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.factor.json", () => {
		 const dataelementExample1573 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.factor.json");
		 expect(dataelementValidateFunction(dataelementExample1573)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.informationLinkId.json", () => {
		 const dataelementExample1574 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.informationLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample1574)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.json", () => {
		 const dataelementExample1575 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.json");
		 expect(dataelementValidateFunction(dataelementExample1575)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.locationX.json", () => {
		 const dataelementExample1576 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.locationX.json");
		 expect(dataelementValidateFunction(dataelementExample1576)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.modifier.json", () => {
		 const dataelementExample1577 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample1577)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.net.json", () => {
		 const dataelementExample1578 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.net.json");
		 expect(dataelementValidateFunction(dataelementExample1578)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.noteNumber.json", () => {
		 const dataelementExample1579 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.noteNumber.json");
		 expect(dataelementValidateFunction(dataelementExample1579)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.procedureLinkId.json", () => {
		 const dataelementExample1580 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.procedureLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample1580)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.programCode.json", () => {
		 const dataelementExample1581 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.programCode.json");
		 expect(dataelementValidateFunction(dataelementExample1581)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.quantity.json", () => {
		 const dataelementExample1582 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample1582)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.revenue.json", () => {
		 const dataelementExample1583 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.revenue.json");
		 expect(dataelementValidateFunction(dataelementExample1583)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.sequence.json", () => {
		 const dataelementExample1584 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample1584)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.service.json", () => {
		 const dataelementExample1585 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.service.json");
		 expect(dataelementValidateFunction(dataelementExample1585)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.servicedX.json", () => {
		 const dataelementExample1586 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.servicedX.json");
		 expect(dataelementValidateFunction(dataelementExample1586)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.subSite.json", () => {
		 const dataelementExample1587 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.subSite.json");
		 expect(dataelementValidateFunction(dataelementExample1587)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.udi.json", () => {
		 const dataelementExample1588 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.udi.json");
		 expect(dataelementValidateFunction(dataelementExample1588)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.item.unitPrice.json", () => {
		 const dataelementExample1589 = require("../stu3-resources/DataElement-ExplanationOfBenefit.item.unitPrice.json");
		 expect(dataelementValidateFunction(dataelementExample1589)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.json", () => {
		 const dataelementExample1590 = require("../stu3-resources/DataElement-ExplanationOfBenefit.json");
		 expect(dataelementValidateFunction(dataelementExample1590)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.organization.json", () => {
		 const dataelementExample1591 = require("../stu3-resources/DataElement-ExplanationOfBenefit.organization.json");
		 expect(dataelementValidateFunction(dataelementExample1591)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.originalPrescription.json", () => {
		 const dataelementExample1592 = require("../stu3-resources/DataElement-ExplanationOfBenefit.originalPrescription.json");
		 expect(dataelementValidateFunction(dataelementExample1592)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.outcome.json", () => {
		 const dataelementExample1593 = require("../stu3-resources/DataElement-ExplanationOfBenefit.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample1593)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.patient.json", () => {
		 const dataelementExample1594 = require("../stu3-resources/DataElement-ExplanationOfBenefit.patient.json");
		 expect(dataelementValidateFunction(dataelementExample1594)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.payee.json", () => {
		 const dataelementExample1595 = require("../stu3-resources/DataElement-ExplanationOfBenefit.payee.json");
		 expect(dataelementValidateFunction(dataelementExample1595)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.payee.party.json", () => {
		 const dataelementExample1596 = require("../stu3-resources/DataElement-ExplanationOfBenefit.payee.party.json");
		 expect(dataelementValidateFunction(dataelementExample1596)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.payee.resourceType.json", () => {
		 const dataelementExample1597 = require("../stu3-resources/DataElement-ExplanationOfBenefit.payee.resourceType.json");
		 expect(dataelementValidateFunction(dataelementExample1597)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.payee.type.json", () => {
		 const dataelementExample1598 = require("../stu3-resources/DataElement-ExplanationOfBenefit.payee.type.json");
		 expect(dataelementValidateFunction(dataelementExample1598)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.payment.adjustment.json", () => {
		 const dataelementExample1599 = require("../stu3-resources/DataElement-ExplanationOfBenefit.payment.adjustment.json");
		 expect(dataelementValidateFunction(dataelementExample1599)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.payment.adjustmentReason.json", () => {
		 const dataelementExample1600 = require("../stu3-resources/DataElement-ExplanationOfBenefit.payment.adjustmentReason.json");
		 expect(dataelementValidateFunction(dataelementExample1600)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.payment.amount.json", () => {
		 const dataelementExample1601 = require("../stu3-resources/DataElement-ExplanationOfBenefit.payment.amount.json");
		 expect(dataelementValidateFunction(dataelementExample1601)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.payment.date.json", () => {
		 const dataelementExample1602 = require("../stu3-resources/DataElement-ExplanationOfBenefit.payment.date.json");
		 expect(dataelementValidateFunction(dataelementExample1602)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.payment.identifier.json", () => {
		 const dataelementExample1603 = require("../stu3-resources/DataElement-ExplanationOfBenefit.payment.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1603)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.payment.json", () => {
		 const dataelementExample1604 = require("../stu3-resources/DataElement-ExplanationOfBenefit.payment.json");
		 expect(dataelementValidateFunction(dataelementExample1604)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.payment.type.json", () => {
		 const dataelementExample1605 = require("../stu3-resources/DataElement-ExplanationOfBenefit.payment.type.json");
		 expect(dataelementValidateFunction(dataelementExample1605)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.precedence.json", () => {
		 const dataelementExample1606 = require("../stu3-resources/DataElement-ExplanationOfBenefit.precedence.json");
		 expect(dataelementValidateFunction(dataelementExample1606)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.prescription.json", () => {
		 const dataelementExample1607 = require("../stu3-resources/DataElement-ExplanationOfBenefit.prescription.json");
		 expect(dataelementValidateFunction(dataelementExample1607)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.procedure.date.json", () => {
		 const dataelementExample1608 = require("../stu3-resources/DataElement-ExplanationOfBenefit.procedure.date.json");
		 expect(dataelementValidateFunction(dataelementExample1608)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.procedure.json", () => {
		 const dataelementExample1609 = require("../stu3-resources/DataElement-ExplanationOfBenefit.procedure.json");
		 expect(dataelementValidateFunction(dataelementExample1609)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.procedure.procedureX.json", () => {
		 const dataelementExample1610 = require("../stu3-resources/DataElement-ExplanationOfBenefit.procedure.procedureX.json");
		 expect(dataelementValidateFunction(dataelementExample1610)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.procedure.sequence.json", () => {
		 const dataelementExample1611 = require("../stu3-resources/DataElement-ExplanationOfBenefit.procedure.sequence.json");
		 expect(dataelementValidateFunction(dataelementExample1611)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.processNote.json", () => {
		 const dataelementExample1612 = require("../stu3-resources/DataElement-ExplanationOfBenefit.processNote.json");
		 expect(dataelementValidateFunction(dataelementExample1612)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.processNote.language.json", () => {
		 const dataelementExample1613 = require("../stu3-resources/DataElement-ExplanationOfBenefit.processNote.language.json");
		 expect(dataelementValidateFunction(dataelementExample1613)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.processNote.number.json", () => {
		 const dataelementExample1614 = require("../stu3-resources/DataElement-ExplanationOfBenefit.processNote.number.json");
		 expect(dataelementValidateFunction(dataelementExample1614)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.processNote.text.json", () => {
		 const dataelementExample1615 = require("../stu3-resources/DataElement-ExplanationOfBenefit.processNote.text.json");
		 expect(dataelementValidateFunction(dataelementExample1615)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.processNote.type.json", () => {
		 const dataelementExample1616 = require("../stu3-resources/DataElement-ExplanationOfBenefit.processNote.type.json");
		 expect(dataelementValidateFunction(dataelementExample1616)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.provider.json", () => {
		 const dataelementExample1617 = require("../stu3-resources/DataElement-ExplanationOfBenefit.provider.json");
		 expect(dataelementValidateFunction(dataelementExample1617)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.referral.json", () => {
		 const dataelementExample1618 = require("../stu3-resources/DataElement-ExplanationOfBenefit.referral.json");
		 expect(dataelementValidateFunction(dataelementExample1618)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.related.claim.json", () => {
		 const dataelementExample1619 = require("../stu3-resources/DataElement-ExplanationOfBenefit.related.claim.json");
		 expect(dataelementValidateFunction(dataelementExample1619)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.related.json", () => {
		 const dataelementExample1620 = require("../stu3-resources/DataElement-ExplanationOfBenefit.related.json");
		 expect(dataelementValidateFunction(dataelementExample1620)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.related.reference.json", () => {
		 const dataelementExample1621 = require("../stu3-resources/DataElement-ExplanationOfBenefit.related.reference.json");
		 expect(dataelementValidateFunction(dataelementExample1621)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.related.relationship.json", () => {
		 const dataelementExample1622 = require("../stu3-resources/DataElement-ExplanationOfBenefit.related.relationship.json");
		 expect(dataelementValidateFunction(dataelementExample1622)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.status.json", () => {
		 const dataelementExample1623 = require("../stu3-resources/DataElement-ExplanationOfBenefit.status.json");
		 expect(dataelementValidateFunction(dataelementExample1623)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.subType.json", () => {
		 const dataelementExample1624 = require("../stu3-resources/DataElement-ExplanationOfBenefit.subType.json");
		 expect(dataelementValidateFunction(dataelementExample1624)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.totalBenefit.json", () => {
		 const dataelementExample1625 = require("../stu3-resources/DataElement-ExplanationOfBenefit.totalBenefit.json");
		 expect(dataelementValidateFunction(dataelementExample1625)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.totalCost.json", () => {
		 const dataelementExample1626 = require("../stu3-resources/DataElement-ExplanationOfBenefit.totalCost.json");
		 expect(dataelementValidateFunction(dataelementExample1626)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.type.json", () => {
		 const dataelementExample1627 = require("../stu3-resources/DataElement-ExplanationOfBenefit.type.json");
		 expect(dataelementValidateFunction(dataelementExample1627)).toBe(true);
	 });

	 test("validate DataElement-ExplanationOfBenefit.unallocDeductable.json", () => {
		 const dataelementExample1628 = require("../stu3-resources/DataElement-ExplanationOfBenefit.unallocDeductable.json");
		 expect(dataelementValidateFunction(dataelementExample1628)).toBe(true);
	 });

	 test("validate DataElement-Extension.json", () => {
		 const dataelementExample1629 = require("../stu3-resources/DataElement-Extension.json");
		 expect(dataelementValidateFunction(dataelementExample1629)).toBe(true);
	 });

	 test("validate DataElement-Extension.url.json", () => {
		 const dataelementExample1630 = require("../stu3-resources/DataElement-Extension.url.json");
		 expect(dataelementValidateFunction(dataelementExample1630)).toBe(true);
	 });

	 test("validate DataElement-Extension.valueX.json", () => {
		 const dataelementExample1631 = require("../stu3-resources/DataElement-Extension.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample1631)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.ageX.json", () => {
		 const dataelementExample1632 = require("../stu3-resources/DataElement-FamilyMemberHistory.ageX.json");
		 expect(dataelementValidateFunction(dataelementExample1632)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.bornX.json", () => {
		 const dataelementExample1633 = require("../stu3-resources/DataElement-FamilyMemberHistory.bornX.json");
		 expect(dataelementValidateFunction(dataelementExample1633)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.condition.code.json", () => {
		 const dataelementExample1634 = require("../stu3-resources/DataElement-FamilyMemberHistory.condition.code.json");
		 expect(dataelementValidateFunction(dataelementExample1634)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.condition.json", () => {
		 const dataelementExample1635 = require("../stu3-resources/DataElement-FamilyMemberHistory.condition.json");
		 expect(dataelementValidateFunction(dataelementExample1635)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.condition.note.json", () => {
		 const dataelementExample1636 = require("../stu3-resources/DataElement-FamilyMemberHistory.condition.note.json");
		 expect(dataelementValidateFunction(dataelementExample1636)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.condition.onsetX.json", () => {
		 const dataelementExample1637 = require("../stu3-resources/DataElement-FamilyMemberHistory.condition.onsetX.json");
		 expect(dataelementValidateFunction(dataelementExample1637)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.condition.outcome.json", () => {
		 const dataelementExample1638 = require("../stu3-resources/DataElement-FamilyMemberHistory.condition.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample1638)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.date.json", () => {
		 const dataelementExample1639 = require("../stu3-resources/DataElement-FamilyMemberHistory.date.json");
		 expect(dataelementValidateFunction(dataelementExample1639)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.deceasedX.json", () => {
		 const dataelementExample1640 = require("../stu3-resources/DataElement-FamilyMemberHistory.deceasedX.json");
		 expect(dataelementValidateFunction(dataelementExample1640)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.definition.json", () => {
		 const dataelementExample1641 = require("../stu3-resources/DataElement-FamilyMemberHistory.definition.json");
		 expect(dataelementValidateFunction(dataelementExample1641)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.estimatedAge.json", () => {
		 const dataelementExample1642 = require("../stu3-resources/DataElement-FamilyMemberHistory.estimatedAge.json");
		 expect(dataelementValidateFunction(dataelementExample1642)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.gender.json", () => {
		 const dataelementExample1643 = require("../stu3-resources/DataElement-FamilyMemberHistory.gender.json");
		 expect(dataelementValidateFunction(dataelementExample1643)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.identifier.json", () => {
		 const dataelementExample1644 = require("../stu3-resources/DataElement-FamilyMemberHistory.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1644)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.json", () => {
		 const dataelementExample1645 = require("../stu3-resources/DataElement-FamilyMemberHistory.json");
		 expect(dataelementValidateFunction(dataelementExample1645)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.name.json", () => {
		 const dataelementExample1646 = require("../stu3-resources/DataElement-FamilyMemberHistory.name.json");
		 expect(dataelementValidateFunction(dataelementExample1646)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.notDone.json", () => {
		 const dataelementExample1647 = require("../stu3-resources/DataElement-FamilyMemberHistory.notDone.json");
		 expect(dataelementValidateFunction(dataelementExample1647)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.notDoneReason.json", () => {
		 const dataelementExample1648 = require("../stu3-resources/DataElement-FamilyMemberHistory.notDoneReason.json");
		 expect(dataelementValidateFunction(dataelementExample1648)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.note.json", () => {
		 const dataelementExample1649 = require("../stu3-resources/DataElement-FamilyMemberHistory.note.json");
		 expect(dataelementValidateFunction(dataelementExample1649)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.patient.json", () => {
		 const dataelementExample1650 = require("../stu3-resources/DataElement-FamilyMemberHistory.patient.json");
		 expect(dataelementValidateFunction(dataelementExample1650)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.reasonCode.json", () => {
		 const dataelementExample1651 = require("../stu3-resources/DataElement-FamilyMemberHistory.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample1651)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.reasonReference.json", () => {
		 const dataelementExample1652 = require("../stu3-resources/DataElement-FamilyMemberHistory.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample1652)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.relationship.json", () => {
		 const dataelementExample1653 = require("../stu3-resources/DataElement-FamilyMemberHistory.relationship.json");
		 expect(dataelementValidateFunction(dataelementExample1653)).toBe(true);
	 });

	 test("validate DataElement-FamilyMemberHistory.status.json", () => {
		 const dataelementExample1654 = require("../stu3-resources/DataElement-FamilyMemberHistory.status.json");
		 expect(dataelementValidateFunction(dataelementExample1654)).toBe(true);
	 });

	 test("validate DataElement-Flag.author.json", () => {
		 const dataelementExample1655 = require("../stu3-resources/DataElement-Flag.author.json");
		 expect(dataelementValidateFunction(dataelementExample1655)).toBe(true);
	 });

	 test("validate DataElement-Flag.category.json", () => {
		 const dataelementExample1656 = require("../stu3-resources/DataElement-Flag.category.json");
		 expect(dataelementValidateFunction(dataelementExample1656)).toBe(true);
	 });

	 test("validate DataElement-Flag.code.json", () => {
		 const dataelementExample1657 = require("../stu3-resources/DataElement-Flag.code.json");
		 expect(dataelementValidateFunction(dataelementExample1657)).toBe(true);
	 });

	 test("validate DataElement-Flag.encounter.json", () => {
		 const dataelementExample1658 = require("../stu3-resources/DataElement-Flag.encounter.json");
		 expect(dataelementValidateFunction(dataelementExample1658)).toBe(true);
	 });

	 test("validate DataElement-Flag.identifier.json", () => {
		 const dataelementExample1659 = require("../stu3-resources/DataElement-Flag.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1659)).toBe(true);
	 });

	 test("validate DataElement-Flag.json", () => {
		 const dataelementExample1660 = require("../stu3-resources/DataElement-Flag.json");
		 expect(dataelementValidateFunction(dataelementExample1660)).toBe(true);
	 });

	 test("validate DataElement-Flag.period.json", () => {
		 const dataelementExample1661 = require("../stu3-resources/DataElement-Flag.period.json");
		 expect(dataelementValidateFunction(dataelementExample1661)).toBe(true);
	 });

	 test("validate DataElement-Flag.status.json", () => {
		 const dataelementExample1662 = require("../stu3-resources/DataElement-Flag.status.json");
		 expect(dataelementValidateFunction(dataelementExample1662)).toBe(true);
	 });

	 test("validate DataElement-Flag.subject.json", () => {
		 const dataelementExample1663 = require("../stu3-resources/DataElement-Flag.subject.json");
		 expect(dataelementValidateFunction(dataelementExample1663)).toBe(true);
	 });

	 test("validate DataElement-Goal.addresses.json", () => {
		 const dataelementExample1664 = require("../stu3-resources/DataElement-Goal.addresses.json");
		 expect(dataelementValidateFunction(dataelementExample1664)).toBe(true);
	 });

	 test("validate DataElement-Goal.category.json", () => {
		 const dataelementExample1665 = require("../stu3-resources/DataElement-Goal.category.json");
		 expect(dataelementValidateFunction(dataelementExample1665)).toBe(true);
	 });

	 test("validate DataElement-Goal.description.json", () => {
		 const dataelementExample1666 = require("../stu3-resources/DataElement-Goal.description.json");
		 expect(dataelementValidateFunction(dataelementExample1666)).toBe(true);
	 });

	 test("validate DataElement-Goal.expressedBy.json", () => {
		 const dataelementExample1667 = require("../stu3-resources/DataElement-Goal.expressedBy.json");
		 expect(dataelementValidateFunction(dataelementExample1667)).toBe(true);
	 });

	 test("validate DataElement-Goal.identifier.json", () => {
		 const dataelementExample1668 = require("../stu3-resources/DataElement-Goal.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1668)).toBe(true);
	 });

	 test("validate DataElement-Goal.json", () => {
		 const dataelementExample1669 = require("../stu3-resources/DataElement-Goal.json");
		 expect(dataelementValidateFunction(dataelementExample1669)).toBe(true);
	 });

	 test("validate DataElement-Goal.note.json", () => {
		 const dataelementExample1670 = require("../stu3-resources/DataElement-Goal.note.json");
		 expect(dataelementValidateFunction(dataelementExample1670)).toBe(true);
	 });

	 test("validate DataElement-Goal.outcomeCode.json", () => {
		 const dataelementExample1671 = require("../stu3-resources/DataElement-Goal.outcomeCode.json");
		 expect(dataelementValidateFunction(dataelementExample1671)).toBe(true);
	 });

	 test("validate DataElement-Goal.outcomeReference.json", () => {
		 const dataelementExample1672 = require("../stu3-resources/DataElement-Goal.outcomeReference.json");
		 expect(dataelementValidateFunction(dataelementExample1672)).toBe(true);
	 });

	 test("validate DataElement-Goal.priority.json", () => {
		 const dataelementExample1673 = require("../stu3-resources/DataElement-Goal.priority.json");
		 expect(dataelementValidateFunction(dataelementExample1673)).toBe(true);
	 });

	 test("validate DataElement-Goal.startX.json", () => {
		 const dataelementExample1674 = require("../stu3-resources/DataElement-Goal.startX.json");
		 expect(dataelementValidateFunction(dataelementExample1674)).toBe(true);
	 });

	 test("validate DataElement-Goal.status.json", () => {
		 const dataelementExample1675 = require("../stu3-resources/DataElement-Goal.status.json");
		 expect(dataelementValidateFunction(dataelementExample1675)).toBe(true);
	 });

	 test("validate DataElement-Goal.statusDate.json", () => {
		 const dataelementExample1676 = require("../stu3-resources/DataElement-Goal.statusDate.json");
		 expect(dataelementValidateFunction(dataelementExample1676)).toBe(true);
	 });

	 test("validate DataElement-Goal.statusReason.json", () => {
		 const dataelementExample1677 = require("../stu3-resources/DataElement-Goal.statusReason.json");
		 expect(dataelementValidateFunction(dataelementExample1677)).toBe(true);
	 });

	 test("validate DataElement-Goal.subject.json", () => {
		 const dataelementExample1678 = require("../stu3-resources/DataElement-Goal.subject.json");
		 expect(dataelementValidateFunction(dataelementExample1678)).toBe(true);
	 });

	 test("validate DataElement-Goal.target.detailX.json", () => {
		 const dataelementExample1679 = require("../stu3-resources/DataElement-Goal.target.detailX.json");
		 expect(dataelementValidateFunction(dataelementExample1679)).toBe(true);
	 });

	 test("validate DataElement-Goal.target.dueX.json", () => {
		 const dataelementExample1680 = require("../stu3-resources/DataElement-Goal.target.dueX.json");
		 expect(dataelementValidateFunction(dataelementExample1680)).toBe(true);
	 });

	 test("validate DataElement-Goal.target.json", () => {
		 const dataelementExample1681 = require("../stu3-resources/DataElement-Goal.target.json");
		 expect(dataelementValidateFunction(dataelementExample1681)).toBe(true);
	 });

	 test("validate DataElement-Goal.target.measure.json", () => {
		 const dataelementExample1682 = require("../stu3-resources/DataElement-Goal.target.measure.json");
		 expect(dataelementValidateFunction(dataelementExample1682)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.contact.json", () => {
		 const dataelementExample1683 = require("../stu3-resources/DataElement-GraphDefinition.contact.json");
		 expect(dataelementValidateFunction(dataelementExample1683)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.date.json", () => {
		 const dataelementExample1684 = require("../stu3-resources/DataElement-GraphDefinition.date.json");
		 expect(dataelementValidateFunction(dataelementExample1684)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.description.json", () => {
		 const dataelementExample1685 = require("../stu3-resources/DataElement-GraphDefinition.description.json");
		 expect(dataelementValidateFunction(dataelementExample1685)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.experimental.json", () => {
		 const dataelementExample1686 = require("../stu3-resources/DataElement-GraphDefinition.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample1686)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.json", () => {
		 const dataelementExample1687 = require("../stu3-resources/DataElement-GraphDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample1687)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.jurisdiction.json", () => {
		 const dataelementExample1688 = require("../stu3-resources/DataElement-GraphDefinition.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample1688)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.description.json", () => {
		 const dataelementExample1689 = require("../stu3-resources/DataElement-GraphDefinition.link.description.json");
		 expect(dataelementValidateFunction(dataelementExample1689)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.json", () => {
		 const dataelementExample1690 = require("../stu3-resources/DataElement-GraphDefinition.link.json");
		 expect(dataelementValidateFunction(dataelementExample1690)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.max.json", () => {
		 const dataelementExample1691 = require("../stu3-resources/DataElement-GraphDefinition.link.max.json");
		 expect(dataelementValidateFunction(dataelementExample1691)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.min.json", () => {
		 const dataelementExample1692 = require("../stu3-resources/DataElement-GraphDefinition.link.min.json");
		 expect(dataelementValidateFunction(dataelementExample1692)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.path.json", () => {
		 const dataelementExample1693 = require("../stu3-resources/DataElement-GraphDefinition.link.path.json");
		 expect(dataelementValidateFunction(dataelementExample1693)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.sliceName.json", () => {
		 const dataelementExample1694 = require("../stu3-resources/DataElement-GraphDefinition.link.sliceName.json");
		 expect(dataelementValidateFunction(dataelementExample1694)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.target.compartment.code.json", () => {
		 const dataelementExample1695 = require("../stu3-resources/DataElement-GraphDefinition.link.target.compartment.code.json");
		 expect(dataelementValidateFunction(dataelementExample1695)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.target.compartment.description.json", () => {
		 const dataelementExample1696 = require("../stu3-resources/DataElement-GraphDefinition.link.target.compartment.description.json");
		 expect(dataelementValidateFunction(dataelementExample1696)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.target.compartment.expression.json", () => {
		 const dataelementExample1697 = require("../stu3-resources/DataElement-GraphDefinition.link.target.compartment.expression.json");
		 expect(dataelementValidateFunction(dataelementExample1697)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.target.compartment.json", () => {
		 const dataelementExample1698 = require("../stu3-resources/DataElement-GraphDefinition.link.target.compartment.json");
		 expect(dataelementValidateFunction(dataelementExample1698)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.target.compartment.rule.json", () => {
		 const dataelementExample1699 = require("../stu3-resources/DataElement-GraphDefinition.link.target.compartment.rule.json");
		 expect(dataelementValidateFunction(dataelementExample1699)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.target.json", () => {
		 const dataelementExample1700 = require("../stu3-resources/DataElement-GraphDefinition.link.target.json");
		 expect(dataelementValidateFunction(dataelementExample1700)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.target.link.json", () => {
		 const dataelementExample1701 = require("../stu3-resources/DataElement-GraphDefinition.link.target.link.json");
		 expect(dataelementValidateFunction(dataelementExample1701)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.target.profile.json", () => {
		 const dataelementExample1702 = require("../stu3-resources/DataElement-GraphDefinition.link.target.profile.json");
		 expect(dataelementValidateFunction(dataelementExample1702)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.link.target.type.json", () => {
		 const dataelementExample1703 = require("../stu3-resources/DataElement-GraphDefinition.link.target.type.json");
		 expect(dataelementValidateFunction(dataelementExample1703)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.name.json", () => {
		 const dataelementExample1704 = require("../stu3-resources/DataElement-GraphDefinition.name.json");
		 expect(dataelementValidateFunction(dataelementExample1704)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.profile.json", () => {
		 const dataelementExample1705 = require("../stu3-resources/DataElement-GraphDefinition.profile.json");
		 expect(dataelementValidateFunction(dataelementExample1705)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.publisher.json", () => {
		 const dataelementExample1706 = require("../stu3-resources/DataElement-GraphDefinition.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample1706)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.purpose.json", () => {
		 const dataelementExample1707 = require("../stu3-resources/DataElement-GraphDefinition.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample1707)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.start.json", () => {
		 const dataelementExample1708 = require("../stu3-resources/DataElement-GraphDefinition.start.json");
		 expect(dataelementValidateFunction(dataelementExample1708)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.status.json", () => {
		 const dataelementExample1709 = require("../stu3-resources/DataElement-GraphDefinition.status.json");
		 expect(dataelementValidateFunction(dataelementExample1709)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.url.json", () => {
		 const dataelementExample1710 = require("../stu3-resources/DataElement-GraphDefinition.url.json");
		 expect(dataelementValidateFunction(dataelementExample1710)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.useContext.json", () => {
		 const dataelementExample1711 = require("../stu3-resources/DataElement-GraphDefinition.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample1711)).toBe(true);
	 });

	 test("validate DataElement-GraphDefinition.version.json", () => {
		 const dataelementExample1712 = require("../stu3-resources/DataElement-GraphDefinition.version.json");
		 expect(dataelementValidateFunction(dataelementExample1712)).toBe(true);
	 });

	 test("validate DataElement-Group.active.json", () => {
		 const dataelementExample1713 = require("../stu3-resources/DataElement-Group.active.json");
		 expect(dataelementValidateFunction(dataelementExample1713)).toBe(true);
	 });

	 test("validate DataElement-Group.actual.json", () => {
		 const dataelementExample1714 = require("../stu3-resources/DataElement-Group.actual.json");
		 expect(dataelementValidateFunction(dataelementExample1714)).toBe(true);
	 });

	 test("validate DataElement-Group.characteristic.code.json", () => {
		 const dataelementExample1715 = require("../stu3-resources/DataElement-Group.characteristic.code.json");
		 expect(dataelementValidateFunction(dataelementExample1715)).toBe(true);
	 });

	 test("validate DataElement-Group.characteristic.exclude.json", () => {
		 const dataelementExample1716 = require("../stu3-resources/DataElement-Group.characteristic.exclude.json");
		 expect(dataelementValidateFunction(dataelementExample1716)).toBe(true);
	 });

	 test("validate DataElement-Group.characteristic.json", () => {
		 const dataelementExample1717 = require("../stu3-resources/DataElement-Group.characteristic.json");
		 expect(dataelementValidateFunction(dataelementExample1717)).toBe(true);
	 });

	 test("validate DataElement-Group.characteristic.period.json", () => {
		 const dataelementExample1718 = require("../stu3-resources/DataElement-Group.characteristic.period.json");
		 expect(dataelementValidateFunction(dataelementExample1718)).toBe(true);
	 });

	 test("validate DataElement-Group.characteristic.valueX.json", () => {
		 const dataelementExample1719 = require("../stu3-resources/DataElement-Group.characteristic.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample1719)).toBe(true);
	 });

	 test("validate DataElement-Group.code.json", () => {
		 const dataelementExample1720 = require("../stu3-resources/DataElement-Group.code.json");
		 expect(dataelementValidateFunction(dataelementExample1720)).toBe(true);
	 });

	 test("validate DataElement-Group.identifier.json", () => {
		 const dataelementExample1721 = require("../stu3-resources/DataElement-Group.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1721)).toBe(true);
	 });

	 test("validate DataElement-Group.json", () => {
		 const dataelementExample1722 = require("../stu3-resources/DataElement-Group.json");
		 expect(dataelementValidateFunction(dataelementExample1722)).toBe(true);
	 });

	 test("validate DataElement-Group.member.entity.json", () => {
		 const dataelementExample1723 = require("../stu3-resources/DataElement-Group.member.entity.json");
		 expect(dataelementValidateFunction(dataelementExample1723)).toBe(true);
	 });

	 test("validate DataElement-Group.member.inactive.json", () => {
		 const dataelementExample1724 = require("../stu3-resources/DataElement-Group.member.inactive.json");
		 expect(dataelementValidateFunction(dataelementExample1724)).toBe(true);
	 });

	 test("validate DataElement-Group.member.json", () => {
		 const dataelementExample1725 = require("../stu3-resources/DataElement-Group.member.json");
		 expect(dataelementValidateFunction(dataelementExample1725)).toBe(true);
	 });

	 test("validate DataElement-Group.member.period.json", () => {
		 const dataelementExample1726 = require("../stu3-resources/DataElement-Group.member.period.json");
		 expect(dataelementValidateFunction(dataelementExample1726)).toBe(true);
	 });

	 test("validate DataElement-Group.name.json", () => {
		 const dataelementExample1727 = require("../stu3-resources/DataElement-Group.name.json");
		 expect(dataelementValidateFunction(dataelementExample1727)).toBe(true);
	 });

	 test("validate DataElement-Group.quantity.json", () => {
		 const dataelementExample1728 = require("../stu3-resources/DataElement-Group.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample1728)).toBe(true);
	 });

	 test("validate DataElement-Group.type.json", () => {
		 const dataelementExample1729 = require("../stu3-resources/DataElement-Group.type.json");
		 expect(dataelementValidateFunction(dataelementExample1729)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.context.json", () => {
		 const dataelementExample1730 = require("../stu3-resources/DataElement-GuidanceResponse.context.json");
		 expect(dataelementValidateFunction(dataelementExample1730)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.dataRequirement.json", () => {
		 const dataelementExample1731 = require("../stu3-resources/DataElement-GuidanceResponse.dataRequirement.json");
		 expect(dataelementValidateFunction(dataelementExample1731)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.evaluationMessage.json", () => {
		 const dataelementExample1732 = require("../stu3-resources/DataElement-GuidanceResponse.evaluationMessage.json");
		 expect(dataelementValidateFunction(dataelementExample1732)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.identifier.json", () => {
		 const dataelementExample1733 = require("../stu3-resources/DataElement-GuidanceResponse.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1733)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.json", () => {
		 const dataelementExample1734 = require("../stu3-resources/DataElement-GuidanceResponse.json");
		 expect(dataelementValidateFunction(dataelementExample1734)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.module.json", () => {
		 const dataelementExample1735 = require("../stu3-resources/DataElement-GuidanceResponse.module.json");
		 expect(dataelementValidateFunction(dataelementExample1735)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.note.json", () => {
		 const dataelementExample1736 = require("../stu3-resources/DataElement-GuidanceResponse.note.json");
		 expect(dataelementValidateFunction(dataelementExample1736)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.occurrenceDateTime.json", () => {
		 const dataelementExample1737 = require("../stu3-resources/DataElement-GuidanceResponse.occurrenceDateTime.json");
		 expect(dataelementValidateFunction(dataelementExample1737)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.outputParameters.json", () => {
		 const dataelementExample1738 = require("../stu3-resources/DataElement-GuidanceResponse.outputParameters.json");
		 expect(dataelementValidateFunction(dataelementExample1738)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.performer.json", () => {
		 const dataelementExample1739 = require("../stu3-resources/DataElement-GuidanceResponse.performer.json");
		 expect(dataelementValidateFunction(dataelementExample1739)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.reasonX.json", () => {
		 const dataelementExample1740 = require("../stu3-resources/DataElement-GuidanceResponse.reasonX.json");
		 expect(dataelementValidateFunction(dataelementExample1740)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.requestId.json", () => {
		 const dataelementExample1741 = require("../stu3-resources/DataElement-GuidanceResponse.requestId.json");
		 expect(dataelementValidateFunction(dataelementExample1741)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.result.json", () => {
		 const dataelementExample1742 = require("../stu3-resources/DataElement-GuidanceResponse.result.json");
		 expect(dataelementValidateFunction(dataelementExample1742)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.status.json", () => {
		 const dataelementExample1743 = require("../stu3-resources/DataElement-GuidanceResponse.status.json");
		 expect(dataelementValidateFunction(dataelementExample1743)).toBe(true);
	 });

	 test("validate DataElement-GuidanceResponse.subject.json", () => {
		 const dataelementExample1744 = require("../stu3-resources/DataElement-GuidanceResponse.subject.json");
		 expect(dataelementValidateFunction(dataelementExample1744)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.active.json", () => {
		 const dataelementExample1745 = require("../stu3-resources/DataElement-HealthcareService.active.json");
		 expect(dataelementValidateFunction(dataelementExample1745)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.appointmentRequired.json", () => {
		 const dataelementExample1746 = require("../stu3-resources/DataElement-HealthcareService.appointmentRequired.json");
		 expect(dataelementValidateFunction(dataelementExample1746)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.availabilityExceptions.json", () => {
		 const dataelementExample1747 = require("../stu3-resources/DataElement-HealthcareService.availabilityExceptions.json");
		 expect(dataelementValidateFunction(dataelementExample1747)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.availableTime.allDay.json", () => {
		 const dataelementExample1748 = require("../stu3-resources/DataElement-HealthcareService.availableTime.allDay.json");
		 expect(dataelementValidateFunction(dataelementExample1748)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.availableTime.availableEndTime.json", () => {
		 const dataelementExample1749 = require("../stu3-resources/DataElement-HealthcareService.availableTime.availableEndTime.json");
		 expect(dataelementValidateFunction(dataelementExample1749)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.availableTime.availableStartTime.json", () => {
		 const dataelementExample1750 = require("../stu3-resources/DataElement-HealthcareService.availableTime.availableStartTime.json");
		 expect(dataelementValidateFunction(dataelementExample1750)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.availableTime.daysOfWeek.json", () => {
		 const dataelementExample1751 = require("../stu3-resources/DataElement-HealthcareService.availableTime.daysOfWeek.json");
		 expect(dataelementValidateFunction(dataelementExample1751)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.availableTime.json", () => {
		 const dataelementExample1752 = require("../stu3-resources/DataElement-HealthcareService.availableTime.json");
		 expect(dataelementValidateFunction(dataelementExample1752)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.category.json", () => {
		 const dataelementExample1753 = require("../stu3-resources/DataElement-HealthcareService.category.json");
		 expect(dataelementValidateFunction(dataelementExample1753)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.characteristic.json", () => {
		 const dataelementExample1754 = require("../stu3-resources/DataElement-HealthcareService.characteristic.json");
		 expect(dataelementValidateFunction(dataelementExample1754)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.comment.json", () => {
		 const dataelementExample1755 = require("../stu3-resources/DataElement-HealthcareService.comment.json");
		 expect(dataelementValidateFunction(dataelementExample1755)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.coverageArea.json", () => {
		 const dataelementExample1756 = require("../stu3-resources/DataElement-HealthcareService.coverageArea.json");
		 expect(dataelementValidateFunction(dataelementExample1756)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.eligibility.json", () => {
		 const dataelementExample1757 = require("../stu3-resources/DataElement-HealthcareService.eligibility.json");
		 expect(dataelementValidateFunction(dataelementExample1757)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.eligibilityNote.json", () => {
		 const dataelementExample1758 = require("../stu3-resources/DataElement-HealthcareService.eligibilityNote.json");
		 expect(dataelementValidateFunction(dataelementExample1758)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.endpoint.json", () => {
		 const dataelementExample1759 = require("../stu3-resources/DataElement-HealthcareService.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample1759)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.extraDetails.json", () => {
		 const dataelementExample1760 = require("../stu3-resources/DataElement-HealthcareService.extraDetails.json");
		 expect(dataelementValidateFunction(dataelementExample1760)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.identifier.json", () => {
		 const dataelementExample1761 = require("../stu3-resources/DataElement-HealthcareService.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1761)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.json", () => {
		 const dataelementExample1762 = require("../stu3-resources/DataElement-HealthcareService.json");
		 expect(dataelementValidateFunction(dataelementExample1762)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.location.json", () => {
		 const dataelementExample1763 = require("../stu3-resources/DataElement-HealthcareService.location.json");
		 expect(dataelementValidateFunction(dataelementExample1763)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.name.json", () => {
		 const dataelementExample1764 = require("../stu3-resources/DataElement-HealthcareService.name.json");
		 expect(dataelementValidateFunction(dataelementExample1764)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.notAvailable.description.json", () => {
		 const dataelementExample1765 = require("../stu3-resources/DataElement-HealthcareService.notAvailable.description.json");
		 expect(dataelementValidateFunction(dataelementExample1765)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.notAvailable.during.json", () => {
		 const dataelementExample1766 = require("../stu3-resources/DataElement-HealthcareService.notAvailable.during.json");
		 expect(dataelementValidateFunction(dataelementExample1766)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.notAvailable.json", () => {
		 const dataelementExample1767 = require("../stu3-resources/DataElement-HealthcareService.notAvailable.json");
		 expect(dataelementValidateFunction(dataelementExample1767)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.photo.json", () => {
		 const dataelementExample1768 = require("../stu3-resources/DataElement-HealthcareService.photo.json");
		 expect(dataelementValidateFunction(dataelementExample1768)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.programName.json", () => {
		 const dataelementExample1769 = require("../stu3-resources/DataElement-HealthcareService.programName.json");
		 expect(dataelementValidateFunction(dataelementExample1769)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.providedBy.json", () => {
		 const dataelementExample1770 = require("../stu3-resources/DataElement-HealthcareService.providedBy.json");
		 expect(dataelementValidateFunction(dataelementExample1770)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.referralMethod.json", () => {
		 const dataelementExample1771 = require("../stu3-resources/DataElement-HealthcareService.referralMethod.json");
		 expect(dataelementValidateFunction(dataelementExample1771)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.serviceProvisionCode.json", () => {
		 const dataelementExample1772 = require("../stu3-resources/DataElement-HealthcareService.serviceProvisionCode.json");
		 expect(dataelementValidateFunction(dataelementExample1772)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.specialty.json", () => {
		 const dataelementExample1773 = require("../stu3-resources/DataElement-HealthcareService.specialty.json");
		 expect(dataelementValidateFunction(dataelementExample1773)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.telecom.json", () => {
		 const dataelementExample1774 = require("../stu3-resources/DataElement-HealthcareService.telecom.json");
		 expect(dataelementValidateFunction(dataelementExample1774)).toBe(true);
	 });

	 test("validate DataElement-HealthcareService.type.json", () => {
		 const dataelementExample1775 = require("../stu3-resources/DataElement-HealthcareService.type.json");
		 expect(dataelementValidateFunction(dataelementExample1775)).toBe(true);
	 });

	 test("validate DataElement-HumanName.family.json", () => {
		 const dataelementExample1776 = require("../stu3-resources/DataElement-HumanName.family.json");
		 expect(dataelementValidateFunction(dataelementExample1776)).toBe(true);
	 });

	 test("validate DataElement-HumanName.given.json", () => {
		 const dataelementExample1777 = require("../stu3-resources/DataElement-HumanName.given.json");
		 expect(dataelementValidateFunction(dataelementExample1777)).toBe(true);
	 });

	 test("validate DataElement-HumanName.json", () => {
		 const dataelementExample1778 = require("../stu3-resources/DataElement-HumanName.json");
		 expect(dataelementValidateFunction(dataelementExample1778)).toBe(true);
	 });

	 test("validate DataElement-HumanName.period.json", () => {
		 const dataelementExample1779 = require("../stu3-resources/DataElement-HumanName.period.json");
		 expect(dataelementValidateFunction(dataelementExample1779)).toBe(true);
	 });

	 test("validate DataElement-HumanName.prefix.json", () => {
		 const dataelementExample1780 = require("../stu3-resources/DataElement-HumanName.prefix.json");
		 expect(dataelementValidateFunction(dataelementExample1780)).toBe(true);
	 });

	 test("validate DataElement-HumanName.suffix.json", () => {
		 const dataelementExample1781 = require("../stu3-resources/DataElement-HumanName.suffix.json");
		 expect(dataelementValidateFunction(dataelementExample1781)).toBe(true);
	 });

	 test("validate DataElement-HumanName.text.json", () => {
		 const dataelementExample1782 = require("../stu3-resources/DataElement-HumanName.text.json");
		 expect(dataelementValidateFunction(dataelementExample1782)).toBe(true);
	 });

	 test("validate DataElement-HumanName.use.json", () => {
		 const dataelementExample1783 = require("../stu3-resources/DataElement-HumanName.use.json");
		 expect(dataelementValidateFunction(dataelementExample1783)).toBe(true);
	 });

	 test("validate DataElement-Identifier.assigner.json", () => {
		 const dataelementExample1784 = require("../stu3-resources/DataElement-Identifier.assigner.json");
		 expect(dataelementValidateFunction(dataelementExample1784)).toBe(true);
	 });

	 test("validate DataElement-Identifier.json", () => {
		 const dataelementExample1785 = require("../stu3-resources/DataElement-Identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1785)).toBe(true);
	 });

	 test("validate DataElement-Identifier.period.json", () => {
		 const dataelementExample1786 = require("../stu3-resources/DataElement-Identifier.period.json");
		 expect(dataelementValidateFunction(dataelementExample1786)).toBe(true);
	 });

	 test("validate DataElement-Identifier.system.json", () => {
		 const dataelementExample1787 = require("../stu3-resources/DataElement-Identifier.system.json");
		 expect(dataelementValidateFunction(dataelementExample1787)).toBe(true);
	 });

	 test("validate DataElement-Identifier.type.json", () => {
		 const dataelementExample1788 = require("../stu3-resources/DataElement-Identifier.type.json");
		 expect(dataelementValidateFunction(dataelementExample1788)).toBe(true);
	 });

	 test("validate DataElement-Identifier.use.json", () => {
		 const dataelementExample1789 = require("../stu3-resources/DataElement-Identifier.use.json");
		 expect(dataelementValidateFunction(dataelementExample1789)).toBe(true);
	 });

	 test("validate DataElement-Identifier.value.json", () => {
		 const dataelementExample1790 = require("../stu3-resources/DataElement-Identifier.value.json");
		 expect(dataelementValidateFunction(dataelementExample1790)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.author.json", () => {
		 const dataelementExample1791 = require("../stu3-resources/DataElement-ImagingManifest.author.json");
		 expect(dataelementValidateFunction(dataelementExample1791)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.authoringTime.json", () => {
		 const dataelementExample1792 = require("../stu3-resources/DataElement-ImagingManifest.authoringTime.json");
		 expect(dataelementValidateFunction(dataelementExample1792)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.description.json", () => {
		 const dataelementExample1793 = require("../stu3-resources/DataElement-ImagingManifest.description.json");
		 expect(dataelementValidateFunction(dataelementExample1793)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.identifier.json", () => {
		 const dataelementExample1794 = require("../stu3-resources/DataElement-ImagingManifest.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1794)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.json", () => {
		 const dataelementExample1795 = require("../stu3-resources/DataElement-ImagingManifest.json");
		 expect(dataelementValidateFunction(dataelementExample1795)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.patient.json", () => {
		 const dataelementExample1796 = require("../stu3-resources/DataElement-ImagingManifest.patient.json");
		 expect(dataelementValidateFunction(dataelementExample1796)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.study.endpoint.json", () => {
		 const dataelementExample1797 = require("../stu3-resources/DataElement-ImagingManifest.study.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample1797)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.study.imagingStudy.json", () => {
		 const dataelementExample1798 = require("../stu3-resources/DataElement-ImagingManifest.study.imagingStudy.json");
		 expect(dataelementValidateFunction(dataelementExample1798)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.study.json", () => {
		 const dataelementExample1799 = require("../stu3-resources/DataElement-ImagingManifest.study.json");
		 expect(dataelementValidateFunction(dataelementExample1799)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.study.series.endpoint.json", () => {
		 const dataelementExample1800 = require("../stu3-resources/DataElement-ImagingManifest.study.series.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample1800)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.study.series.instance.json", () => {
		 const dataelementExample1801 = require("../stu3-resources/DataElement-ImagingManifest.study.series.instance.json");
		 expect(dataelementValidateFunction(dataelementExample1801)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.study.series.instance.sopClass.json", () => {
		 const dataelementExample1802 = require("../stu3-resources/DataElement-ImagingManifest.study.series.instance.sopClass.json");
		 expect(dataelementValidateFunction(dataelementExample1802)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.study.series.instance.uid.json", () => {
		 const dataelementExample1803 = require("../stu3-resources/DataElement-ImagingManifest.study.series.instance.uid.json");
		 expect(dataelementValidateFunction(dataelementExample1803)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.study.series.json", () => {
		 const dataelementExample1804 = require("../stu3-resources/DataElement-ImagingManifest.study.series.json");
		 expect(dataelementValidateFunction(dataelementExample1804)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.study.series.uid.json", () => {
		 const dataelementExample1805 = require("../stu3-resources/DataElement-ImagingManifest.study.series.uid.json");
		 expect(dataelementValidateFunction(dataelementExample1805)).toBe(true);
	 });

	 test("validate DataElement-ImagingManifest.study.uid.json", () => {
		 const dataelementExample1806 = require("../stu3-resources/DataElement-ImagingManifest.study.uid.json");
		 expect(dataelementValidateFunction(dataelementExample1806)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.accession.json", () => {
		 const dataelementExample1807 = require("../stu3-resources/DataElement-ImagingStudy.accession.json");
		 expect(dataelementValidateFunction(dataelementExample1807)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.availability.json", () => {
		 const dataelementExample1808 = require("../stu3-resources/DataElement-ImagingStudy.availability.json");
		 expect(dataelementValidateFunction(dataelementExample1808)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.basedOn.json", () => {
		 const dataelementExample1809 = require("../stu3-resources/DataElement-ImagingStudy.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample1809)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.context.json", () => {
		 const dataelementExample1810 = require("../stu3-resources/DataElement-ImagingStudy.context.json");
		 expect(dataelementValidateFunction(dataelementExample1810)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.description.json", () => {
		 const dataelementExample1811 = require("../stu3-resources/DataElement-ImagingStudy.description.json");
		 expect(dataelementValidateFunction(dataelementExample1811)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.endpoint.json", () => {
		 const dataelementExample1812 = require("../stu3-resources/DataElement-ImagingStudy.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample1812)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.identifier.json", () => {
		 const dataelementExample1813 = require("../stu3-resources/DataElement-ImagingStudy.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1813)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.interpreter.json", () => {
		 const dataelementExample1814 = require("../stu3-resources/DataElement-ImagingStudy.interpreter.json");
		 expect(dataelementValidateFunction(dataelementExample1814)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.json", () => {
		 const dataelementExample1815 = require("../stu3-resources/DataElement-ImagingStudy.json");
		 expect(dataelementValidateFunction(dataelementExample1815)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.modalityList.json", () => {
		 const dataelementExample1816 = require("../stu3-resources/DataElement-ImagingStudy.modalityList.json");
		 expect(dataelementValidateFunction(dataelementExample1816)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.numberOfInstances.json", () => {
		 const dataelementExample1817 = require("../stu3-resources/DataElement-ImagingStudy.numberOfInstances.json");
		 expect(dataelementValidateFunction(dataelementExample1817)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.numberOfSeries.json", () => {
		 const dataelementExample1818 = require("../stu3-resources/DataElement-ImagingStudy.numberOfSeries.json");
		 expect(dataelementValidateFunction(dataelementExample1818)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.patient.json", () => {
		 const dataelementExample1819 = require("../stu3-resources/DataElement-ImagingStudy.patient.json");
		 expect(dataelementValidateFunction(dataelementExample1819)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.procedureCode.json", () => {
		 const dataelementExample1820 = require("../stu3-resources/DataElement-ImagingStudy.procedureCode.json");
		 expect(dataelementValidateFunction(dataelementExample1820)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.procedureReference.json", () => {
		 const dataelementExample1821 = require("../stu3-resources/DataElement-ImagingStudy.procedureReference.json");
		 expect(dataelementValidateFunction(dataelementExample1821)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.reason.json", () => {
		 const dataelementExample1822 = require("../stu3-resources/DataElement-ImagingStudy.reason.json");
		 expect(dataelementValidateFunction(dataelementExample1822)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.referrer.json", () => {
		 const dataelementExample1823 = require("../stu3-resources/DataElement-ImagingStudy.referrer.json");
		 expect(dataelementValidateFunction(dataelementExample1823)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.availability.json", () => {
		 const dataelementExample1824 = require("../stu3-resources/DataElement-ImagingStudy.series.availability.json");
		 expect(dataelementValidateFunction(dataelementExample1824)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.bodySite.json", () => {
		 const dataelementExample1825 = require("../stu3-resources/DataElement-ImagingStudy.series.bodySite.json");
		 expect(dataelementValidateFunction(dataelementExample1825)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.description.json", () => {
		 const dataelementExample1826 = require("../stu3-resources/DataElement-ImagingStudy.series.description.json");
		 expect(dataelementValidateFunction(dataelementExample1826)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.endpoint.json", () => {
		 const dataelementExample1827 = require("../stu3-resources/DataElement-ImagingStudy.series.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample1827)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.instance.json", () => {
		 const dataelementExample1828 = require("../stu3-resources/DataElement-ImagingStudy.series.instance.json");
		 expect(dataelementValidateFunction(dataelementExample1828)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.instance.number.json", () => {
		 const dataelementExample1829 = require("../stu3-resources/DataElement-ImagingStudy.series.instance.number.json");
		 expect(dataelementValidateFunction(dataelementExample1829)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.instance.sopClass.json", () => {
		 const dataelementExample1830 = require("../stu3-resources/DataElement-ImagingStudy.series.instance.sopClass.json");
		 expect(dataelementValidateFunction(dataelementExample1830)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.instance.title.json", () => {
		 const dataelementExample1831 = require("../stu3-resources/DataElement-ImagingStudy.series.instance.title.json");
		 expect(dataelementValidateFunction(dataelementExample1831)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.instance.uid.json", () => {
		 const dataelementExample1832 = require("../stu3-resources/DataElement-ImagingStudy.series.instance.uid.json");
		 expect(dataelementValidateFunction(dataelementExample1832)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.json", () => {
		 const dataelementExample1833 = require("../stu3-resources/DataElement-ImagingStudy.series.json");
		 expect(dataelementValidateFunction(dataelementExample1833)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.laterality.json", () => {
		 const dataelementExample1834 = require("../stu3-resources/DataElement-ImagingStudy.series.laterality.json");
		 expect(dataelementValidateFunction(dataelementExample1834)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.modality.json", () => {
		 const dataelementExample1835 = require("../stu3-resources/DataElement-ImagingStudy.series.modality.json");
		 expect(dataelementValidateFunction(dataelementExample1835)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.number.json", () => {
		 const dataelementExample1836 = require("../stu3-resources/DataElement-ImagingStudy.series.number.json");
		 expect(dataelementValidateFunction(dataelementExample1836)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.numberOfInstances.json", () => {
		 const dataelementExample1837 = require("../stu3-resources/DataElement-ImagingStudy.series.numberOfInstances.json");
		 expect(dataelementValidateFunction(dataelementExample1837)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.performer.json", () => {
		 const dataelementExample1838 = require("../stu3-resources/DataElement-ImagingStudy.series.performer.json");
		 expect(dataelementValidateFunction(dataelementExample1838)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.started.json", () => {
		 const dataelementExample1839 = require("../stu3-resources/DataElement-ImagingStudy.series.started.json");
		 expect(dataelementValidateFunction(dataelementExample1839)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.series.uid.json", () => {
		 const dataelementExample1840 = require("../stu3-resources/DataElement-ImagingStudy.series.uid.json");
		 expect(dataelementValidateFunction(dataelementExample1840)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.started.json", () => {
		 const dataelementExample1841 = require("../stu3-resources/DataElement-ImagingStudy.started.json");
		 expect(dataelementValidateFunction(dataelementExample1841)).toBe(true);
	 });

	 test("validate DataElement-ImagingStudy.uid.json", () => {
		 const dataelementExample1842 = require("../stu3-resources/DataElement-ImagingStudy.uid.json");
		 expect(dataelementValidateFunction(dataelementExample1842)).toBe(true);
	 });

	 test("validate DataElement-Immunization.date.json", () => {
		 const dataelementExample1843 = require("../stu3-resources/DataElement-Immunization.date.json");
		 expect(dataelementValidateFunction(dataelementExample1843)).toBe(true);
	 });

	 test("validate DataElement-Immunization.doseQuantity.json", () => {
		 const dataelementExample1844 = require("../stu3-resources/DataElement-Immunization.doseQuantity.json");
		 expect(dataelementValidateFunction(dataelementExample1844)).toBe(true);
	 });

	 test("validate DataElement-Immunization.encounter.json", () => {
		 const dataelementExample1845 = require("../stu3-resources/DataElement-Immunization.encounter.json");
		 expect(dataelementValidateFunction(dataelementExample1845)).toBe(true);
	 });

	 test("validate DataElement-Immunization.expirationDate.json", () => {
		 const dataelementExample1846 = require("../stu3-resources/DataElement-Immunization.expirationDate.json");
		 expect(dataelementValidateFunction(dataelementExample1846)).toBe(true);
	 });

	 test("validate DataElement-Immunization.explanation.json", () => {
		 const dataelementExample1847 = require("../stu3-resources/DataElement-Immunization.explanation.json");
		 expect(dataelementValidateFunction(dataelementExample1847)).toBe(true);
	 });

	 test("validate DataElement-Immunization.explanation.reason.json", () => {
		 const dataelementExample1848 = require("../stu3-resources/DataElement-Immunization.explanation.reason.json");
		 expect(dataelementValidateFunction(dataelementExample1848)).toBe(true);
	 });

	 test("validate DataElement-Immunization.explanation.reasonNotGiven.json", () => {
		 const dataelementExample1849 = require("../stu3-resources/DataElement-Immunization.explanation.reasonNotGiven.json");
		 expect(dataelementValidateFunction(dataelementExample1849)).toBe(true);
	 });

	 test("validate DataElement-Immunization.identifier.json", () => {
		 const dataelementExample1850 = require("../stu3-resources/DataElement-Immunization.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1850)).toBe(true);
	 });

	 test("validate DataElement-Immunization.json", () => {
		 const dataelementExample1851 = require("../stu3-resources/DataElement-Immunization.json");
		 expect(dataelementValidateFunction(dataelementExample1851)).toBe(true);
	 });

	 test("validate DataElement-Immunization.location.json", () => {
		 const dataelementExample1852 = require("../stu3-resources/DataElement-Immunization.location.json");
		 expect(dataelementValidateFunction(dataelementExample1852)).toBe(true);
	 });

	 test("validate DataElement-Immunization.lotNumber.json", () => {
		 const dataelementExample1853 = require("../stu3-resources/DataElement-Immunization.lotNumber.json");
		 expect(dataelementValidateFunction(dataelementExample1853)).toBe(true);
	 });

	 test("validate DataElement-Immunization.manufacturer.json", () => {
		 const dataelementExample1854 = require("../stu3-resources/DataElement-Immunization.manufacturer.json");
		 expect(dataelementValidateFunction(dataelementExample1854)).toBe(true);
	 });

	 test("validate DataElement-Immunization.notGiven.json", () => {
		 const dataelementExample1855 = require("../stu3-resources/DataElement-Immunization.notGiven.json");
		 expect(dataelementValidateFunction(dataelementExample1855)).toBe(true);
	 });

	 test("validate DataElement-Immunization.note.json", () => {
		 const dataelementExample1856 = require("../stu3-resources/DataElement-Immunization.note.json");
		 expect(dataelementValidateFunction(dataelementExample1856)).toBe(true);
	 });

	 test("validate DataElement-Immunization.patient.json", () => {
		 const dataelementExample1857 = require("../stu3-resources/DataElement-Immunization.patient.json");
		 expect(dataelementValidateFunction(dataelementExample1857)).toBe(true);
	 });

	 test("validate DataElement-Immunization.practitioner.actor.json", () => {
		 const dataelementExample1858 = require("../stu3-resources/DataElement-Immunization.practitioner.actor.json");
		 expect(dataelementValidateFunction(dataelementExample1858)).toBe(true);
	 });

	 test("validate DataElement-Immunization.practitioner.json", () => {
		 const dataelementExample1859 = require("../stu3-resources/DataElement-Immunization.practitioner.json");
		 expect(dataelementValidateFunction(dataelementExample1859)).toBe(true);
	 });

	 test("validate DataElement-Immunization.practitioner.role.json", () => {
		 const dataelementExample1860 = require("../stu3-resources/DataElement-Immunization.practitioner.role.json");
		 expect(dataelementValidateFunction(dataelementExample1860)).toBe(true);
	 });

	 test("validate DataElement-Immunization.primarySource.json", () => {
		 const dataelementExample1861 = require("../stu3-resources/DataElement-Immunization.primarySource.json");
		 expect(dataelementValidateFunction(dataelementExample1861)).toBe(true);
	 });

	 test("validate DataElement-Immunization.reaction.date.json", () => {
		 const dataelementExample1862 = require("../stu3-resources/DataElement-Immunization.reaction.date.json");
		 expect(dataelementValidateFunction(dataelementExample1862)).toBe(true);
	 });

	 test("validate DataElement-Immunization.reaction.detail.json", () => {
		 const dataelementExample1863 = require("../stu3-resources/DataElement-Immunization.reaction.detail.json");
		 expect(dataelementValidateFunction(dataelementExample1863)).toBe(true);
	 });

	 test("validate DataElement-Immunization.reaction.json", () => {
		 const dataelementExample1864 = require("../stu3-resources/DataElement-Immunization.reaction.json");
		 expect(dataelementValidateFunction(dataelementExample1864)).toBe(true);
	 });

	 test("validate DataElement-Immunization.reaction.reported.json", () => {
		 const dataelementExample1865 = require("../stu3-resources/DataElement-Immunization.reaction.reported.json");
		 expect(dataelementValidateFunction(dataelementExample1865)).toBe(true);
	 });

	 test("validate DataElement-Immunization.reportOrigin.json", () => {
		 const dataelementExample1866 = require("../stu3-resources/DataElement-Immunization.reportOrigin.json");
		 expect(dataelementValidateFunction(dataelementExample1866)).toBe(true);
	 });

	 test("validate DataElement-Immunization.route.json", () => {
		 const dataelementExample1867 = require("../stu3-resources/DataElement-Immunization.route.json");
		 expect(dataelementValidateFunction(dataelementExample1867)).toBe(true);
	 });

	 test("validate DataElement-Immunization.site.json", () => {
		 const dataelementExample1868 = require("../stu3-resources/DataElement-Immunization.site.json");
		 expect(dataelementValidateFunction(dataelementExample1868)).toBe(true);
	 });

	 test("validate DataElement-Immunization.status.json", () => {
		 const dataelementExample1869 = require("../stu3-resources/DataElement-Immunization.status.json");
		 expect(dataelementValidateFunction(dataelementExample1869)).toBe(true);
	 });

	 test("validate DataElement-Immunization.vaccinationProtocol.authority.json", () => {
		 const dataelementExample1870 = require("../stu3-resources/DataElement-Immunization.vaccinationProtocol.authority.json");
		 expect(dataelementValidateFunction(dataelementExample1870)).toBe(true);
	 });

	 test("validate DataElement-Immunization.vaccinationProtocol.description.json", () => {
		 const dataelementExample1871 = require("../stu3-resources/DataElement-Immunization.vaccinationProtocol.description.json");
		 expect(dataelementValidateFunction(dataelementExample1871)).toBe(true);
	 });

	 test("validate DataElement-Immunization.vaccinationProtocol.doseSequence.json", () => {
		 const dataelementExample1872 = require("../stu3-resources/DataElement-Immunization.vaccinationProtocol.doseSequence.json");
		 expect(dataelementValidateFunction(dataelementExample1872)).toBe(true);
	 });

	 test("validate DataElement-Immunization.vaccinationProtocol.doseStatus.json", () => {
		 const dataelementExample1873 = require("../stu3-resources/DataElement-Immunization.vaccinationProtocol.doseStatus.json");
		 expect(dataelementValidateFunction(dataelementExample1873)).toBe(true);
	 });

	 test("validate DataElement-Immunization.vaccinationProtocol.doseStatusReason.json", () => {
		 const dataelementExample1874 = require("../stu3-resources/DataElement-Immunization.vaccinationProtocol.doseStatusReason.json");
		 expect(dataelementValidateFunction(dataelementExample1874)).toBe(true);
	 });

	 test("validate DataElement-Immunization.vaccinationProtocol.json", () => {
		 const dataelementExample1875 = require("../stu3-resources/DataElement-Immunization.vaccinationProtocol.json");
		 expect(dataelementValidateFunction(dataelementExample1875)).toBe(true);
	 });

	 test("validate DataElement-Immunization.vaccinationProtocol.series.json", () => {
		 const dataelementExample1876 = require("../stu3-resources/DataElement-Immunization.vaccinationProtocol.series.json");
		 expect(dataelementValidateFunction(dataelementExample1876)).toBe(true);
	 });

	 test("validate DataElement-Immunization.vaccinationProtocol.seriesDoses.json", () => {
		 const dataelementExample1877 = require("../stu3-resources/DataElement-Immunization.vaccinationProtocol.seriesDoses.json");
		 expect(dataelementValidateFunction(dataelementExample1877)).toBe(true);
	 });

	 test("validate DataElement-Immunization.vaccinationProtocol.targetDisease.json", () => {
		 const dataelementExample1878 = require("../stu3-resources/DataElement-Immunization.vaccinationProtocol.targetDisease.json");
		 expect(dataelementValidateFunction(dataelementExample1878)).toBe(true);
	 });

	 test("validate DataElement-Immunization.vaccineCode.json", () => {
		 const dataelementExample1879 = require("../stu3-resources/DataElement-Immunization.vaccineCode.json");
		 expect(dataelementValidateFunction(dataelementExample1879)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.identifier.json", () => {
		 const dataelementExample1880 = require("../stu3-resources/DataElement-ImmunizationRecommendation.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1880)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.json", () => {
		 const dataelementExample1881 = require("../stu3-resources/DataElement-ImmunizationRecommendation.json");
		 expect(dataelementValidateFunction(dataelementExample1881)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.patient.json", () => {
		 const dataelementExample1882 = require("../stu3-resources/DataElement-ImmunizationRecommendation.patient.json");
		 expect(dataelementValidateFunction(dataelementExample1882)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.date.json", () => {
		 const dataelementExample1883 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.date.json");
		 expect(dataelementValidateFunction(dataelementExample1883)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.dateCriterion.code.json", () => {
		 const dataelementExample1884 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.dateCriterion.code.json");
		 expect(dataelementValidateFunction(dataelementExample1884)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.dateCriterion.json", () => {
		 const dataelementExample1885 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.dateCriterion.json");
		 expect(dataelementValidateFunction(dataelementExample1885)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.dateCriterion.value.json", () => {
		 const dataelementExample1886 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.dateCriterion.value.json");
		 expect(dataelementValidateFunction(dataelementExample1886)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.doseNumber.json", () => {
		 const dataelementExample1887 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.doseNumber.json");
		 expect(dataelementValidateFunction(dataelementExample1887)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.forecastStatus.json", () => {
		 const dataelementExample1888 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.forecastStatus.json");
		 expect(dataelementValidateFunction(dataelementExample1888)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.json", () => {
		 const dataelementExample1889 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.json");
		 expect(dataelementValidateFunction(dataelementExample1889)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.protocol.authority.json", () => {
		 const dataelementExample1890 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.protocol.authority.json");
		 expect(dataelementValidateFunction(dataelementExample1890)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.protocol.description.json", () => {
		 const dataelementExample1891 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.protocol.description.json");
		 expect(dataelementValidateFunction(dataelementExample1891)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.protocol.doseSequence.json", () => {
		 const dataelementExample1892 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.protocol.doseSequence.json");
		 expect(dataelementValidateFunction(dataelementExample1892)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.protocol.json", () => {
		 const dataelementExample1893 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.protocol.json");
		 expect(dataelementValidateFunction(dataelementExample1893)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.protocol.series.json", () => {
		 const dataelementExample1894 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.protocol.series.json");
		 expect(dataelementValidateFunction(dataelementExample1894)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.supportingImmunization.json", () => {
		 const dataelementExample1895 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.supportingImmunization.json");
		 expect(dataelementValidateFunction(dataelementExample1895)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.supportingPatientInfor.json", () => {
		 const dataelementExample1896 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.supportingPatientInfor.json");
		 expect(dataelementValidateFunction(dataelementExample1896)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.targetDisease.json", () => {
		 const dataelementExample1897 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.targetDisease.json");
		 expect(dataelementValidateFunction(dataelementExample1897)).toBe(true);
	 });

	 test("validate DataElement-ImmunizationRecommendation.recommendation.vaccineCode.json", () => {
		 const dataelementExample1898 = require("../stu3-resources/DataElement-ImmunizationRecommendation.recommendation.vaccineCode.json");
		 expect(dataelementValidateFunction(dataelementExample1898)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.binary.json", () => {
		 const dataelementExample1899 = require("../stu3-resources/DataElement-ImplementationGuide.binary.json");
		 expect(dataelementValidateFunction(dataelementExample1899)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.contact.json", () => {
		 const dataelementExample1900 = require("../stu3-resources/DataElement-ImplementationGuide.contact.json");
		 expect(dataelementValidateFunction(dataelementExample1900)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.copyright.json", () => {
		 const dataelementExample1901 = require("../stu3-resources/DataElement-ImplementationGuide.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample1901)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.date.json", () => {
		 const dataelementExample1902 = require("../stu3-resources/DataElement-ImplementationGuide.date.json");
		 expect(dataelementValidateFunction(dataelementExample1902)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.dependency.json", () => {
		 const dataelementExample1903 = require("../stu3-resources/DataElement-ImplementationGuide.dependency.json");
		 expect(dataelementValidateFunction(dataelementExample1903)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.dependency.type.json", () => {
		 const dataelementExample1904 = require("../stu3-resources/DataElement-ImplementationGuide.dependency.type.json");
		 expect(dataelementValidateFunction(dataelementExample1904)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.dependency.uri.json", () => {
		 const dataelementExample1905 = require("../stu3-resources/DataElement-ImplementationGuide.dependency.uri.json");
		 expect(dataelementValidateFunction(dataelementExample1905)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.description.json", () => {
		 const dataelementExample1906 = require("../stu3-resources/DataElement-ImplementationGuide.description.json");
		 expect(dataelementValidateFunction(dataelementExample1906)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.experimental.json", () => {
		 const dataelementExample1907 = require("../stu3-resources/DataElement-ImplementationGuide.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample1907)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.fhirVersion.json", () => {
		 const dataelementExample1908 = require("../stu3-resources/DataElement-ImplementationGuide.fhirVersion.json");
		 expect(dataelementValidateFunction(dataelementExample1908)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.global.json", () => {
		 const dataelementExample1909 = require("../stu3-resources/DataElement-ImplementationGuide.global.json");
		 expect(dataelementValidateFunction(dataelementExample1909)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.global.profile.json", () => {
		 const dataelementExample1910 = require("../stu3-resources/DataElement-ImplementationGuide.global.profile.json");
		 expect(dataelementValidateFunction(dataelementExample1910)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.global.type.json", () => {
		 const dataelementExample1911 = require("../stu3-resources/DataElement-ImplementationGuide.global.type.json");
		 expect(dataelementValidateFunction(dataelementExample1911)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.json", () => {
		 const dataelementExample1912 = require("../stu3-resources/DataElement-ImplementationGuide.json");
		 expect(dataelementValidateFunction(dataelementExample1912)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.jurisdiction.json", () => {
		 const dataelementExample1913 = require("../stu3-resources/DataElement-ImplementationGuide.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample1913)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.name.json", () => {
		 const dataelementExample1914 = require("../stu3-resources/DataElement-ImplementationGuide.name.json");
		 expect(dataelementValidateFunction(dataelementExample1914)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.package.description.json", () => {
		 const dataelementExample1915 = require("../stu3-resources/DataElement-ImplementationGuide.package.description.json");
		 expect(dataelementValidateFunction(dataelementExample1915)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.package.json", () => {
		 const dataelementExample1916 = require("../stu3-resources/DataElement-ImplementationGuide.package.json");
		 expect(dataelementValidateFunction(dataelementExample1916)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.package.name.json", () => {
		 const dataelementExample1917 = require("../stu3-resources/DataElement-ImplementationGuide.package.name.json");
		 expect(dataelementValidateFunction(dataelementExample1917)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.package.resource.acronym.json", () => {
		 const dataelementExample1918 = require("../stu3-resources/DataElement-ImplementationGuide.package.resource.acronym.json");
		 expect(dataelementValidateFunction(dataelementExample1918)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.package.resource.description.json", () => {
		 const dataelementExample1919 = require("../stu3-resources/DataElement-ImplementationGuide.package.resource.description.json");
		 expect(dataelementValidateFunction(dataelementExample1919)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.package.resource.example.json", () => {
		 const dataelementExample1920 = require("../stu3-resources/DataElement-ImplementationGuide.package.resource.example.json");
		 expect(dataelementValidateFunction(dataelementExample1920)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.package.resource.exampleFor.json", () => {
		 const dataelementExample1921 = require("../stu3-resources/DataElement-ImplementationGuide.package.resource.exampleFor.json");
		 expect(dataelementValidateFunction(dataelementExample1921)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.package.resource.json", () => {
		 const dataelementExample1922 = require("../stu3-resources/DataElement-ImplementationGuide.package.resource.json");
		 expect(dataelementValidateFunction(dataelementExample1922)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.package.resource.name.json", () => {
		 const dataelementExample1923 = require("../stu3-resources/DataElement-ImplementationGuide.package.resource.name.json");
		 expect(dataelementValidateFunction(dataelementExample1923)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.package.resource.sourceX.json", () => {
		 const dataelementExample1924 = require("../stu3-resources/DataElement-ImplementationGuide.package.resource.sourceX.json");
		 expect(dataelementValidateFunction(dataelementExample1924)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.page.format.json", () => {
		 const dataelementExample1925 = require("../stu3-resources/DataElement-ImplementationGuide.page.format.json");
		 expect(dataelementValidateFunction(dataelementExample1925)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.page.json", () => {
		 const dataelementExample1926 = require("../stu3-resources/DataElement-ImplementationGuide.page.json");
		 expect(dataelementValidateFunction(dataelementExample1926)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.page.kind.json", () => {
		 const dataelementExample1927 = require("../stu3-resources/DataElement-ImplementationGuide.page.kind.json");
		 expect(dataelementValidateFunction(dataelementExample1927)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.page.package.json", () => {
		 const dataelementExample1928 = require("../stu3-resources/DataElement-ImplementationGuide.page.package.json");
		 expect(dataelementValidateFunction(dataelementExample1928)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.page.page.json", () => {
		 const dataelementExample1929 = require("../stu3-resources/DataElement-ImplementationGuide.page.page.json");
		 expect(dataelementValidateFunction(dataelementExample1929)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.page.source.json", () => {
		 const dataelementExample1930 = require("../stu3-resources/DataElement-ImplementationGuide.page.source.json");
		 expect(dataelementValidateFunction(dataelementExample1930)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.page.title.json", () => {
		 const dataelementExample1931 = require("../stu3-resources/DataElement-ImplementationGuide.page.title.json");
		 expect(dataelementValidateFunction(dataelementExample1931)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.page.type.json", () => {
		 const dataelementExample1932 = require("../stu3-resources/DataElement-ImplementationGuide.page.type.json");
		 expect(dataelementValidateFunction(dataelementExample1932)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.publisher.json", () => {
		 const dataelementExample1933 = require("../stu3-resources/DataElement-ImplementationGuide.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample1933)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.status.json", () => {
		 const dataelementExample1934 = require("../stu3-resources/DataElement-ImplementationGuide.status.json");
		 expect(dataelementValidateFunction(dataelementExample1934)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.url.json", () => {
		 const dataelementExample1935 = require("../stu3-resources/DataElement-ImplementationGuide.url.json");
		 expect(dataelementValidateFunction(dataelementExample1935)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.useContext.json", () => {
		 const dataelementExample1936 = require("../stu3-resources/DataElement-ImplementationGuide.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample1936)).toBe(true);
	 });

	 test("validate DataElement-ImplementationGuide.version.json", () => {
		 const dataelementExample1937 = require("../stu3-resources/DataElement-ImplementationGuide.version.json");
		 expect(dataelementValidateFunction(dataelementExample1937)).toBe(true);
	 });

	 test("validate DataElement-Library.approvalDate.json", () => {
		 const dataelementExample1938 = require("../stu3-resources/DataElement-Library.approvalDate.json");
		 expect(dataelementValidateFunction(dataelementExample1938)).toBe(true);
	 });

	 test("validate DataElement-Library.contact.json", () => {
		 const dataelementExample1939 = require("../stu3-resources/DataElement-Library.contact.json");
		 expect(dataelementValidateFunction(dataelementExample1939)).toBe(true);
	 });

	 test("validate DataElement-Library.content.json", () => {
		 const dataelementExample1940 = require("../stu3-resources/DataElement-Library.content.json");
		 expect(dataelementValidateFunction(dataelementExample1940)).toBe(true);
	 });

	 test("validate DataElement-Library.contributor.json", () => {
		 const dataelementExample1941 = require("../stu3-resources/DataElement-Library.contributor.json");
		 expect(dataelementValidateFunction(dataelementExample1941)).toBe(true);
	 });

	 test("validate DataElement-Library.copyright.json", () => {
		 const dataelementExample1942 = require("../stu3-resources/DataElement-Library.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample1942)).toBe(true);
	 });

	 test("validate DataElement-Library.dataRequirement.json", () => {
		 const dataelementExample1943 = require("../stu3-resources/DataElement-Library.dataRequirement.json");
		 expect(dataelementValidateFunction(dataelementExample1943)).toBe(true);
	 });

	 test("validate DataElement-Library.date.json", () => {
		 const dataelementExample1944 = require("../stu3-resources/DataElement-Library.date.json");
		 expect(dataelementValidateFunction(dataelementExample1944)).toBe(true);
	 });

	 test("validate DataElement-Library.description.json", () => {
		 const dataelementExample1945 = require("../stu3-resources/DataElement-Library.description.json");
		 expect(dataelementValidateFunction(dataelementExample1945)).toBe(true);
	 });

	 test("validate DataElement-Library.effectivePeriod.json", () => {
		 const dataelementExample1946 = require("../stu3-resources/DataElement-Library.effectivePeriod.json");
		 expect(dataelementValidateFunction(dataelementExample1946)).toBe(true);
	 });

	 test("validate DataElement-Library.experimental.json", () => {
		 const dataelementExample1947 = require("../stu3-resources/DataElement-Library.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample1947)).toBe(true);
	 });

	 test("validate DataElement-Library.identifier.json", () => {
		 const dataelementExample1948 = require("../stu3-resources/DataElement-Library.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1948)).toBe(true);
	 });

	 test("validate DataElement-Library.json", () => {
		 const dataelementExample1949 = require("../stu3-resources/DataElement-Library.json");
		 expect(dataelementValidateFunction(dataelementExample1949)).toBe(true);
	 });

	 test("validate DataElement-Library.jurisdiction.json", () => {
		 const dataelementExample1950 = require("../stu3-resources/DataElement-Library.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample1950)).toBe(true);
	 });

	 test("validate DataElement-Library.lastReviewDate.json", () => {
		 const dataelementExample1951 = require("../stu3-resources/DataElement-Library.lastReviewDate.json");
		 expect(dataelementValidateFunction(dataelementExample1951)).toBe(true);
	 });

	 test("validate DataElement-Library.name.json", () => {
		 const dataelementExample1952 = require("../stu3-resources/DataElement-Library.name.json");
		 expect(dataelementValidateFunction(dataelementExample1952)).toBe(true);
	 });

	 test("validate DataElement-Library.parameter.json", () => {
		 const dataelementExample1953 = require("../stu3-resources/DataElement-Library.parameter.json");
		 expect(dataelementValidateFunction(dataelementExample1953)).toBe(true);
	 });

	 test("validate DataElement-Library.publisher.json", () => {
		 const dataelementExample1954 = require("../stu3-resources/DataElement-Library.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample1954)).toBe(true);
	 });

	 test("validate DataElement-Library.purpose.json", () => {
		 const dataelementExample1955 = require("../stu3-resources/DataElement-Library.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample1955)).toBe(true);
	 });

	 test("validate DataElement-Library.relatedArtifact.json", () => {
		 const dataelementExample1956 = require("../stu3-resources/DataElement-Library.relatedArtifact.json");
		 expect(dataelementValidateFunction(dataelementExample1956)).toBe(true);
	 });

	 test("validate DataElement-Library.status.json", () => {
		 const dataelementExample1957 = require("../stu3-resources/DataElement-Library.status.json");
		 expect(dataelementValidateFunction(dataelementExample1957)).toBe(true);
	 });

	 test("validate DataElement-Library.title.json", () => {
		 const dataelementExample1958 = require("../stu3-resources/DataElement-Library.title.json");
		 expect(dataelementValidateFunction(dataelementExample1958)).toBe(true);
	 });

	 test("validate DataElement-Library.topic.json", () => {
		 const dataelementExample1959 = require("../stu3-resources/DataElement-Library.topic.json");
		 expect(dataelementValidateFunction(dataelementExample1959)).toBe(true);
	 });

	 test("validate DataElement-Library.type.json", () => {
		 const dataelementExample1960 = require("../stu3-resources/DataElement-Library.type.json");
		 expect(dataelementValidateFunction(dataelementExample1960)).toBe(true);
	 });

	 test("validate DataElement-Library.url.json", () => {
		 const dataelementExample1961 = require("../stu3-resources/DataElement-Library.url.json");
		 expect(dataelementValidateFunction(dataelementExample1961)).toBe(true);
	 });

	 test("validate DataElement-Library.usage.json", () => {
		 const dataelementExample1962 = require("../stu3-resources/DataElement-Library.usage.json");
		 expect(dataelementValidateFunction(dataelementExample1962)).toBe(true);
	 });

	 test("validate DataElement-Library.useContext.json", () => {
		 const dataelementExample1963 = require("../stu3-resources/DataElement-Library.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample1963)).toBe(true);
	 });

	 test("validate DataElement-Library.version.json", () => {
		 const dataelementExample1964 = require("../stu3-resources/DataElement-Library.version.json");
		 expect(dataelementValidateFunction(dataelementExample1964)).toBe(true);
	 });

	 test("validate DataElement-Linkage.active.json", () => {
		 const dataelementExample1965 = require("../stu3-resources/DataElement-Linkage.active.json");
		 expect(dataelementValidateFunction(dataelementExample1965)).toBe(true);
	 });

	 test("validate DataElement-Linkage.author.json", () => {
		 const dataelementExample1966 = require("../stu3-resources/DataElement-Linkage.author.json");
		 expect(dataelementValidateFunction(dataelementExample1966)).toBe(true);
	 });

	 test("validate DataElement-Linkage.item.json", () => {
		 const dataelementExample1967 = require("../stu3-resources/DataElement-Linkage.item.json");
		 expect(dataelementValidateFunction(dataelementExample1967)).toBe(true);
	 });

	 test("validate DataElement-Linkage.item.resource.json", () => {
		 const dataelementExample1968 = require("../stu3-resources/DataElement-Linkage.item.resource.json");
		 expect(dataelementValidateFunction(dataelementExample1968)).toBe(true);
	 });

	 test("validate DataElement-Linkage.item.type.json", () => {
		 const dataelementExample1969 = require("../stu3-resources/DataElement-Linkage.item.type.json");
		 expect(dataelementValidateFunction(dataelementExample1969)).toBe(true);
	 });

	 test("validate DataElement-Linkage.json", () => {
		 const dataelementExample1970 = require("../stu3-resources/DataElement-Linkage.json");
		 expect(dataelementValidateFunction(dataelementExample1970)).toBe(true);
	 });

	 test("validate DataElement-List.code.json", () => {
		 const dataelementExample1971 = require("../stu3-resources/DataElement-List.code.json");
		 expect(dataelementValidateFunction(dataelementExample1971)).toBe(true);
	 });

	 test("validate DataElement-List.date.json", () => {
		 const dataelementExample1972 = require("../stu3-resources/DataElement-List.date.json");
		 expect(dataelementValidateFunction(dataelementExample1972)).toBe(true);
	 });

	 test("validate DataElement-List.emptyReason.json", () => {
		 const dataelementExample1973 = require("../stu3-resources/DataElement-List.emptyReason.json");
		 expect(dataelementValidateFunction(dataelementExample1973)).toBe(true);
	 });

	 test("validate DataElement-List.encounter.json", () => {
		 const dataelementExample1974 = require("../stu3-resources/DataElement-List.encounter.json");
		 expect(dataelementValidateFunction(dataelementExample1974)).toBe(true);
	 });

	 test("validate DataElement-List.entry.date.json", () => {
		 const dataelementExample1975 = require("../stu3-resources/DataElement-List.entry.date.json");
		 expect(dataelementValidateFunction(dataelementExample1975)).toBe(true);
	 });

	 test("validate DataElement-List.entry.deleted.json", () => {
		 const dataelementExample1976 = require("../stu3-resources/DataElement-List.entry.deleted.json");
		 expect(dataelementValidateFunction(dataelementExample1976)).toBe(true);
	 });

	 test("validate DataElement-List.entry.flag.json", () => {
		 const dataelementExample1977 = require("../stu3-resources/DataElement-List.entry.flag.json");
		 expect(dataelementValidateFunction(dataelementExample1977)).toBe(true);
	 });

	 test("validate DataElement-List.entry.item.json", () => {
		 const dataelementExample1978 = require("../stu3-resources/DataElement-List.entry.item.json");
		 expect(dataelementValidateFunction(dataelementExample1978)).toBe(true);
	 });

	 test("validate DataElement-List.entry.json", () => {
		 const dataelementExample1979 = require("../stu3-resources/DataElement-List.entry.json");
		 expect(dataelementValidateFunction(dataelementExample1979)).toBe(true);
	 });

	 test("validate DataElement-List.identifier.json", () => {
		 const dataelementExample1980 = require("../stu3-resources/DataElement-List.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1980)).toBe(true);
	 });

	 test("validate DataElement-List.json", () => {
		 const dataelementExample1981 = require("../stu3-resources/DataElement-List.json");
		 expect(dataelementValidateFunction(dataelementExample1981)).toBe(true);
	 });

	 test("validate DataElement-List.mode.json", () => {
		 const dataelementExample1982 = require("../stu3-resources/DataElement-List.mode.json");
		 expect(dataelementValidateFunction(dataelementExample1982)).toBe(true);
	 });

	 test("validate DataElement-List.note.json", () => {
		 const dataelementExample1983 = require("../stu3-resources/DataElement-List.note.json");
		 expect(dataelementValidateFunction(dataelementExample1983)).toBe(true);
	 });

	 test("validate DataElement-List.orderedBy.json", () => {
		 const dataelementExample1984 = require("../stu3-resources/DataElement-List.orderedBy.json");
		 expect(dataelementValidateFunction(dataelementExample1984)).toBe(true);
	 });

	 test("validate DataElement-List.source.json", () => {
		 const dataelementExample1985 = require("../stu3-resources/DataElement-List.source.json");
		 expect(dataelementValidateFunction(dataelementExample1985)).toBe(true);
	 });

	 test("validate DataElement-List.status.json", () => {
		 const dataelementExample1986 = require("../stu3-resources/DataElement-List.status.json");
		 expect(dataelementValidateFunction(dataelementExample1986)).toBe(true);
	 });

	 test("validate DataElement-List.subject.json", () => {
		 const dataelementExample1987 = require("../stu3-resources/DataElement-List.subject.json");
		 expect(dataelementValidateFunction(dataelementExample1987)).toBe(true);
	 });

	 test("validate DataElement-List.title.json", () => {
		 const dataelementExample1988 = require("../stu3-resources/DataElement-List.title.json");
		 expect(dataelementValidateFunction(dataelementExample1988)).toBe(true);
	 });

	 test("validate DataElement-Location.address.json", () => {
		 const dataelementExample1989 = require("../stu3-resources/DataElement-Location.address.json");
		 expect(dataelementValidateFunction(dataelementExample1989)).toBe(true);
	 });

	 test("validate DataElement-Location.alias.json", () => {
		 const dataelementExample1990 = require("../stu3-resources/DataElement-Location.alias.json");
		 expect(dataelementValidateFunction(dataelementExample1990)).toBe(true);
	 });

	 test("validate DataElement-Location.description.json", () => {
		 const dataelementExample1991 = require("../stu3-resources/DataElement-Location.description.json");
		 expect(dataelementValidateFunction(dataelementExample1991)).toBe(true);
	 });

	 test("validate DataElement-Location.endpoint.json", () => {
		 const dataelementExample1992 = require("../stu3-resources/DataElement-Location.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample1992)).toBe(true);
	 });

	 test("validate DataElement-Location.identifier.json", () => {
		 const dataelementExample1993 = require("../stu3-resources/DataElement-Location.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample1993)).toBe(true);
	 });

	 test("validate DataElement-Location.json", () => {
		 const dataelementExample1994 = require("../stu3-resources/DataElement-Location.json");
		 expect(dataelementValidateFunction(dataelementExample1994)).toBe(true);
	 });

	 test("validate DataElement-Location.managingOrganization.json", () => {
		 const dataelementExample1995 = require("../stu3-resources/DataElement-Location.managingOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample1995)).toBe(true);
	 });

	 test("validate DataElement-Location.mode.json", () => {
		 const dataelementExample1996 = require("../stu3-resources/DataElement-Location.mode.json");
		 expect(dataelementValidateFunction(dataelementExample1996)).toBe(true);
	 });

	 test("validate DataElement-Location.name.json", () => {
		 const dataelementExample1997 = require("../stu3-resources/DataElement-Location.name.json");
		 expect(dataelementValidateFunction(dataelementExample1997)).toBe(true);
	 });

	 test("validate DataElement-Location.operationalStatus.json", () => {
		 const dataelementExample1998 = require("../stu3-resources/DataElement-Location.operationalStatus.json");
		 expect(dataelementValidateFunction(dataelementExample1998)).toBe(true);
	 });

	 test("validate DataElement-Location.partOf.json", () => {
		 const dataelementExample1999 = require("../stu3-resources/DataElement-Location.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample1999)).toBe(true);
	 });

	 test("validate DataElement-Location.physicalType.json", () => {
		 const dataelementExample2000 = require("../stu3-resources/DataElement-Location.physicalType.json");
		 expect(dataelementValidateFunction(dataelementExample2000)).toBe(true);
	 });

	 test("validate DataElement-Location.position.altitude.json", () => {
		 const dataelementExample2001 = require("../stu3-resources/DataElement-Location.position.altitude.json");
		 expect(dataelementValidateFunction(dataelementExample2001)).toBe(true);
	 });

	 test("validate DataElement-Location.position.json", () => {
		 const dataelementExample2002 = require("../stu3-resources/DataElement-Location.position.json");
		 expect(dataelementValidateFunction(dataelementExample2002)).toBe(true);
	 });

	 test("validate DataElement-Location.position.latitude.json", () => {
		 const dataelementExample2003 = require("../stu3-resources/DataElement-Location.position.latitude.json");
		 expect(dataelementValidateFunction(dataelementExample2003)).toBe(true);
	 });

	 test("validate DataElement-Location.position.longitude.json", () => {
		 const dataelementExample2004 = require("../stu3-resources/DataElement-Location.position.longitude.json");
		 expect(dataelementValidateFunction(dataelementExample2004)).toBe(true);
	 });

	 test("validate DataElement-Location.status.json", () => {
		 const dataelementExample2005 = require("../stu3-resources/DataElement-Location.status.json");
		 expect(dataelementValidateFunction(dataelementExample2005)).toBe(true);
	 });

	 test("validate DataElement-Location.telecom.json", () => {
		 const dataelementExample2006 = require("../stu3-resources/DataElement-Location.telecom.json");
		 expect(dataelementValidateFunction(dataelementExample2006)).toBe(true);
	 });

	 test("validate DataElement-Location.type.json", () => {
		 const dataelementExample2007 = require("../stu3-resources/DataElement-Location.type.json");
		 expect(dataelementValidateFunction(dataelementExample2007)).toBe(true);
	 });

	 test("validate DataElement-Measure.approvalDate.json", () => {
		 const dataelementExample2008 = require("../stu3-resources/DataElement-Measure.approvalDate.json");
		 expect(dataelementValidateFunction(dataelementExample2008)).toBe(true);
	 });

	 test("validate DataElement-Measure.clinicalRecommendationStatement.json", () => {
		 const dataelementExample2009 = require("../stu3-resources/DataElement-Measure.clinicalRecommendationStatement.json");
		 expect(dataelementValidateFunction(dataelementExample2009)).toBe(true);
	 });

	 test("validate DataElement-Measure.compositeScoring.json", () => {
		 const dataelementExample2010 = require("../stu3-resources/DataElement-Measure.compositeScoring.json");
		 expect(dataelementValidateFunction(dataelementExample2010)).toBe(true);
	 });

	 test("validate DataElement-Measure.contact.json", () => {
		 const dataelementExample2011 = require("../stu3-resources/DataElement-Measure.contact.json");
		 expect(dataelementValidateFunction(dataelementExample2011)).toBe(true);
	 });

	 test("validate DataElement-Measure.contributor.json", () => {
		 const dataelementExample2012 = require("../stu3-resources/DataElement-Measure.contributor.json");
		 expect(dataelementValidateFunction(dataelementExample2012)).toBe(true);
	 });

	 test("validate DataElement-Measure.copyright.json", () => {
		 const dataelementExample2013 = require("../stu3-resources/DataElement-Measure.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample2013)).toBe(true);
	 });

	 test("validate DataElement-Measure.date.json", () => {
		 const dataelementExample2014 = require("../stu3-resources/DataElement-Measure.date.json");
		 expect(dataelementValidateFunction(dataelementExample2014)).toBe(true);
	 });

	 test("validate DataElement-Measure.definition.json", () => {
		 const dataelementExample2015 = require("../stu3-resources/DataElement-Measure.definition.json");
		 expect(dataelementValidateFunction(dataelementExample2015)).toBe(true);
	 });

	 test("validate DataElement-Measure.description.json", () => {
		 const dataelementExample2016 = require("../stu3-resources/DataElement-Measure.description.json");
		 expect(dataelementValidateFunction(dataelementExample2016)).toBe(true);
	 });

	 test("validate DataElement-Measure.disclaimer.json", () => {
		 const dataelementExample2017 = require("../stu3-resources/DataElement-Measure.disclaimer.json");
		 expect(dataelementValidateFunction(dataelementExample2017)).toBe(true);
	 });

	 test("validate DataElement-Measure.effectivePeriod.json", () => {
		 const dataelementExample2018 = require("../stu3-resources/DataElement-Measure.effectivePeriod.json");
		 expect(dataelementValidateFunction(dataelementExample2018)).toBe(true);
	 });

	 test("validate DataElement-Measure.experimental.json", () => {
		 const dataelementExample2019 = require("../stu3-resources/DataElement-Measure.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample2019)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.description.json", () => {
		 const dataelementExample2020 = require("../stu3-resources/DataElement-Measure.group.description.json");
		 expect(dataelementValidateFunction(dataelementExample2020)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.identifier.json", () => {
		 const dataelementExample2021 = require("../stu3-resources/DataElement-Measure.group.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2021)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.json", () => {
		 const dataelementExample2022 = require("../stu3-resources/DataElement-Measure.group.json");
		 expect(dataelementValidateFunction(dataelementExample2022)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.name.json", () => {
		 const dataelementExample2023 = require("../stu3-resources/DataElement-Measure.group.name.json");
		 expect(dataelementValidateFunction(dataelementExample2023)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.population.code.json", () => {
		 const dataelementExample2024 = require("../stu3-resources/DataElement-Measure.group.population.code.json");
		 expect(dataelementValidateFunction(dataelementExample2024)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.population.criteria.json", () => {
		 const dataelementExample2025 = require("../stu3-resources/DataElement-Measure.group.population.criteria.json");
		 expect(dataelementValidateFunction(dataelementExample2025)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.population.description.json", () => {
		 const dataelementExample2026 = require("../stu3-resources/DataElement-Measure.group.population.description.json");
		 expect(dataelementValidateFunction(dataelementExample2026)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.population.identifier.json", () => {
		 const dataelementExample2027 = require("../stu3-resources/DataElement-Measure.group.population.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2027)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.population.json", () => {
		 const dataelementExample2028 = require("../stu3-resources/DataElement-Measure.group.population.json");
		 expect(dataelementValidateFunction(dataelementExample2028)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.population.name.json", () => {
		 const dataelementExample2029 = require("../stu3-resources/DataElement-Measure.group.population.name.json");
		 expect(dataelementValidateFunction(dataelementExample2029)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.stratifier.criteria.json", () => {
		 const dataelementExample2030 = require("../stu3-resources/DataElement-Measure.group.stratifier.criteria.json");
		 expect(dataelementValidateFunction(dataelementExample2030)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.stratifier.identifier.json", () => {
		 const dataelementExample2031 = require("../stu3-resources/DataElement-Measure.group.stratifier.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2031)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.stratifier.json", () => {
		 const dataelementExample2032 = require("../stu3-resources/DataElement-Measure.group.stratifier.json");
		 expect(dataelementValidateFunction(dataelementExample2032)).toBe(true);
	 });

	 test("validate DataElement-Measure.group.stratifier.path.json", () => {
		 const dataelementExample2033 = require("../stu3-resources/DataElement-Measure.group.stratifier.path.json");
		 expect(dataelementValidateFunction(dataelementExample2033)).toBe(true);
	 });

	 test("validate DataElement-Measure.guidance.json", () => {
		 const dataelementExample2034 = require("../stu3-resources/DataElement-Measure.guidance.json");
		 expect(dataelementValidateFunction(dataelementExample2034)).toBe(true);
	 });

	 test("validate DataElement-Measure.identifier.json", () => {
		 const dataelementExample2035 = require("../stu3-resources/DataElement-Measure.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2035)).toBe(true);
	 });

	 test("validate DataElement-Measure.improvementNotation.json", () => {
		 const dataelementExample2036 = require("../stu3-resources/DataElement-Measure.improvementNotation.json");
		 expect(dataelementValidateFunction(dataelementExample2036)).toBe(true);
	 });

	 test("validate DataElement-Measure.json", () => {
		 const dataelementExample2037 = require("../stu3-resources/DataElement-Measure.json");
		 expect(dataelementValidateFunction(dataelementExample2037)).toBe(true);
	 });

	 test("validate DataElement-Measure.jurisdiction.json", () => {
		 const dataelementExample2038 = require("../stu3-resources/DataElement-Measure.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample2038)).toBe(true);
	 });

	 test("validate DataElement-Measure.lastReviewDate.json", () => {
		 const dataelementExample2039 = require("../stu3-resources/DataElement-Measure.lastReviewDate.json");
		 expect(dataelementValidateFunction(dataelementExample2039)).toBe(true);
	 });

	 test("validate DataElement-Measure.library.json", () => {
		 const dataelementExample2040 = require("../stu3-resources/DataElement-Measure.library.json");
		 expect(dataelementValidateFunction(dataelementExample2040)).toBe(true);
	 });

	 test("validate DataElement-Measure.name.json", () => {
		 const dataelementExample2041 = require("../stu3-resources/DataElement-Measure.name.json");
		 expect(dataelementValidateFunction(dataelementExample2041)).toBe(true);
	 });

	 test("validate DataElement-Measure.publisher.json", () => {
		 const dataelementExample2042 = require("../stu3-resources/DataElement-Measure.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample2042)).toBe(true);
	 });

	 test("validate DataElement-Measure.purpose.json", () => {
		 const dataelementExample2043 = require("../stu3-resources/DataElement-Measure.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample2043)).toBe(true);
	 });

	 test("validate DataElement-Measure.rateAggregation.json", () => {
		 const dataelementExample2044 = require("../stu3-resources/DataElement-Measure.rateAggregation.json");
		 expect(dataelementValidateFunction(dataelementExample2044)).toBe(true);
	 });

	 test("validate DataElement-Measure.rationale.json", () => {
		 const dataelementExample2045 = require("../stu3-resources/DataElement-Measure.rationale.json");
		 expect(dataelementValidateFunction(dataelementExample2045)).toBe(true);
	 });

	 test("validate DataElement-Measure.relatedArtifact.json", () => {
		 const dataelementExample2046 = require("../stu3-resources/DataElement-Measure.relatedArtifact.json");
		 expect(dataelementValidateFunction(dataelementExample2046)).toBe(true);
	 });

	 test("validate DataElement-Measure.riskAdjustment.json", () => {
		 const dataelementExample2047 = require("../stu3-resources/DataElement-Measure.riskAdjustment.json");
		 expect(dataelementValidateFunction(dataelementExample2047)).toBe(true);
	 });

	 test("validate DataElement-Measure.scoring.json", () => {
		 const dataelementExample2048 = require("../stu3-resources/DataElement-Measure.scoring.json");
		 expect(dataelementValidateFunction(dataelementExample2048)).toBe(true);
	 });

	 test("validate DataElement-Measure.set.json", () => {
		 const dataelementExample2049 = require("../stu3-resources/DataElement-Measure.set.json");
		 expect(dataelementValidateFunction(dataelementExample2049)).toBe(true);
	 });

	 test("validate DataElement-Measure.status.json", () => {
		 const dataelementExample2050 = require("../stu3-resources/DataElement-Measure.status.json");
		 expect(dataelementValidateFunction(dataelementExample2050)).toBe(true);
	 });

	 test("validate DataElement-Measure.supplementalData.criteria.json", () => {
		 const dataelementExample2051 = require("../stu3-resources/DataElement-Measure.supplementalData.criteria.json");
		 expect(dataelementValidateFunction(dataelementExample2051)).toBe(true);
	 });

	 test("validate DataElement-Measure.supplementalData.identifier.json", () => {
		 const dataelementExample2052 = require("../stu3-resources/DataElement-Measure.supplementalData.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2052)).toBe(true);
	 });

	 test("validate DataElement-Measure.supplementalData.json", () => {
		 const dataelementExample2053 = require("../stu3-resources/DataElement-Measure.supplementalData.json");
		 expect(dataelementValidateFunction(dataelementExample2053)).toBe(true);
	 });

	 test("validate DataElement-Measure.supplementalData.path.json", () => {
		 const dataelementExample2054 = require("../stu3-resources/DataElement-Measure.supplementalData.path.json");
		 expect(dataelementValidateFunction(dataelementExample2054)).toBe(true);
	 });

	 test("validate DataElement-Measure.supplementalData.usage.json", () => {
		 const dataelementExample2055 = require("../stu3-resources/DataElement-Measure.supplementalData.usage.json");
		 expect(dataelementValidateFunction(dataelementExample2055)).toBe(true);
	 });

	 test("validate DataElement-Measure.title.json", () => {
		 const dataelementExample2056 = require("../stu3-resources/DataElement-Measure.title.json");
		 expect(dataelementValidateFunction(dataelementExample2056)).toBe(true);
	 });

	 test("validate DataElement-Measure.topic.json", () => {
		 const dataelementExample2057 = require("../stu3-resources/DataElement-Measure.topic.json");
		 expect(dataelementValidateFunction(dataelementExample2057)).toBe(true);
	 });

	 test("validate DataElement-Measure.type.json", () => {
		 const dataelementExample2058 = require("../stu3-resources/DataElement-Measure.type.json");
		 expect(dataelementValidateFunction(dataelementExample2058)).toBe(true);
	 });

	 test("validate DataElement-Measure.url.json", () => {
		 const dataelementExample2059 = require("../stu3-resources/DataElement-Measure.url.json");
		 expect(dataelementValidateFunction(dataelementExample2059)).toBe(true);
	 });

	 test("validate DataElement-Measure.usage.json", () => {
		 const dataelementExample2060 = require("../stu3-resources/DataElement-Measure.usage.json");
		 expect(dataelementValidateFunction(dataelementExample2060)).toBe(true);
	 });

	 test("validate DataElement-Measure.useContext.json", () => {
		 const dataelementExample2061 = require("../stu3-resources/DataElement-Measure.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample2061)).toBe(true);
	 });

	 test("validate DataElement-Measure.version.json", () => {
		 const dataelementExample2062 = require("../stu3-resources/DataElement-Measure.version.json");
		 expect(dataelementValidateFunction(dataelementExample2062)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.date.json", () => {
		 const dataelementExample2063 = require("../stu3-resources/DataElement-MeasureReport.date.json");
		 expect(dataelementValidateFunction(dataelementExample2063)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.evaluatedResources.json", () => {
		 const dataelementExample2064 = require("../stu3-resources/DataElement-MeasureReport.evaluatedResources.json");
		 expect(dataelementValidateFunction(dataelementExample2064)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.identifier.json", () => {
		 const dataelementExample2065 = require("../stu3-resources/DataElement-MeasureReport.group.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2065)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.json", () => {
		 const dataelementExample2066 = require("../stu3-resources/DataElement-MeasureReport.group.json");
		 expect(dataelementValidateFunction(dataelementExample2066)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.measureScore.json", () => {
		 const dataelementExample2067 = require("../stu3-resources/DataElement-MeasureReport.group.measureScore.json");
		 expect(dataelementValidateFunction(dataelementExample2067)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.population.code.json", () => {
		 const dataelementExample2068 = require("../stu3-resources/DataElement-MeasureReport.group.population.code.json");
		 expect(dataelementValidateFunction(dataelementExample2068)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.population.count.json", () => {
		 const dataelementExample2069 = require("../stu3-resources/DataElement-MeasureReport.group.population.count.json");
		 expect(dataelementValidateFunction(dataelementExample2069)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.population.identifier.json", () => {
		 const dataelementExample2070 = require("../stu3-resources/DataElement-MeasureReport.group.population.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2070)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.population.json", () => {
		 const dataelementExample2071 = require("../stu3-resources/DataElement-MeasureReport.group.population.json");
		 expect(dataelementValidateFunction(dataelementExample2071)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.population.patients.json", () => {
		 const dataelementExample2072 = require("../stu3-resources/DataElement-MeasureReport.group.population.patients.json");
		 expect(dataelementValidateFunction(dataelementExample2072)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.stratifier.identifier.json", () => {
		 const dataelementExample2073 = require("../stu3-resources/DataElement-MeasureReport.group.stratifier.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2073)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.stratifier.json", () => {
		 const dataelementExample2074 = require("../stu3-resources/DataElement-MeasureReport.group.stratifier.json");
		 expect(dataelementValidateFunction(dataelementExample2074)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.stratifier.stratum.json", () => {
		 const dataelementExample2075 = require("../stu3-resources/DataElement-MeasureReport.group.stratifier.stratum.json");
		 expect(dataelementValidateFunction(dataelementExample2075)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.stratifier.stratum.measureScore.json", () => {
		 const dataelementExample2076 = require("../stu3-resources/DataElement-MeasureReport.group.stratifier.stratum.measureScore.json");
		 expect(dataelementValidateFunction(dataelementExample2076)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.stratifier.stratum.population.code.json", () => {
		 const dataelementExample2077 = require("../stu3-resources/DataElement-MeasureReport.group.stratifier.stratum.population.code.json");
		 expect(dataelementValidateFunction(dataelementExample2077)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.stratifier.stratum.population.count.json", () => {
		 const dataelementExample2078 = require("../stu3-resources/DataElement-MeasureReport.group.stratifier.stratum.population.count.json");
		 expect(dataelementValidateFunction(dataelementExample2078)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.stratifier.stratum.population.identifier.json", () => {
		 const dataelementExample2079 = require("../stu3-resources/DataElement-MeasureReport.group.stratifier.stratum.population.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2079)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.stratifier.stratum.population.json", () => {
		 const dataelementExample2080 = require("../stu3-resources/DataElement-MeasureReport.group.stratifier.stratum.population.json");
		 expect(dataelementValidateFunction(dataelementExample2080)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.stratifier.stratum.population.patients.json", () => {
		 const dataelementExample2081 = require("../stu3-resources/DataElement-MeasureReport.group.stratifier.stratum.population.patients.json");
		 expect(dataelementValidateFunction(dataelementExample2081)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.group.stratifier.stratum.value.json", () => {
		 const dataelementExample2082 = require("../stu3-resources/DataElement-MeasureReport.group.stratifier.stratum.value.json");
		 expect(dataelementValidateFunction(dataelementExample2082)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.identifier.json", () => {
		 const dataelementExample2083 = require("../stu3-resources/DataElement-MeasureReport.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2083)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.json", () => {
		 const dataelementExample2084 = require("../stu3-resources/DataElement-MeasureReport.json");
		 expect(dataelementValidateFunction(dataelementExample2084)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.measure.json", () => {
		 const dataelementExample2085 = require("../stu3-resources/DataElement-MeasureReport.measure.json");
		 expect(dataelementValidateFunction(dataelementExample2085)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.patient.json", () => {
		 const dataelementExample2086 = require("../stu3-resources/DataElement-MeasureReport.patient.json");
		 expect(dataelementValidateFunction(dataelementExample2086)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.period.json", () => {
		 const dataelementExample2087 = require("../stu3-resources/DataElement-MeasureReport.period.json");
		 expect(dataelementValidateFunction(dataelementExample2087)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.reportingOrganization.json", () => {
		 const dataelementExample2088 = require("../stu3-resources/DataElement-MeasureReport.reportingOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample2088)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.status.json", () => {
		 const dataelementExample2089 = require("../stu3-resources/DataElement-MeasureReport.status.json");
		 expect(dataelementValidateFunction(dataelementExample2089)).toBe(true);
	 });

	 test("validate DataElement-MeasureReport.type.json", () => {
		 const dataelementExample2090 = require("../stu3-resources/DataElement-MeasureReport.type.json");
		 expect(dataelementValidateFunction(dataelementExample2090)).toBe(true);
	 });

	 test("validate DataElement-Media.basedOn.json", () => {
		 const dataelementExample2091 = require("../stu3-resources/DataElement-Media.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample2091)).toBe(true);
	 });

	 test("validate DataElement-Media.bodySite.json", () => {
		 const dataelementExample2092 = require("../stu3-resources/DataElement-Media.bodySite.json");
		 expect(dataelementValidateFunction(dataelementExample2092)).toBe(true);
	 });

	 test("validate DataElement-Media.content.json", () => {
		 const dataelementExample2093 = require("../stu3-resources/DataElement-Media.content.json");
		 expect(dataelementValidateFunction(dataelementExample2093)).toBe(true);
	 });

	 test("validate DataElement-Media.context.json", () => {
		 const dataelementExample2094 = require("../stu3-resources/DataElement-Media.context.json");
		 expect(dataelementValidateFunction(dataelementExample2094)).toBe(true);
	 });

	 test("validate DataElement-Media.device.json", () => {
		 const dataelementExample2095 = require("../stu3-resources/DataElement-Media.device.json");
		 expect(dataelementValidateFunction(dataelementExample2095)).toBe(true);
	 });

	 test("validate DataElement-Media.duration.json", () => {
		 const dataelementExample2096 = require("../stu3-resources/DataElement-Media.duration.json");
		 expect(dataelementValidateFunction(dataelementExample2096)).toBe(true);
	 });

	 test("validate DataElement-Media.frames.json", () => {
		 const dataelementExample2097 = require("../stu3-resources/DataElement-Media.frames.json");
		 expect(dataelementValidateFunction(dataelementExample2097)).toBe(true);
	 });

	 test("validate DataElement-Media.height.json", () => {
		 const dataelementExample2098 = require("../stu3-resources/DataElement-Media.height.json");
		 expect(dataelementValidateFunction(dataelementExample2098)).toBe(true);
	 });

	 test("validate DataElement-Media.identifier.json", () => {
		 const dataelementExample2099 = require("../stu3-resources/DataElement-Media.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2099)).toBe(true);
	 });

	 test("validate DataElement-Media.json", () => {
		 const dataelementExample2100 = require("../stu3-resources/DataElement-Media.json");
		 expect(dataelementValidateFunction(dataelementExample2100)).toBe(true);
	 });

	 test("validate DataElement-Media.note.json", () => {
		 const dataelementExample2101 = require("../stu3-resources/DataElement-Media.note.json");
		 expect(dataelementValidateFunction(dataelementExample2101)).toBe(true);
	 });

	 test("validate DataElement-Media.occurrenceX.json", () => {
		 const dataelementExample2102 = require("../stu3-resources/DataElement-Media.occurrenceX.json");
		 expect(dataelementValidateFunction(dataelementExample2102)).toBe(true);
	 });

	 test("validate DataElement-Media.operator.json", () => {
		 const dataelementExample2103 = require("../stu3-resources/DataElement-Media.operator.json");
		 expect(dataelementValidateFunction(dataelementExample2103)).toBe(true);
	 });

	 test("validate DataElement-Media.reasonCode.json", () => {
		 const dataelementExample2104 = require("../stu3-resources/DataElement-Media.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample2104)).toBe(true);
	 });

	 test("validate DataElement-Media.subject.json", () => {
		 const dataelementExample2105 = require("../stu3-resources/DataElement-Media.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2105)).toBe(true);
	 });

	 test("validate DataElement-Media.subtype.json", () => {
		 const dataelementExample2106 = require("../stu3-resources/DataElement-Media.subtype.json");
		 expect(dataelementValidateFunction(dataelementExample2106)).toBe(true);
	 });

	 test("validate DataElement-Media.type.json", () => {
		 const dataelementExample2107 = require("../stu3-resources/DataElement-Media.type.json");
		 expect(dataelementValidateFunction(dataelementExample2107)).toBe(true);
	 });

	 test("validate DataElement-Media.view.json", () => {
		 const dataelementExample2108 = require("../stu3-resources/DataElement-Media.view.json");
		 expect(dataelementValidateFunction(dataelementExample2108)).toBe(true);
	 });

	 test("validate DataElement-Media.width.json", () => {
		 const dataelementExample2109 = require("../stu3-resources/DataElement-Media.width.json");
		 expect(dataelementValidateFunction(dataelementExample2109)).toBe(true);
	 });

	 test("validate DataElement-Medication.code.json", () => {
		 const dataelementExample2110 = require("../stu3-resources/DataElement-Medication.code.json");
		 expect(dataelementValidateFunction(dataelementExample2110)).toBe(true);
	 });

	 test("validate DataElement-Medication.form.json", () => {
		 const dataelementExample2111 = require("../stu3-resources/DataElement-Medication.form.json");
		 expect(dataelementValidateFunction(dataelementExample2111)).toBe(true);
	 });

	 test("validate DataElement-Medication.image.json", () => {
		 const dataelementExample2112 = require("../stu3-resources/DataElement-Medication.image.json");
		 expect(dataelementValidateFunction(dataelementExample2112)).toBe(true);
	 });

	 test("validate DataElement-Medication.ingredient.amount.json", () => {
		 const dataelementExample2113 = require("../stu3-resources/DataElement-Medication.ingredient.amount.json");
		 expect(dataelementValidateFunction(dataelementExample2113)).toBe(true);
	 });

	 test("validate DataElement-Medication.ingredient.isActive.json", () => {
		 const dataelementExample2114 = require("../stu3-resources/DataElement-Medication.ingredient.isActive.json");
		 expect(dataelementValidateFunction(dataelementExample2114)).toBe(true);
	 });

	 test("validate DataElement-Medication.ingredient.itemX.json", () => {
		 const dataelementExample2115 = require("../stu3-resources/DataElement-Medication.ingredient.itemX.json");
		 expect(dataelementValidateFunction(dataelementExample2115)).toBe(true);
	 });

	 test("validate DataElement-Medication.ingredient.json", () => {
		 const dataelementExample2116 = require("../stu3-resources/DataElement-Medication.ingredient.json");
		 expect(dataelementValidateFunction(dataelementExample2116)).toBe(true);
	 });

	 test("validate DataElement-Medication.isBrand.json", () => {
		 const dataelementExample2117 = require("../stu3-resources/DataElement-Medication.isBrand.json");
		 expect(dataelementValidateFunction(dataelementExample2117)).toBe(true);
	 });

	 test("validate DataElement-Medication.isOverTheCounter.json", () => {
		 const dataelementExample2118 = require("../stu3-resources/DataElement-Medication.isOverTheCounter.json");
		 expect(dataelementValidateFunction(dataelementExample2118)).toBe(true);
	 });

	 test("validate DataElement-Medication.json", () => {
		 const dataelementExample2119 = require("../stu3-resources/DataElement-Medication.json");
		 expect(dataelementValidateFunction(dataelementExample2119)).toBe(true);
	 });

	 test("validate DataElement-Medication.manufacturer.json", () => {
		 const dataelementExample2120 = require("../stu3-resources/DataElement-Medication.manufacturer.json");
		 expect(dataelementValidateFunction(dataelementExample2120)).toBe(true);
	 });

	 test("validate DataElement-Medication.package.batch.expirationDate.json", () => {
		 const dataelementExample2121 = require("../stu3-resources/DataElement-Medication.package.batch.expirationDate.json");
		 expect(dataelementValidateFunction(dataelementExample2121)).toBe(true);
	 });

	 test("validate DataElement-Medication.package.batch.json", () => {
		 const dataelementExample2122 = require("../stu3-resources/DataElement-Medication.package.batch.json");
		 expect(dataelementValidateFunction(dataelementExample2122)).toBe(true);
	 });

	 test("validate DataElement-Medication.package.batch.lotNumber.json", () => {
		 const dataelementExample2123 = require("../stu3-resources/DataElement-Medication.package.batch.lotNumber.json");
		 expect(dataelementValidateFunction(dataelementExample2123)).toBe(true);
	 });

	 test("validate DataElement-Medication.package.container.json", () => {
		 const dataelementExample2124 = require("../stu3-resources/DataElement-Medication.package.container.json");
		 expect(dataelementValidateFunction(dataelementExample2124)).toBe(true);
	 });

	 test("validate DataElement-Medication.package.content.amount.json", () => {
		 const dataelementExample2125 = require("../stu3-resources/DataElement-Medication.package.content.amount.json");
		 expect(dataelementValidateFunction(dataelementExample2125)).toBe(true);
	 });

	 test("validate DataElement-Medication.package.content.itemX.json", () => {
		 const dataelementExample2126 = require("../stu3-resources/DataElement-Medication.package.content.itemX.json");
		 expect(dataelementValidateFunction(dataelementExample2126)).toBe(true);
	 });

	 test("validate DataElement-Medication.package.content.json", () => {
		 const dataelementExample2127 = require("../stu3-resources/DataElement-Medication.package.content.json");
		 expect(dataelementValidateFunction(dataelementExample2127)).toBe(true);
	 });

	 test("validate DataElement-Medication.package.json", () => {
		 const dataelementExample2128 = require("../stu3-resources/DataElement-Medication.package.json");
		 expect(dataelementValidateFunction(dataelementExample2128)).toBe(true);
	 });

	 test("validate DataElement-Medication.status.json", () => {
		 const dataelementExample2129 = require("../stu3-resources/DataElement-Medication.status.json");
		 expect(dataelementValidateFunction(dataelementExample2129)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.category.json", () => {
		 const dataelementExample2130 = require("../stu3-resources/DataElement-MedicationAdministration.category.json");
		 expect(dataelementValidateFunction(dataelementExample2130)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.context.json", () => {
		 const dataelementExample2131 = require("../stu3-resources/DataElement-MedicationAdministration.context.json");
		 expect(dataelementValidateFunction(dataelementExample2131)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.definition.json", () => {
		 const dataelementExample2132 = require("../stu3-resources/DataElement-MedicationAdministration.definition.json");
		 expect(dataelementValidateFunction(dataelementExample2132)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.device.json", () => {
		 const dataelementExample2133 = require("../stu3-resources/DataElement-MedicationAdministration.device.json");
		 expect(dataelementValidateFunction(dataelementExample2133)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.dosage.dose.json", () => {
		 const dataelementExample2134 = require("../stu3-resources/DataElement-MedicationAdministration.dosage.dose.json");
		 expect(dataelementValidateFunction(dataelementExample2134)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.dosage.json", () => {
		 const dataelementExample2135 = require("../stu3-resources/DataElement-MedicationAdministration.dosage.json");
		 expect(dataelementValidateFunction(dataelementExample2135)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.dosage.method.json", () => {
		 const dataelementExample2136 = require("../stu3-resources/DataElement-MedicationAdministration.dosage.method.json");
		 expect(dataelementValidateFunction(dataelementExample2136)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.dosage.rateX.json", () => {
		 const dataelementExample2137 = require("../stu3-resources/DataElement-MedicationAdministration.dosage.rateX.json");
		 expect(dataelementValidateFunction(dataelementExample2137)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.dosage.route.json", () => {
		 const dataelementExample2138 = require("../stu3-resources/DataElement-MedicationAdministration.dosage.route.json");
		 expect(dataelementValidateFunction(dataelementExample2138)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.dosage.site.json", () => {
		 const dataelementExample2139 = require("../stu3-resources/DataElement-MedicationAdministration.dosage.site.json");
		 expect(dataelementValidateFunction(dataelementExample2139)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.dosage.text.json", () => {
		 const dataelementExample2140 = require("../stu3-resources/DataElement-MedicationAdministration.dosage.text.json");
		 expect(dataelementValidateFunction(dataelementExample2140)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.effectiveX.json", () => {
		 const dataelementExample2141 = require("../stu3-resources/DataElement-MedicationAdministration.effectiveX.json");
		 expect(dataelementValidateFunction(dataelementExample2141)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.eventHistory.json", () => {
		 const dataelementExample2142 = require("../stu3-resources/DataElement-MedicationAdministration.eventHistory.json");
		 expect(dataelementValidateFunction(dataelementExample2142)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.identifier.json", () => {
		 const dataelementExample2143 = require("../stu3-resources/DataElement-MedicationAdministration.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2143)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.json", () => {
		 const dataelementExample2144 = require("../stu3-resources/DataElement-MedicationAdministration.json");
		 expect(dataelementValidateFunction(dataelementExample2144)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.medicationX.json", () => {
		 const dataelementExample2145 = require("../stu3-resources/DataElement-MedicationAdministration.medicationX.json");
		 expect(dataelementValidateFunction(dataelementExample2145)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.notGiven.json", () => {
		 const dataelementExample2146 = require("../stu3-resources/DataElement-MedicationAdministration.notGiven.json");
		 expect(dataelementValidateFunction(dataelementExample2146)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.note.json", () => {
		 const dataelementExample2147 = require("../stu3-resources/DataElement-MedicationAdministration.note.json");
		 expect(dataelementValidateFunction(dataelementExample2147)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.partOf.json", () => {
		 const dataelementExample2148 = require("../stu3-resources/DataElement-MedicationAdministration.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample2148)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.performer.actor.json", () => {
		 const dataelementExample2149 = require("../stu3-resources/DataElement-MedicationAdministration.performer.actor.json");
		 expect(dataelementValidateFunction(dataelementExample2149)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.performer.json", () => {
		 const dataelementExample2150 = require("../stu3-resources/DataElement-MedicationAdministration.performer.json");
		 expect(dataelementValidateFunction(dataelementExample2150)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.performer.onBehalfOf.json", () => {
		 const dataelementExample2151 = require("../stu3-resources/DataElement-MedicationAdministration.performer.onBehalfOf.json");
		 expect(dataelementValidateFunction(dataelementExample2151)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.prescription.json", () => {
		 const dataelementExample2152 = require("../stu3-resources/DataElement-MedicationAdministration.prescription.json");
		 expect(dataelementValidateFunction(dataelementExample2152)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.reasonCode.json", () => {
		 const dataelementExample2153 = require("../stu3-resources/DataElement-MedicationAdministration.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample2153)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.reasonNotGiven.json", () => {
		 const dataelementExample2154 = require("../stu3-resources/DataElement-MedicationAdministration.reasonNotGiven.json");
		 expect(dataelementValidateFunction(dataelementExample2154)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.reasonReference.json", () => {
		 const dataelementExample2155 = require("../stu3-resources/DataElement-MedicationAdministration.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample2155)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.status.json", () => {
		 const dataelementExample2156 = require("../stu3-resources/DataElement-MedicationAdministration.status.json");
		 expect(dataelementValidateFunction(dataelementExample2156)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.subject.json", () => {
		 const dataelementExample2157 = require("../stu3-resources/DataElement-MedicationAdministration.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2157)).toBe(true);
	 });

	 test("validate DataElement-MedicationAdministration.supportingInformation.json", () => {
		 const dataelementExample2158 = require("../stu3-resources/DataElement-MedicationAdministration.supportingInformation.json");
		 expect(dataelementValidateFunction(dataelementExample2158)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.authorizingPrescription.json", () => {
		 const dataelementExample2159 = require("../stu3-resources/DataElement-MedicationDispense.authorizingPrescription.json");
		 expect(dataelementValidateFunction(dataelementExample2159)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.category.json", () => {
		 const dataelementExample2160 = require("../stu3-resources/DataElement-MedicationDispense.category.json");
		 expect(dataelementValidateFunction(dataelementExample2160)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.context.json", () => {
		 const dataelementExample2161 = require("../stu3-resources/DataElement-MedicationDispense.context.json");
		 expect(dataelementValidateFunction(dataelementExample2161)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.daysSupply.json", () => {
		 const dataelementExample2162 = require("../stu3-resources/DataElement-MedicationDispense.daysSupply.json");
		 expect(dataelementValidateFunction(dataelementExample2162)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.destination.json", () => {
		 const dataelementExample2163 = require("../stu3-resources/DataElement-MedicationDispense.destination.json");
		 expect(dataelementValidateFunction(dataelementExample2163)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.detectedIssue.json", () => {
		 const dataelementExample2164 = require("../stu3-resources/DataElement-MedicationDispense.detectedIssue.json");
		 expect(dataelementValidateFunction(dataelementExample2164)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.dosageInstruction.json", () => {
		 const dataelementExample2165 = require("../stu3-resources/DataElement-MedicationDispense.dosageInstruction.json");
		 expect(dataelementValidateFunction(dataelementExample2165)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.eventHistory.json", () => {
		 const dataelementExample2166 = require("../stu3-resources/DataElement-MedicationDispense.eventHistory.json");
		 expect(dataelementValidateFunction(dataelementExample2166)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.identifier.json", () => {
		 const dataelementExample2167 = require("../stu3-resources/DataElement-MedicationDispense.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2167)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.json", () => {
		 const dataelementExample2168 = require("../stu3-resources/DataElement-MedicationDispense.json");
		 expect(dataelementValidateFunction(dataelementExample2168)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.medicationX.json", () => {
		 const dataelementExample2169 = require("../stu3-resources/DataElement-MedicationDispense.medicationX.json");
		 expect(dataelementValidateFunction(dataelementExample2169)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.notDone.json", () => {
		 const dataelementExample2170 = require("../stu3-resources/DataElement-MedicationDispense.notDone.json");
		 expect(dataelementValidateFunction(dataelementExample2170)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.notDoneReasonX.json", () => {
		 const dataelementExample2171 = require("../stu3-resources/DataElement-MedicationDispense.notDoneReasonX.json");
		 expect(dataelementValidateFunction(dataelementExample2171)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.note.json", () => {
		 const dataelementExample2172 = require("../stu3-resources/DataElement-MedicationDispense.note.json");
		 expect(dataelementValidateFunction(dataelementExample2172)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.partOf.json", () => {
		 const dataelementExample2173 = require("../stu3-resources/DataElement-MedicationDispense.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample2173)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.performer.actor.json", () => {
		 const dataelementExample2174 = require("../stu3-resources/DataElement-MedicationDispense.performer.actor.json");
		 expect(dataelementValidateFunction(dataelementExample2174)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.performer.json", () => {
		 const dataelementExample2175 = require("../stu3-resources/DataElement-MedicationDispense.performer.json");
		 expect(dataelementValidateFunction(dataelementExample2175)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.performer.onBehalfOf.json", () => {
		 const dataelementExample2176 = require("../stu3-resources/DataElement-MedicationDispense.performer.onBehalfOf.json");
		 expect(dataelementValidateFunction(dataelementExample2176)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.quantity.json", () => {
		 const dataelementExample2177 = require("../stu3-resources/DataElement-MedicationDispense.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample2177)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.receiver.json", () => {
		 const dataelementExample2178 = require("../stu3-resources/DataElement-MedicationDispense.receiver.json");
		 expect(dataelementValidateFunction(dataelementExample2178)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.status.json", () => {
		 const dataelementExample2179 = require("../stu3-resources/DataElement-MedicationDispense.status.json");
		 expect(dataelementValidateFunction(dataelementExample2179)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.subject.json", () => {
		 const dataelementExample2180 = require("../stu3-resources/DataElement-MedicationDispense.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2180)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.substitution.json", () => {
		 const dataelementExample2181 = require("../stu3-resources/DataElement-MedicationDispense.substitution.json");
		 expect(dataelementValidateFunction(dataelementExample2181)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.substitution.reason.json", () => {
		 const dataelementExample2182 = require("../stu3-resources/DataElement-MedicationDispense.substitution.reason.json");
		 expect(dataelementValidateFunction(dataelementExample2182)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.substitution.responsibleParty.json", () => {
		 const dataelementExample2183 = require("../stu3-resources/DataElement-MedicationDispense.substitution.responsibleParty.json");
		 expect(dataelementValidateFunction(dataelementExample2183)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.substitution.type.json", () => {
		 const dataelementExample2184 = require("../stu3-resources/DataElement-MedicationDispense.substitution.type.json");
		 expect(dataelementValidateFunction(dataelementExample2184)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.substitution.wasSubstituted.json", () => {
		 const dataelementExample2185 = require("../stu3-resources/DataElement-MedicationDispense.substitution.wasSubstituted.json");
		 expect(dataelementValidateFunction(dataelementExample2185)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.supportingInformation.json", () => {
		 const dataelementExample2186 = require("../stu3-resources/DataElement-MedicationDispense.supportingInformation.json");
		 expect(dataelementValidateFunction(dataelementExample2186)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.type.json", () => {
		 const dataelementExample2187 = require("../stu3-resources/DataElement-MedicationDispense.type.json");
		 expect(dataelementValidateFunction(dataelementExample2187)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.whenHandedOver.json", () => {
		 const dataelementExample2188 = require("../stu3-resources/DataElement-MedicationDispense.whenHandedOver.json");
		 expect(dataelementValidateFunction(dataelementExample2188)).toBe(true);
	 });

	 test("validate DataElement-MedicationDispense.whenPrepared.json", () => {
		 const dataelementExample2189 = require("../stu3-resources/DataElement-MedicationDispense.whenPrepared.json");
		 expect(dataelementValidateFunction(dataelementExample2189)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.authoredOn.json", () => {
		 const dataelementExample2190 = require("../stu3-resources/DataElement-MedicationRequest.authoredOn.json");
		 expect(dataelementValidateFunction(dataelementExample2190)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.basedOn.json", () => {
		 const dataelementExample2191 = require("../stu3-resources/DataElement-MedicationRequest.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample2191)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.category.json", () => {
		 const dataelementExample2192 = require("../stu3-resources/DataElement-MedicationRequest.category.json");
		 expect(dataelementValidateFunction(dataelementExample2192)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.context.json", () => {
		 const dataelementExample2193 = require("../stu3-resources/DataElement-MedicationRequest.context.json");
		 expect(dataelementValidateFunction(dataelementExample2193)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.definition.json", () => {
		 const dataelementExample2194 = require("../stu3-resources/DataElement-MedicationRequest.definition.json");
		 expect(dataelementValidateFunction(dataelementExample2194)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.detectedIssue.json", () => {
		 const dataelementExample2195 = require("../stu3-resources/DataElement-MedicationRequest.detectedIssue.json");
		 expect(dataelementValidateFunction(dataelementExample2195)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.dispenseRequest.expectedSupplyDuration.json", () => {
		 const dataelementExample2196 = require("../stu3-resources/DataElement-MedicationRequest.dispenseRequest.expectedSupplyDuration.json");
		 expect(dataelementValidateFunction(dataelementExample2196)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.dispenseRequest.json", () => {
		 const dataelementExample2197 = require("../stu3-resources/DataElement-MedicationRequest.dispenseRequest.json");
		 expect(dataelementValidateFunction(dataelementExample2197)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.dispenseRequest.numberOfRepeatsAllowed.json", () => {
		 const dataelementExample2198 = require("../stu3-resources/DataElement-MedicationRequest.dispenseRequest.numberOfRepeatsAllowed.json");
		 expect(dataelementValidateFunction(dataelementExample2198)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.dispenseRequest.performer.json", () => {
		 const dataelementExample2199 = require("../stu3-resources/DataElement-MedicationRequest.dispenseRequest.performer.json");
		 expect(dataelementValidateFunction(dataelementExample2199)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.dispenseRequest.quantity.json", () => {
		 const dataelementExample2200 = require("../stu3-resources/DataElement-MedicationRequest.dispenseRequest.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample2200)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.dispenseRequest.validityPeriod.json", () => {
		 const dataelementExample2201 = require("../stu3-resources/DataElement-MedicationRequest.dispenseRequest.validityPeriod.json");
		 expect(dataelementValidateFunction(dataelementExample2201)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.dosageInstruction.json", () => {
		 const dataelementExample2202 = require("../stu3-resources/DataElement-MedicationRequest.dosageInstruction.json");
		 expect(dataelementValidateFunction(dataelementExample2202)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.eventHistory.json", () => {
		 const dataelementExample2203 = require("../stu3-resources/DataElement-MedicationRequest.eventHistory.json");
		 expect(dataelementValidateFunction(dataelementExample2203)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.groupIdentifier.json", () => {
		 const dataelementExample2204 = require("../stu3-resources/DataElement-MedicationRequest.groupIdentifier.json");
		 expect(dataelementValidateFunction(dataelementExample2204)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.identifier.json", () => {
		 const dataelementExample2205 = require("../stu3-resources/DataElement-MedicationRequest.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2205)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.intent.json", () => {
		 const dataelementExample2206 = require("../stu3-resources/DataElement-MedicationRequest.intent.json");
		 expect(dataelementValidateFunction(dataelementExample2206)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.json", () => {
		 const dataelementExample2207 = require("../stu3-resources/DataElement-MedicationRequest.json");
		 expect(dataelementValidateFunction(dataelementExample2207)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.medicationX.json", () => {
		 const dataelementExample2208 = require("../stu3-resources/DataElement-MedicationRequest.medicationX.json");
		 expect(dataelementValidateFunction(dataelementExample2208)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.note.json", () => {
		 const dataelementExample2209 = require("../stu3-resources/DataElement-MedicationRequest.note.json");
		 expect(dataelementValidateFunction(dataelementExample2209)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.priorPrescription.json", () => {
		 const dataelementExample2210 = require("../stu3-resources/DataElement-MedicationRequest.priorPrescription.json");
		 expect(dataelementValidateFunction(dataelementExample2210)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.priority.json", () => {
		 const dataelementExample2211 = require("../stu3-resources/DataElement-MedicationRequest.priority.json");
		 expect(dataelementValidateFunction(dataelementExample2211)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.reasonCode.json", () => {
		 const dataelementExample2212 = require("../stu3-resources/DataElement-MedicationRequest.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample2212)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.reasonReference.json", () => {
		 const dataelementExample2213 = require("../stu3-resources/DataElement-MedicationRequest.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample2213)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.recorder.json", () => {
		 const dataelementExample2214 = require("../stu3-resources/DataElement-MedicationRequest.recorder.json");
		 expect(dataelementValidateFunction(dataelementExample2214)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.requester.agent.json", () => {
		 const dataelementExample2215 = require("../stu3-resources/DataElement-MedicationRequest.requester.agent.json");
		 expect(dataelementValidateFunction(dataelementExample2215)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.requester.json", () => {
		 const dataelementExample2216 = require("../stu3-resources/DataElement-MedicationRequest.requester.json");
		 expect(dataelementValidateFunction(dataelementExample2216)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.requester.onBehalfOf.json", () => {
		 const dataelementExample2217 = require("../stu3-resources/DataElement-MedicationRequest.requester.onBehalfOf.json");
		 expect(dataelementValidateFunction(dataelementExample2217)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.status.json", () => {
		 const dataelementExample2218 = require("../stu3-resources/DataElement-MedicationRequest.status.json");
		 expect(dataelementValidateFunction(dataelementExample2218)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.subject.json", () => {
		 const dataelementExample2219 = require("../stu3-resources/DataElement-MedicationRequest.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2219)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.substitution.allowed.json", () => {
		 const dataelementExample2220 = require("../stu3-resources/DataElement-MedicationRequest.substitution.allowed.json");
		 expect(dataelementValidateFunction(dataelementExample2220)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.substitution.json", () => {
		 const dataelementExample2221 = require("../stu3-resources/DataElement-MedicationRequest.substitution.json");
		 expect(dataelementValidateFunction(dataelementExample2221)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.substitution.reason.json", () => {
		 const dataelementExample2222 = require("../stu3-resources/DataElement-MedicationRequest.substitution.reason.json");
		 expect(dataelementValidateFunction(dataelementExample2222)).toBe(true);
	 });

	 test("validate DataElement-MedicationRequest.supportingInformation.json", () => {
		 const dataelementExample2223 = require("../stu3-resources/DataElement-MedicationRequest.supportingInformation.json");
		 expect(dataelementValidateFunction(dataelementExample2223)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.basedOn.json", () => {
		 const dataelementExample2224 = require("../stu3-resources/DataElement-MedicationStatement.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample2224)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.category.json", () => {
		 const dataelementExample2225 = require("../stu3-resources/DataElement-MedicationStatement.category.json");
		 expect(dataelementValidateFunction(dataelementExample2225)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.context.json", () => {
		 const dataelementExample2226 = require("../stu3-resources/DataElement-MedicationStatement.context.json");
		 expect(dataelementValidateFunction(dataelementExample2226)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.dateAsserted.json", () => {
		 const dataelementExample2227 = require("../stu3-resources/DataElement-MedicationStatement.dateAsserted.json");
		 expect(dataelementValidateFunction(dataelementExample2227)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.derivedFrom.json", () => {
		 const dataelementExample2228 = require("../stu3-resources/DataElement-MedicationStatement.derivedFrom.json");
		 expect(dataelementValidateFunction(dataelementExample2228)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.dosage.json", () => {
		 const dataelementExample2229 = require("../stu3-resources/DataElement-MedicationStatement.dosage.json");
		 expect(dataelementValidateFunction(dataelementExample2229)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.effectiveX.json", () => {
		 const dataelementExample2230 = require("../stu3-resources/DataElement-MedicationStatement.effectiveX.json");
		 expect(dataelementValidateFunction(dataelementExample2230)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.identifier.json", () => {
		 const dataelementExample2231 = require("../stu3-resources/DataElement-MedicationStatement.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2231)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.informationSource.json", () => {
		 const dataelementExample2232 = require("../stu3-resources/DataElement-MedicationStatement.informationSource.json");
		 expect(dataelementValidateFunction(dataelementExample2232)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.json", () => {
		 const dataelementExample2233 = require("../stu3-resources/DataElement-MedicationStatement.json");
		 expect(dataelementValidateFunction(dataelementExample2233)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.medicationX.json", () => {
		 const dataelementExample2234 = require("../stu3-resources/DataElement-MedicationStatement.medicationX.json");
		 expect(dataelementValidateFunction(dataelementExample2234)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.note.json", () => {
		 const dataelementExample2235 = require("../stu3-resources/DataElement-MedicationStatement.note.json");
		 expect(dataelementValidateFunction(dataelementExample2235)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.partOf.json", () => {
		 const dataelementExample2236 = require("../stu3-resources/DataElement-MedicationStatement.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample2236)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.reasonCode.json", () => {
		 const dataelementExample2237 = require("../stu3-resources/DataElement-MedicationStatement.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample2237)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.reasonNotTaken.json", () => {
		 const dataelementExample2238 = require("../stu3-resources/DataElement-MedicationStatement.reasonNotTaken.json");
		 expect(dataelementValidateFunction(dataelementExample2238)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.reasonReference.json", () => {
		 const dataelementExample2239 = require("../stu3-resources/DataElement-MedicationStatement.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample2239)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.status.json", () => {
		 const dataelementExample2240 = require("../stu3-resources/DataElement-MedicationStatement.status.json");
		 expect(dataelementValidateFunction(dataelementExample2240)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.subject.json", () => {
		 const dataelementExample2241 = require("../stu3-resources/DataElement-MedicationStatement.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2241)).toBe(true);
	 });

	 test("validate DataElement-MedicationStatement.taken.json", () => {
		 const dataelementExample2242 = require("../stu3-resources/DataElement-MedicationStatement.taken.json");
		 expect(dataelementValidateFunction(dataelementExample2242)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.allowedResponse.json", () => {
		 const dataelementExample2243 = require("../stu3-resources/DataElement-MessageDefinition.allowedResponse.json");
		 expect(dataelementValidateFunction(dataelementExample2243)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.allowedResponse.message.json", () => {
		 const dataelementExample2244 = require("../stu3-resources/DataElement-MessageDefinition.allowedResponse.message.json");
		 expect(dataelementValidateFunction(dataelementExample2244)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.allowedResponse.situation.json", () => {
		 const dataelementExample2245 = require("../stu3-resources/DataElement-MessageDefinition.allowedResponse.situation.json");
		 expect(dataelementValidateFunction(dataelementExample2245)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.base.json", () => {
		 const dataelementExample2246 = require("../stu3-resources/DataElement-MessageDefinition.base.json");
		 expect(dataelementValidateFunction(dataelementExample2246)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.category.json", () => {
		 const dataelementExample2247 = require("../stu3-resources/DataElement-MessageDefinition.category.json");
		 expect(dataelementValidateFunction(dataelementExample2247)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.contact.json", () => {
		 const dataelementExample2248 = require("../stu3-resources/DataElement-MessageDefinition.contact.json");
		 expect(dataelementValidateFunction(dataelementExample2248)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.copyright.json", () => {
		 const dataelementExample2249 = require("../stu3-resources/DataElement-MessageDefinition.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample2249)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.date.json", () => {
		 const dataelementExample2250 = require("../stu3-resources/DataElement-MessageDefinition.date.json");
		 expect(dataelementValidateFunction(dataelementExample2250)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.description.json", () => {
		 const dataelementExample2251 = require("../stu3-resources/DataElement-MessageDefinition.description.json");
		 expect(dataelementValidateFunction(dataelementExample2251)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.event.json", () => {
		 const dataelementExample2252 = require("../stu3-resources/DataElement-MessageDefinition.event.json");
		 expect(dataelementValidateFunction(dataelementExample2252)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.experimental.json", () => {
		 const dataelementExample2253 = require("../stu3-resources/DataElement-MessageDefinition.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample2253)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.focus.code.json", () => {
		 const dataelementExample2254 = require("../stu3-resources/DataElement-MessageDefinition.focus.code.json");
		 expect(dataelementValidateFunction(dataelementExample2254)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.focus.json", () => {
		 const dataelementExample2255 = require("../stu3-resources/DataElement-MessageDefinition.focus.json");
		 expect(dataelementValidateFunction(dataelementExample2255)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.focus.max.json", () => {
		 const dataelementExample2256 = require("../stu3-resources/DataElement-MessageDefinition.focus.max.json");
		 expect(dataelementValidateFunction(dataelementExample2256)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.focus.min.json", () => {
		 const dataelementExample2257 = require("../stu3-resources/DataElement-MessageDefinition.focus.min.json");
		 expect(dataelementValidateFunction(dataelementExample2257)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.focus.profile.json", () => {
		 const dataelementExample2258 = require("../stu3-resources/DataElement-MessageDefinition.focus.profile.json");
		 expect(dataelementValidateFunction(dataelementExample2258)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.identifier.json", () => {
		 const dataelementExample2259 = require("../stu3-resources/DataElement-MessageDefinition.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2259)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.json", () => {
		 const dataelementExample2260 = require("../stu3-resources/DataElement-MessageDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample2260)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.jurisdiction.json", () => {
		 const dataelementExample2261 = require("../stu3-resources/DataElement-MessageDefinition.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample2261)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.name.json", () => {
		 const dataelementExample2262 = require("../stu3-resources/DataElement-MessageDefinition.name.json");
		 expect(dataelementValidateFunction(dataelementExample2262)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.parent.json", () => {
		 const dataelementExample2263 = require("../stu3-resources/DataElement-MessageDefinition.parent.json");
		 expect(dataelementValidateFunction(dataelementExample2263)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.publisher.json", () => {
		 const dataelementExample2264 = require("../stu3-resources/DataElement-MessageDefinition.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample2264)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.purpose.json", () => {
		 const dataelementExample2265 = require("../stu3-resources/DataElement-MessageDefinition.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample2265)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.replaces.json", () => {
		 const dataelementExample2266 = require("../stu3-resources/DataElement-MessageDefinition.replaces.json");
		 expect(dataelementValidateFunction(dataelementExample2266)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.responseRequired.json", () => {
		 const dataelementExample2267 = require("../stu3-resources/DataElement-MessageDefinition.responseRequired.json");
		 expect(dataelementValidateFunction(dataelementExample2267)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.status.json", () => {
		 const dataelementExample2268 = require("../stu3-resources/DataElement-MessageDefinition.status.json");
		 expect(dataelementValidateFunction(dataelementExample2268)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.title.json", () => {
		 const dataelementExample2269 = require("../stu3-resources/DataElement-MessageDefinition.title.json");
		 expect(dataelementValidateFunction(dataelementExample2269)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.url.json", () => {
		 const dataelementExample2270 = require("../stu3-resources/DataElement-MessageDefinition.url.json");
		 expect(dataelementValidateFunction(dataelementExample2270)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.useContext.json", () => {
		 const dataelementExample2271 = require("../stu3-resources/DataElement-MessageDefinition.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample2271)).toBe(true);
	 });

	 test("validate DataElement-MessageDefinition.version.json", () => {
		 const dataelementExample2272 = require("../stu3-resources/DataElement-MessageDefinition.version.json");
		 expect(dataelementValidateFunction(dataelementExample2272)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.author.json", () => {
		 const dataelementExample2273 = require("../stu3-resources/DataElement-MessageHeader.author.json");
		 expect(dataelementValidateFunction(dataelementExample2273)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.destination.endpoint.json", () => {
		 const dataelementExample2274 = require("../stu3-resources/DataElement-MessageHeader.destination.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample2274)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.destination.json", () => {
		 const dataelementExample2275 = require("../stu3-resources/DataElement-MessageHeader.destination.json");
		 expect(dataelementValidateFunction(dataelementExample2275)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.destination.name.json", () => {
		 const dataelementExample2276 = require("../stu3-resources/DataElement-MessageHeader.destination.name.json");
		 expect(dataelementValidateFunction(dataelementExample2276)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.destination.target.json", () => {
		 const dataelementExample2277 = require("../stu3-resources/DataElement-MessageHeader.destination.target.json");
		 expect(dataelementValidateFunction(dataelementExample2277)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.enterer.json", () => {
		 const dataelementExample2278 = require("../stu3-resources/DataElement-MessageHeader.enterer.json");
		 expect(dataelementValidateFunction(dataelementExample2278)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.event.json", () => {
		 const dataelementExample2279 = require("../stu3-resources/DataElement-MessageHeader.event.json");
		 expect(dataelementValidateFunction(dataelementExample2279)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.focus.json", () => {
		 const dataelementExample2280 = require("../stu3-resources/DataElement-MessageHeader.focus.json");
		 expect(dataelementValidateFunction(dataelementExample2280)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.json", () => {
		 const dataelementExample2281 = require("../stu3-resources/DataElement-MessageHeader.json");
		 expect(dataelementValidateFunction(dataelementExample2281)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.reason.json", () => {
		 const dataelementExample2282 = require("../stu3-resources/DataElement-MessageHeader.reason.json");
		 expect(dataelementValidateFunction(dataelementExample2282)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.receiver.json", () => {
		 const dataelementExample2283 = require("../stu3-resources/DataElement-MessageHeader.receiver.json");
		 expect(dataelementValidateFunction(dataelementExample2283)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.response.code.json", () => {
		 const dataelementExample2284 = require("../stu3-resources/DataElement-MessageHeader.response.code.json");
		 expect(dataelementValidateFunction(dataelementExample2284)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.response.details.json", () => {
		 const dataelementExample2285 = require("../stu3-resources/DataElement-MessageHeader.response.details.json");
		 expect(dataelementValidateFunction(dataelementExample2285)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.response.identifier.json", () => {
		 const dataelementExample2286 = require("../stu3-resources/DataElement-MessageHeader.response.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2286)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.response.json", () => {
		 const dataelementExample2287 = require("../stu3-resources/DataElement-MessageHeader.response.json");
		 expect(dataelementValidateFunction(dataelementExample2287)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.responsible.json", () => {
		 const dataelementExample2288 = require("../stu3-resources/DataElement-MessageHeader.responsible.json");
		 expect(dataelementValidateFunction(dataelementExample2288)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.sender.json", () => {
		 const dataelementExample2289 = require("../stu3-resources/DataElement-MessageHeader.sender.json");
		 expect(dataelementValidateFunction(dataelementExample2289)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.source.contact.json", () => {
		 const dataelementExample2290 = require("../stu3-resources/DataElement-MessageHeader.source.contact.json");
		 expect(dataelementValidateFunction(dataelementExample2290)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.source.endpoint.json", () => {
		 const dataelementExample2291 = require("../stu3-resources/DataElement-MessageHeader.source.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample2291)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.source.json", () => {
		 const dataelementExample2292 = require("../stu3-resources/DataElement-MessageHeader.source.json");
		 expect(dataelementValidateFunction(dataelementExample2292)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.source.name.json", () => {
		 const dataelementExample2293 = require("../stu3-resources/DataElement-MessageHeader.source.name.json");
		 expect(dataelementValidateFunction(dataelementExample2293)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.source.software.json", () => {
		 const dataelementExample2294 = require("../stu3-resources/DataElement-MessageHeader.source.software.json");
		 expect(dataelementValidateFunction(dataelementExample2294)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.source.version.json", () => {
		 const dataelementExample2295 = require("../stu3-resources/DataElement-MessageHeader.source.version.json");
		 expect(dataelementValidateFunction(dataelementExample2295)).toBe(true);
	 });

	 test("validate DataElement-MessageHeader.timestamp.json", () => {
		 const dataelementExample2296 = require("../stu3-resources/DataElement-MessageHeader.timestamp.json");
		 expect(dataelementValidateFunction(dataelementExample2296)).toBe(true);
	 });

	 test("validate DataElement-Meta.json", () => {
		 const dataelementExample2297 = require("../stu3-resources/DataElement-Meta.json");
		 expect(dataelementValidateFunction(dataelementExample2297)).toBe(true);
	 });

	 test("validate DataElement-Meta.lastUpdated.json", () => {
		 const dataelementExample2298 = require("../stu3-resources/DataElement-Meta.lastUpdated.json");
		 expect(dataelementValidateFunction(dataelementExample2298)).toBe(true);
	 });

	 test("validate DataElement-Meta.profile.json", () => {
		 const dataelementExample2299 = require("../stu3-resources/DataElement-Meta.profile.json");
		 expect(dataelementValidateFunction(dataelementExample2299)).toBe(true);
	 });

	 test("validate DataElement-Meta.security.json", () => {
		 const dataelementExample2300 = require("../stu3-resources/DataElement-Meta.security.json");
		 expect(dataelementValidateFunction(dataelementExample2300)).toBe(true);
	 });

	 test("validate DataElement-Meta.tag.json", () => {
		 const dataelementExample2301 = require("../stu3-resources/DataElement-Meta.tag.json");
		 expect(dataelementValidateFunction(dataelementExample2301)).toBe(true);
	 });

	 test("validate DataElement-Meta.versionId.json", () => {
		 const dataelementExample2302 = require("../stu3-resources/DataElement-Meta.versionId.json");
		 expect(dataelementValidateFunction(dataelementExample2302)).toBe(true);
	 });

	 test("validate DataElement-Money.json", () => {
		 const dataelementExample2303 = require("../stu3-resources/DataElement-Money.json");
		 expect(dataelementValidateFunction(dataelementExample2303)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.contact.json", () => {
		 const dataelementExample2304 = require("../stu3-resources/DataElement-NamingSystem.contact.json");
		 expect(dataelementValidateFunction(dataelementExample2304)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.date.json", () => {
		 const dataelementExample2305 = require("../stu3-resources/DataElement-NamingSystem.date.json");
		 expect(dataelementValidateFunction(dataelementExample2305)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.description.json", () => {
		 const dataelementExample2306 = require("../stu3-resources/DataElement-NamingSystem.description.json");
		 expect(dataelementValidateFunction(dataelementExample2306)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.json", () => {
		 const dataelementExample2307 = require("../stu3-resources/DataElement-NamingSystem.json");
		 expect(dataelementValidateFunction(dataelementExample2307)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.jurisdiction.json", () => {
		 const dataelementExample2308 = require("../stu3-resources/DataElement-NamingSystem.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample2308)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.kind.json", () => {
		 const dataelementExample2309 = require("../stu3-resources/DataElement-NamingSystem.kind.json");
		 expect(dataelementValidateFunction(dataelementExample2309)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.name.json", () => {
		 const dataelementExample2310 = require("../stu3-resources/DataElement-NamingSystem.name.json");
		 expect(dataelementValidateFunction(dataelementExample2310)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.publisher.json", () => {
		 const dataelementExample2311 = require("../stu3-resources/DataElement-NamingSystem.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample2311)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.replacedBy.json", () => {
		 const dataelementExample2312 = require("../stu3-resources/DataElement-NamingSystem.replacedBy.json");
		 expect(dataelementValidateFunction(dataelementExample2312)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.responsible.json", () => {
		 const dataelementExample2313 = require("../stu3-resources/DataElement-NamingSystem.responsible.json");
		 expect(dataelementValidateFunction(dataelementExample2313)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.status.json", () => {
		 const dataelementExample2314 = require("../stu3-resources/DataElement-NamingSystem.status.json");
		 expect(dataelementValidateFunction(dataelementExample2314)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.type.json", () => {
		 const dataelementExample2315 = require("../stu3-resources/DataElement-NamingSystem.type.json");
		 expect(dataelementValidateFunction(dataelementExample2315)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.uniqueId.comment.json", () => {
		 const dataelementExample2316 = require("../stu3-resources/DataElement-NamingSystem.uniqueId.comment.json");
		 expect(dataelementValidateFunction(dataelementExample2316)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.uniqueId.json", () => {
		 const dataelementExample2317 = require("../stu3-resources/DataElement-NamingSystem.uniqueId.json");
		 expect(dataelementValidateFunction(dataelementExample2317)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.uniqueId.period.json", () => {
		 const dataelementExample2318 = require("../stu3-resources/DataElement-NamingSystem.uniqueId.period.json");
		 expect(dataelementValidateFunction(dataelementExample2318)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.uniqueId.preferred.json", () => {
		 const dataelementExample2319 = require("../stu3-resources/DataElement-NamingSystem.uniqueId.preferred.json");
		 expect(dataelementValidateFunction(dataelementExample2319)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.uniqueId.type.json", () => {
		 const dataelementExample2320 = require("../stu3-resources/DataElement-NamingSystem.uniqueId.type.json");
		 expect(dataelementValidateFunction(dataelementExample2320)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.uniqueId.value.json", () => {
		 const dataelementExample2321 = require("../stu3-resources/DataElement-NamingSystem.uniqueId.value.json");
		 expect(dataelementValidateFunction(dataelementExample2321)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.usage.json", () => {
		 const dataelementExample2322 = require("../stu3-resources/DataElement-NamingSystem.usage.json");
		 expect(dataelementValidateFunction(dataelementExample2322)).toBe(true);
	 });

	 test("validate DataElement-NamingSystem.useContext.json", () => {
		 const dataelementExample2323 = require("../stu3-resources/DataElement-NamingSystem.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample2323)).toBe(true);
	 });

	 test("validate DataElement-Narrative.div.json", () => {
		 const dataelementExample2324 = require("../stu3-resources/DataElement-Narrative.div.json");
		 expect(dataelementValidateFunction(dataelementExample2324)).toBe(true);
	 });

	 test("validate DataElement-Narrative.json", () => {
		 const dataelementExample2325 = require("../stu3-resources/DataElement-Narrative.json");
		 expect(dataelementValidateFunction(dataelementExample2325)).toBe(true);
	 });

	 test("validate DataElement-Narrative.status.json", () => {
		 const dataelementExample2326 = require("../stu3-resources/DataElement-Narrative.status.json");
		 expect(dataelementValidateFunction(dataelementExample2326)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.allergyIntolerance.json", () => {
		 const dataelementExample2327 = require("../stu3-resources/DataElement-NutritionOrder.allergyIntolerance.json");
		 expect(dataelementValidateFunction(dataelementExample2327)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.dateTime.json", () => {
		 const dataelementExample2328 = require("../stu3-resources/DataElement-NutritionOrder.dateTime.json");
		 expect(dataelementValidateFunction(dataelementExample2328)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.encounter.json", () => {
		 const dataelementExample2329 = require("../stu3-resources/DataElement-NutritionOrder.encounter.json");
		 expect(dataelementValidateFunction(dataelementExample2329)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.additiveProductName.json", () => {
		 const dataelementExample2330 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.additiveProductName.json");
		 expect(dataelementValidateFunction(dataelementExample2330)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.additiveType.json", () => {
		 const dataelementExample2331 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.additiveType.json");
		 expect(dataelementValidateFunction(dataelementExample2331)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.administration.json", () => {
		 const dataelementExample2332 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.administration.json");
		 expect(dataelementValidateFunction(dataelementExample2332)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.administration.quantity.json", () => {
		 const dataelementExample2333 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.administration.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample2333)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.administration.rateX.json", () => {
		 const dataelementExample2334 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.administration.rateX.json");
		 expect(dataelementValidateFunction(dataelementExample2334)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.administration.schedule.json", () => {
		 const dataelementExample2335 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.administration.schedule.json");
		 expect(dataelementValidateFunction(dataelementExample2335)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.administrationInstruction.json", () => {
		 const dataelementExample2336 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.administrationInstruction.json");
		 expect(dataelementValidateFunction(dataelementExample2336)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.baseFormulaProductName.json", () => {
		 const dataelementExample2337 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.baseFormulaProductName.json");
		 expect(dataelementValidateFunction(dataelementExample2337)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.baseFormulaType.json", () => {
		 const dataelementExample2338 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.baseFormulaType.json");
		 expect(dataelementValidateFunction(dataelementExample2338)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.caloricDensity.json", () => {
		 const dataelementExample2339 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.caloricDensity.json");
		 expect(dataelementValidateFunction(dataelementExample2339)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.json", () => {
		 const dataelementExample2340 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.json");
		 expect(dataelementValidateFunction(dataelementExample2340)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.maxVolumeToDeliver.json", () => {
		 const dataelementExample2341 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.maxVolumeToDeliver.json");
		 expect(dataelementValidateFunction(dataelementExample2341)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.enteralFormula.routeofAdministration.json", () => {
		 const dataelementExample2342 = require("../stu3-resources/DataElement-NutritionOrder.enteralFormula.routeofAdministration.json");
		 expect(dataelementValidateFunction(dataelementExample2342)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.excludeFoodModifier.json", () => {
		 const dataelementExample2343 = require("../stu3-resources/DataElement-NutritionOrder.excludeFoodModifier.json");
		 expect(dataelementValidateFunction(dataelementExample2343)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.foodPreferenceModifier.json", () => {
		 const dataelementExample2344 = require("../stu3-resources/DataElement-NutritionOrder.foodPreferenceModifier.json");
		 expect(dataelementValidateFunction(dataelementExample2344)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.identifier.json", () => {
		 const dataelementExample2345 = require("../stu3-resources/DataElement-NutritionOrder.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2345)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.json", () => {
		 const dataelementExample2346 = require("../stu3-resources/DataElement-NutritionOrder.json");
		 expect(dataelementValidateFunction(dataelementExample2346)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.oralDiet.fluidConsistencyType.json", () => {
		 const dataelementExample2347 = require("../stu3-resources/DataElement-NutritionOrder.oralDiet.fluidConsistencyType.json");
		 expect(dataelementValidateFunction(dataelementExample2347)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.oralDiet.instruction.json", () => {
		 const dataelementExample2348 = require("../stu3-resources/DataElement-NutritionOrder.oralDiet.instruction.json");
		 expect(dataelementValidateFunction(dataelementExample2348)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.oralDiet.json", () => {
		 const dataelementExample2349 = require("../stu3-resources/DataElement-NutritionOrder.oralDiet.json");
		 expect(dataelementValidateFunction(dataelementExample2349)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.oralDiet.nutrient.amount.json", () => {
		 const dataelementExample2350 = require("../stu3-resources/DataElement-NutritionOrder.oralDiet.nutrient.amount.json");
		 expect(dataelementValidateFunction(dataelementExample2350)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.oralDiet.nutrient.json", () => {
		 const dataelementExample2351 = require("../stu3-resources/DataElement-NutritionOrder.oralDiet.nutrient.json");
		 expect(dataelementValidateFunction(dataelementExample2351)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.oralDiet.nutrient.modifier.json", () => {
		 const dataelementExample2352 = require("../stu3-resources/DataElement-NutritionOrder.oralDiet.nutrient.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample2352)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.oralDiet.schedule.json", () => {
		 const dataelementExample2353 = require("../stu3-resources/DataElement-NutritionOrder.oralDiet.schedule.json");
		 expect(dataelementValidateFunction(dataelementExample2353)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.oralDiet.texture.foodType.json", () => {
		 const dataelementExample2354 = require("../stu3-resources/DataElement-NutritionOrder.oralDiet.texture.foodType.json");
		 expect(dataelementValidateFunction(dataelementExample2354)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.oralDiet.texture.json", () => {
		 const dataelementExample2355 = require("../stu3-resources/DataElement-NutritionOrder.oralDiet.texture.json");
		 expect(dataelementValidateFunction(dataelementExample2355)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.oralDiet.texture.modifier.json", () => {
		 const dataelementExample2356 = require("../stu3-resources/DataElement-NutritionOrder.oralDiet.texture.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample2356)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.oralDiet.type.json", () => {
		 const dataelementExample2357 = require("../stu3-resources/DataElement-NutritionOrder.oralDiet.type.json");
		 expect(dataelementValidateFunction(dataelementExample2357)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.orderer.json", () => {
		 const dataelementExample2358 = require("../stu3-resources/DataElement-NutritionOrder.orderer.json");
		 expect(dataelementValidateFunction(dataelementExample2358)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.patient.json", () => {
		 const dataelementExample2359 = require("../stu3-resources/DataElement-NutritionOrder.patient.json");
		 expect(dataelementValidateFunction(dataelementExample2359)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.status.json", () => {
		 const dataelementExample2360 = require("../stu3-resources/DataElement-NutritionOrder.status.json");
		 expect(dataelementValidateFunction(dataelementExample2360)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.supplement.instruction.json", () => {
		 const dataelementExample2361 = require("../stu3-resources/DataElement-NutritionOrder.supplement.instruction.json");
		 expect(dataelementValidateFunction(dataelementExample2361)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.supplement.json", () => {
		 const dataelementExample2362 = require("../stu3-resources/DataElement-NutritionOrder.supplement.json");
		 expect(dataelementValidateFunction(dataelementExample2362)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.supplement.productName.json", () => {
		 const dataelementExample2363 = require("../stu3-resources/DataElement-NutritionOrder.supplement.productName.json");
		 expect(dataelementValidateFunction(dataelementExample2363)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.supplement.quantity.json", () => {
		 const dataelementExample2364 = require("../stu3-resources/DataElement-NutritionOrder.supplement.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample2364)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.supplement.schedule.json", () => {
		 const dataelementExample2365 = require("../stu3-resources/DataElement-NutritionOrder.supplement.schedule.json");
		 expect(dataelementValidateFunction(dataelementExample2365)).toBe(true);
	 });

	 test("validate DataElement-NutritionOrder.supplement.type.json", () => {
		 const dataelementExample2366 = require("../stu3-resources/DataElement-NutritionOrder.supplement.type.json");
		 expect(dataelementValidateFunction(dataelementExample2366)).toBe(true);
	 });

	 test("validate DataElement-Observation.basedOn.json", () => {
		 const dataelementExample2367 = require("../stu3-resources/DataElement-Observation.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample2367)).toBe(true);
	 });

	 test("validate DataElement-Observation.bodySite.json", () => {
		 const dataelementExample2368 = require("../stu3-resources/DataElement-Observation.bodySite.json");
		 expect(dataelementValidateFunction(dataelementExample2368)).toBe(true);
	 });

	 test("validate DataElement-Observation.category.json", () => {
		 const dataelementExample2369 = require("../stu3-resources/DataElement-Observation.category.json");
		 expect(dataelementValidateFunction(dataelementExample2369)).toBe(true);
	 });

	 test("validate DataElement-Observation.code.json", () => {
		 const dataelementExample2370 = require("../stu3-resources/DataElement-Observation.code.json");
		 expect(dataelementValidateFunction(dataelementExample2370)).toBe(true);
	 });

	 test("validate DataElement-Observation.comment.json", () => {
		 const dataelementExample2371 = require("../stu3-resources/DataElement-Observation.comment.json");
		 expect(dataelementValidateFunction(dataelementExample2371)).toBe(true);
	 });

	 test("validate DataElement-Observation.component.code.json", () => {
		 const dataelementExample2372 = require("../stu3-resources/DataElement-Observation.component.code.json");
		 expect(dataelementValidateFunction(dataelementExample2372)).toBe(true);
	 });

	 test("validate DataElement-Observation.component.dataAbsentReason.json", () => {
		 const dataelementExample2373 = require("../stu3-resources/DataElement-Observation.component.dataAbsentReason.json");
		 expect(dataelementValidateFunction(dataelementExample2373)).toBe(true);
	 });

	 test("validate DataElement-Observation.component.interpretation.json", () => {
		 const dataelementExample2374 = require("../stu3-resources/DataElement-Observation.component.interpretation.json");
		 expect(dataelementValidateFunction(dataelementExample2374)).toBe(true);
	 });

	 test("validate DataElement-Observation.component.json", () => {
		 const dataelementExample2375 = require("../stu3-resources/DataElement-Observation.component.json");
		 expect(dataelementValidateFunction(dataelementExample2375)).toBe(true);
	 });

	 test("validate DataElement-Observation.component.referenceRange.json", () => {
		 const dataelementExample2376 = require("../stu3-resources/DataElement-Observation.component.referenceRange.json");
		 expect(dataelementValidateFunction(dataelementExample2376)).toBe(true);
	 });

	 test("validate DataElement-Observation.component.valueX.json", () => {
		 const dataelementExample2377 = require("../stu3-resources/DataElement-Observation.component.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample2377)).toBe(true);
	 });

	 test("validate DataElement-Observation.context.json", () => {
		 const dataelementExample2378 = require("../stu3-resources/DataElement-Observation.context.json");
		 expect(dataelementValidateFunction(dataelementExample2378)).toBe(true);
	 });

	 test("validate DataElement-Observation.dataAbsentReason.json", () => {
		 const dataelementExample2379 = require("../stu3-resources/DataElement-Observation.dataAbsentReason.json");
		 expect(dataelementValidateFunction(dataelementExample2379)).toBe(true);
	 });

	 test("validate DataElement-Observation.device.json", () => {
		 const dataelementExample2380 = require("../stu3-resources/DataElement-Observation.device.json");
		 expect(dataelementValidateFunction(dataelementExample2380)).toBe(true);
	 });

	 test("validate DataElement-Observation.effectiveX.json", () => {
		 const dataelementExample2381 = require("../stu3-resources/DataElement-Observation.effectiveX.json");
		 expect(dataelementValidateFunction(dataelementExample2381)).toBe(true);
	 });

	 test("validate DataElement-Observation.identifier.json", () => {
		 const dataelementExample2382 = require("../stu3-resources/DataElement-Observation.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2382)).toBe(true);
	 });

	 test("validate DataElement-Observation.interpretation.json", () => {
		 const dataelementExample2383 = require("../stu3-resources/DataElement-Observation.interpretation.json");
		 expect(dataelementValidateFunction(dataelementExample2383)).toBe(true);
	 });

	 test("validate DataElement-Observation.issued.json", () => {
		 const dataelementExample2384 = require("../stu3-resources/DataElement-Observation.issued.json");
		 expect(dataelementValidateFunction(dataelementExample2384)).toBe(true);
	 });

	 test("validate DataElement-Observation.json", () => {
		 const dataelementExample2385 = require("../stu3-resources/DataElement-Observation.json");
		 expect(dataelementValidateFunction(dataelementExample2385)).toBe(true);
	 });

	 test("validate DataElement-Observation.method.json", () => {
		 const dataelementExample2386 = require("../stu3-resources/DataElement-Observation.method.json");
		 expect(dataelementValidateFunction(dataelementExample2386)).toBe(true);
	 });

	 test("validate DataElement-Observation.performer.json", () => {
		 const dataelementExample2387 = require("../stu3-resources/DataElement-Observation.performer.json");
		 expect(dataelementValidateFunction(dataelementExample2387)).toBe(true);
	 });

	 test("validate DataElement-Observation.referenceRange.age.json", () => {
		 const dataelementExample2388 = require("../stu3-resources/DataElement-Observation.referenceRange.age.json");
		 expect(dataelementValidateFunction(dataelementExample2388)).toBe(true);
	 });

	 test("validate DataElement-Observation.referenceRange.appliesTo.json", () => {
		 const dataelementExample2389 = require("../stu3-resources/DataElement-Observation.referenceRange.appliesTo.json");
		 expect(dataelementValidateFunction(dataelementExample2389)).toBe(true);
	 });

	 test("validate DataElement-Observation.referenceRange.high.json", () => {
		 const dataelementExample2390 = require("../stu3-resources/DataElement-Observation.referenceRange.high.json");
		 expect(dataelementValidateFunction(dataelementExample2390)).toBe(true);
	 });

	 test("validate DataElement-Observation.referenceRange.json", () => {
		 const dataelementExample2391 = require("../stu3-resources/DataElement-Observation.referenceRange.json");
		 expect(dataelementValidateFunction(dataelementExample2391)).toBe(true);
	 });

	 test("validate DataElement-Observation.referenceRange.low.json", () => {
		 const dataelementExample2392 = require("../stu3-resources/DataElement-Observation.referenceRange.low.json");
		 expect(dataelementValidateFunction(dataelementExample2392)).toBe(true);
	 });

	 test("validate DataElement-Observation.referenceRange.text.json", () => {
		 const dataelementExample2393 = require("../stu3-resources/DataElement-Observation.referenceRange.text.json");
		 expect(dataelementValidateFunction(dataelementExample2393)).toBe(true);
	 });

	 test("validate DataElement-Observation.referenceRange.type.json", () => {
		 const dataelementExample2394 = require("../stu3-resources/DataElement-Observation.referenceRange.type.json");
		 expect(dataelementValidateFunction(dataelementExample2394)).toBe(true);
	 });

	 test("validate DataElement-Observation.related.json", () => {
		 const dataelementExample2395 = require("../stu3-resources/DataElement-Observation.related.json");
		 expect(dataelementValidateFunction(dataelementExample2395)).toBe(true);
	 });

	 test("validate DataElement-Observation.related.target.json", () => {
		 const dataelementExample2396 = require("../stu3-resources/DataElement-Observation.related.target.json");
		 expect(dataelementValidateFunction(dataelementExample2396)).toBe(true);
	 });

	 test("validate DataElement-Observation.related.type.json", () => {
		 const dataelementExample2397 = require("../stu3-resources/DataElement-Observation.related.type.json");
		 expect(dataelementValidateFunction(dataelementExample2397)).toBe(true);
	 });

	 test("validate DataElement-Observation.specimen.json", () => {
		 const dataelementExample2398 = require("../stu3-resources/DataElement-Observation.specimen.json");
		 expect(dataelementValidateFunction(dataelementExample2398)).toBe(true);
	 });

	 test("validate DataElement-Observation.status.json", () => {
		 const dataelementExample2399 = require("../stu3-resources/DataElement-Observation.status.json");
		 expect(dataelementValidateFunction(dataelementExample2399)).toBe(true);
	 });

	 test("validate DataElement-Observation.subject.json", () => {
		 const dataelementExample2400 = require("../stu3-resources/DataElement-Observation.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2400)).toBe(true);
	 });

	 test("validate DataElement-Observation.valueX.json", () => {
		 const dataelementExample2401 = require("../stu3-resources/DataElement-Observation.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample2401)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.base.json", () => {
		 const dataelementExample2402 = require("../stu3-resources/DataElement-OperationDefinition.base.json");
		 expect(dataelementValidateFunction(dataelementExample2402)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.code.json", () => {
		 const dataelementExample2403 = require("../stu3-resources/DataElement-OperationDefinition.code.json");
		 expect(dataelementValidateFunction(dataelementExample2403)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.comment.json", () => {
		 const dataelementExample2404 = require("../stu3-resources/DataElement-OperationDefinition.comment.json");
		 expect(dataelementValidateFunction(dataelementExample2404)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.contact.json", () => {
		 const dataelementExample2405 = require("../stu3-resources/DataElement-OperationDefinition.contact.json");
		 expect(dataelementValidateFunction(dataelementExample2405)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.date.json", () => {
		 const dataelementExample2406 = require("../stu3-resources/DataElement-OperationDefinition.date.json");
		 expect(dataelementValidateFunction(dataelementExample2406)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.description.json", () => {
		 const dataelementExample2407 = require("../stu3-resources/DataElement-OperationDefinition.description.json");
		 expect(dataelementValidateFunction(dataelementExample2407)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.experimental.json", () => {
		 const dataelementExample2408 = require("../stu3-resources/DataElement-OperationDefinition.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample2408)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.idempotent.json", () => {
		 const dataelementExample2409 = require("../stu3-resources/DataElement-OperationDefinition.idempotent.json");
		 expect(dataelementValidateFunction(dataelementExample2409)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.instance.json", () => {
		 const dataelementExample2410 = require("../stu3-resources/DataElement-OperationDefinition.instance.json");
		 expect(dataelementValidateFunction(dataelementExample2410)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.json", () => {
		 const dataelementExample2411 = require("../stu3-resources/DataElement-OperationDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample2411)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.jurisdiction.json", () => {
		 const dataelementExample2412 = require("../stu3-resources/DataElement-OperationDefinition.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample2412)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.kind.json", () => {
		 const dataelementExample2413 = require("../stu3-resources/DataElement-OperationDefinition.kind.json");
		 expect(dataelementValidateFunction(dataelementExample2413)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.name.json", () => {
		 const dataelementExample2414 = require("../stu3-resources/DataElement-OperationDefinition.name.json");
		 expect(dataelementValidateFunction(dataelementExample2414)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.overload.comment.json", () => {
		 const dataelementExample2415 = require("../stu3-resources/DataElement-OperationDefinition.overload.comment.json");
		 expect(dataelementValidateFunction(dataelementExample2415)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.overload.json", () => {
		 const dataelementExample2416 = require("../stu3-resources/DataElement-OperationDefinition.overload.json");
		 expect(dataelementValidateFunction(dataelementExample2416)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.overload.parameterName.json", () => {
		 const dataelementExample2417 = require("../stu3-resources/DataElement-OperationDefinition.overload.parameterName.json");
		 expect(dataelementValidateFunction(dataelementExample2417)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.binding.json", () => {
		 const dataelementExample2418 = require("../stu3-resources/DataElement-OperationDefinition.parameter.binding.json");
		 expect(dataelementValidateFunction(dataelementExample2418)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.binding.strength.json", () => {
		 const dataelementExample2419 = require("../stu3-resources/DataElement-OperationDefinition.parameter.binding.strength.json");
		 expect(dataelementValidateFunction(dataelementExample2419)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.binding.valueSetX.json", () => {
		 const dataelementExample2420 = require("../stu3-resources/DataElement-OperationDefinition.parameter.binding.valueSetX.json");
		 expect(dataelementValidateFunction(dataelementExample2420)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.documentation.json", () => {
		 const dataelementExample2421 = require("../stu3-resources/DataElement-OperationDefinition.parameter.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample2421)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.json", () => {
		 const dataelementExample2422 = require("../stu3-resources/DataElement-OperationDefinition.parameter.json");
		 expect(dataelementValidateFunction(dataelementExample2422)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.max.json", () => {
		 const dataelementExample2423 = require("../stu3-resources/DataElement-OperationDefinition.parameter.max.json");
		 expect(dataelementValidateFunction(dataelementExample2423)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.min.json", () => {
		 const dataelementExample2424 = require("../stu3-resources/DataElement-OperationDefinition.parameter.min.json");
		 expect(dataelementValidateFunction(dataelementExample2424)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.name.json", () => {
		 const dataelementExample2425 = require("../stu3-resources/DataElement-OperationDefinition.parameter.name.json");
		 expect(dataelementValidateFunction(dataelementExample2425)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.part.json", () => {
		 const dataelementExample2426 = require("../stu3-resources/DataElement-OperationDefinition.parameter.part.json");
		 expect(dataelementValidateFunction(dataelementExample2426)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.profile.json", () => {
		 const dataelementExample2427 = require("../stu3-resources/DataElement-OperationDefinition.parameter.profile.json");
		 expect(dataelementValidateFunction(dataelementExample2427)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.searchType.json", () => {
		 const dataelementExample2428 = require("../stu3-resources/DataElement-OperationDefinition.parameter.searchType.json");
		 expect(dataelementValidateFunction(dataelementExample2428)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.type.json", () => {
		 const dataelementExample2429 = require("../stu3-resources/DataElement-OperationDefinition.parameter.type.json");
		 expect(dataelementValidateFunction(dataelementExample2429)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.parameter.use.json", () => {
		 const dataelementExample2430 = require("../stu3-resources/DataElement-OperationDefinition.parameter.use.json");
		 expect(dataelementValidateFunction(dataelementExample2430)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.publisher.json", () => {
		 const dataelementExample2431 = require("../stu3-resources/DataElement-OperationDefinition.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample2431)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.purpose.json", () => {
		 const dataelementExample2432 = require("../stu3-resources/DataElement-OperationDefinition.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample2432)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.resource.json", () => {
		 const dataelementExample2433 = require("../stu3-resources/DataElement-OperationDefinition.resource.json");
		 expect(dataelementValidateFunction(dataelementExample2433)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.status.json", () => {
		 const dataelementExample2434 = require("../stu3-resources/DataElement-OperationDefinition.status.json");
		 expect(dataelementValidateFunction(dataelementExample2434)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.system.json", () => {
		 const dataelementExample2435 = require("../stu3-resources/DataElement-OperationDefinition.system.json");
		 expect(dataelementValidateFunction(dataelementExample2435)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.type.json", () => {
		 const dataelementExample2436 = require("../stu3-resources/DataElement-OperationDefinition.type.json");
		 expect(dataelementValidateFunction(dataelementExample2436)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.url.json", () => {
		 const dataelementExample2437 = require("../stu3-resources/DataElement-OperationDefinition.url.json");
		 expect(dataelementValidateFunction(dataelementExample2437)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.useContext.json", () => {
		 const dataelementExample2438 = require("../stu3-resources/DataElement-OperationDefinition.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample2438)).toBe(true);
	 });

	 test("validate DataElement-OperationDefinition.version.json", () => {
		 const dataelementExample2439 = require("../stu3-resources/DataElement-OperationDefinition.version.json");
		 expect(dataelementValidateFunction(dataelementExample2439)).toBe(true);
	 });

	 test("validate DataElement-OperationOutcome.issue.code.json", () => {
		 const dataelementExample2440 = require("../stu3-resources/DataElement-OperationOutcome.issue.code.json");
		 expect(dataelementValidateFunction(dataelementExample2440)).toBe(true);
	 });

	 test("validate DataElement-OperationOutcome.issue.details.json", () => {
		 const dataelementExample2441 = require("../stu3-resources/DataElement-OperationOutcome.issue.details.json");
		 expect(dataelementValidateFunction(dataelementExample2441)).toBe(true);
	 });

	 test("validate DataElement-OperationOutcome.issue.diagnostics.json", () => {
		 const dataelementExample2442 = require("../stu3-resources/DataElement-OperationOutcome.issue.diagnostics.json");
		 expect(dataelementValidateFunction(dataelementExample2442)).toBe(true);
	 });

	 test("validate DataElement-OperationOutcome.issue.expression.json", () => {
		 const dataelementExample2443 = require("../stu3-resources/DataElement-OperationOutcome.issue.expression.json");
		 expect(dataelementValidateFunction(dataelementExample2443)).toBe(true);
	 });

	 test("validate DataElement-OperationOutcome.issue.json", () => {
		 const dataelementExample2444 = require("../stu3-resources/DataElement-OperationOutcome.issue.json");
		 expect(dataelementValidateFunction(dataelementExample2444)).toBe(true);
	 });

	 test("validate DataElement-OperationOutcome.issue.location.json", () => {
		 const dataelementExample2445 = require("../stu3-resources/DataElement-OperationOutcome.issue.location.json");
		 expect(dataelementValidateFunction(dataelementExample2445)).toBe(true);
	 });

	 test("validate DataElement-OperationOutcome.issue.severity.json", () => {
		 const dataelementExample2446 = require("../stu3-resources/DataElement-OperationOutcome.issue.severity.json");
		 expect(dataelementValidateFunction(dataelementExample2446)).toBe(true);
	 });

	 test("validate DataElement-OperationOutcome.json", () => {
		 const dataelementExample2447 = require("../stu3-resources/DataElement-OperationOutcome.json");
		 expect(dataelementValidateFunction(dataelementExample2447)).toBe(true);
	 });

	 test("validate DataElement-Organization.active.json", () => {
		 const dataelementExample2448 = require("../stu3-resources/DataElement-Organization.active.json");
		 expect(dataelementValidateFunction(dataelementExample2448)).toBe(true);
	 });

	 test("validate DataElement-Organization.address.json", () => {
		 const dataelementExample2449 = require("../stu3-resources/DataElement-Organization.address.json");
		 expect(dataelementValidateFunction(dataelementExample2449)).toBe(true);
	 });

	 test("validate DataElement-Organization.alias.json", () => {
		 const dataelementExample2450 = require("../stu3-resources/DataElement-Organization.alias.json");
		 expect(dataelementValidateFunction(dataelementExample2450)).toBe(true);
	 });

	 test("validate DataElement-Organization.contact.address.json", () => {
		 const dataelementExample2451 = require("../stu3-resources/DataElement-Organization.contact.address.json");
		 expect(dataelementValidateFunction(dataelementExample2451)).toBe(true);
	 });

	 test("validate DataElement-Organization.contact.json", () => {
		 const dataelementExample2452 = require("../stu3-resources/DataElement-Organization.contact.json");
		 expect(dataelementValidateFunction(dataelementExample2452)).toBe(true);
	 });

	 test("validate DataElement-Organization.contact.name.json", () => {
		 const dataelementExample2453 = require("../stu3-resources/DataElement-Organization.contact.name.json");
		 expect(dataelementValidateFunction(dataelementExample2453)).toBe(true);
	 });

	 test("validate DataElement-Organization.contact.purpose.json", () => {
		 const dataelementExample2454 = require("../stu3-resources/DataElement-Organization.contact.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample2454)).toBe(true);
	 });

	 test("validate DataElement-Organization.contact.telecom.json", () => {
		 const dataelementExample2455 = require("../stu3-resources/DataElement-Organization.contact.telecom.json");
		 expect(dataelementValidateFunction(dataelementExample2455)).toBe(true);
	 });

	 test("validate DataElement-Organization.endpoint.json", () => {
		 const dataelementExample2456 = require("../stu3-resources/DataElement-Organization.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample2456)).toBe(true);
	 });

	 test("validate DataElement-Organization.identifier.json", () => {
		 const dataelementExample2457 = require("../stu3-resources/DataElement-Organization.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2457)).toBe(true);
	 });

	 test("validate DataElement-Organization.json", () => {
		 const dataelementExample2458 = require("../stu3-resources/DataElement-Organization.json");
		 expect(dataelementValidateFunction(dataelementExample2458)).toBe(true);
	 });

	 test("validate DataElement-Organization.name.json", () => {
		 const dataelementExample2459 = require("../stu3-resources/DataElement-Organization.name.json");
		 expect(dataelementValidateFunction(dataelementExample2459)).toBe(true);
	 });

	 test("validate DataElement-Organization.partOf.json", () => {
		 const dataelementExample2460 = require("../stu3-resources/DataElement-Organization.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample2460)).toBe(true);
	 });

	 test("validate DataElement-Organization.telecom.json", () => {
		 const dataelementExample2461 = require("../stu3-resources/DataElement-Organization.telecom.json");
		 expect(dataelementValidateFunction(dataelementExample2461)).toBe(true);
	 });

	 test("validate DataElement-Organization.type.json", () => {
		 const dataelementExample2462 = require("../stu3-resources/DataElement-Organization.type.json");
		 expect(dataelementValidateFunction(dataelementExample2462)).toBe(true);
	 });

	 test("validate DataElement-ParameterDefinition.documentation.json", () => {
		 const dataelementExample2463 = require("../stu3-resources/DataElement-ParameterDefinition.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample2463)).toBe(true);
	 });

	 test("validate DataElement-ParameterDefinition.json", () => {
		 const dataelementExample2464 = require("../stu3-resources/DataElement-ParameterDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample2464)).toBe(true);
	 });

	 test("validate DataElement-ParameterDefinition.max.json", () => {
		 const dataelementExample2465 = require("../stu3-resources/DataElement-ParameterDefinition.max.json");
		 expect(dataelementValidateFunction(dataelementExample2465)).toBe(true);
	 });

	 test("validate DataElement-ParameterDefinition.min.json", () => {
		 const dataelementExample2466 = require("../stu3-resources/DataElement-ParameterDefinition.min.json");
		 expect(dataelementValidateFunction(dataelementExample2466)).toBe(true);
	 });

	 test("validate DataElement-ParameterDefinition.name.json", () => {
		 const dataelementExample2467 = require("../stu3-resources/DataElement-ParameterDefinition.name.json");
		 expect(dataelementValidateFunction(dataelementExample2467)).toBe(true);
	 });

	 test("validate DataElement-ParameterDefinition.profile.json", () => {
		 const dataelementExample2468 = require("../stu3-resources/DataElement-ParameterDefinition.profile.json");
		 expect(dataelementValidateFunction(dataelementExample2468)).toBe(true);
	 });

	 test("validate DataElement-ParameterDefinition.type.json", () => {
		 const dataelementExample2469 = require("../stu3-resources/DataElement-ParameterDefinition.type.json");
		 expect(dataelementValidateFunction(dataelementExample2469)).toBe(true);
	 });

	 test("validate DataElement-ParameterDefinition.use.json", () => {
		 const dataelementExample2470 = require("../stu3-resources/DataElement-ParameterDefinition.use.json");
		 expect(dataelementValidateFunction(dataelementExample2470)).toBe(true);
	 });

	 test("validate DataElement-Parameters.json", () => {
		 const dataelementExample2471 = require("../stu3-resources/DataElement-Parameters.json");
		 expect(dataelementValidateFunction(dataelementExample2471)).toBe(true);
	 });

	 test("validate DataElement-Parameters.parameter.json", () => {
		 const dataelementExample2472 = require("../stu3-resources/DataElement-Parameters.parameter.json");
		 expect(dataelementValidateFunction(dataelementExample2472)).toBe(true);
	 });

	 test("validate DataElement-Parameters.parameter.name.json", () => {
		 const dataelementExample2473 = require("../stu3-resources/DataElement-Parameters.parameter.name.json");
		 expect(dataelementValidateFunction(dataelementExample2473)).toBe(true);
	 });

	 test("validate DataElement-Parameters.parameter.part.json", () => {
		 const dataelementExample2474 = require("../stu3-resources/DataElement-Parameters.parameter.part.json");
		 expect(dataelementValidateFunction(dataelementExample2474)).toBe(true);
	 });

	 test("validate DataElement-Parameters.parameter.resource.json", () => {
		 const dataelementExample2475 = require("../stu3-resources/DataElement-Parameters.parameter.resource.json");
		 expect(dataelementValidateFunction(dataelementExample2475)).toBe(true);
	 });

	 test("validate DataElement-Parameters.parameter.valueX.json", () => {
		 const dataelementExample2476 = require("../stu3-resources/DataElement-Parameters.parameter.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample2476)).toBe(true);
	 });

	 test("validate DataElement-Patient.active.json", () => {
		 const dataelementExample2477 = require("../stu3-resources/DataElement-Patient.active.json");
		 expect(dataelementValidateFunction(dataelementExample2477)).toBe(true);
	 });

	 test("validate DataElement-Patient.address.json", () => {
		 const dataelementExample2478 = require("../stu3-resources/DataElement-Patient.address.json");
		 expect(dataelementValidateFunction(dataelementExample2478)).toBe(true);
	 });

	 test("validate DataElement-Patient.animal.breed.json", () => {
		 const dataelementExample2479 = require("../stu3-resources/DataElement-Patient.animal.breed.json");
		 expect(dataelementValidateFunction(dataelementExample2479)).toBe(true);
	 });

	 test("validate DataElement-Patient.animal.genderStatus.json", () => {
		 const dataelementExample2480 = require("../stu3-resources/DataElement-Patient.animal.genderStatus.json");
		 expect(dataelementValidateFunction(dataelementExample2480)).toBe(true);
	 });

	 test("validate DataElement-Patient.animal.json", () => {
		 const dataelementExample2481 = require("../stu3-resources/DataElement-Patient.animal.json");
		 expect(dataelementValidateFunction(dataelementExample2481)).toBe(true);
	 });

	 test("validate DataElement-Patient.animal.species.json", () => {
		 const dataelementExample2482 = require("../stu3-resources/DataElement-Patient.animal.species.json");
		 expect(dataelementValidateFunction(dataelementExample2482)).toBe(true);
	 });

	 test("validate DataElement-Patient.birthDate.json", () => {
		 const dataelementExample2483 = require("../stu3-resources/DataElement-Patient.birthDate.json");
		 expect(dataelementValidateFunction(dataelementExample2483)).toBe(true);
	 });

	 test("validate DataElement-Patient.communication.json", () => {
		 const dataelementExample2484 = require("../stu3-resources/DataElement-Patient.communication.json");
		 expect(dataelementValidateFunction(dataelementExample2484)).toBe(true);
	 });

	 test("validate DataElement-Patient.communication.language.json", () => {
		 const dataelementExample2485 = require("../stu3-resources/DataElement-Patient.communication.language.json");
		 expect(dataelementValidateFunction(dataelementExample2485)).toBe(true);
	 });

	 test("validate DataElement-Patient.communication.preferred.json", () => {
		 const dataelementExample2486 = require("../stu3-resources/DataElement-Patient.communication.preferred.json");
		 expect(dataelementValidateFunction(dataelementExample2486)).toBe(true);
	 });

	 test("validate DataElement-Patient.contact.address.json", () => {
		 const dataelementExample2487 = require("../stu3-resources/DataElement-Patient.contact.address.json");
		 expect(dataelementValidateFunction(dataelementExample2487)).toBe(true);
	 });

	 test("validate DataElement-Patient.contact.gender.json", () => {
		 const dataelementExample2488 = require("../stu3-resources/DataElement-Patient.contact.gender.json");
		 expect(dataelementValidateFunction(dataelementExample2488)).toBe(true);
	 });

	 test("validate DataElement-Patient.contact.json", () => {
		 const dataelementExample2489 = require("../stu3-resources/DataElement-Patient.contact.json");
		 expect(dataelementValidateFunction(dataelementExample2489)).toBe(true);
	 });

	 test("validate DataElement-Patient.contact.name.json", () => {
		 const dataelementExample2490 = require("../stu3-resources/DataElement-Patient.contact.name.json");
		 expect(dataelementValidateFunction(dataelementExample2490)).toBe(true);
	 });

	 test("validate DataElement-Patient.contact.organization.json", () => {
		 const dataelementExample2491 = require("../stu3-resources/DataElement-Patient.contact.organization.json");
		 expect(dataelementValidateFunction(dataelementExample2491)).toBe(true);
	 });

	 test("validate DataElement-Patient.contact.period.json", () => {
		 const dataelementExample2492 = require("../stu3-resources/DataElement-Patient.contact.period.json");
		 expect(dataelementValidateFunction(dataelementExample2492)).toBe(true);
	 });

	 test("validate DataElement-Patient.contact.relationship.json", () => {
		 const dataelementExample2493 = require("../stu3-resources/DataElement-Patient.contact.relationship.json");
		 expect(dataelementValidateFunction(dataelementExample2493)).toBe(true);
	 });

	 test("validate DataElement-Patient.contact.telecom.json", () => {
		 const dataelementExample2494 = require("../stu3-resources/DataElement-Patient.contact.telecom.json");
		 expect(dataelementValidateFunction(dataelementExample2494)).toBe(true);
	 });

	 test("validate DataElement-Patient.deceasedX.json", () => {
		 const dataelementExample2495 = require("../stu3-resources/DataElement-Patient.deceasedX.json");
		 expect(dataelementValidateFunction(dataelementExample2495)).toBe(true);
	 });

	 test("validate DataElement-Patient.gender.json", () => {
		 const dataelementExample2496 = require("../stu3-resources/DataElement-Patient.gender.json");
		 expect(dataelementValidateFunction(dataelementExample2496)).toBe(true);
	 });

	 test("validate DataElement-Patient.generalPractitioner.json", () => {
		 const dataelementExample2497 = require("../stu3-resources/DataElement-Patient.generalPractitioner.json");
		 expect(dataelementValidateFunction(dataelementExample2497)).toBe(true);
	 });

	 test("validate DataElement-Patient.identifier.json", () => {
		 const dataelementExample2498 = require("../stu3-resources/DataElement-Patient.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2498)).toBe(true);
	 });

	 test("validate DataElement-Patient.json", () => {
		 const dataelementExample2499 = require("../stu3-resources/DataElement-Patient.json");
		 expect(dataelementValidateFunction(dataelementExample2499)).toBe(true);
	 });

	 test("validate DataElement-Patient.link.json", () => {
		 const dataelementExample2500 = require("../stu3-resources/DataElement-Patient.link.json");
		 expect(dataelementValidateFunction(dataelementExample2500)).toBe(true);
	 });

	 test("validate DataElement-Patient.link.other.json", () => {
		 const dataelementExample2501 = require("../stu3-resources/DataElement-Patient.link.other.json");
		 expect(dataelementValidateFunction(dataelementExample2501)).toBe(true);
	 });

	 test("validate DataElement-Patient.link.type.json", () => {
		 const dataelementExample2502 = require("../stu3-resources/DataElement-Patient.link.type.json");
		 expect(dataelementValidateFunction(dataelementExample2502)).toBe(true);
	 });

	 test("validate DataElement-Patient.managingOrganization.json", () => {
		 const dataelementExample2503 = require("../stu3-resources/DataElement-Patient.managingOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample2503)).toBe(true);
	 });

	 test("validate DataElement-Patient.maritalStatus.json", () => {
		 const dataelementExample2504 = require("../stu3-resources/DataElement-Patient.maritalStatus.json");
		 expect(dataelementValidateFunction(dataelementExample2504)).toBe(true);
	 });

	 test("validate DataElement-Patient.multipleBirthX.json", () => {
		 const dataelementExample2505 = require("../stu3-resources/DataElement-Patient.multipleBirthX.json");
		 expect(dataelementValidateFunction(dataelementExample2505)).toBe(true);
	 });

	 test("validate DataElement-Patient.name.json", () => {
		 const dataelementExample2506 = require("../stu3-resources/DataElement-Patient.name.json");
		 expect(dataelementValidateFunction(dataelementExample2506)).toBe(true);
	 });

	 test("validate DataElement-Patient.photo.json", () => {
		 const dataelementExample2507 = require("../stu3-resources/DataElement-Patient.photo.json");
		 expect(dataelementValidateFunction(dataelementExample2507)).toBe(true);
	 });

	 test("validate DataElement-Patient.telecom.json", () => {
		 const dataelementExample2508 = require("../stu3-resources/DataElement-Patient.telecom.json");
		 expect(dataelementValidateFunction(dataelementExample2508)).toBe(true);
	 });

	 test("validate DataElement-PaymentNotice.created.json", () => {
		 const dataelementExample2509 = require("../stu3-resources/DataElement-PaymentNotice.created.json");
		 expect(dataelementValidateFunction(dataelementExample2509)).toBe(true);
	 });

	 test("validate DataElement-PaymentNotice.identifier.json", () => {
		 const dataelementExample2510 = require("../stu3-resources/DataElement-PaymentNotice.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2510)).toBe(true);
	 });

	 test("validate DataElement-PaymentNotice.json", () => {
		 const dataelementExample2511 = require("../stu3-resources/DataElement-PaymentNotice.json");
		 expect(dataelementValidateFunction(dataelementExample2511)).toBe(true);
	 });

	 test("validate DataElement-PaymentNotice.organization.json", () => {
		 const dataelementExample2512 = require("../stu3-resources/DataElement-PaymentNotice.organization.json");
		 expect(dataelementValidateFunction(dataelementExample2512)).toBe(true);
	 });

	 test("validate DataElement-PaymentNotice.paymentStatus.json", () => {
		 const dataelementExample2513 = require("../stu3-resources/DataElement-PaymentNotice.paymentStatus.json");
		 expect(dataelementValidateFunction(dataelementExample2513)).toBe(true);
	 });

	 test("validate DataElement-PaymentNotice.provider.json", () => {
		 const dataelementExample2514 = require("../stu3-resources/DataElement-PaymentNotice.provider.json");
		 expect(dataelementValidateFunction(dataelementExample2514)).toBe(true);
	 });

	 test("validate DataElement-PaymentNotice.request.json", () => {
		 const dataelementExample2515 = require("../stu3-resources/DataElement-PaymentNotice.request.json");
		 expect(dataelementValidateFunction(dataelementExample2515)).toBe(true);
	 });

	 test("validate DataElement-PaymentNotice.response.json", () => {
		 const dataelementExample2516 = require("../stu3-resources/DataElement-PaymentNotice.response.json");
		 expect(dataelementValidateFunction(dataelementExample2516)).toBe(true);
	 });

	 test("validate DataElement-PaymentNotice.status.json", () => {
		 const dataelementExample2517 = require("../stu3-resources/DataElement-PaymentNotice.status.json");
		 expect(dataelementValidateFunction(dataelementExample2517)).toBe(true);
	 });

	 test("validate DataElement-PaymentNotice.statusDate.json", () => {
		 const dataelementExample2518 = require("../stu3-resources/DataElement-PaymentNotice.statusDate.json");
		 expect(dataelementValidateFunction(dataelementExample2518)).toBe(true);
	 });

	 test("validate DataElement-PaymentNotice.target.json", () => {
		 const dataelementExample2519 = require("../stu3-resources/DataElement-PaymentNotice.target.json");
		 expect(dataelementValidateFunction(dataelementExample2519)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.created.json", () => {
		 const dataelementExample2520 = require("../stu3-resources/DataElement-PaymentReconciliation.created.json");
		 expect(dataelementValidateFunction(dataelementExample2520)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.detail.amount.json", () => {
		 const dataelementExample2521 = require("../stu3-resources/DataElement-PaymentReconciliation.detail.amount.json");
		 expect(dataelementValidateFunction(dataelementExample2521)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.detail.date.json", () => {
		 const dataelementExample2522 = require("../stu3-resources/DataElement-PaymentReconciliation.detail.date.json");
		 expect(dataelementValidateFunction(dataelementExample2522)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.detail.json", () => {
		 const dataelementExample2523 = require("../stu3-resources/DataElement-PaymentReconciliation.detail.json");
		 expect(dataelementValidateFunction(dataelementExample2523)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.detail.payee.json", () => {
		 const dataelementExample2524 = require("../stu3-resources/DataElement-PaymentReconciliation.detail.payee.json");
		 expect(dataelementValidateFunction(dataelementExample2524)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.detail.request.json", () => {
		 const dataelementExample2525 = require("../stu3-resources/DataElement-PaymentReconciliation.detail.request.json");
		 expect(dataelementValidateFunction(dataelementExample2525)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.detail.response.json", () => {
		 const dataelementExample2526 = require("../stu3-resources/DataElement-PaymentReconciliation.detail.response.json");
		 expect(dataelementValidateFunction(dataelementExample2526)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.detail.submitter.json", () => {
		 const dataelementExample2527 = require("../stu3-resources/DataElement-PaymentReconciliation.detail.submitter.json");
		 expect(dataelementValidateFunction(dataelementExample2527)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.detail.type.json", () => {
		 const dataelementExample2528 = require("../stu3-resources/DataElement-PaymentReconciliation.detail.type.json");
		 expect(dataelementValidateFunction(dataelementExample2528)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.disposition.json", () => {
		 const dataelementExample2529 = require("../stu3-resources/DataElement-PaymentReconciliation.disposition.json");
		 expect(dataelementValidateFunction(dataelementExample2529)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.form.json", () => {
		 const dataelementExample2530 = require("../stu3-resources/DataElement-PaymentReconciliation.form.json");
		 expect(dataelementValidateFunction(dataelementExample2530)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.identifier.json", () => {
		 const dataelementExample2531 = require("../stu3-resources/DataElement-PaymentReconciliation.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2531)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.json", () => {
		 const dataelementExample2532 = require("../stu3-resources/DataElement-PaymentReconciliation.json");
		 expect(dataelementValidateFunction(dataelementExample2532)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.organization.json", () => {
		 const dataelementExample2533 = require("../stu3-resources/DataElement-PaymentReconciliation.organization.json");
		 expect(dataelementValidateFunction(dataelementExample2533)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.outcome.json", () => {
		 const dataelementExample2534 = require("../stu3-resources/DataElement-PaymentReconciliation.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample2534)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.period.json", () => {
		 const dataelementExample2535 = require("../stu3-resources/DataElement-PaymentReconciliation.period.json");
		 expect(dataelementValidateFunction(dataelementExample2535)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.processNote.json", () => {
		 const dataelementExample2536 = require("../stu3-resources/DataElement-PaymentReconciliation.processNote.json");
		 expect(dataelementValidateFunction(dataelementExample2536)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.processNote.text.json", () => {
		 const dataelementExample2537 = require("../stu3-resources/DataElement-PaymentReconciliation.processNote.text.json");
		 expect(dataelementValidateFunction(dataelementExample2537)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.processNote.type.json", () => {
		 const dataelementExample2538 = require("../stu3-resources/DataElement-PaymentReconciliation.processNote.type.json");
		 expect(dataelementValidateFunction(dataelementExample2538)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.request.json", () => {
		 const dataelementExample2539 = require("../stu3-resources/DataElement-PaymentReconciliation.request.json");
		 expect(dataelementValidateFunction(dataelementExample2539)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.requestOrganization.json", () => {
		 const dataelementExample2540 = require("../stu3-resources/DataElement-PaymentReconciliation.requestOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample2540)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.requestProvider.json", () => {
		 const dataelementExample2541 = require("../stu3-resources/DataElement-PaymentReconciliation.requestProvider.json");
		 expect(dataelementValidateFunction(dataelementExample2541)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.status.json", () => {
		 const dataelementExample2542 = require("../stu3-resources/DataElement-PaymentReconciliation.status.json");
		 expect(dataelementValidateFunction(dataelementExample2542)).toBe(true);
	 });

	 test("validate DataElement-PaymentReconciliation.total.json", () => {
		 const dataelementExample2543 = require("../stu3-resources/DataElement-PaymentReconciliation.total.json");
		 expect(dataelementValidateFunction(dataelementExample2543)).toBe(true);
	 });

	 test("validate DataElement-Period.end.json", () => {
		 const dataelementExample2544 = require("../stu3-resources/DataElement-Period.end.json");
		 expect(dataelementValidateFunction(dataelementExample2544)).toBe(true);
	 });

	 test("validate DataElement-Period.json", () => {
		 const dataelementExample2545 = require("../stu3-resources/DataElement-Period.json");
		 expect(dataelementValidateFunction(dataelementExample2545)).toBe(true);
	 });

	 test("validate DataElement-Period.start.json", () => {
		 const dataelementExample2546 = require("../stu3-resources/DataElement-Period.start.json");
		 expect(dataelementValidateFunction(dataelementExample2546)).toBe(true);
	 });

	 test("validate DataElement-Person.active.json", () => {
		 const dataelementExample2547 = require("../stu3-resources/DataElement-Person.active.json");
		 expect(dataelementValidateFunction(dataelementExample2547)).toBe(true);
	 });

	 test("validate DataElement-Person.address.json", () => {
		 const dataelementExample2548 = require("../stu3-resources/DataElement-Person.address.json");
		 expect(dataelementValidateFunction(dataelementExample2548)).toBe(true);
	 });

	 test("validate DataElement-Person.birthDate.json", () => {
		 const dataelementExample2549 = require("../stu3-resources/DataElement-Person.birthDate.json");
		 expect(dataelementValidateFunction(dataelementExample2549)).toBe(true);
	 });

	 test("validate DataElement-Person.gender.json", () => {
		 const dataelementExample2550 = require("../stu3-resources/DataElement-Person.gender.json");
		 expect(dataelementValidateFunction(dataelementExample2550)).toBe(true);
	 });

	 test("validate DataElement-Person.identifier.json", () => {
		 const dataelementExample2551 = require("../stu3-resources/DataElement-Person.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2551)).toBe(true);
	 });

	 test("validate DataElement-Person.json", () => {
		 const dataelementExample2552 = require("../stu3-resources/DataElement-Person.json");
		 expect(dataelementValidateFunction(dataelementExample2552)).toBe(true);
	 });

	 test("validate DataElement-Person.link.assurance.json", () => {
		 const dataelementExample2553 = require("../stu3-resources/DataElement-Person.link.assurance.json");
		 expect(dataelementValidateFunction(dataelementExample2553)).toBe(true);
	 });

	 test("validate DataElement-Person.link.json", () => {
		 const dataelementExample2554 = require("../stu3-resources/DataElement-Person.link.json");
		 expect(dataelementValidateFunction(dataelementExample2554)).toBe(true);
	 });

	 test("validate DataElement-Person.link.target.json", () => {
		 const dataelementExample2555 = require("../stu3-resources/DataElement-Person.link.target.json");
		 expect(dataelementValidateFunction(dataelementExample2555)).toBe(true);
	 });

	 test("validate DataElement-Person.managingOrganization.json", () => {
		 const dataelementExample2556 = require("../stu3-resources/DataElement-Person.managingOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample2556)).toBe(true);
	 });

	 test("validate DataElement-Person.name.json", () => {
		 const dataelementExample2557 = require("../stu3-resources/DataElement-Person.name.json");
		 expect(dataelementValidateFunction(dataelementExample2557)).toBe(true);
	 });

	 test("validate DataElement-Person.photo.json", () => {
		 const dataelementExample2558 = require("../stu3-resources/DataElement-Person.photo.json");
		 expect(dataelementValidateFunction(dataelementExample2558)).toBe(true);
	 });

	 test("validate DataElement-Person.telecom.json", () => {
		 const dataelementExample2559 = require("../stu3-resources/DataElement-Person.telecom.json");
		 expect(dataelementValidateFunction(dataelementExample2559)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.action.json", () => {
		 const dataelementExample2560 = require("../stu3-resources/DataElement-PlanDefinition.action.action.json");
		 expect(dataelementValidateFunction(dataelementExample2560)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.cardinalityBehavior.json", () => {
		 const dataelementExample2561 = require("../stu3-resources/DataElement-PlanDefinition.action.cardinalityBehavior.json");
		 expect(dataelementValidateFunction(dataelementExample2561)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.code.json", () => {
		 const dataelementExample2562 = require("../stu3-resources/DataElement-PlanDefinition.action.code.json");
		 expect(dataelementValidateFunction(dataelementExample2562)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.condition.description.json", () => {
		 const dataelementExample2563 = require("../stu3-resources/DataElement-PlanDefinition.action.condition.description.json");
		 expect(dataelementValidateFunction(dataelementExample2563)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.condition.expression.json", () => {
		 const dataelementExample2564 = require("../stu3-resources/DataElement-PlanDefinition.action.condition.expression.json");
		 expect(dataelementValidateFunction(dataelementExample2564)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.condition.json", () => {
		 const dataelementExample2565 = require("../stu3-resources/DataElement-PlanDefinition.action.condition.json");
		 expect(dataelementValidateFunction(dataelementExample2565)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.condition.kind.json", () => {
		 const dataelementExample2566 = require("../stu3-resources/DataElement-PlanDefinition.action.condition.kind.json");
		 expect(dataelementValidateFunction(dataelementExample2566)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.condition.language.json", () => {
		 const dataelementExample2567 = require("../stu3-resources/DataElement-PlanDefinition.action.condition.language.json");
		 expect(dataelementValidateFunction(dataelementExample2567)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.definition.json", () => {
		 const dataelementExample2568 = require("../stu3-resources/DataElement-PlanDefinition.action.definition.json");
		 expect(dataelementValidateFunction(dataelementExample2568)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.description.json", () => {
		 const dataelementExample2569 = require("../stu3-resources/DataElement-PlanDefinition.action.description.json");
		 expect(dataelementValidateFunction(dataelementExample2569)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.documentation.json", () => {
		 const dataelementExample2570 = require("../stu3-resources/DataElement-PlanDefinition.action.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample2570)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.dynamicValue.description.json", () => {
		 const dataelementExample2571 = require("../stu3-resources/DataElement-PlanDefinition.action.dynamicValue.description.json");
		 expect(dataelementValidateFunction(dataelementExample2571)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.dynamicValue.expression.json", () => {
		 const dataelementExample2572 = require("../stu3-resources/DataElement-PlanDefinition.action.dynamicValue.expression.json");
		 expect(dataelementValidateFunction(dataelementExample2572)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.dynamicValue.json", () => {
		 const dataelementExample2573 = require("../stu3-resources/DataElement-PlanDefinition.action.dynamicValue.json");
		 expect(dataelementValidateFunction(dataelementExample2573)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.dynamicValue.language.json", () => {
		 const dataelementExample2574 = require("../stu3-resources/DataElement-PlanDefinition.action.dynamicValue.language.json");
		 expect(dataelementValidateFunction(dataelementExample2574)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.dynamicValue.path.json", () => {
		 const dataelementExample2575 = require("../stu3-resources/DataElement-PlanDefinition.action.dynamicValue.path.json");
		 expect(dataelementValidateFunction(dataelementExample2575)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.goalId.json", () => {
		 const dataelementExample2576 = require("../stu3-resources/DataElement-PlanDefinition.action.goalId.json");
		 expect(dataelementValidateFunction(dataelementExample2576)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.groupingBehavior.json", () => {
		 const dataelementExample2577 = require("../stu3-resources/DataElement-PlanDefinition.action.groupingBehavior.json");
		 expect(dataelementValidateFunction(dataelementExample2577)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.input.json", () => {
		 const dataelementExample2578 = require("../stu3-resources/DataElement-PlanDefinition.action.input.json");
		 expect(dataelementValidateFunction(dataelementExample2578)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.json", () => {
		 const dataelementExample2579 = require("../stu3-resources/DataElement-PlanDefinition.action.json");
		 expect(dataelementValidateFunction(dataelementExample2579)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.label.json", () => {
		 const dataelementExample2580 = require("../stu3-resources/DataElement-PlanDefinition.action.label.json");
		 expect(dataelementValidateFunction(dataelementExample2580)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.output.json", () => {
		 const dataelementExample2581 = require("../stu3-resources/DataElement-PlanDefinition.action.output.json");
		 expect(dataelementValidateFunction(dataelementExample2581)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.participant.json", () => {
		 const dataelementExample2582 = require("../stu3-resources/DataElement-PlanDefinition.action.participant.json");
		 expect(dataelementValidateFunction(dataelementExample2582)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.participant.role.json", () => {
		 const dataelementExample2583 = require("../stu3-resources/DataElement-PlanDefinition.action.participant.role.json");
		 expect(dataelementValidateFunction(dataelementExample2583)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.participant.type.json", () => {
		 const dataelementExample2584 = require("../stu3-resources/DataElement-PlanDefinition.action.participant.type.json");
		 expect(dataelementValidateFunction(dataelementExample2584)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.precheckBehavior.json", () => {
		 const dataelementExample2585 = require("../stu3-resources/DataElement-PlanDefinition.action.precheckBehavior.json");
		 expect(dataelementValidateFunction(dataelementExample2585)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.reason.json", () => {
		 const dataelementExample2586 = require("../stu3-resources/DataElement-PlanDefinition.action.reason.json");
		 expect(dataelementValidateFunction(dataelementExample2586)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.relatedAction.actionId.json", () => {
		 const dataelementExample2587 = require("../stu3-resources/DataElement-PlanDefinition.action.relatedAction.actionId.json");
		 expect(dataelementValidateFunction(dataelementExample2587)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.relatedAction.json", () => {
		 const dataelementExample2588 = require("../stu3-resources/DataElement-PlanDefinition.action.relatedAction.json");
		 expect(dataelementValidateFunction(dataelementExample2588)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.relatedAction.offsetX.json", () => {
		 const dataelementExample2589 = require("../stu3-resources/DataElement-PlanDefinition.action.relatedAction.offsetX.json");
		 expect(dataelementValidateFunction(dataelementExample2589)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.relatedAction.relationship.json", () => {
		 const dataelementExample2590 = require("../stu3-resources/DataElement-PlanDefinition.action.relatedAction.relationship.json");
		 expect(dataelementValidateFunction(dataelementExample2590)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.requiredBehavior.json", () => {
		 const dataelementExample2591 = require("../stu3-resources/DataElement-PlanDefinition.action.requiredBehavior.json");
		 expect(dataelementValidateFunction(dataelementExample2591)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.selectionBehavior.json", () => {
		 const dataelementExample2592 = require("../stu3-resources/DataElement-PlanDefinition.action.selectionBehavior.json");
		 expect(dataelementValidateFunction(dataelementExample2592)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.textEquivalent.json", () => {
		 const dataelementExample2593 = require("../stu3-resources/DataElement-PlanDefinition.action.textEquivalent.json");
		 expect(dataelementValidateFunction(dataelementExample2593)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.timingX.json", () => {
		 const dataelementExample2594 = require("../stu3-resources/DataElement-PlanDefinition.action.timingX.json");
		 expect(dataelementValidateFunction(dataelementExample2594)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.title.json", () => {
		 const dataelementExample2595 = require("../stu3-resources/DataElement-PlanDefinition.action.title.json");
		 expect(dataelementValidateFunction(dataelementExample2595)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.transform.json", () => {
		 const dataelementExample2596 = require("../stu3-resources/DataElement-PlanDefinition.action.transform.json");
		 expect(dataelementValidateFunction(dataelementExample2596)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.triggerDefinition.json", () => {
		 const dataelementExample2597 = require("../stu3-resources/DataElement-PlanDefinition.action.triggerDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample2597)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.action.type.json", () => {
		 const dataelementExample2598 = require("../stu3-resources/DataElement-PlanDefinition.action.type.json");
		 expect(dataelementValidateFunction(dataelementExample2598)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.approvalDate.json", () => {
		 const dataelementExample2599 = require("../stu3-resources/DataElement-PlanDefinition.approvalDate.json");
		 expect(dataelementValidateFunction(dataelementExample2599)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.contact.json", () => {
		 const dataelementExample2600 = require("../stu3-resources/DataElement-PlanDefinition.contact.json");
		 expect(dataelementValidateFunction(dataelementExample2600)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.contributor.json", () => {
		 const dataelementExample2601 = require("../stu3-resources/DataElement-PlanDefinition.contributor.json");
		 expect(dataelementValidateFunction(dataelementExample2601)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.copyright.json", () => {
		 const dataelementExample2602 = require("../stu3-resources/DataElement-PlanDefinition.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample2602)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.date.json", () => {
		 const dataelementExample2603 = require("../stu3-resources/DataElement-PlanDefinition.date.json");
		 expect(dataelementValidateFunction(dataelementExample2603)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.description.json", () => {
		 const dataelementExample2604 = require("../stu3-resources/DataElement-PlanDefinition.description.json");
		 expect(dataelementValidateFunction(dataelementExample2604)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.effectivePeriod.json", () => {
		 const dataelementExample2605 = require("../stu3-resources/DataElement-PlanDefinition.effectivePeriod.json");
		 expect(dataelementValidateFunction(dataelementExample2605)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.experimental.json", () => {
		 const dataelementExample2606 = require("../stu3-resources/DataElement-PlanDefinition.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample2606)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.goal.addresses.json", () => {
		 const dataelementExample2607 = require("../stu3-resources/DataElement-PlanDefinition.goal.addresses.json");
		 expect(dataelementValidateFunction(dataelementExample2607)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.goal.category.json", () => {
		 const dataelementExample2608 = require("../stu3-resources/DataElement-PlanDefinition.goal.category.json");
		 expect(dataelementValidateFunction(dataelementExample2608)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.goal.description.json", () => {
		 const dataelementExample2609 = require("../stu3-resources/DataElement-PlanDefinition.goal.description.json");
		 expect(dataelementValidateFunction(dataelementExample2609)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.goal.documentation.json", () => {
		 const dataelementExample2610 = require("../stu3-resources/DataElement-PlanDefinition.goal.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample2610)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.goal.json", () => {
		 const dataelementExample2611 = require("../stu3-resources/DataElement-PlanDefinition.goal.json");
		 expect(dataelementValidateFunction(dataelementExample2611)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.goal.priority.json", () => {
		 const dataelementExample2612 = require("../stu3-resources/DataElement-PlanDefinition.goal.priority.json");
		 expect(dataelementValidateFunction(dataelementExample2612)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.goal.start.json", () => {
		 const dataelementExample2613 = require("../stu3-resources/DataElement-PlanDefinition.goal.start.json");
		 expect(dataelementValidateFunction(dataelementExample2613)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.goal.target.detailX.json", () => {
		 const dataelementExample2614 = require("../stu3-resources/DataElement-PlanDefinition.goal.target.detailX.json");
		 expect(dataelementValidateFunction(dataelementExample2614)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.goal.target.due.json", () => {
		 const dataelementExample2615 = require("../stu3-resources/DataElement-PlanDefinition.goal.target.due.json");
		 expect(dataelementValidateFunction(dataelementExample2615)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.goal.target.json", () => {
		 const dataelementExample2616 = require("../stu3-resources/DataElement-PlanDefinition.goal.target.json");
		 expect(dataelementValidateFunction(dataelementExample2616)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.goal.target.measure.json", () => {
		 const dataelementExample2617 = require("../stu3-resources/DataElement-PlanDefinition.goal.target.measure.json");
		 expect(dataelementValidateFunction(dataelementExample2617)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.identifier.json", () => {
		 const dataelementExample2618 = require("../stu3-resources/DataElement-PlanDefinition.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2618)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.json", () => {
		 const dataelementExample2619 = require("../stu3-resources/DataElement-PlanDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample2619)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.jurisdiction.json", () => {
		 const dataelementExample2620 = require("../stu3-resources/DataElement-PlanDefinition.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample2620)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.lastReviewDate.json", () => {
		 const dataelementExample2621 = require("../stu3-resources/DataElement-PlanDefinition.lastReviewDate.json");
		 expect(dataelementValidateFunction(dataelementExample2621)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.library.json", () => {
		 const dataelementExample2622 = require("../stu3-resources/DataElement-PlanDefinition.library.json");
		 expect(dataelementValidateFunction(dataelementExample2622)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.name.json", () => {
		 const dataelementExample2623 = require("../stu3-resources/DataElement-PlanDefinition.name.json");
		 expect(dataelementValidateFunction(dataelementExample2623)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.publisher.json", () => {
		 const dataelementExample2624 = require("../stu3-resources/DataElement-PlanDefinition.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample2624)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.purpose.json", () => {
		 const dataelementExample2625 = require("../stu3-resources/DataElement-PlanDefinition.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample2625)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.relatedArtifact.json", () => {
		 const dataelementExample2626 = require("../stu3-resources/DataElement-PlanDefinition.relatedArtifact.json");
		 expect(dataelementValidateFunction(dataelementExample2626)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.status.json", () => {
		 const dataelementExample2627 = require("../stu3-resources/DataElement-PlanDefinition.status.json");
		 expect(dataelementValidateFunction(dataelementExample2627)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.title.json", () => {
		 const dataelementExample2628 = require("../stu3-resources/DataElement-PlanDefinition.title.json");
		 expect(dataelementValidateFunction(dataelementExample2628)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.topic.json", () => {
		 const dataelementExample2629 = require("../stu3-resources/DataElement-PlanDefinition.topic.json");
		 expect(dataelementValidateFunction(dataelementExample2629)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.type.json", () => {
		 const dataelementExample2630 = require("../stu3-resources/DataElement-PlanDefinition.type.json");
		 expect(dataelementValidateFunction(dataelementExample2630)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.url.json", () => {
		 const dataelementExample2631 = require("../stu3-resources/DataElement-PlanDefinition.url.json");
		 expect(dataelementValidateFunction(dataelementExample2631)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.usage.json", () => {
		 const dataelementExample2632 = require("../stu3-resources/DataElement-PlanDefinition.usage.json");
		 expect(dataelementValidateFunction(dataelementExample2632)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.useContext.json", () => {
		 const dataelementExample2633 = require("../stu3-resources/DataElement-PlanDefinition.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample2633)).toBe(true);
	 });

	 test("validate DataElement-PlanDefinition.version.json", () => {
		 const dataelementExample2634 = require("../stu3-resources/DataElement-PlanDefinition.version.json");
		 expect(dataelementValidateFunction(dataelementExample2634)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.active.json", () => {
		 const dataelementExample2635 = require("../stu3-resources/DataElement-Practitioner.active.json");
		 expect(dataelementValidateFunction(dataelementExample2635)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.address.json", () => {
		 const dataelementExample2636 = require("../stu3-resources/DataElement-Practitioner.address.json");
		 expect(dataelementValidateFunction(dataelementExample2636)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.birthDate.json", () => {
		 const dataelementExample2637 = require("../stu3-resources/DataElement-Practitioner.birthDate.json");
		 expect(dataelementValidateFunction(dataelementExample2637)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.communication.json", () => {
		 const dataelementExample2638 = require("../stu3-resources/DataElement-Practitioner.communication.json");
		 expect(dataelementValidateFunction(dataelementExample2638)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.gender.json", () => {
		 const dataelementExample2639 = require("../stu3-resources/DataElement-Practitioner.gender.json");
		 expect(dataelementValidateFunction(dataelementExample2639)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.identifier.json", () => {
		 const dataelementExample2640 = require("../stu3-resources/DataElement-Practitioner.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2640)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.json", () => {
		 const dataelementExample2641 = require("../stu3-resources/DataElement-Practitioner.json");
		 expect(dataelementValidateFunction(dataelementExample2641)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.name.json", () => {
		 const dataelementExample2642 = require("../stu3-resources/DataElement-Practitioner.name.json");
		 expect(dataelementValidateFunction(dataelementExample2642)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.photo.json", () => {
		 const dataelementExample2643 = require("../stu3-resources/DataElement-Practitioner.photo.json");
		 expect(dataelementValidateFunction(dataelementExample2643)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.qualification.code.json", () => {
		 const dataelementExample2644 = require("../stu3-resources/DataElement-Practitioner.qualification.code.json");
		 expect(dataelementValidateFunction(dataelementExample2644)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.qualification.identifier.json", () => {
		 const dataelementExample2645 = require("../stu3-resources/DataElement-Practitioner.qualification.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2645)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.qualification.issuer.json", () => {
		 const dataelementExample2646 = require("../stu3-resources/DataElement-Practitioner.qualification.issuer.json");
		 expect(dataelementValidateFunction(dataelementExample2646)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.qualification.json", () => {
		 const dataelementExample2647 = require("../stu3-resources/DataElement-Practitioner.qualification.json");
		 expect(dataelementValidateFunction(dataelementExample2647)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.qualification.period.json", () => {
		 const dataelementExample2648 = require("../stu3-resources/DataElement-Practitioner.qualification.period.json");
		 expect(dataelementValidateFunction(dataelementExample2648)).toBe(true);
	 });

	 test("validate DataElement-Practitioner.telecom.json", () => {
		 const dataelementExample2649 = require("../stu3-resources/DataElement-Practitioner.telecom.json");
		 expect(dataelementValidateFunction(dataelementExample2649)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.active.json", () => {
		 const dataelementExample2650 = require("../stu3-resources/DataElement-PractitionerRole.active.json");
		 expect(dataelementValidateFunction(dataelementExample2650)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.availabilityExceptions.json", () => {
		 const dataelementExample2651 = require("../stu3-resources/DataElement-PractitionerRole.availabilityExceptions.json");
		 expect(dataelementValidateFunction(dataelementExample2651)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.availableTime.allDay.json", () => {
		 const dataelementExample2652 = require("../stu3-resources/DataElement-PractitionerRole.availableTime.allDay.json");
		 expect(dataelementValidateFunction(dataelementExample2652)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.availableTime.availableEndTime.json", () => {
		 const dataelementExample2653 = require("../stu3-resources/DataElement-PractitionerRole.availableTime.availableEndTime.json");
		 expect(dataelementValidateFunction(dataelementExample2653)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.availableTime.availableStartTime.json", () => {
		 const dataelementExample2654 = require("../stu3-resources/DataElement-PractitionerRole.availableTime.availableStartTime.json");
		 expect(dataelementValidateFunction(dataelementExample2654)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.availableTime.daysOfWeek.json", () => {
		 const dataelementExample2655 = require("../stu3-resources/DataElement-PractitionerRole.availableTime.daysOfWeek.json");
		 expect(dataelementValidateFunction(dataelementExample2655)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.availableTime.json", () => {
		 const dataelementExample2656 = require("../stu3-resources/DataElement-PractitionerRole.availableTime.json");
		 expect(dataelementValidateFunction(dataelementExample2656)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.code.json", () => {
		 const dataelementExample2657 = require("../stu3-resources/DataElement-PractitionerRole.code.json");
		 expect(dataelementValidateFunction(dataelementExample2657)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.endpoint.json", () => {
		 const dataelementExample2658 = require("../stu3-resources/DataElement-PractitionerRole.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample2658)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.healthcareService.json", () => {
		 const dataelementExample2659 = require("../stu3-resources/DataElement-PractitionerRole.healthcareService.json");
		 expect(dataelementValidateFunction(dataelementExample2659)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.identifier.json", () => {
		 const dataelementExample2660 = require("../stu3-resources/DataElement-PractitionerRole.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2660)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.json", () => {
		 const dataelementExample2661 = require("../stu3-resources/DataElement-PractitionerRole.json");
		 expect(dataelementValidateFunction(dataelementExample2661)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.location.json", () => {
		 const dataelementExample2662 = require("../stu3-resources/DataElement-PractitionerRole.location.json");
		 expect(dataelementValidateFunction(dataelementExample2662)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.notAvailable.description.json", () => {
		 const dataelementExample2663 = require("../stu3-resources/DataElement-PractitionerRole.notAvailable.description.json");
		 expect(dataelementValidateFunction(dataelementExample2663)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.notAvailable.during.json", () => {
		 const dataelementExample2664 = require("../stu3-resources/DataElement-PractitionerRole.notAvailable.during.json");
		 expect(dataelementValidateFunction(dataelementExample2664)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.notAvailable.json", () => {
		 const dataelementExample2665 = require("../stu3-resources/DataElement-PractitionerRole.notAvailable.json");
		 expect(dataelementValidateFunction(dataelementExample2665)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.organization.json", () => {
		 const dataelementExample2666 = require("../stu3-resources/DataElement-PractitionerRole.organization.json");
		 expect(dataelementValidateFunction(dataelementExample2666)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.period.json", () => {
		 const dataelementExample2667 = require("../stu3-resources/DataElement-PractitionerRole.period.json");
		 expect(dataelementValidateFunction(dataelementExample2667)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.practitioner.json", () => {
		 const dataelementExample2668 = require("../stu3-resources/DataElement-PractitionerRole.practitioner.json");
		 expect(dataelementValidateFunction(dataelementExample2668)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.specialty.json", () => {
		 const dataelementExample2669 = require("../stu3-resources/DataElement-PractitionerRole.specialty.json");
		 expect(dataelementValidateFunction(dataelementExample2669)).toBe(true);
	 });

	 test("validate DataElement-PractitionerRole.telecom.json", () => {
		 const dataelementExample2670 = require("../stu3-resources/DataElement-PractitionerRole.telecom.json");
		 expect(dataelementValidateFunction(dataelementExample2670)).toBe(true);
	 });

	 test("validate DataElement-Procedure.basedOn.json", () => {
		 const dataelementExample2671 = require("../stu3-resources/DataElement-Procedure.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample2671)).toBe(true);
	 });

	 test("validate DataElement-Procedure.bodySite.json", () => {
		 const dataelementExample2672 = require("../stu3-resources/DataElement-Procedure.bodySite.json");
		 expect(dataelementValidateFunction(dataelementExample2672)).toBe(true);
	 });

	 test("validate DataElement-Procedure.category.json", () => {
		 const dataelementExample2673 = require("../stu3-resources/DataElement-Procedure.category.json");
		 expect(dataelementValidateFunction(dataelementExample2673)).toBe(true);
	 });

	 test("validate DataElement-Procedure.code.json", () => {
		 const dataelementExample2674 = require("../stu3-resources/DataElement-Procedure.code.json");
		 expect(dataelementValidateFunction(dataelementExample2674)).toBe(true);
	 });

	 test("validate DataElement-Procedure.complication.json", () => {
		 const dataelementExample2675 = require("../stu3-resources/DataElement-Procedure.complication.json");
		 expect(dataelementValidateFunction(dataelementExample2675)).toBe(true);
	 });

	 test("validate DataElement-Procedure.complicationDetail.json", () => {
		 const dataelementExample2676 = require("../stu3-resources/DataElement-Procedure.complicationDetail.json");
		 expect(dataelementValidateFunction(dataelementExample2676)).toBe(true);
	 });

	 test("validate DataElement-Procedure.context.json", () => {
		 const dataelementExample2677 = require("../stu3-resources/DataElement-Procedure.context.json");
		 expect(dataelementValidateFunction(dataelementExample2677)).toBe(true);
	 });

	 test("validate DataElement-Procedure.definition.json", () => {
		 const dataelementExample2678 = require("../stu3-resources/DataElement-Procedure.definition.json");
		 expect(dataelementValidateFunction(dataelementExample2678)).toBe(true);
	 });

	 test("validate DataElement-Procedure.focalDevice.action.json", () => {
		 const dataelementExample2679 = require("../stu3-resources/DataElement-Procedure.focalDevice.action.json");
		 expect(dataelementValidateFunction(dataelementExample2679)).toBe(true);
	 });

	 test("validate DataElement-Procedure.focalDevice.json", () => {
		 const dataelementExample2680 = require("../stu3-resources/DataElement-Procedure.focalDevice.json");
		 expect(dataelementValidateFunction(dataelementExample2680)).toBe(true);
	 });

	 test("validate DataElement-Procedure.focalDevice.manipulated.json", () => {
		 const dataelementExample2681 = require("../stu3-resources/DataElement-Procedure.focalDevice.manipulated.json");
		 expect(dataelementValidateFunction(dataelementExample2681)).toBe(true);
	 });

	 test("validate DataElement-Procedure.followUp.json", () => {
		 const dataelementExample2682 = require("../stu3-resources/DataElement-Procedure.followUp.json");
		 expect(dataelementValidateFunction(dataelementExample2682)).toBe(true);
	 });

	 test("validate DataElement-Procedure.identifier.json", () => {
		 const dataelementExample2683 = require("../stu3-resources/DataElement-Procedure.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2683)).toBe(true);
	 });

	 test("validate DataElement-Procedure.json", () => {
		 const dataelementExample2684 = require("../stu3-resources/DataElement-Procedure.json");
		 expect(dataelementValidateFunction(dataelementExample2684)).toBe(true);
	 });

	 test("validate DataElement-Procedure.location.json", () => {
		 const dataelementExample2685 = require("../stu3-resources/DataElement-Procedure.location.json");
		 expect(dataelementValidateFunction(dataelementExample2685)).toBe(true);
	 });

	 test("validate DataElement-Procedure.notDone.json", () => {
		 const dataelementExample2686 = require("../stu3-resources/DataElement-Procedure.notDone.json");
		 expect(dataelementValidateFunction(dataelementExample2686)).toBe(true);
	 });

	 test("validate DataElement-Procedure.notDoneReason.json", () => {
		 const dataelementExample2687 = require("../stu3-resources/DataElement-Procedure.notDoneReason.json");
		 expect(dataelementValidateFunction(dataelementExample2687)).toBe(true);
	 });

	 test("validate DataElement-Procedure.note.json", () => {
		 const dataelementExample2688 = require("../stu3-resources/DataElement-Procedure.note.json");
		 expect(dataelementValidateFunction(dataelementExample2688)).toBe(true);
	 });

	 test("validate DataElement-Procedure.outcome.json", () => {
		 const dataelementExample2689 = require("../stu3-resources/DataElement-Procedure.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample2689)).toBe(true);
	 });

	 test("validate DataElement-Procedure.partOf.json", () => {
		 const dataelementExample2690 = require("../stu3-resources/DataElement-Procedure.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample2690)).toBe(true);
	 });

	 test("validate DataElement-Procedure.performedX.json", () => {
		 const dataelementExample2691 = require("../stu3-resources/DataElement-Procedure.performedX.json");
		 expect(dataelementValidateFunction(dataelementExample2691)).toBe(true);
	 });

	 test("validate DataElement-Procedure.performer.actor.json", () => {
		 const dataelementExample2692 = require("../stu3-resources/DataElement-Procedure.performer.actor.json");
		 expect(dataelementValidateFunction(dataelementExample2692)).toBe(true);
	 });

	 test("validate DataElement-Procedure.performer.json", () => {
		 const dataelementExample2693 = require("../stu3-resources/DataElement-Procedure.performer.json");
		 expect(dataelementValidateFunction(dataelementExample2693)).toBe(true);
	 });

	 test("validate DataElement-Procedure.performer.onBehalfOf.json", () => {
		 const dataelementExample2694 = require("../stu3-resources/DataElement-Procedure.performer.onBehalfOf.json");
		 expect(dataelementValidateFunction(dataelementExample2694)).toBe(true);
	 });

	 test("validate DataElement-Procedure.performer.role.json", () => {
		 const dataelementExample2695 = require("../stu3-resources/DataElement-Procedure.performer.role.json");
		 expect(dataelementValidateFunction(dataelementExample2695)).toBe(true);
	 });

	 test("validate DataElement-Procedure.reasonCode.json", () => {
		 const dataelementExample2696 = require("../stu3-resources/DataElement-Procedure.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample2696)).toBe(true);
	 });

	 test("validate DataElement-Procedure.reasonReference.json", () => {
		 const dataelementExample2697 = require("../stu3-resources/DataElement-Procedure.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample2697)).toBe(true);
	 });

	 test("validate DataElement-Procedure.report.json", () => {
		 const dataelementExample2698 = require("../stu3-resources/DataElement-Procedure.report.json");
		 expect(dataelementValidateFunction(dataelementExample2698)).toBe(true);
	 });

	 test("validate DataElement-Procedure.status.json", () => {
		 const dataelementExample2699 = require("../stu3-resources/DataElement-Procedure.status.json");
		 expect(dataelementValidateFunction(dataelementExample2699)).toBe(true);
	 });

	 test("validate DataElement-Procedure.subject.json", () => {
		 const dataelementExample2700 = require("../stu3-resources/DataElement-Procedure.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2700)).toBe(true);
	 });

	 test("validate DataElement-Procedure.usedCode.json", () => {
		 const dataelementExample2701 = require("../stu3-resources/DataElement-Procedure.usedCode.json");
		 expect(dataelementValidateFunction(dataelementExample2701)).toBe(true);
	 });

	 test("validate DataElement-Procedure.usedReference.json", () => {
		 const dataelementExample2702 = require("../stu3-resources/DataElement-Procedure.usedReference.json");
		 expect(dataelementValidateFunction(dataelementExample2702)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.asNeededX.json", () => {
		 const dataelementExample2703 = require("../stu3-resources/DataElement-ProcedureRequest.asNeededX.json");
		 expect(dataelementValidateFunction(dataelementExample2703)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.authoredOn.json", () => {
		 const dataelementExample2704 = require("../stu3-resources/DataElement-ProcedureRequest.authoredOn.json");
		 expect(dataelementValidateFunction(dataelementExample2704)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.basedOn.json", () => {
		 const dataelementExample2705 = require("../stu3-resources/DataElement-ProcedureRequest.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample2705)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.bodySite.json", () => {
		 const dataelementExample2706 = require("../stu3-resources/DataElement-ProcedureRequest.bodySite.json");
		 expect(dataelementValidateFunction(dataelementExample2706)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.category.json", () => {
		 const dataelementExample2707 = require("../stu3-resources/DataElement-ProcedureRequest.category.json");
		 expect(dataelementValidateFunction(dataelementExample2707)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.code.json", () => {
		 const dataelementExample2708 = require("../stu3-resources/DataElement-ProcedureRequest.code.json");
		 expect(dataelementValidateFunction(dataelementExample2708)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.context.json", () => {
		 const dataelementExample2709 = require("../stu3-resources/DataElement-ProcedureRequest.context.json");
		 expect(dataelementValidateFunction(dataelementExample2709)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.definition.json", () => {
		 const dataelementExample2710 = require("../stu3-resources/DataElement-ProcedureRequest.definition.json");
		 expect(dataelementValidateFunction(dataelementExample2710)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.doNotPerform.json", () => {
		 const dataelementExample2711 = require("../stu3-resources/DataElement-ProcedureRequest.doNotPerform.json");
		 expect(dataelementValidateFunction(dataelementExample2711)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.identifier.json", () => {
		 const dataelementExample2712 = require("../stu3-resources/DataElement-ProcedureRequest.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2712)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.intent.json", () => {
		 const dataelementExample2713 = require("../stu3-resources/DataElement-ProcedureRequest.intent.json");
		 expect(dataelementValidateFunction(dataelementExample2713)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.json", () => {
		 const dataelementExample2714 = require("../stu3-resources/DataElement-ProcedureRequest.json");
		 expect(dataelementValidateFunction(dataelementExample2714)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.note.json", () => {
		 const dataelementExample2715 = require("../stu3-resources/DataElement-ProcedureRequest.note.json");
		 expect(dataelementValidateFunction(dataelementExample2715)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.occurrenceX.json", () => {
		 const dataelementExample2716 = require("../stu3-resources/DataElement-ProcedureRequest.occurrenceX.json");
		 expect(dataelementValidateFunction(dataelementExample2716)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.performer.json", () => {
		 const dataelementExample2717 = require("../stu3-resources/DataElement-ProcedureRequest.performer.json");
		 expect(dataelementValidateFunction(dataelementExample2717)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.performerType.json", () => {
		 const dataelementExample2718 = require("../stu3-resources/DataElement-ProcedureRequest.performerType.json");
		 expect(dataelementValidateFunction(dataelementExample2718)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.priority.json", () => {
		 const dataelementExample2719 = require("../stu3-resources/DataElement-ProcedureRequest.priority.json");
		 expect(dataelementValidateFunction(dataelementExample2719)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.reasonCode.json", () => {
		 const dataelementExample2720 = require("../stu3-resources/DataElement-ProcedureRequest.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample2720)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.reasonReference.json", () => {
		 const dataelementExample2721 = require("../stu3-resources/DataElement-ProcedureRequest.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample2721)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.relevantHistory.json", () => {
		 const dataelementExample2722 = require("../stu3-resources/DataElement-ProcedureRequest.relevantHistory.json");
		 expect(dataelementValidateFunction(dataelementExample2722)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.replaces.json", () => {
		 const dataelementExample2723 = require("../stu3-resources/DataElement-ProcedureRequest.replaces.json");
		 expect(dataelementValidateFunction(dataelementExample2723)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.requester.agent.json", () => {
		 const dataelementExample2724 = require("../stu3-resources/DataElement-ProcedureRequest.requester.agent.json");
		 expect(dataelementValidateFunction(dataelementExample2724)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.requester.json", () => {
		 const dataelementExample2725 = require("../stu3-resources/DataElement-ProcedureRequest.requester.json");
		 expect(dataelementValidateFunction(dataelementExample2725)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.requester.onBehalfOf.json", () => {
		 const dataelementExample2726 = require("../stu3-resources/DataElement-ProcedureRequest.requester.onBehalfOf.json");
		 expect(dataelementValidateFunction(dataelementExample2726)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.requisition.json", () => {
		 const dataelementExample2727 = require("../stu3-resources/DataElement-ProcedureRequest.requisition.json");
		 expect(dataelementValidateFunction(dataelementExample2727)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.specimen.json", () => {
		 const dataelementExample2728 = require("../stu3-resources/DataElement-ProcedureRequest.specimen.json");
		 expect(dataelementValidateFunction(dataelementExample2728)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.status.json", () => {
		 const dataelementExample2729 = require("../stu3-resources/DataElement-ProcedureRequest.status.json");
		 expect(dataelementValidateFunction(dataelementExample2729)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.subject.json", () => {
		 const dataelementExample2730 = require("../stu3-resources/DataElement-ProcedureRequest.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2730)).toBe(true);
	 });

	 test("validate DataElement-ProcedureRequest.supportingInfo.json", () => {
		 const dataelementExample2731 = require("../stu3-resources/DataElement-ProcedureRequest.supportingInfo.json");
		 expect(dataelementValidateFunction(dataelementExample2731)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.action.json", () => {
		 const dataelementExample2732 = require("../stu3-resources/DataElement-ProcessRequest.action.json");
		 expect(dataelementValidateFunction(dataelementExample2732)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.created.json", () => {
		 const dataelementExample2733 = require("../stu3-resources/DataElement-ProcessRequest.created.json");
		 expect(dataelementValidateFunction(dataelementExample2733)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.exclude.json", () => {
		 const dataelementExample2734 = require("../stu3-resources/DataElement-ProcessRequest.exclude.json");
		 expect(dataelementValidateFunction(dataelementExample2734)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.identifier.json", () => {
		 const dataelementExample2735 = require("../stu3-resources/DataElement-ProcessRequest.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2735)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.include.json", () => {
		 const dataelementExample2736 = require("../stu3-resources/DataElement-ProcessRequest.include.json");
		 expect(dataelementValidateFunction(dataelementExample2736)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.item.json", () => {
		 const dataelementExample2737 = require("../stu3-resources/DataElement-ProcessRequest.item.json");
		 expect(dataelementValidateFunction(dataelementExample2737)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.item.sequenceLinkId.json", () => {
		 const dataelementExample2738 = require("../stu3-resources/DataElement-ProcessRequest.item.sequenceLinkId.json");
		 expect(dataelementValidateFunction(dataelementExample2738)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.json", () => {
		 const dataelementExample2739 = require("../stu3-resources/DataElement-ProcessRequest.json");
		 expect(dataelementValidateFunction(dataelementExample2739)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.nullify.json", () => {
		 const dataelementExample2740 = require("../stu3-resources/DataElement-ProcessRequest.nullify.json");
		 expect(dataelementValidateFunction(dataelementExample2740)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.organization.json", () => {
		 const dataelementExample2741 = require("../stu3-resources/DataElement-ProcessRequest.organization.json");
		 expect(dataelementValidateFunction(dataelementExample2741)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.period.json", () => {
		 const dataelementExample2742 = require("../stu3-resources/DataElement-ProcessRequest.period.json");
		 expect(dataelementValidateFunction(dataelementExample2742)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.provider.json", () => {
		 const dataelementExample2743 = require("../stu3-resources/DataElement-ProcessRequest.provider.json");
		 expect(dataelementValidateFunction(dataelementExample2743)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.reference.json", () => {
		 const dataelementExample2744 = require("../stu3-resources/DataElement-ProcessRequest.reference.json");
		 expect(dataelementValidateFunction(dataelementExample2744)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.request.json", () => {
		 const dataelementExample2745 = require("../stu3-resources/DataElement-ProcessRequest.request.json");
		 expect(dataelementValidateFunction(dataelementExample2745)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.response.json", () => {
		 const dataelementExample2746 = require("../stu3-resources/DataElement-ProcessRequest.response.json");
		 expect(dataelementValidateFunction(dataelementExample2746)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.status.json", () => {
		 const dataelementExample2747 = require("../stu3-resources/DataElement-ProcessRequest.status.json");
		 expect(dataelementValidateFunction(dataelementExample2747)).toBe(true);
	 });

	 test("validate DataElement-ProcessRequest.target.json", () => {
		 const dataelementExample2748 = require("../stu3-resources/DataElement-ProcessRequest.target.json");
		 expect(dataelementValidateFunction(dataelementExample2748)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.communicationRequest.json", () => {
		 const dataelementExample2749 = require("../stu3-resources/DataElement-ProcessResponse.communicationRequest.json");
		 expect(dataelementValidateFunction(dataelementExample2749)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.created.json", () => {
		 const dataelementExample2750 = require("../stu3-resources/DataElement-ProcessResponse.created.json");
		 expect(dataelementValidateFunction(dataelementExample2750)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.disposition.json", () => {
		 const dataelementExample2751 = require("../stu3-resources/DataElement-ProcessResponse.disposition.json");
		 expect(dataelementValidateFunction(dataelementExample2751)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.error.json", () => {
		 const dataelementExample2752 = require("../stu3-resources/DataElement-ProcessResponse.error.json");
		 expect(dataelementValidateFunction(dataelementExample2752)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.form.json", () => {
		 const dataelementExample2753 = require("../stu3-resources/DataElement-ProcessResponse.form.json");
		 expect(dataelementValidateFunction(dataelementExample2753)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.identifier.json", () => {
		 const dataelementExample2754 = require("../stu3-resources/DataElement-ProcessResponse.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2754)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.json", () => {
		 const dataelementExample2755 = require("../stu3-resources/DataElement-ProcessResponse.json");
		 expect(dataelementValidateFunction(dataelementExample2755)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.organization.json", () => {
		 const dataelementExample2756 = require("../stu3-resources/DataElement-ProcessResponse.organization.json");
		 expect(dataelementValidateFunction(dataelementExample2756)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.outcome.json", () => {
		 const dataelementExample2757 = require("../stu3-resources/DataElement-ProcessResponse.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample2757)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.processNote.json", () => {
		 const dataelementExample2758 = require("../stu3-resources/DataElement-ProcessResponse.processNote.json");
		 expect(dataelementValidateFunction(dataelementExample2758)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.processNote.text.json", () => {
		 const dataelementExample2759 = require("../stu3-resources/DataElement-ProcessResponse.processNote.text.json");
		 expect(dataelementValidateFunction(dataelementExample2759)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.processNote.type.json", () => {
		 const dataelementExample2760 = require("../stu3-resources/DataElement-ProcessResponse.processNote.type.json");
		 expect(dataelementValidateFunction(dataelementExample2760)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.request.json", () => {
		 const dataelementExample2761 = require("../stu3-resources/DataElement-ProcessResponse.request.json");
		 expect(dataelementValidateFunction(dataelementExample2761)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.requestOrganization.json", () => {
		 const dataelementExample2762 = require("../stu3-resources/DataElement-ProcessResponse.requestOrganization.json");
		 expect(dataelementValidateFunction(dataelementExample2762)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.requestProvider.json", () => {
		 const dataelementExample2763 = require("../stu3-resources/DataElement-ProcessResponse.requestProvider.json");
		 expect(dataelementValidateFunction(dataelementExample2763)).toBe(true);
	 });

	 test("validate DataElement-ProcessResponse.status.json", () => {
		 const dataelementExample2764 = require("../stu3-resources/DataElement-ProcessResponse.status.json");
		 expect(dataelementValidateFunction(dataelementExample2764)).toBe(true);
	 });

	 test("validate DataElement-Provenance.activity.json", () => {
		 const dataelementExample2765 = require("../stu3-resources/DataElement-Provenance.activity.json");
		 expect(dataelementValidateFunction(dataelementExample2765)).toBe(true);
	 });

	 test("validate DataElement-Provenance.agent.json", () => {
		 const dataelementExample2766 = require("../stu3-resources/DataElement-Provenance.agent.json");
		 expect(dataelementValidateFunction(dataelementExample2766)).toBe(true);
	 });

	 test("validate DataElement-Provenance.agent.onBehalfOfX.json", () => {
		 const dataelementExample2767 = require("../stu3-resources/DataElement-Provenance.agent.onBehalfOfX.json");
		 expect(dataelementValidateFunction(dataelementExample2767)).toBe(true);
	 });

	 test("validate DataElement-Provenance.agent.relatedAgentType.json", () => {
		 const dataelementExample2768 = require("../stu3-resources/DataElement-Provenance.agent.relatedAgentType.json");
		 expect(dataelementValidateFunction(dataelementExample2768)).toBe(true);
	 });

	 test("validate DataElement-Provenance.agent.role.json", () => {
		 const dataelementExample2769 = require("../stu3-resources/DataElement-Provenance.agent.role.json");
		 expect(dataelementValidateFunction(dataelementExample2769)).toBe(true);
	 });

	 test("validate DataElement-Provenance.agent.whoX.json", () => {
		 const dataelementExample2770 = require("../stu3-resources/DataElement-Provenance.agent.whoX.json");
		 expect(dataelementValidateFunction(dataelementExample2770)).toBe(true);
	 });

	 test("validate DataElement-Provenance.entity.agent.json", () => {
		 const dataelementExample2771 = require("../stu3-resources/DataElement-Provenance.entity.agent.json");
		 expect(dataelementValidateFunction(dataelementExample2771)).toBe(true);
	 });

	 test("validate DataElement-Provenance.entity.json", () => {
		 const dataelementExample2772 = require("../stu3-resources/DataElement-Provenance.entity.json");
		 expect(dataelementValidateFunction(dataelementExample2772)).toBe(true);
	 });

	 test("validate DataElement-Provenance.entity.role.json", () => {
		 const dataelementExample2773 = require("../stu3-resources/DataElement-Provenance.entity.role.json");
		 expect(dataelementValidateFunction(dataelementExample2773)).toBe(true);
	 });

	 test("validate DataElement-Provenance.entity.whatX.json", () => {
		 const dataelementExample2774 = require("../stu3-resources/DataElement-Provenance.entity.whatX.json");
		 expect(dataelementValidateFunction(dataelementExample2774)).toBe(true);
	 });

	 test("validate DataElement-Provenance.json", () => {
		 const dataelementExample2775 = require("../stu3-resources/DataElement-Provenance.json");
		 expect(dataelementValidateFunction(dataelementExample2775)).toBe(true);
	 });

	 test("validate DataElement-Provenance.location.json", () => {
		 const dataelementExample2776 = require("../stu3-resources/DataElement-Provenance.location.json");
		 expect(dataelementValidateFunction(dataelementExample2776)).toBe(true);
	 });

	 test("validate DataElement-Provenance.period.json", () => {
		 const dataelementExample2777 = require("../stu3-resources/DataElement-Provenance.period.json");
		 expect(dataelementValidateFunction(dataelementExample2777)).toBe(true);
	 });

	 test("validate DataElement-Provenance.policy.json", () => {
		 const dataelementExample2778 = require("../stu3-resources/DataElement-Provenance.policy.json");
		 expect(dataelementValidateFunction(dataelementExample2778)).toBe(true);
	 });

	 test("validate DataElement-Provenance.reason.json", () => {
		 const dataelementExample2779 = require("../stu3-resources/DataElement-Provenance.reason.json");
		 expect(dataelementValidateFunction(dataelementExample2779)).toBe(true);
	 });

	 test("validate DataElement-Provenance.recorded.json", () => {
		 const dataelementExample2780 = require("../stu3-resources/DataElement-Provenance.recorded.json");
		 expect(dataelementValidateFunction(dataelementExample2780)).toBe(true);
	 });

	 test("validate DataElement-Provenance.signature.json", () => {
		 const dataelementExample2781 = require("../stu3-resources/DataElement-Provenance.signature.json");
		 expect(dataelementValidateFunction(dataelementExample2781)).toBe(true);
	 });

	 test("validate DataElement-Provenance.target.json", () => {
		 const dataelementExample2782 = require("../stu3-resources/DataElement-Provenance.target.json");
		 expect(dataelementValidateFunction(dataelementExample2782)).toBe(true);
	 });

	 test("validate DataElement-Quantity.code.json", () => {
		 const dataelementExample2783 = require("../stu3-resources/DataElement-Quantity.code.json");
		 expect(dataelementValidateFunction(dataelementExample2783)).toBe(true);
	 });

	 test("validate DataElement-Quantity.comparator.json", () => {
		 const dataelementExample2784 = require("../stu3-resources/DataElement-Quantity.comparator.json");
		 expect(dataelementValidateFunction(dataelementExample2784)).toBe(true);
	 });

	 test("validate DataElement-Quantity.json", () => {
		 const dataelementExample2785 = require("../stu3-resources/DataElement-Quantity.json");
		 expect(dataelementValidateFunction(dataelementExample2785)).toBe(true);
	 });

	 test("validate DataElement-Quantity.system.json", () => {
		 const dataelementExample2786 = require("../stu3-resources/DataElement-Quantity.system.json");
		 expect(dataelementValidateFunction(dataelementExample2786)).toBe(true);
	 });

	 test("validate DataElement-Quantity.unit.json", () => {
		 const dataelementExample2787 = require("../stu3-resources/DataElement-Quantity.unit.json");
		 expect(dataelementValidateFunction(dataelementExample2787)).toBe(true);
	 });

	 test("validate DataElement-Quantity.value.json", () => {
		 const dataelementExample2788 = require("../stu3-resources/DataElement-Quantity.value.json");
		 expect(dataelementValidateFunction(dataelementExample2788)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.approvalDate.json", () => {
		 const dataelementExample2789 = require("../stu3-resources/DataElement-Questionnaire.approvalDate.json");
		 expect(dataelementValidateFunction(dataelementExample2789)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.code.json", () => {
		 const dataelementExample2790 = require("../stu3-resources/DataElement-Questionnaire.code.json");
		 expect(dataelementValidateFunction(dataelementExample2790)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.contact.json", () => {
		 const dataelementExample2791 = require("../stu3-resources/DataElement-Questionnaire.contact.json");
		 expect(dataelementValidateFunction(dataelementExample2791)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.copyright.json", () => {
		 const dataelementExample2792 = require("../stu3-resources/DataElement-Questionnaire.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample2792)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.date.json", () => {
		 const dataelementExample2793 = require("../stu3-resources/DataElement-Questionnaire.date.json");
		 expect(dataelementValidateFunction(dataelementExample2793)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.description.json", () => {
		 const dataelementExample2794 = require("../stu3-resources/DataElement-Questionnaire.description.json");
		 expect(dataelementValidateFunction(dataelementExample2794)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.effectivePeriod.json", () => {
		 const dataelementExample2795 = require("../stu3-resources/DataElement-Questionnaire.effectivePeriod.json");
		 expect(dataelementValidateFunction(dataelementExample2795)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.experimental.json", () => {
		 const dataelementExample2796 = require("../stu3-resources/DataElement-Questionnaire.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample2796)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.identifier.json", () => {
		 const dataelementExample2797 = require("../stu3-resources/DataElement-Questionnaire.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2797)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.code.json", () => {
		 const dataelementExample2798 = require("../stu3-resources/DataElement-Questionnaire.item.code.json");
		 expect(dataelementValidateFunction(dataelementExample2798)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.definition.json", () => {
		 const dataelementExample2799 = require("../stu3-resources/DataElement-Questionnaire.item.definition.json");
		 expect(dataelementValidateFunction(dataelementExample2799)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.enableWhen.answerX.json", () => {
		 const dataelementExample2800 = require("../stu3-resources/DataElement-Questionnaire.item.enableWhen.answerX.json");
		 expect(dataelementValidateFunction(dataelementExample2800)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.enableWhen.hasAnswer.json", () => {
		 const dataelementExample2801 = require("../stu3-resources/DataElement-Questionnaire.item.enableWhen.hasAnswer.json");
		 expect(dataelementValidateFunction(dataelementExample2801)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.enableWhen.json", () => {
		 const dataelementExample2802 = require("../stu3-resources/DataElement-Questionnaire.item.enableWhen.json");
		 expect(dataelementValidateFunction(dataelementExample2802)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.enableWhen.question.json", () => {
		 const dataelementExample2803 = require("../stu3-resources/DataElement-Questionnaire.item.enableWhen.question.json");
		 expect(dataelementValidateFunction(dataelementExample2803)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.initialX.json", () => {
		 const dataelementExample2804 = require("../stu3-resources/DataElement-Questionnaire.item.initialX.json");
		 expect(dataelementValidateFunction(dataelementExample2804)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.item.json", () => {
		 const dataelementExample2805 = require("../stu3-resources/DataElement-Questionnaire.item.item.json");
		 expect(dataelementValidateFunction(dataelementExample2805)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.json", () => {
		 const dataelementExample2806 = require("../stu3-resources/DataElement-Questionnaire.item.json");
		 expect(dataelementValidateFunction(dataelementExample2806)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.linkId.json", () => {
		 const dataelementExample2807 = require("../stu3-resources/DataElement-Questionnaire.item.linkId.json");
		 expect(dataelementValidateFunction(dataelementExample2807)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.maxLength.json", () => {
		 const dataelementExample2808 = require("../stu3-resources/DataElement-Questionnaire.item.maxLength.json");
		 expect(dataelementValidateFunction(dataelementExample2808)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.option.json", () => {
		 const dataelementExample2809 = require("../stu3-resources/DataElement-Questionnaire.item.option.json");
		 expect(dataelementValidateFunction(dataelementExample2809)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.option.valueX.json", () => {
		 const dataelementExample2810 = require("../stu3-resources/DataElement-Questionnaire.item.option.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample2810)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.options.json", () => {
		 const dataelementExample2811 = require("../stu3-resources/DataElement-Questionnaire.item.options.json");
		 expect(dataelementValidateFunction(dataelementExample2811)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.prefix.json", () => {
		 const dataelementExample2812 = require("../stu3-resources/DataElement-Questionnaire.item.prefix.json");
		 expect(dataelementValidateFunction(dataelementExample2812)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.readOnly.json", () => {
		 const dataelementExample2813 = require("../stu3-resources/DataElement-Questionnaire.item.readOnly.json");
		 expect(dataelementValidateFunction(dataelementExample2813)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.repeats.json", () => {
		 const dataelementExample2814 = require("../stu3-resources/DataElement-Questionnaire.item.repeats.json");
		 expect(dataelementValidateFunction(dataelementExample2814)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.required.json", () => {
		 const dataelementExample2815 = require("../stu3-resources/DataElement-Questionnaire.item.required.json");
		 expect(dataelementValidateFunction(dataelementExample2815)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.text.json", () => {
		 const dataelementExample2816 = require("../stu3-resources/DataElement-Questionnaire.item.text.json");
		 expect(dataelementValidateFunction(dataelementExample2816)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.item.type.json", () => {
		 const dataelementExample2817 = require("../stu3-resources/DataElement-Questionnaire.item.type.json");
		 expect(dataelementValidateFunction(dataelementExample2817)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.json", () => {
		 const dataelementExample2818 = require("../stu3-resources/DataElement-Questionnaire.json");
		 expect(dataelementValidateFunction(dataelementExample2818)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.jurisdiction.json", () => {
		 const dataelementExample2819 = require("../stu3-resources/DataElement-Questionnaire.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample2819)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.lastReviewDate.json", () => {
		 const dataelementExample2820 = require("../stu3-resources/DataElement-Questionnaire.lastReviewDate.json");
		 expect(dataelementValidateFunction(dataelementExample2820)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.name.json", () => {
		 const dataelementExample2821 = require("../stu3-resources/DataElement-Questionnaire.name.json");
		 expect(dataelementValidateFunction(dataelementExample2821)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.publisher.json", () => {
		 const dataelementExample2822 = require("../stu3-resources/DataElement-Questionnaire.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample2822)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.purpose.json", () => {
		 const dataelementExample2823 = require("../stu3-resources/DataElement-Questionnaire.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample2823)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.status.json", () => {
		 const dataelementExample2824 = require("../stu3-resources/DataElement-Questionnaire.status.json");
		 expect(dataelementValidateFunction(dataelementExample2824)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.subjectType.json", () => {
		 const dataelementExample2825 = require("../stu3-resources/DataElement-Questionnaire.subjectType.json");
		 expect(dataelementValidateFunction(dataelementExample2825)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.title.json", () => {
		 const dataelementExample2826 = require("../stu3-resources/DataElement-Questionnaire.title.json");
		 expect(dataelementValidateFunction(dataelementExample2826)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.url.json", () => {
		 const dataelementExample2827 = require("../stu3-resources/DataElement-Questionnaire.url.json");
		 expect(dataelementValidateFunction(dataelementExample2827)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.useContext.json", () => {
		 const dataelementExample2828 = require("../stu3-resources/DataElement-Questionnaire.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample2828)).toBe(true);
	 });

	 test("validate DataElement-Questionnaire.version.json", () => {
		 const dataelementExample2829 = require("../stu3-resources/DataElement-Questionnaire.version.json");
		 expect(dataelementValidateFunction(dataelementExample2829)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.author.json", () => {
		 const dataelementExample2830 = require("../stu3-resources/DataElement-QuestionnaireResponse.author.json");
		 expect(dataelementValidateFunction(dataelementExample2830)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.authored.json", () => {
		 const dataelementExample2831 = require("../stu3-resources/DataElement-QuestionnaireResponse.authored.json");
		 expect(dataelementValidateFunction(dataelementExample2831)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.basedOn.json", () => {
		 const dataelementExample2832 = require("../stu3-resources/DataElement-QuestionnaireResponse.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample2832)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.context.json", () => {
		 const dataelementExample2833 = require("../stu3-resources/DataElement-QuestionnaireResponse.context.json");
		 expect(dataelementValidateFunction(dataelementExample2833)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.identifier.json", () => {
		 const dataelementExample2834 = require("../stu3-resources/DataElement-QuestionnaireResponse.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2834)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.item.answer.item.json", () => {
		 const dataelementExample2835 = require("../stu3-resources/DataElement-QuestionnaireResponse.item.answer.item.json");
		 expect(dataelementValidateFunction(dataelementExample2835)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.item.answer.json", () => {
		 const dataelementExample2836 = require("../stu3-resources/DataElement-QuestionnaireResponse.item.answer.json");
		 expect(dataelementValidateFunction(dataelementExample2836)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.item.answer.valueX.json", () => {
		 const dataelementExample2837 = require("../stu3-resources/DataElement-QuestionnaireResponse.item.answer.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample2837)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.item.definition.json", () => {
		 const dataelementExample2838 = require("../stu3-resources/DataElement-QuestionnaireResponse.item.definition.json");
		 expect(dataelementValidateFunction(dataelementExample2838)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.item.item.json", () => {
		 const dataelementExample2839 = require("../stu3-resources/DataElement-QuestionnaireResponse.item.item.json");
		 expect(dataelementValidateFunction(dataelementExample2839)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.item.json", () => {
		 const dataelementExample2840 = require("../stu3-resources/DataElement-QuestionnaireResponse.item.json");
		 expect(dataelementValidateFunction(dataelementExample2840)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.item.linkId.json", () => {
		 const dataelementExample2841 = require("../stu3-resources/DataElement-QuestionnaireResponse.item.linkId.json");
		 expect(dataelementValidateFunction(dataelementExample2841)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.item.subject.json", () => {
		 const dataelementExample2842 = require("../stu3-resources/DataElement-QuestionnaireResponse.item.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2842)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.item.text.json", () => {
		 const dataelementExample2843 = require("../stu3-resources/DataElement-QuestionnaireResponse.item.text.json");
		 expect(dataelementValidateFunction(dataelementExample2843)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.json", () => {
		 const dataelementExample2844 = require("../stu3-resources/DataElement-QuestionnaireResponse.json");
		 expect(dataelementValidateFunction(dataelementExample2844)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.parent.json", () => {
		 const dataelementExample2845 = require("../stu3-resources/DataElement-QuestionnaireResponse.parent.json");
		 expect(dataelementValidateFunction(dataelementExample2845)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.questionnaire.json", () => {
		 const dataelementExample2846 = require("../stu3-resources/DataElement-QuestionnaireResponse.questionnaire.json");
		 expect(dataelementValidateFunction(dataelementExample2846)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.source.json", () => {
		 const dataelementExample2847 = require("../stu3-resources/DataElement-QuestionnaireResponse.source.json");
		 expect(dataelementValidateFunction(dataelementExample2847)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.status.json", () => {
		 const dataelementExample2848 = require("../stu3-resources/DataElement-QuestionnaireResponse.status.json");
		 expect(dataelementValidateFunction(dataelementExample2848)).toBe(true);
	 });

	 test("validate DataElement-QuestionnaireResponse.subject.json", () => {
		 const dataelementExample2849 = require("../stu3-resources/DataElement-QuestionnaireResponse.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2849)).toBe(true);
	 });

	 test("validate DataElement-Range.high.json", () => {
		 const dataelementExample2850 = require("../stu3-resources/DataElement-Range.high.json");
		 expect(dataelementValidateFunction(dataelementExample2850)).toBe(true);
	 });

	 test("validate DataElement-Range.json", () => {
		 const dataelementExample2851 = require("../stu3-resources/DataElement-Range.json");
		 expect(dataelementValidateFunction(dataelementExample2851)).toBe(true);
	 });

	 test("validate DataElement-Range.low.json", () => {
		 const dataelementExample2852 = require("../stu3-resources/DataElement-Range.low.json");
		 expect(dataelementValidateFunction(dataelementExample2852)).toBe(true);
	 });

	 test("validate DataElement-Ratio.denominator.json", () => {
		 const dataelementExample2853 = require("../stu3-resources/DataElement-Ratio.denominator.json");
		 expect(dataelementValidateFunction(dataelementExample2853)).toBe(true);
	 });

	 test("validate DataElement-Ratio.json", () => {
		 const dataelementExample2854 = require("../stu3-resources/DataElement-Ratio.json");
		 expect(dataelementValidateFunction(dataelementExample2854)).toBe(true);
	 });

	 test("validate DataElement-Ratio.numerator.json", () => {
		 const dataelementExample2855 = require("../stu3-resources/DataElement-Ratio.numerator.json");
		 expect(dataelementValidateFunction(dataelementExample2855)).toBe(true);
	 });

	 test("validate DataElement-Reference.display.json", () => {
		 const dataelementExample2856 = require("../stu3-resources/DataElement-Reference.display.json");
		 expect(dataelementValidateFunction(dataelementExample2856)).toBe(true);
	 });

	 test("validate DataElement-Reference.identifier.json", () => {
		 const dataelementExample2857 = require("../stu3-resources/DataElement-Reference.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2857)).toBe(true);
	 });

	 test("validate DataElement-Reference.json", () => {
		 const dataelementExample2858 = require("../stu3-resources/DataElement-Reference.json");
		 expect(dataelementValidateFunction(dataelementExample2858)).toBe(true);
	 });

	 test("validate DataElement-Reference.reference.json", () => {
		 const dataelementExample2859 = require("../stu3-resources/DataElement-Reference.reference.json");
		 expect(dataelementValidateFunction(dataelementExample2859)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.authoredOn.json", () => {
		 const dataelementExample2860 = require("../stu3-resources/DataElement-ReferralRequest.authoredOn.json");
		 expect(dataelementValidateFunction(dataelementExample2860)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.basedOn.json", () => {
		 const dataelementExample2861 = require("../stu3-resources/DataElement-ReferralRequest.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample2861)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.context.json", () => {
		 const dataelementExample2862 = require("../stu3-resources/DataElement-ReferralRequest.context.json");
		 expect(dataelementValidateFunction(dataelementExample2862)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.definition.json", () => {
		 const dataelementExample2863 = require("../stu3-resources/DataElement-ReferralRequest.definition.json");
		 expect(dataelementValidateFunction(dataelementExample2863)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.description.json", () => {
		 const dataelementExample2864 = require("../stu3-resources/DataElement-ReferralRequest.description.json");
		 expect(dataelementValidateFunction(dataelementExample2864)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.groupIdentifier.json", () => {
		 const dataelementExample2865 = require("../stu3-resources/DataElement-ReferralRequest.groupIdentifier.json");
		 expect(dataelementValidateFunction(dataelementExample2865)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.identifier.json", () => {
		 const dataelementExample2866 = require("../stu3-resources/DataElement-ReferralRequest.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2866)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.intent.json", () => {
		 const dataelementExample2867 = require("../stu3-resources/DataElement-ReferralRequest.intent.json");
		 expect(dataelementValidateFunction(dataelementExample2867)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.json", () => {
		 const dataelementExample2868 = require("../stu3-resources/DataElement-ReferralRequest.json");
		 expect(dataelementValidateFunction(dataelementExample2868)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.note.json", () => {
		 const dataelementExample2869 = require("../stu3-resources/DataElement-ReferralRequest.note.json");
		 expect(dataelementValidateFunction(dataelementExample2869)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.occurrenceX.json", () => {
		 const dataelementExample2870 = require("../stu3-resources/DataElement-ReferralRequest.occurrenceX.json");
		 expect(dataelementValidateFunction(dataelementExample2870)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.priority.json", () => {
		 const dataelementExample2871 = require("../stu3-resources/DataElement-ReferralRequest.priority.json");
		 expect(dataelementValidateFunction(dataelementExample2871)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.reasonCode.json", () => {
		 const dataelementExample2872 = require("../stu3-resources/DataElement-ReferralRequest.reasonCode.json");
		 expect(dataelementValidateFunction(dataelementExample2872)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.reasonReference.json", () => {
		 const dataelementExample2873 = require("../stu3-resources/DataElement-ReferralRequest.reasonReference.json");
		 expect(dataelementValidateFunction(dataelementExample2873)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.recipient.json", () => {
		 const dataelementExample2874 = require("../stu3-resources/DataElement-ReferralRequest.recipient.json");
		 expect(dataelementValidateFunction(dataelementExample2874)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.relevantHistory.json", () => {
		 const dataelementExample2875 = require("../stu3-resources/DataElement-ReferralRequest.relevantHistory.json");
		 expect(dataelementValidateFunction(dataelementExample2875)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.replaces.json", () => {
		 const dataelementExample2876 = require("../stu3-resources/DataElement-ReferralRequest.replaces.json");
		 expect(dataelementValidateFunction(dataelementExample2876)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.requester.agent.json", () => {
		 const dataelementExample2877 = require("../stu3-resources/DataElement-ReferralRequest.requester.agent.json");
		 expect(dataelementValidateFunction(dataelementExample2877)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.requester.json", () => {
		 const dataelementExample2878 = require("../stu3-resources/DataElement-ReferralRequest.requester.json");
		 expect(dataelementValidateFunction(dataelementExample2878)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.requester.onBehalfOf.json", () => {
		 const dataelementExample2879 = require("../stu3-resources/DataElement-ReferralRequest.requester.onBehalfOf.json");
		 expect(dataelementValidateFunction(dataelementExample2879)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.serviceRequested.json", () => {
		 const dataelementExample2880 = require("../stu3-resources/DataElement-ReferralRequest.serviceRequested.json");
		 expect(dataelementValidateFunction(dataelementExample2880)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.specialty.json", () => {
		 const dataelementExample2881 = require("../stu3-resources/DataElement-ReferralRequest.specialty.json");
		 expect(dataelementValidateFunction(dataelementExample2881)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.status.json", () => {
		 const dataelementExample2882 = require("../stu3-resources/DataElement-ReferralRequest.status.json");
		 expect(dataelementValidateFunction(dataelementExample2882)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.subject.json", () => {
		 const dataelementExample2883 = require("../stu3-resources/DataElement-ReferralRequest.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2883)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.supportingInfo.json", () => {
		 const dataelementExample2884 = require("../stu3-resources/DataElement-ReferralRequest.supportingInfo.json");
		 expect(dataelementValidateFunction(dataelementExample2884)).toBe(true);
	 });

	 test("validate DataElement-ReferralRequest.type.json", () => {
		 const dataelementExample2885 = require("../stu3-resources/DataElement-ReferralRequest.type.json");
		 expect(dataelementValidateFunction(dataelementExample2885)).toBe(true);
	 });

	 test("validate DataElement-RelatedArtifact.citation.json", () => {
		 const dataelementExample2886 = require("../stu3-resources/DataElement-RelatedArtifact.citation.json");
		 expect(dataelementValidateFunction(dataelementExample2886)).toBe(true);
	 });

	 test("validate DataElement-RelatedArtifact.display.json", () => {
		 const dataelementExample2887 = require("../stu3-resources/DataElement-RelatedArtifact.display.json");
		 expect(dataelementValidateFunction(dataelementExample2887)).toBe(true);
	 });

	 test("validate DataElement-RelatedArtifact.document.json", () => {
		 const dataelementExample2888 = require("../stu3-resources/DataElement-RelatedArtifact.document.json");
		 expect(dataelementValidateFunction(dataelementExample2888)).toBe(true);
	 });

	 test("validate DataElement-RelatedArtifact.json", () => {
		 const dataelementExample2889 = require("../stu3-resources/DataElement-RelatedArtifact.json");
		 expect(dataelementValidateFunction(dataelementExample2889)).toBe(true);
	 });

	 test("validate DataElement-RelatedArtifact.resource.json", () => {
		 const dataelementExample2890 = require("../stu3-resources/DataElement-RelatedArtifact.resource.json");
		 expect(dataelementValidateFunction(dataelementExample2890)).toBe(true);
	 });

	 test("validate DataElement-RelatedArtifact.type.json", () => {
		 const dataelementExample2891 = require("../stu3-resources/DataElement-RelatedArtifact.type.json");
		 expect(dataelementValidateFunction(dataelementExample2891)).toBe(true);
	 });

	 test("validate DataElement-RelatedArtifact.url.json", () => {
		 const dataelementExample2892 = require("../stu3-resources/DataElement-RelatedArtifact.url.json");
		 expect(dataelementValidateFunction(dataelementExample2892)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.active.json", () => {
		 const dataelementExample2893 = require("../stu3-resources/DataElement-RelatedPerson.active.json");
		 expect(dataelementValidateFunction(dataelementExample2893)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.address.json", () => {
		 const dataelementExample2894 = require("../stu3-resources/DataElement-RelatedPerson.address.json");
		 expect(dataelementValidateFunction(dataelementExample2894)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.birthDate.json", () => {
		 const dataelementExample2895 = require("../stu3-resources/DataElement-RelatedPerson.birthDate.json");
		 expect(dataelementValidateFunction(dataelementExample2895)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.gender.json", () => {
		 const dataelementExample2896 = require("../stu3-resources/DataElement-RelatedPerson.gender.json");
		 expect(dataelementValidateFunction(dataelementExample2896)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.identifier.json", () => {
		 const dataelementExample2897 = require("../stu3-resources/DataElement-RelatedPerson.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2897)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.json", () => {
		 const dataelementExample2898 = require("../stu3-resources/DataElement-RelatedPerson.json");
		 expect(dataelementValidateFunction(dataelementExample2898)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.name.json", () => {
		 const dataelementExample2899 = require("../stu3-resources/DataElement-RelatedPerson.name.json");
		 expect(dataelementValidateFunction(dataelementExample2899)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.patient.json", () => {
		 const dataelementExample2900 = require("../stu3-resources/DataElement-RelatedPerson.patient.json");
		 expect(dataelementValidateFunction(dataelementExample2900)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.period.json", () => {
		 const dataelementExample2901 = require("../stu3-resources/DataElement-RelatedPerson.period.json");
		 expect(dataelementValidateFunction(dataelementExample2901)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.photo.json", () => {
		 const dataelementExample2902 = require("../stu3-resources/DataElement-RelatedPerson.photo.json");
		 expect(dataelementValidateFunction(dataelementExample2902)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.relationship.json", () => {
		 const dataelementExample2903 = require("../stu3-resources/DataElement-RelatedPerson.relationship.json");
		 expect(dataelementValidateFunction(dataelementExample2903)).toBe(true);
	 });

	 test("validate DataElement-RelatedPerson.telecom.json", () => {
		 const dataelementExample2904 = require("../stu3-resources/DataElement-RelatedPerson.telecom.json");
		 expect(dataelementValidateFunction(dataelementExample2904)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.action.json", () => {
		 const dataelementExample2905 = require("../stu3-resources/DataElement-RequestGroup.action.action.json");
		 expect(dataelementValidateFunction(dataelementExample2905)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.cardinalityBehavior.json", () => {
		 const dataelementExample2906 = require("../stu3-resources/DataElement-RequestGroup.action.cardinalityBehavior.json");
		 expect(dataelementValidateFunction(dataelementExample2906)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.code.json", () => {
		 const dataelementExample2907 = require("../stu3-resources/DataElement-RequestGroup.action.code.json");
		 expect(dataelementValidateFunction(dataelementExample2907)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.condition.description.json", () => {
		 const dataelementExample2908 = require("../stu3-resources/DataElement-RequestGroup.action.condition.description.json");
		 expect(dataelementValidateFunction(dataelementExample2908)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.condition.expression.json", () => {
		 const dataelementExample2909 = require("../stu3-resources/DataElement-RequestGroup.action.condition.expression.json");
		 expect(dataelementValidateFunction(dataelementExample2909)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.condition.json", () => {
		 const dataelementExample2910 = require("../stu3-resources/DataElement-RequestGroup.action.condition.json");
		 expect(dataelementValidateFunction(dataelementExample2910)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.condition.kind.json", () => {
		 const dataelementExample2911 = require("../stu3-resources/DataElement-RequestGroup.action.condition.kind.json");
		 expect(dataelementValidateFunction(dataelementExample2911)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.condition.language.json", () => {
		 const dataelementExample2912 = require("../stu3-resources/DataElement-RequestGroup.action.condition.language.json");
		 expect(dataelementValidateFunction(dataelementExample2912)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.description.json", () => {
		 const dataelementExample2913 = require("../stu3-resources/DataElement-RequestGroup.action.description.json");
		 expect(dataelementValidateFunction(dataelementExample2913)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.documentation.json", () => {
		 const dataelementExample2914 = require("../stu3-resources/DataElement-RequestGroup.action.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample2914)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.groupingBehavior.json", () => {
		 const dataelementExample2915 = require("../stu3-resources/DataElement-RequestGroup.action.groupingBehavior.json");
		 expect(dataelementValidateFunction(dataelementExample2915)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.json", () => {
		 const dataelementExample2916 = require("../stu3-resources/DataElement-RequestGroup.action.json");
		 expect(dataelementValidateFunction(dataelementExample2916)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.label.json", () => {
		 const dataelementExample2917 = require("../stu3-resources/DataElement-RequestGroup.action.label.json");
		 expect(dataelementValidateFunction(dataelementExample2917)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.participant.json", () => {
		 const dataelementExample2918 = require("../stu3-resources/DataElement-RequestGroup.action.participant.json");
		 expect(dataelementValidateFunction(dataelementExample2918)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.precheckBehavior.json", () => {
		 const dataelementExample2919 = require("../stu3-resources/DataElement-RequestGroup.action.precheckBehavior.json");
		 expect(dataelementValidateFunction(dataelementExample2919)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.relatedAction.actionId.json", () => {
		 const dataelementExample2920 = require("../stu3-resources/DataElement-RequestGroup.action.relatedAction.actionId.json");
		 expect(dataelementValidateFunction(dataelementExample2920)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.relatedAction.json", () => {
		 const dataelementExample2921 = require("../stu3-resources/DataElement-RequestGroup.action.relatedAction.json");
		 expect(dataelementValidateFunction(dataelementExample2921)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.relatedAction.offsetX.json", () => {
		 const dataelementExample2922 = require("../stu3-resources/DataElement-RequestGroup.action.relatedAction.offsetX.json");
		 expect(dataelementValidateFunction(dataelementExample2922)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.relatedAction.relationship.json", () => {
		 const dataelementExample2923 = require("../stu3-resources/DataElement-RequestGroup.action.relatedAction.relationship.json");
		 expect(dataelementValidateFunction(dataelementExample2923)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.requiredBehavior.json", () => {
		 const dataelementExample2924 = require("../stu3-resources/DataElement-RequestGroup.action.requiredBehavior.json");
		 expect(dataelementValidateFunction(dataelementExample2924)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.resource.json", () => {
		 const dataelementExample2925 = require("../stu3-resources/DataElement-RequestGroup.action.resource.json");
		 expect(dataelementValidateFunction(dataelementExample2925)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.selectionBehavior.json", () => {
		 const dataelementExample2926 = require("../stu3-resources/DataElement-RequestGroup.action.selectionBehavior.json");
		 expect(dataelementValidateFunction(dataelementExample2926)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.textEquivalent.json", () => {
		 const dataelementExample2927 = require("../stu3-resources/DataElement-RequestGroup.action.textEquivalent.json");
		 expect(dataelementValidateFunction(dataelementExample2927)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.timingX.json", () => {
		 const dataelementExample2928 = require("../stu3-resources/DataElement-RequestGroup.action.timingX.json");
		 expect(dataelementValidateFunction(dataelementExample2928)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.title.json", () => {
		 const dataelementExample2929 = require("../stu3-resources/DataElement-RequestGroup.action.title.json");
		 expect(dataelementValidateFunction(dataelementExample2929)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.action.type.json", () => {
		 const dataelementExample2930 = require("../stu3-resources/DataElement-RequestGroup.action.type.json");
		 expect(dataelementValidateFunction(dataelementExample2930)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.author.json", () => {
		 const dataelementExample2931 = require("../stu3-resources/DataElement-RequestGroup.author.json");
		 expect(dataelementValidateFunction(dataelementExample2931)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.authoredOn.json", () => {
		 const dataelementExample2932 = require("../stu3-resources/DataElement-RequestGroup.authoredOn.json");
		 expect(dataelementValidateFunction(dataelementExample2932)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.basedOn.json", () => {
		 const dataelementExample2933 = require("../stu3-resources/DataElement-RequestGroup.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample2933)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.context.json", () => {
		 const dataelementExample2934 = require("../stu3-resources/DataElement-RequestGroup.context.json");
		 expect(dataelementValidateFunction(dataelementExample2934)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.definition.json", () => {
		 const dataelementExample2935 = require("../stu3-resources/DataElement-RequestGroup.definition.json");
		 expect(dataelementValidateFunction(dataelementExample2935)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.groupIdentifier.json", () => {
		 const dataelementExample2936 = require("../stu3-resources/DataElement-RequestGroup.groupIdentifier.json");
		 expect(dataelementValidateFunction(dataelementExample2936)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.identifier.json", () => {
		 const dataelementExample2937 = require("../stu3-resources/DataElement-RequestGroup.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2937)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.intent.json", () => {
		 const dataelementExample2938 = require("../stu3-resources/DataElement-RequestGroup.intent.json");
		 expect(dataelementValidateFunction(dataelementExample2938)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.json", () => {
		 const dataelementExample2939 = require("../stu3-resources/DataElement-RequestGroup.json");
		 expect(dataelementValidateFunction(dataelementExample2939)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.note.json", () => {
		 const dataelementExample2940 = require("../stu3-resources/DataElement-RequestGroup.note.json");
		 expect(dataelementValidateFunction(dataelementExample2940)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.priority.json", () => {
		 const dataelementExample2941 = require("../stu3-resources/DataElement-RequestGroup.priority.json");
		 expect(dataelementValidateFunction(dataelementExample2941)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.reasonX.json", () => {
		 const dataelementExample2942 = require("../stu3-resources/DataElement-RequestGroup.reasonX.json");
		 expect(dataelementValidateFunction(dataelementExample2942)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.replaces.json", () => {
		 const dataelementExample2943 = require("../stu3-resources/DataElement-RequestGroup.replaces.json");
		 expect(dataelementValidateFunction(dataelementExample2943)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.status.json", () => {
		 const dataelementExample2944 = require("../stu3-resources/DataElement-RequestGroup.status.json");
		 expect(dataelementValidateFunction(dataelementExample2944)).toBe(true);
	 });

	 test("validate DataElement-RequestGroup.subject.json", () => {
		 const dataelementExample2945 = require("../stu3-resources/DataElement-RequestGroup.subject.json");
		 expect(dataelementValidateFunction(dataelementExample2945)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.arm.code.json", () => {
		 const dataelementExample2946 = require("../stu3-resources/DataElement-ResearchStudy.arm.code.json");
		 expect(dataelementValidateFunction(dataelementExample2946)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.arm.description.json", () => {
		 const dataelementExample2947 = require("../stu3-resources/DataElement-ResearchStudy.arm.description.json");
		 expect(dataelementValidateFunction(dataelementExample2947)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.arm.json", () => {
		 const dataelementExample2948 = require("../stu3-resources/DataElement-ResearchStudy.arm.json");
		 expect(dataelementValidateFunction(dataelementExample2948)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.arm.name.json", () => {
		 const dataelementExample2949 = require("../stu3-resources/DataElement-ResearchStudy.arm.name.json");
		 expect(dataelementValidateFunction(dataelementExample2949)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.category.json", () => {
		 const dataelementExample2950 = require("../stu3-resources/DataElement-ResearchStudy.category.json");
		 expect(dataelementValidateFunction(dataelementExample2950)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.contact.json", () => {
		 const dataelementExample2951 = require("../stu3-resources/DataElement-ResearchStudy.contact.json");
		 expect(dataelementValidateFunction(dataelementExample2951)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.description.json", () => {
		 const dataelementExample2952 = require("../stu3-resources/DataElement-ResearchStudy.description.json");
		 expect(dataelementValidateFunction(dataelementExample2952)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.enrollment.json", () => {
		 const dataelementExample2953 = require("../stu3-resources/DataElement-ResearchStudy.enrollment.json");
		 expect(dataelementValidateFunction(dataelementExample2953)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.focus.json", () => {
		 const dataelementExample2954 = require("../stu3-resources/DataElement-ResearchStudy.focus.json");
		 expect(dataelementValidateFunction(dataelementExample2954)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.identifier.json", () => {
		 const dataelementExample2955 = require("../stu3-resources/DataElement-ResearchStudy.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2955)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.json", () => {
		 const dataelementExample2956 = require("../stu3-resources/DataElement-ResearchStudy.json");
		 expect(dataelementValidateFunction(dataelementExample2956)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.jurisdiction.json", () => {
		 const dataelementExample2957 = require("../stu3-resources/DataElement-ResearchStudy.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample2957)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.keyword.json", () => {
		 const dataelementExample2958 = require("../stu3-resources/DataElement-ResearchStudy.keyword.json");
		 expect(dataelementValidateFunction(dataelementExample2958)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.note.json", () => {
		 const dataelementExample2959 = require("../stu3-resources/DataElement-ResearchStudy.note.json");
		 expect(dataelementValidateFunction(dataelementExample2959)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.partOf.json", () => {
		 const dataelementExample2960 = require("../stu3-resources/DataElement-ResearchStudy.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample2960)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.period.json", () => {
		 const dataelementExample2961 = require("../stu3-resources/DataElement-ResearchStudy.period.json");
		 expect(dataelementValidateFunction(dataelementExample2961)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.principalInvestigator.json", () => {
		 const dataelementExample2962 = require("../stu3-resources/DataElement-ResearchStudy.principalInvestigator.json");
		 expect(dataelementValidateFunction(dataelementExample2962)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.protocol.json", () => {
		 const dataelementExample2963 = require("../stu3-resources/DataElement-ResearchStudy.protocol.json");
		 expect(dataelementValidateFunction(dataelementExample2963)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.reasonStopped.json", () => {
		 const dataelementExample2964 = require("../stu3-resources/DataElement-ResearchStudy.reasonStopped.json");
		 expect(dataelementValidateFunction(dataelementExample2964)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.relatedArtifact.json", () => {
		 const dataelementExample2965 = require("../stu3-resources/DataElement-ResearchStudy.relatedArtifact.json");
		 expect(dataelementValidateFunction(dataelementExample2965)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.site.json", () => {
		 const dataelementExample2966 = require("../stu3-resources/DataElement-ResearchStudy.site.json");
		 expect(dataelementValidateFunction(dataelementExample2966)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.sponsor.json", () => {
		 const dataelementExample2967 = require("../stu3-resources/DataElement-ResearchStudy.sponsor.json");
		 expect(dataelementValidateFunction(dataelementExample2967)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.status.json", () => {
		 const dataelementExample2968 = require("../stu3-resources/DataElement-ResearchStudy.status.json");
		 expect(dataelementValidateFunction(dataelementExample2968)).toBe(true);
	 });

	 test("validate DataElement-ResearchStudy.title.json", () => {
		 const dataelementExample2969 = require("../stu3-resources/DataElement-ResearchStudy.title.json");
		 expect(dataelementValidateFunction(dataelementExample2969)).toBe(true);
	 });

	 test("validate DataElement-ResearchSubject.actualArm.json", () => {
		 const dataelementExample2970 = require("../stu3-resources/DataElement-ResearchSubject.actualArm.json");
		 expect(dataelementValidateFunction(dataelementExample2970)).toBe(true);
	 });

	 test("validate DataElement-ResearchSubject.assignedArm.json", () => {
		 const dataelementExample2971 = require("../stu3-resources/DataElement-ResearchSubject.assignedArm.json");
		 expect(dataelementValidateFunction(dataelementExample2971)).toBe(true);
	 });

	 test("validate DataElement-ResearchSubject.consent.json", () => {
		 const dataelementExample2972 = require("../stu3-resources/DataElement-ResearchSubject.consent.json");
		 expect(dataelementValidateFunction(dataelementExample2972)).toBe(true);
	 });

	 test("validate DataElement-ResearchSubject.identifier.json", () => {
		 const dataelementExample2973 = require("../stu3-resources/DataElement-ResearchSubject.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2973)).toBe(true);
	 });

	 test("validate DataElement-ResearchSubject.individual.json", () => {
		 const dataelementExample2974 = require("../stu3-resources/DataElement-ResearchSubject.individual.json");
		 expect(dataelementValidateFunction(dataelementExample2974)).toBe(true);
	 });

	 test("validate DataElement-ResearchSubject.json", () => {
		 const dataelementExample2975 = require("../stu3-resources/DataElement-ResearchSubject.json");
		 expect(dataelementValidateFunction(dataelementExample2975)).toBe(true);
	 });

	 test("validate DataElement-ResearchSubject.period.json", () => {
		 const dataelementExample2976 = require("../stu3-resources/DataElement-ResearchSubject.period.json");
		 expect(dataelementValidateFunction(dataelementExample2976)).toBe(true);
	 });

	 test("validate DataElement-ResearchSubject.status.json", () => {
		 const dataelementExample2977 = require("../stu3-resources/DataElement-ResearchSubject.status.json");
		 expect(dataelementValidateFunction(dataelementExample2977)).toBe(true);
	 });

	 test("validate DataElement-ResearchSubject.study.json", () => {
		 const dataelementExample2978 = require("../stu3-resources/DataElement-ResearchSubject.study.json");
		 expect(dataelementValidateFunction(dataelementExample2978)).toBe(true);
	 });

	 test("validate DataElement-Resource.id.json", () => {
		 const dataelementExample2979 = require("../stu3-resources/DataElement-Resource.id.json");
		 expect(dataelementValidateFunction(dataelementExample2979)).toBe(true);
	 });

	 test("validate DataElement-Resource.implicitRules.json", () => {
		 const dataelementExample2980 = require("../stu3-resources/DataElement-Resource.implicitRules.json");
		 expect(dataelementValidateFunction(dataelementExample2980)).toBe(true);
	 });

	 test("validate DataElement-Resource.json", () => {
		 const dataelementExample2981 = require("../stu3-resources/DataElement-Resource.json");
		 expect(dataelementValidateFunction(dataelementExample2981)).toBe(true);
	 });

	 test("validate DataElement-Resource.language.json", () => {
		 const dataelementExample2982 = require("../stu3-resources/DataElement-Resource.language.json");
		 expect(dataelementValidateFunction(dataelementExample2982)).toBe(true);
	 });

	 test("validate DataElement-Resource.meta.json", () => {
		 const dataelementExample2983 = require("../stu3-resources/DataElement-Resource.meta.json");
		 expect(dataelementValidateFunction(dataelementExample2983)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.basedOn.json", () => {
		 const dataelementExample2984 = require("../stu3-resources/DataElement-RiskAssessment.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample2984)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.basis.json", () => {
		 const dataelementExample2985 = require("../stu3-resources/DataElement-RiskAssessment.basis.json");
		 expect(dataelementValidateFunction(dataelementExample2985)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.code.json", () => {
		 const dataelementExample2986 = require("../stu3-resources/DataElement-RiskAssessment.code.json");
		 expect(dataelementValidateFunction(dataelementExample2986)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.comment.json", () => {
		 const dataelementExample2987 = require("../stu3-resources/DataElement-RiskAssessment.comment.json");
		 expect(dataelementValidateFunction(dataelementExample2987)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.condition.json", () => {
		 const dataelementExample2988 = require("../stu3-resources/DataElement-RiskAssessment.condition.json");
		 expect(dataelementValidateFunction(dataelementExample2988)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.context.json", () => {
		 const dataelementExample2989 = require("../stu3-resources/DataElement-RiskAssessment.context.json");
		 expect(dataelementValidateFunction(dataelementExample2989)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.identifier.json", () => {
		 const dataelementExample2990 = require("../stu3-resources/DataElement-RiskAssessment.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample2990)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.json", () => {
		 const dataelementExample2991 = require("../stu3-resources/DataElement-RiskAssessment.json");
		 expect(dataelementValidateFunction(dataelementExample2991)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.method.json", () => {
		 const dataelementExample2992 = require("../stu3-resources/DataElement-RiskAssessment.method.json");
		 expect(dataelementValidateFunction(dataelementExample2992)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.mitigation.json", () => {
		 const dataelementExample2993 = require("../stu3-resources/DataElement-RiskAssessment.mitigation.json");
		 expect(dataelementValidateFunction(dataelementExample2993)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.occurrenceX.json", () => {
		 const dataelementExample2994 = require("../stu3-resources/DataElement-RiskAssessment.occurrenceX.json");
		 expect(dataelementValidateFunction(dataelementExample2994)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.parent.json", () => {
		 const dataelementExample2995 = require("../stu3-resources/DataElement-RiskAssessment.parent.json");
		 expect(dataelementValidateFunction(dataelementExample2995)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.performer.json", () => {
		 const dataelementExample2996 = require("../stu3-resources/DataElement-RiskAssessment.performer.json");
		 expect(dataelementValidateFunction(dataelementExample2996)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.prediction.json", () => {
		 const dataelementExample2997 = require("../stu3-resources/DataElement-RiskAssessment.prediction.json");
		 expect(dataelementValidateFunction(dataelementExample2997)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.prediction.outcome.json", () => {
		 const dataelementExample2998 = require("../stu3-resources/DataElement-RiskAssessment.prediction.outcome.json");
		 expect(dataelementValidateFunction(dataelementExample2998)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.prediction.probabilityX.json", () => {
		 const dataelementExample2999 = require("../stu3-resources/DataElement-RiskAssessment.prediction.probabilityX.json");
		 expect(dataelementValidateFunction(dataelementExample2999)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.prediction.qualitativeRisk.json", () => {
		 const dataelementExample3000 = require("../stu3-resources/DataElement-RiskAssessment.prediction.qualitativeRisk.json");
		 expect(dataelementValidateFunction(dataelementExample3000)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.prediction.rationale.json", () => {
		 const dataelementExample3001 = require("../stu3-resources/DataElement-RiskAssessment.prediction.rationale.json");
		 expect(dataelementValidateFunction(dataelementExample3001)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.prediction.relativeRisk.json", () => {
		 const dataelementExample3002 = require("../stu3-resources/DataElement-RiskAssessment.prediction.relativeRisk.json");
		 expect(dataelementValidateFunction(dataelementExample3002)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.prediction.whenX.json", () => {
		 const dataelementExample3003 = require("../stu3-resources/DataElement-RiskAssessment.prediction.whenX.json");
		 expect(dataelementValidateFunction(dataelementExample3003)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.reasonX.json", () => {
		 const dataelementExample3004 = require("../stu3-resources/DataElement-RiskAssessment.reasonX.json");
		 expect(dataelementValidateFunction(dataelementExample3004)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.status.json", () => {
		 const dataelementExample3005 = require("../stu3-resources/DataElement-RiskAssessment.status.json");
		 expect(dataelementValidateFunction(dataelementExample3005)).toBe(true);
	 });

	 test("validate DataElement-RiskAssessment.subject.json", () => {
		 const dataelementExample3006 = require("../stu3-resources/DataElement-RiskAssessment.subject.json");
		 expect(dataelementValidateFunction(dataelementExample3006)).toBe(true);
	 });

	 test("validate DataElement-SampledData.data.json", () => {
		 const dataelementExample3007 = require("../stu3-resources/DataElement-SampledData.data.json");
		 expect(dataelementValidateFunction(dataelementExample3007)).toBe(true);
	 });

	 test("validate DataElement-SampledData.dimensions.json", () => {
		 const dataelementExample3008 = require("../stu3-resources/DataElement-SampledData.dimensions.json");
		 expect(dataelementValidateFunction(dataelementExample3008)).toBe(true);
	 });

	 test("validate DataElement-SampledData.factor.json", () => {
		 const dataelementExample3009 = require("../stu3-resources/DataElement-SampledData.factor.json");
		 expect(dataelementValidateFunction(dataelementExample3009)).toBe(true);
	 });

	 test("validate DataElement-SampledData.json", () => {
		 const dataelementExample3010 = require("../stu3-resources/DataElement-SampledData.json");
		 expect(dataelementValidateFunction(dataelementExample3010)).toBe(true);
	 });

	 test("validate DataElement-SampledData.lowerLimit.json", () => {
		 const dataelementExample3011 = require("../stu3-resources/DataElement-SampledData.lowerLimit.json");
		 expect(dataelementValidateFunction(dataelementExample3011)).toBe(true);
	 });

	 test("validate DataElement-SampledData.origin.json", () => {
		 const dataelementExample3012 = require("../stu3-resources/DataElement-SampledData.origin.json");
		 expect(dataelementValidateFunction(dataelementExample3012)).toBe(true);
	 });

	 test("validate DataElement-SampledData.period.json", () => {
		 const dataelementExample3013 = require("../stu3-resources/DataElement-SampledData.period.json");
		 expect(dataelementValidateFunction(dataelementExample3013)).toBe(true);
	 });

	 test("validate DataElement-SampledData.upperLimit.json", () => {
		 const dataelementExample3014 = require("../stu3-resources/DataElement-SampledData.upperLimit.json");
		 expect(dataelementValidateFunction(dataelementExample3014)).toBe(true);
	 });

	 test("validate DataElement-Schedule.active.json", () => {
		 const dataelementExample3015 = require("../stu3-resources/DataElement-Schedule.active.json");
		 expect(dataelementValidateFunction(dataelementExample3015)).toBe(true);
	 });

	 test("validate DataElement-Schedule.actor.json", () => {
		 const dataelementExample3016 = require("../stu3-resources/DataElement-Schedule.actor.json");
		 expect(dataelementValidateFunction(dataelementExample3016)).toBe(true);
	 });

	 test("validate DataElement-Schedule.comment.json", () => {
		 const dataelementExample3017 = require("../stu3-resources/DataElement-Schedule.comment.json");
		 expect(dataelementValidateFunction(dataelementExample3017)).toBe(true);
	 });

	 test("validate DataElement-Schedule.identifier.json", () => {
		 const dataelementExample3018 = require("../stu3-resources/DataElement-Schedule.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3018)).toBe(true);
	 });

	 test("validate DataElement-Schedule.json", () => {
		 const dataelementExample3019 = require("../stu3-resources/DataElement-Schedule.json");
		 expect(dataelementValidateFunction(dataelementExample3019)).toBe(true);
	 });

	 test("validate DataElement-Schedule.planningHorizon.json", () => {
		 const dataelementExample3020 = require("../stu3-resources/DataElement-Schedule.planningHorizon.json");
		 expect(dataelementValidateFunction(dataelementExample3020)).toBe(true);
	 });

	 test("validate DataElement-Schedule.serviceCategory.json", () => {
		 const dataelementExample3021 = require("../stu3-resources/DataElement-Schedule.serviceCategory.json");
		 expect(dataelementValidateFunction(dataelementExample3021)).toBe(true);
	 });

	 test("validate DataElement-Schedule.serviceType.json", () => {
		 const dataelementExample3022 = require("../stu3-resources/DataElement-Schedule.serviceType.json");
		 expect(dataelementValidateFunction(dataelementExample3022)).toBe(true);
	 });

	 test("validate DataElement-Schedule.specialty.json", () => {
		 const dataelementExample3023 = require("../stu3-resources/DataElement-Schedule.specialty.json");
		 expect(dataelementValidateFunction(dataelementExample3023)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.base.json", () => {
		 const dataelementExample3024 = require("../stu3-resources/DataElement-SearchParameter.base.json");
		 expect(dataelementValidateFunction(dataelementExample3024)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.chain.json", () => {
		 const dataelementExample3025 = require("../stu3-resources/DataElement-SearchParameter.chain.json");
		 expect(dataelementValidateFunction(dataelementExample3025)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.code.json", () => {
		 const dataelementExample3026 = require("../stu3-resources/DataElement-SearchParameter.code.json");
		 expect(dataelementValidateFunction(dataelementExample3026)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.comparator.json", () => {
		 const dataelementExample3027 = require("../stu3-resources/DataElement-SearchParameter.comparator.json");
		 expect(dataelementValidateFunction(dataelementExample3027)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.component.definition.json", () => {
		 const dataelementExample3028 = require("../stu3-resources/DataElement-SearchParameter.component.definition.json");
		 expect(dataelementValidateFunction(dataelementExample3028)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.component.expression.json", () => {
		 const dataelementExample3029 = require("../stu3-resources/DataElement-SearchParameter.component.expression.json");
		 expect(dataelementValidateFunction(dataelementExample3029)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.component.json", () => {
		 const dataelementExample3030 = require("../stu3-resources/DataElement-SearchParameter.component.json");
		 expect(dataelementValidateFunction(dataelementExample3030)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.contact.json", () => {
		 const dataelementExample3031 = require("../stu3-resources/DataElement-SearchParameter.contact.json");
		 expect(dataelementValidateFunction(dataelementExample3031)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.date.json", () => {
		 const dataelementExample3032 = require("../stu3-resources/DataElement-SearchParameter.date.json");
		 expect(dataelementValidateFunction(dataelementExample3032)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.derivedFrom.json", () => {
		 const dataelementExample3033 = require("../stu3-resources/DataElement-SearchParameter.derivedFrom.json");
		 expect(dataelementValidateFunction(dataelementExample3033)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.description.json", () => {
		 const dataelementExample3034 = require("../stu3-resources/DataElement-SearchParameter.description.json");
		 expect(dataelementValidateFunction(dataelementExample3034)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.experimental.json", () => {
		 const dataelementExample3035 = require("../stu3-resources/DataElement-SearchParameter.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample3035)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.expression.json", () => {
		 const dataelementExample3036 = require("../stu3-resources/DataElement-SearchParameter.expression.json");
		 expect(dataelementValidateFunction(dataelementExample3036)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.json", () => {
		 const dataelementExample3037 = require("../stu3-resources/DataElement-SearchParameter.json");
		 expect(dataelementValidateFunction(dataelementExample3037)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.jurisdiction.json", () => {
		 const dataelementExample3038 = require("../stu3-resources/DataElement-SearchParameter.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample3038)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.modifier.json", () => {
		 const dataelementExample3039 = require("../stu3-resources/DataElement-SearchParameter.modifier.json");
		 expect(dataelementValidateFunction(dataelementExample3039)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.name.json", () => {
		 const dataelementExample3040 = require("../stu3-resources/DataElement-SearchParameter.name.json");
		 expect(dataelementValidateFunction(dataelementExample3040)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.publisher.json", () => {
		 const dataelementExample3041 = require("../stu3-resources/DataElement-SearchParameter.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample3041)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.purpose.json", () => {
		 const dataelementExample3042 = require("../stu3-resources/DataElement-SearchParameter.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample3042)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.status.json", () => {
		 const dataelementExample3043 = require("../stu3-resources/DataElement-SearchParameter.status.json");
		 expect(dataelementValidateFunction(dataelementExample3043)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.target.json", () => {
		 const dataelementExample3044 = require("../stu3-resources/DataElement-SearchParameter.target.json");
		 expect(dataelementValidateFunction(dataelementExample3044)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.type.json", () => {
		 const dataelementExample3045 = require("../stu3-resources/DataElement-SearchParameter.type.json");
		 expect(dataelementValidateFunction(dataelementExample3045)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.url.json", () => {
		 const dataelementExample3046 = require("../stu3-resources/DataElement-SearchParameter.url.json");
		 expect(dataelementValidateFunction(dataelementExample3046)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.useContext.json", () => {
		 const dataelementExample3047 = require("../stu3-resources/DataElement-SearchParameter.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample3047)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.version.json", () => {
		 const dataelementExample3048 = require("../stu3-resources/DataElement-SearchParameter.version.json");
		 expect(dataelementValidateFunction(dataelementExample3048)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.xpath.json", () => {
		 const dataelementExample3049 = require("../stu3-resources/DataElement-SearchParameter.xpath.json");
		 expect(dataelementValidateFunction(dataelementExample3049)).toBe(true);
	 });

	 test("validate DataElement-SearchParameter.xpathUsage.json", () => {
		 const dataelementExample3050 = require("../stu3-resources/DataElement-SearchParameter.xpathUsage.json");
		 expect(dataelementValidateFunction(dataelementExample3050)).toBe(true);
	 });

	 test("validate DataElement-Sequence.coordinateSystem.json", () => {
		 const dataelementExample3051 = require("../stu3-resources/DataElement-Sequence.coordinateSystem.json");
		 expect(dataelementValidateFunction(dataelementExample3051)).toBe(true);
	 });

	 test("validate DataElement-Sequence.device.json", () => {
		 const dataelementExample3052 = require("../stu3-resources/DataElement-Sequence.device.json");
		 expect(dataelementValidateFunction(dataelementExample3052)).toBe(true);
	 });

	 test("validate DataElement-Sequence.identifier.json", () => {
		 const dataelementExample3053 = require("../stu3-resources/DataElement-Sequence.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3053)).toBe(true);
	 });

	 test("validate DataElement-Sequence.json", () => {
		 const dataelementExample3054 = require("../stu3-resources/DataElement-Sequence.json");
		 expect(dataelementValidateFunction(dataelementExample3054)).toBe(true);
	 });

	 test("validate DataElement-Sequence.observedSeq.json", () => {
		 const dataelementExample3055 = require("../stu3-resources/DataElement-Sequence.observedSeq.json");
		 expect(dataelementValidateFunction(dataelementExample3055)).toBe(true);
	 });

	 test("validate DataElement-Sequence.patient.json", () => {
		 const dataelementExample3056 = require("../stu3-resources/DataElement-Sequence.patient.json");
		 expect(dataelementValidateFunction(dataelementExample3056)).toBe(true);
	 });

	 test("validate DataElement-Sequence.performer.json", () => {
		 const dataelementExample3057 = require("../stu3-resources/DataElement-Sequence.performer.json");
		 expect(dataelementValidateFunction(dataelementExample3057)).toBe(true);
	 });

	 test("validate DataElement-Sequence.pointer.json", () => {
		 const dataelementExample3058 = require("../stu3-resources/DataElement-Sequence.pointer.json");
		 expect(dataelementValidateFunction(dataelementExample3058)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.end.json", () => {
		 const dataelementExample3059 = require("../stu3-resources/DataElement-Sequence.quality.end.json");
		 expect(dataelementValidateFunction(dataelementExample3059)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.fScore.json", () => {
		 const dataelementExample3060 = require("../stu3-resources/DataElement-Sequence.quality.fScore.json");
		 expect(dataelementValidateFunction(dataelementExample3060)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.gtFP.json", () => {
		 const dataelementExample3061 = require("../stu3-resources/DataElement-Sequence.quality.gtFP.json");
		 expect(dataelementValidateFunction(dataelementExample3061)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.json", () => {
		 const dataelementExample3062 = require("../stu3-resources/DataElement-Sequence.quality.json");
		 expect(dataelementValidateFunction(dataelementExample3062)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.method.json", () => {
		 const dataelementExample3063 = require("../stu3-resources/DataElement-Sequence.quality.method.json");
		 expect(dataelementValidateFunction(dataelementExample3063)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.precision.json", () => {
		 const dataelementExample3064 = require("../stu3-resources/DataElement-Sequence.quality.precision.json");
		 expect(dataelementValidateFunction(dataelementExample3064)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.queryFP.json", () => {
		 const dataelementExample3065 = require("../stu3-resources/DataElement-Sequence.quality.queryFP.json");
		 expect(dataelementValidateFunction(dataelementExample3065)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.queryTP.json", () => {
		 const dataelementExample3066 = require("../stu3-resources/DataElement-Sequence.quality.queryTP.json");
		 expect(dataelementValidateFunction(dataelementExample3066)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.recall.json", () => {
		 const dataelementExample3067 = require("../stu3-resources/DataElement-Sequence.quality.recall.json");
		 expect(dataelementValidateFunction(dataelementExample3067)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.score.json", () => {
		 const dataelementExample3068 = require("../stu3-resources/DataElement-Sequence.quality.score.json");
		 expect(dataelementValidateFunction(dataelementExample3068)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.standardSequence.json", () => {
		 const dataelementExample3069 = require("../stu3-resources/DataElement-Sequence.quality.standardSequence.json");
		 expect(dataelementValidateFunction(dataelementExample3069)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.start.json", () => {
		 const dataelementExample3070 = require("../stu3-resources/DataElement-Sequence.quality.start.json");
		 expect(dataelementValidateFunction(dataelementExample3070)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.truthFN.json", () => {
		 const dataelementExample3071 = require("../stu3-resources/DataElement-Sequence.quality.truthFN.json");
		 expect(dataelementValidateFunction(dataelementExample3071)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.truthTP.json", () => {
		 const dataelementExample3072 = require("../stu3-resources/DataElement-Sequence.quality.truthTP.json");
		 expect(dataelementValidateFunction(dataelementExample3072)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quality.type.json", () => {
		 const dataelementExample3073 = require("../stu3-resources/DataElement-Sequence.quality.type.json");
		 expect(dataelementValidateFunction(dataelementExample3073)).toBe(true);
	 });

	 test("validate DataElement-Sequence.quantity.json", () => {
		 const dataelementExample3074 = require("../stu3-resources/DataElement-Sequence.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample3074)).toBe(true);
	 });

	 test("validate DataElement-Sequence.readCoverage.json", () => {
		 const dataelementExample3075 = require("../stu3-resources/DataElement-Sequence.readCoverage.json");
		 expect(dataelementValidateFunction(dataelementExample3075)).toBe(true);
	 });

	 test("validate DataElement-Sequence.referenceSeq.chromosome.json", () => {
		 const dataelementExample3076 = require("../stu3-resources/DataElement-Sequence.referenceSeq.chromosome.json");
		 expect(dataelementValidateFunction(dataelementExample3076)).toBe(true);
	 });

	 test("validate DataElement-Sequence.referenceSeq.genomeBuild.json", () => {
		 const dataelementExample3077 = require("../stu3-resources/DataElement-Sequence.referenceSeq.genomeBuild.json");
		 expect(dataelementValidateFunction(dataelementExample3077)).toBe(true);
	 });

	 test("validate DataElement-Sequence.referenceSeq.json", () => {
		 const dataelementExample3078 = require("../stu3-resources/DataElement-Sequence.referenceSeq.json");
		 expect(dataelementValidateFunction(dataelementExample3078)).toBe(true);
	 });

	 test("validate DataElement-Sequence.referenceSeq.referenceSeqId.json", () => {
		 const dataelementExample3079 = require("../stu3-resources/DataElement-Sequence.referenceSeq.referenceSeqId.json");
		 expect(dataelementValidateFunction(dataelementExample3079)).toBe(true);
	 });

	 test("validate DataElement-Sequence.referenceSeq.referenceSeqPointer.json", () => {
		 const dataelementExample3080 = require("../stu3-resources/DataElement-Sequence.referenceSeq.referenceSeqPointer.json");
		 expect(dataelementValidateFunction(dataelementExample3080)).toBe(true);
	 });

	 test("validate DataElement-Sequence.referenceSeq.referenceSeqString.json", () => {
		 const dataelementExample3081 = require("../stu3-resources/DataElement-Sequence.referenceSeq.referenceSeqString.json");
		 expect(dataelementValidateFunction(dataelementExample3081)).toBe(true);
	 });

	 test("validate DataElement-Sequence.referenceSeq.strand.json", () => {
		 const dataelementExample3082 = require("../stu3-resources/DataElement-Sequence.referenceSeq.strand.json");
		 expect(dataelementValidateFunction(dataelementExample3082)).toBe(true);
	 });

	 test("validate DataElement-Sequence.referenceSeq.windowEnd.json", () => {
		 const dataelementExample3083 = require("../stu3-resources/DataElement-Sequence.referenceSeq.windowEnd.json");
		 expect(dataelementValidateFunction(dataelementExample3083)).toBe(true);
	 });

	 test("validate DataElement-Sequence.referenceSeq.windowStart.json", () => {
		 const dataelementExample3084 = require("../stu3-resources/DataElement-Sequence.referenceSeq.windowStart.json");
		 expect(dataelementValidateFunction(dataelementExample3084)).toBe(true);
	 });

	 test("validate DataElement-Sequence.repository.datasetId.json", () => {
		 const dataelementExample3085 = require("../stu3-resources/DataElement-Sequence.repository.datasetId.json");
		 expect(dataelementValidateFunction(dataelementExample3085)).toBe(true);
	 });

	 test("validate DataElement-Sequence.repository.json", () => {
		 const dataelementExample3086 = require("../stu3-resources/DataElement-Sequence.repository.json");
		 expect(dataelementValidateFunction(dataelementExample3086)).toBe(true);
	 });

	 test("validate DataElement-Sequence.repository.name.json", () => {
		 const dataelementExample3087 = require("../stu3-resources/DataElement-Sequence.repository.name.json");
		 expect(dataelementValidateFunction(dataelementExample3087)).toBe(true);
	 });

	 test("validate DataElement-Sequence.repository.readsetId.json", () => {
		 const dataelementExample3088 = require("../stu3-resources/DataElement-Sequence.repository.readsetId.json");
		 expect(dataelementValidateFunction(dataelementExample3088)).toBe(true);
	 });

	 test("validate DataElement-Sequence.repository.type.json", () => {
		 const dataelementExample3089 = require("../stu3-resources/DataElement-Sequence.repository.type.json");
		 expect(dataelementValidateFunction(dataelementExample3089)).toBe(true);
	 });

	 test("validate DataElement-Sequence.repository.url.json", () => {
		 const dataelementExample3090 = require("../stu3-resources/DataElement-Sequence.repository.url.json");
		 expect(dataelementValidateFunction(dataelementExample3090)).toBe(true);
	 });

	 test("validate DataElement-Sequence.repository.variantsetId.json", () => {
		 const dataelementExample3091 = require("../stu3-resources/DataElement-Sequence.repository.variantsetId.json");
		 expect(dataelementValidateFunction(dataelementExample3091)).toBe(true);
	 });

	 test("validate DataElement-Sequence.specimen.json", () => {
		 const dataelementExample3092 = require("../stu3-resources/DataElement-Sequence.specimen.json");
		 expect(dataelementValidateFunction(dataelementExample3092)).toBe(true);
	 });

	 test("validate DataElement-Sequence.type.json", () => {
		 const dataelementExample3093 = require("../stu3-resources/DataElement-Sequence.type.json");
		 expect(dataelementValidateFunction(dataelementExample3093)).toBe(true);
	 });

	 test("validate DataElement-Sequence.variant.cigar.json", () => {
		 const dataelementExample3094 = require("../stu3-resources/DataElement-Sequence.variant.cigar.json");
		 expect(dataelementValidateFunction(dataelementExample3094)).toBe(true);
	 });

	 test("validate DataElement-Sequence.variant.end.json", () => {
		 const dataelementExample3095 = require("../stu3-resources/DataElement-Sequence.variant.end.json");
		 expect(dataelementValidateFunction(dataelementExample3095)).toBe(true);
	 });

	 test("validate DataElement-Sequence.variant.json", () => {
		 const dataelementExample3096 = require("../stu3-resources/DataElement-Sequence.variant.json");
		 expect(dataelementValidateFunction(dataelementExample3096)).toBe(true);
	 });

	 test("validate DataElement-Sequence.variant.observedAllele.json", () => {
		 const dataelementExample3097 = require("../stu3-resources/DataElement-Sequence.variant.observedAllele.json");
		 expect(dataelementValidateFunction(dataelementExample3097)).toBe(true);
	 });

	 test("validate DataElement-Sequence.variant.referenceAllele.json", () => {
		 const dataelementExample3098 = require("../stu3-resources/DataElement-Sequence.variant.referenceAllele.json");
		 expect(dataelementValidateFunction(dataelementExample3098)).toBe(true);
	 });

	 test("validate DataElement-Sequence.variant.start.json", () => {
		 const dataelementExample3099 = require("../stu3-resources/DataElement-Sequence.variant.start.json");
		 expect(dataelementValidateFunction(dataelementExample3099)).toBe(true);
	 });

	 test("validate DataElement-Sequence.variant.variantPointer.json", () => {
		 const dataelementExample3100 = require("../stu3-resources/DataElement-Sequence.variant.variantPointer.json");
		 expect(dataelementValidateFunction(dataelementExample3100)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.approvalDate.json", () => {
		 const dataelementExample3101 = require("../stu3-resources/DataElement-ServiceDefinition.approvalDate.json");
		 expect(dataelementValidateFunction(dataelementExample3101)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.contact.json", () => {
		 const dataelementExample3102 = require("../stu3-resources/DataElement-ServiceDefinition.contact.json");
		 expect(dataelementValidateFunction(dataelementExample3102)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.contributor.json", () => {
		 const dataelementExample3103 = require("../stu3-resources/DataElement-ServiceDefinition.contributor.json");
		 expect(dataelementValidateFunction(dataelementExample3103)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.copyright.json", () => {
		 const dataelementExample3104 = require("../stu3-resources/DataElement-ServiceDefinition.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample3104)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.dataRequirement.json", () => {
		 const dataelementExample3105 = require("../stu3-resources/DataElement-ServiceDefinition.dataRequirement.json");
		 expect(dataelementValidateFunction(dataelementExample3105)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.date.json", () => {
		 const dataelementExample3106 = require("../stu3-resources/DataElement-ServiceDefinition.date.json");
		 expect(dataelementValidateFunction(dataelementExample3106)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.description.json", () => {
		 const dataelementExample3107 = require("../stu3-resources/DataElement-ServiceDefinition.description.json");
		 expect(dataelementValidateFunction(dataelementExample3107)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.effectivePeriod.json", () => {
		 const dataelementExample3108 = require("../stu3-resources/DataElement-ServiceDefinition.effectivePeriod.json");
		 expect(dataelementValidateFunction(dataelementExample3108)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.experimental.json", () => {
		 const dataelementExample3109 = require("../stu3-resources/DataElement-ServiceDefinition.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample3109)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.identifier.json", () => {
		 const dataelementExample3110 = require("../stu3-resources/DataElement-ServiceDefinition.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3110)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.json", () => {
		 const dataelementExample3111 = require("../stu3-resources/DataElement-ServiceDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample3111)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.jurisdiction.json", () => {
		 const dataelementExample3112 = require("../stu3-resources/DataElement-ServiceDefinition.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample3112)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.lastReviewDate.json", () => {
		 const dataelementExample3113 = require("../stu3-resources/DataElement-ServiceDefinition.lastReviewDate.json");
		 expect(dataelementValidateFunction(dataelementExample3113)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.name.json", () => {
		 const dataelementExample3114 = require("../stu3-resources/DataElement-ServiceDefinition.name.json");
		 expect(dataelementValidateFunction(dataelementExample3114)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.operationDefinition.json", () => {
		 const dataelementExample3115 = require("../stu3-resources/DataElement-ServiceDefinition.operationDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample3115)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.publisher.json", () => {
		 const dataelementExample3116 = require("../stu3-resources/DataElement-ServiceDefinition.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample3116)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.purpose.json", () => {
		 const dataelementExample3117 = require("../stu3-resources/DataElement-ServiceDefinition.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample3117)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.relatedArtifact.json", () => {
		 const dataelementExample3118 = require("../stu3-resources/DataElement-ServiceDefinition.relatedArtifact.json");
		 expect(dataelementValidateFunction(dataelementExample3118)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.status.json", () => {
		 const dataelementExample3119 = require("../stu3-resources/DataElement-ServiceDefinition.status.json");
		 expect(dataelementValidateFunction(dataelementExample3119)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.title.json", () => {
		 const dataelementExample3120 = require("../stu3-resources/DataElement-ServiceDefinition.title.json");
		 expect(dataelementValidateFunction(dataelementExample3120)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.topic.json", () => {
		 const dataelementExample3121 = require("../stu3-resources/DataElement-ServiceDefinition.topic.json");
		 expect(dataelementValidateFunction(dataelementExample3121)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.trigger.json", () => {
		 const dataelementExample3122 = require("../stu3-resources/DataElement-ServiceDefinition.trigger.json");
		 expect(dataelementValidateFunction(dataelementExample3122)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.url.json", () => {
		 const dataelementExample3123 = require("../stu3-resources/DataElement-ServiceDefinition.url.json");
		 expect(dataelementValidateFunction(dataelementExample3123)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.usage.json", () => {
		 const dataelementExample3124 = require("../stu3-resources/DataElement-ServiceDefinition.usage.json");
		 expect(dataelementValidateFunction(dataelementExample3124)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.useContext.json", () => {
		 const dataelementExample3125 = require("../stu3-resources/DataElement-ServiceDefinition.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample3125)).toBe(true);
	 });

	 test("validate DataElement-ServiceDefinition.version.json", () => {
		 const dataelementExample3126 = require("../stu3-resources/DataElement-ServiceDefinition.version.json");
		 expect(dataelementValidateFunction(dataelementExample3126)).toBe(true);
	 });

	 test("validate DataElement-Signature.blob.json", () => {
		 const dataelementExample3127 = require("../stu3-resources/DataElement-Signature.blob.json");
		 expect(dataelementValidateFunction(dataelementExample3127)).toBe(true);
	 });

	 test("validate DataElement-Signature.contentType.json", () => {
		 const dataelementExample3128 = require("../stu3-resources/DataElement-Signature.contentType.json");
		 expect(dataelementValidateFunction(dataelementExample3128)).toBe(true);
	 });

	 test("validate DataElement-Signature.json", () => {
		 const dataelementExample3129 = require("../stu3-resources/DataElement-Signature.json");
		 expect(dataelementValidateFunction(dataelementExample3129)).toBe(true);
	 });

	 test("validate DataElement-Signature.onBehalfOfX.json", () => {
		 const dataelementExample3130 = require("../stu3-resources/DataElement-Signature.onBehalfOfX.json");
		 expect(dataelementValidateFunction(dataelementExample3130)).toBe(true);
	 });

	 test("validate DataElement-Signature.type.json", () => {
		 const dataelementExample3131 = require("../stu3-resources/DataElement-Signature.type.json");
		 expect(dataelementValidateFunction(dataelementExample3131)).toBe(true);
	 });

	 test("validate DataElement-Signature.when.json", () => {
		 const dataelementExample3132 = require("../stu3-resources/DataElement-Signature.when.json");
		 expect(dataelementValidateFunction(dataelementExample3132)).toBe(true);
	 });

	 test("validate DataElement-Signature.whoX.json", () => {
		 const dataelementExample3133 = require("../stu3-resources/DataElement-Signature.whoX.json");
		 expect(dataelementValidateFunction(dataelementExample3133)).toBe(true);
	 });

	 test("validate DataElement-Slot.appointmentType.json", () => {
		 const dataelementExample3134 = require("../stu3-resources/DataElement-Slot.appointmentType.json");
		 expect(dataelementValidateFunction(dataelementExample3134)).toBe(true);
	 });

	 test("validate DataElement-Slot.comment.json", () => {
		 const dataelementExample3135 = require("../stu3-resources/DataElement-Slot.comment.json");
		 expect(dataelementValidateFunction(dataelementExample3135)).toBe(true);
	 });

	 test("validate DataElement-Slot.end.json", () => {
		 const dataelementExample3136 = require("../stu3-resources/DataElement-Slot.end.json");
		 expect(dataelementValidateFunction(dataelementExample3136)).toBe(true);
	 });

	 test("validate DataElement-Slot.identifier.json", () => {
		 const dataelementExample3137 = require("../stu3-resources/DataElement-Slot.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3137)).toBe(true);
	 });

	 test("validate DataElement-Slot.json", () => {
		 const dataelementExample3138 = require("../stu3-resources/DataElement-Slot.json");
		 expect(dataelementValidateFunction(dataelementExample3138)).toBe(true);
	 });

	 test("validate DataElement-Slot.overbooked.json", () => {
		 const dataelementExample3139 = require("../stu3-resources/DataElement-Slot.overbooked.json");
		 expect(dataelementValidateFunction(dataelementExample3139)).toBe(true);
	 });

	 test("validate DataElement-Slot.schedule.json", () => {
		 const dataelementExample3140 = require("../stu3-resources/DataElement-Slot.schedule.json");
		 expect(dataelementValidateFunction(dataelementExample3140)).toBe(true);
	 });

	 test("validate DataElement-Slot.serviceCategory.json", () => {
		 const dataelementExample3141 = require("../stu3-resources/DataElement-Slot.serviceCategory.json");
		 expect(dataelementValidateFunction(dataelementExample3141)).toBe(true);
	 });

	 test("validate DataElement-Slot.serviceType.json", () => {
		 const dataelementExample3142 = require("../stu3-resources/DataElement-Slot.serviceType.json");
		 expect(dataelementValidateFunction(dataelementExample3142)).toBe(true);
	 });

	 test("validate DataElement-Slot.specialty.json", () => {
		 const dataelementExample3143 = require("../stu3-resources/DataElement-Slot.specialty.json");
		 expect(dataelementValidateFunction(dataelementExample3143)).toBe(true);
	 });

	 test("validate DataElement-Slot.start.json", () => {
		 const dataelementExample3144 = require("../stu3-resources/DataElement-Slot.start.json");
		 expect(dataelementValidateFunction(dataelementExample3144)).toBe(true);
	 });

	 test("validate DataElement-Slot.status.json", () => {
		 const dataelementExample3145 = require("../stu3-resources/DataElement-Slot.status.json");
		 expect(dataelementValidateFunction(dataelementExample3145)).toBe(true);
	 });

	 test("validate DataElement-Specimen.accessionIdentifier.json", () => {
		 const dataelementExample3146 = require("../stu3-resources/DataElement-Specimen.accessionIdentifier.json");
		 expect(dataelementValidateFunction(dataelementExample3146)).toBe(true);
	 });

	 test("validate DataElement-Specimen.collection.bodySite.json", () => {
		 const dataelementExample3147 = require("../stu3-resources/DataElement-Specimen.collection.bodySite.json");
		 expect(dataelementValidateFunction(dataelementExample3147)).toBe(true);
	 });

	 test("validate DataElement-Specimen.collection.collectedX.json", () => {
		 const dataelementExample3148 = require("../stu3-resources/DataElement-Specimen.collection.collectedX.json");
		 expect(dataelementValidateFunction(dataelementExample3148)).toBe(true);
	 });

	 test("validate DataElement-Specimen.collection.collector.json", () => {
		 const dataelementExample3149 = require("../stu3-resources/DataElement-Specimen.collection.collector.json");
		 expect(dataelementValidateFunction(dataelementExample3149)).toBe(true);
	 });

	 test("validate DataElement-Specimen.collection.json", () => {
		 const dataelementExample3150 = require("../stu3-resources/DataElement-Specimen.collection.json");
		 expect(dataelementValidateFunction(dataelementExample3150)).toBe(true);
	 });

	 test("validate DataElement-Specimen.collection.method.json", () => {
		 const dataelementExample3151 = require("../stu3-resources/DataElement-Specimen.collection.method.json");
		 expect(dataelementValidateFunction(dataelementExample3151)).toBe(true);
	 });

	 test("validate DataElement-Specimen.collection.quantity.json", () => {
		 const dataelementExample3152 = require("../stu3-resources/DataElement-Specimen.collection.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample3152)).toBe(true);
	 });

	 test("validate DataElement-Specimen.container.additiveX.json", () => {
		 const dataelementExample3153 = require("../stu3-resources/DataElement-Specimen.container.additiveX.json");
		 expect(dataelementValidateFunction(dataelementExample3153)).toBe(true);
	 });

	 test("validate DataElement-Specimen.container.capacity.json", () => {
		 const dataelementExample3154 = require("../stu3-resources/DataElement-Specimen.container.capacity.json");
		 expect(dataelementValidateFunction(dataelementExample3154)).toBe(true);
	 });

	 test("validate DataElement-Specimen.container.description.json", () => {
		 const dataelementExample3155 = require("../stu3-resources/DataElement-Specimen.container.description.json");
		 expect(dataelementValidateFunction(dataelementExample3155)).toBe(true);
	 });

	 test("validate DataElement-Specimen.container.identifier.json", () => {
		 const dataelementExample3156 = require("../stu3-resources/DataElement-Specimen.container.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3156)).toBe(true);
	 });

	 test("validate DataElement-Specimen.container.json", () => {
		 const dataelementExample3157 = require("../stu3-resources/DataElement-Specimen.container.json");
		 expect(dataelementValidateFunction(dataelementExample3157)).toBe(true);
	 });

	 test("validate DataElement-Specimen.container.specimenQuantity.json", () => {
		 const dataelementExample3158 = require("../stu3-resources/DataElement-Specimen.container.specimenQuantity.json");
		 expect(dataelementValidateFunction(dataelementExample3158)).toBe(true);
	 });

	 test("validate DataElement-Specimen.container.type.json", () => {
		 const dataelementExample3159 = require("../stu3-resources/DataElement-Specimen.container.type.json");
		 expect(dataelementValidateFunction(dataelementExample3159)).toBe(true);
	 });

	 test("validate DataElement-Specimen.identifier.json", () => {
		 const dataelementExample3160 = require("../stu3-resources/DataElement-Specimen.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3160)).toBe(true);
	 });

	 test("validate DataElement-Specimen.json", () => {
		 const dataelementExample3161 = require("../stu3-resources/DataElement-Specimen.json");
		 expect(dataelementValidateFunction(dataelementExample3161)).toBe(true);
	 });

	 test("validate DataElement-Specimen.note.json", () => {
		 const dataelementExample3162 = require("../stu3-resources/DataElement-Specimen.note.json");
		 expect(dataelementValidateFunction(dataelementExample3162)).toBe(true);
	 });

	 test("validate DataElement-Specimen.parent.json", () => {
		 const dataelementExample3163 = require("../stu3-resources/DataElement-Specimen.parent.json");
		 expect(dataelementValidateFunction(dataelementExample3163)).toBe(true);
	 });

	 test("validate DataElement-Specimen.processing.additive.json", () => {
		 const dataelementExample3164 = require("../stu3-resources/DataElement-Specimen.processing.additive.json");
		 expect(dataelementValidateFunction(dataelementExample3164)).toBe(true);
	 });

	 test("validate DataElement-Specimen.processing.description.json", () => {
		 const dataelementExample3165 = require("../stu3-resources/DataElement-Specimen.processing.description.json");
		 expect(dataelementValidateFunction(dataelementExample3165)).toBe(true);
	 });

	 test("validate DataElement-Specimen.processing.json", () => {
		 const dataelementExample3166 = require("../stu3-resources/DataElement-Specimen.processing.json");
		 expect(dataelementValidateFunction(dataelementExample3166)).toBe(true);
	 });

	 test("validate DataElement-Specimen.processing.procedure.json", () => {
		 const dataelementExample3167 = require("../stu3-resources/DataElement-Specimen.processing.procedure.json");
		 expect(dataelementValidateFunction(dataelementExample3167)).toBe(true);
	 });

	 test("validate DataElement-Specimen.processing.timeX.json", () => {
		 const dataelementExample3168 = require("../stu3-resources/DataElement-Specimen.processing.timeX.json");
		 expect(dataelementValidateFunction(dataelementExample3168)).toBe(true);
	 });

	 test("validate DataElement-Specimen.receivedTime.json", () => {
		 const dataelementExample3169 = require("../stu3-resources/DataElement-Specimen.receivedTime.json");
		 expect(dataelementValidateFunction(dataelementExample3169)).toBe(true);
	 });

	 test("validate DataElement-Specimen.request.json", () => {
		 const dataelementExample3170 = require("../stu3-resources/DataElement-Specimen.request.json");
		 expect(dataelementValidateFunction(dataelementExample3170)).toBe(true);
	 });

	 test("validate DataElement-Specimen.status.json", () => {
		 const dataelementExample3171 = require("../stu3-resources/DataElement-Specimen.status.json");
		 expect(dataelementValidateFunction(dataelementExample3171)).toBe(true);
	 });

	 test("validate DataElement-Specimen.subject.json", () => {
		 const dataelementExample3172 = require("../stu3-resources/DataElement-Specimen.subject.json");
		 expect(dataelementValidateFunction(dataelementExample3172)).toBe(true);
	 });

	 test("validate DataElement-Specimen.type.json", () => {
		 const dataelementExample3173 = require("../stu3-resources/DataElement-Specimen.type.json");
		 expect(dataelementValidateFunction(dataelementExample3173)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.abstract.json", () => {
		 const dataelementExample3174 = require("../stu3-resources/DataElement-StructureDefinition.abstract.json");
		 expect(dataelementValidateFunction(dataelementExample3174)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.baseDefinition.json", () => {
		 const dataelementExample3175 = require("../stu3-resources/DataElement-StructureDefinition.baseDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample3175)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.contact.json", () => {
		 const dataelementExample3176 = require("../stu3-resources/DataElement-StructureDefinition.contact.json");
		 expect(dataelementValidateFunction(dataelementExample3176)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.context.json", () => {
		 const dataelementExample3177 = require("../stu3-resources/DataElement-StructureDefinition.context.json");
		 expect(dataelementValidateFunction(dataelementExample3177)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.contextInvariant.json", () => {
		 const dataelementExample3178 = require("../stu3-resources/DataElement-StructureDefinition.contextInvariant.json");
		 expect(dataelementValidateFunction(dataelementExample3178)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.contextType.json", () => {
		 const dataelementExample3179 = require("../stu3-resources/DataElement-StructureDefinition.contextType.json");
		 expect(dataelementValidateFunction(dataelementExample3179)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.copyright.json", () => {
		 const dataelementExample3180 = require("../stu3-resources/DataElement-StructureDefinition.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample3180)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.date.json", () => {
		 const dataelementExample3181 = require("../stu3-resources/DataElement-StructureDefinition.date.json");
		 expect(dataelementValidateFunction(dataelementExample3181)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.derivation.json", () => {
		 const dataelementExample3182 = require("../stu3-resources/DataElement-StructureDefinition.derivation.json");
		 expect(dataelementValidateFunction(dataelementExample3182)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.description.json", () => {
		 const dataelementExample3183 = require("../stu3-resources/DataElement-StructureDefinition.description.json");
		 expect(dataelementValidateFunction(dataelementExample3183)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.differential.element.json", () => {
		 const dataelementExample3184 = require("../stu3-resources/DataElement-StructureDefinition.differential.element.json");
		 expect(dataelementValidateFunction(dataelementExample3184)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.differential.json", () => {
		 const dataelementExample3185 = require("../stu3-resources/DataElement-StructureDefinition.differential.json");
		 expect(dataelementValidateFunction(dataelementExample3185)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.experimental.json", () => {
		 const dataelementExample3186 = require("../stu3-resources/DataElement-StructureDefinition.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample3186)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.fhirVersion.json", () => {
		 const dataelementExample3187 = require("../stu3-resources/DataElement-StructureDefinition.fhirVersion.json");
		 expect(dataelementValidateFunction(dataelementExample3187)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.identifier.json", () => {
		 const dataelementExample3188 = require("../stu3-resources/DataElement-StructureDefinition.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3188)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.json", () => {
		 const dataelementExample3189 = require("../stu3-resources/DataElement-StructureDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample3189)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.jurisdiction.json", () => {
		 const dataelementExample3190 = require("../stu3-resources/DataElement-StructureDefinition.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample3190)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.keyword.json", () => {
		 const dataelementExample3191 = require("../stu3-resources/DataElement-StructureDefinition.keyword.json");
		 expect(dataelementValidateFunction(dataelementExample3191)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.kind.json", () => {
		 const dataelementExample3192 = require("../stu3-resources/DataElement-StructureDefinition.kind.json");
		 expect(dataelementValidateFunction(dataelementExample3192)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.mapping.comment.json", () => {
		 const dataelementExample3193 = require("../stu3-resources/DataElement-StructureDefinition.mapping.comment.json");
		 expect(dataelementValidateFunction(dataelementExample3193)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.mapping.identity.json", () => {
		 const dataelementExample3194 = require("../stu3-resources/DataElement-StructureDefinition.mapping.identity.json");
		 expect(dataelementValidateFunction(dataelementExample3194)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.mapping.json", () => {
		 const dataelementExample3195 = require("../stu3-resources/DataElement-StructureDefinition.mapping.json");
		 expect(dataelementValidateFunction(dataelementExample3195)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.mapping.name.json", () => {
		 const dataelementExample3196 = require("../stu3-resources/DataElement-StructureDefinition.mapping.name.json");
		 expect(dataelementValidateFunction(dataelementExample3196)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.mapping.uri.json", () => {
		 const dataelementExample3197 = require("../stu3-resources/DataElement-StructureDefinition.mapping.uri.json");
		 expect(dataelementValidateFunction(dataelementExample3197)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.name.json", () => {
		 const dataelementExample3198 = require("../stu3-resources/DataElement-StructureDefinition.name.json");
		 expect(dataelementValidateFunction(dataelementExample3198)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.publisher.json", () => {
		 const dataelementExample3199 = require("../stu3-resources/DataElement-StructureDefinition.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample3199)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.purpose.json", () => {
		 const dataelementExample3200 = require("../stu3-resources/DataElement-StructureDefinition.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample3200)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.snapshot.element.json", () => {
		 const dataelementExample3201 = require("../stu3-resources/DataElement-StructureDefinition.snapshot.element.json");
		 expect(dataelementValidateFunction(dataelementExample3201)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.snapshot.json", () => {
		 const dataelementExample3202 = require("../stu3-resources/DataElement-StructureDefinition.snapshot.json");
		 expect(dataelementValidateFunction(dataelementExample3202)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.status.json", () => {
		 const dataelementExample3203 = require("../stu3-resources/DataElement-StructureDefinition.status.json");
		 expect(dataelementValidateFunction(dataelementExample3203)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.title.json", () => {
		 const dataelementExample3204 = require("../stu3-resources/DataElement-StructureDefinition.title.json");
		 expect(dataelementValidateFunction(dataelementExample3204)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.type.json", () => {
		 const dataelementExample3205 = require("../stu3-resources/DataElement-StructureDefinition.type.json");
		 expect(dataelementValidateFunction(dataelementExample3205)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.url.json", () => {
		 const dataelementExample3206 = require("../stu3-resources/DataElement-StructureDefinition.url.json");
		 expect(dataelementValidateFunction(dataelementExample3206)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.useContext.json", () => {
		 const dataelementExample3207 = require("../stu3-resources/DataElement-StructureDefinition.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample3207)).toBe(true);
	 });

	 test("validate DataElement-StructureDefinition.version.json", () => {
		 const dataelementExample3208 = require("../stu3-resources/DataElement-StructureDefinition.version.json");
		 expect(dataelementValidateFunction(dataelementExample3208)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.contact.json", () => {
		 const dataelementExample3209 = require("../stu3-resources/DataElement-StructureMap.contact.json");
		 expect(dataelementValidateFunction(dataelementExample3209)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.copyright.json", () => {
		 const dataelementExample3210 = require("../stu3-resources/DataElement-StructureMap.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample3210)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.date.json", () => {
		 const dataelementExample3211 = require("../stu3-resources/DataElement-StructureMap.date.json");
		 expect(dataelementValidateFunction(dataelementExample3211)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.description.json", () => {
		 const dataelementExample3212 = require("../stu3-resources/DataElement-StructureMap.description.json");
		 expect(dataelementValidateFunction(dataelementExample3212)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.experimental.json", () => {
		 const dataelementExample3213 = require("../stu3-resources/DataElement-StructureMap.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample3213)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.documentation.json", () => {
		 const dataelementExample3214 = require("../stu3-resources/DataElement-StructureMap.group.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample3214)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.extends.json", () => {
		 const dataelementExample3215 = require("../stu3-resources/DataElement-StructureMap.group.extends.json");
		 expect(dataelementValidateFunction(dataelementExample3215)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.input.documentation.json", () => {
		 const dataelementExample3216 = require("../stu3-resources/DataElement-StructureMap.group.input.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample3216)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.input.json", () => {
		 const dataelementExample3217 = require("../stu3-resources/DataElement-StructureMap.group.input.json");
		 expect(dataelementValidateFunction(dataelementExample3217)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.input.mode.json", () => {
		 const dataelementExample3218 = require("../stu3-resources/DataElement-StructureMap.group.input.mode.json");
		 expect(dataelementValidateFunction(dataelementExample3218)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.input.name.json", () => {
		 const dataelementExample3219 = require("../stu3-resources/DataElement-StructureMap.group.input.name.json");
		 expect(dataelementValidateFunction(dataelementExample3219)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.input.type.json", () => {
		 const dataelementExample3220 = require("../stu3-resources/DataElement-StructureMap.group.input.type.json");
		 expect(dataelementValidateFunction(dataelementExample3220)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.json", () => {
		 const dataelementExample3221 = require("../stu3-resources/DataElement-StructureMap.group.json");
		 expect(dataelementValidateFunction(dataelementExample3221)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.name.json", () => {
		 const dataelementExample3222 = require("../stu3-resources/DataElement-StructureMap.group.name.json");
		 expect(dataelementValidateFunction(dataelementExample3222)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.dependent.json", () => {
		 const dataelementExample3223 = require("../stu3-resources/DataElement-StructureMap.group.rule.dependent.json");
		 expect(dataelementValidateFunction(dataelementExample3223)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.dependent.name.json", () => {
		 const dataelementExample3224 = require("../stu3-resources/DataElement-StructureMap.group.rule.dependent.name.json");
		 expect(dataelementValidateFunction(dataelementExample3224)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.dependent.variable.json", () => {
		 const dataelementExample3225 = require("../stu3-resources/DataElement-StructureMap.group.rule.dependent.variable.json");
		 expect(dataelementValidateFunction(dataelementExample3225)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.documentation.json", () => {
		 const dataelementExample3226 = require("../stu3-resources/DataElement-StructureMap.group.rule.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample3226)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.json", () => {
		 const dataelementExample3227 = require("../stu3-resources/DataElement-StructureMap.group.rule.json");
		 expect(dataelementValidateFunction(dataelementExample3227)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.name.json", () => {
		 const dataelementExample3228 = require("../stu3-resources/DataElement-StructureMap.group.rule.name.json");
		 expect(dataelementValidateFunction(dataelementExample3228)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.rule.json", () => {
		 const dataelementExample3229 = require("../stu3-resources/DataElement-StructureMap.group.rule.rule.json");
		 expect(dataelementValidateFunction(dataelementExample3229)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.source.check.json", () => {
		 const dataelementExample3230 = require("../stu3-resources/DataElement-StructureMap.group.rule.source.check.json");
		 expect(dataelementValidateFunction(dataelementExample3230)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.source.condition.json", () => {
		 const dataelementExample3231 = require("../stu3-resources/DataElement-StructureMap.group.rule.source.condition.json");
		 expect(dataelementValidateFunction(dataelementExample3231)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.source.context.json", () => {
		 const dataelementExample3232 = require("../stu3-resources/DataElement-StructureMap.group.rule.source.context.json");
		 expect(dataelementValidateFunction(dataelementExample3232)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.source.defaultValueX.json", () => {
		 const dataelementExample3233 = require("../stu3-resources/DataElement-StructureMap.group.rule.source.defaultValueX.json");
		 expect(dataelementValidateFunction(dataelementExample3233)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.source.element.json", () => {
		 const dataelementExample3234 = require("../stu3-resources/DataElement-StructureMap.group.rule.source.element.json");
		 expect(dataelementValidateFunction(dataelementExample3234)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.source.json", () => {
		 const dataelementExample3235 = require("../stu3-resources/DataElement-StructureMap.group.rule.source.json");
		 expect(dataelementValidateFunction(dataelementExample3235)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.source.listMode.json", () => {
		 const dataelementExample3236 = require("../stu3-resources/DataElement-StructureMap.group.rule.source.listMode.json");
		 expect(dataelementValidateFunction(dataelementExample3236)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.source.max.json", () => {
		 const dataelementExample3237 = require("../stu3-resources/DataElement-StructureMap.group.rule.source.max.json");
		 expect(dataelementValidateFunction(dataelementExample3237)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.source.min.json", () => {
		 const dataelementExample3238 = require("../stu3-resources/DataElement-StructureMap.group.rule.source.min.json");
		 expect(dataelementValidateFunction(dataelementExample3238)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.source.type.json", () => {
		 const dataelementExample3239 = require("../stu3-resources/DataElement-StructureMap.group.rule.source.type.json");
		 expect(dataelementValidateFunction(dataelementExample3239)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.source.variable.json", () => {
		 const dataelementExample3240 = require("../stu3-resources/DataElement-StructureMap.group.rule.source.variable.json");
		 expect(dataelementValidateFunction(dataelementExample3240)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.target.context.json", () => {
		 const dataelementExample3241 = require("../stu3-resources/DataElement-StructureMap.group.rule.target.context.json");
		 expect(dataelementValidateFunction(dataelementExample3241)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.target.contextType.json", () => {
		 const dataelementExample3242 = require("../stu3-resources/DataElement-StructureMap.group.rule.target.contextType.json");
		 expect(dataelementValidateFunction(dataelementExample3242)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.target.element.json", () => {
		 const dataelementExample3243 = require("../stu3-resources/DataElement-StructureMap.group.rule.target.element.json");
		 expect(dataelementValidateFunction(dataelementExample3243)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.target.json", () => {
		 const dataelementExample3244 = require("../stu3-resources/DataElement-StructureMap.group.rule.target.json");
		 expect(dataelementValidateFunction(dataelementExample3244)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.target.listMode.json", () => {
		 const dataelementExample3245 = require("../stu3-resources/DataElement-StructureMap.group.rule.target.listMode.json");
		 expect(dataelementValidateFunction(dataelementExample3245)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.target.listRuleId.json", () => {
		 const dataelementExample3246 = require("../stu3-resources/DataElement-StructureMap.group.rule.target.listRuleId.json");
		 expect(dataelementValidateFunction(dataelementExample3246)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.target.parameter.json", () => {
		 const dataelementExample3247 = require("../stu3-resources/DataElement-StructureMap.group.rule.target.parameter.json");
		 expect(dataelementValidateFunction(dataelementExample3247)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.target.parameter.valueX.json", () => {
		 const dataelementExample3248 = require("../stu3-resources/DataElement-StructureMap.group.rule.target.parameter.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample3248)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.target.transform.json", () => {
		 const dataelementExample3249 = require("../stu3-resources/DataElement-StructureMap.group.rule.target.transform.json");
		 expect(dataelementValidateFunction(dataelementExample3249)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.rule.target.variable.json", () => {
		 const dataelementExample3250 = require("../stu3-resources/DataElement-StructureMap.group.rule.target.variable.json");
		 expect(dataelementValidateFunction(dataelementExample3250)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.group.typeMode.json", () => {
		 const dataelementExample3251 = require("../stu3-resources/DataElement-StructureMap.group.typeMode.json");
		 expect(dataelementValidateFunction(dataelementExample3251)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.identifier.json", () => {
		 const dataelementExample3252 = require("../stu3-resources/DataElement-StructureMap.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3252)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.import.json", () => {
		 const dataelementExample3253 = require("../stu3-resources/DataElement-StructureMap.import.json");
		 expect(dataelementValidateFunction(dataelementExample3253)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.json", () => {
		 const dataelementExample3254 = require("../stu3-resources/DataElement-StructureMap.json");
		 expect(dataelementValidateFunction(dataelementExample3254)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.jurisdiction.json", () => {
		 const dataelementExample3255 = require("../stu3-resources/DataElement-StructureMap.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample3255)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.name.json", () => {
		 const dataelementExample3256 = require("../stu3-resources/DataElement-StructureMap.name.json");
		 expect(dataelementValidateFunction(dataelementExample3256)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.publisher.json", () => {
		 const dataelementExample3257 = require("../stu3-resources/DataElement-StructureMap.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample3257)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.purpose.json", () => {
		 const dataelementExample3258 = require("../stu3-resources/DataElement-StructureMap.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample3258)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.status.json", () => {
		 const dataelementExample3259 = require("../stu3-resources/DataElement-StructureMap.status.json");
		 expect(dataelementValidateFunction(dataelementExample3259)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.structure.alias.json", () => {
		 const dataelementExample3260 = require("../stu3-resources/DataElement-StructureMap.structure.alias.json");
		 expect(dataelementValidateFunction(dataelementExample3260)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.structure.documentation.json", () => {
		 const dataelementExample3261 = require("../stu3-resources/DataElement-StructureMap.structure.documentation.json");
		 expect(dataelementValidateFunction(dataelementExample3261)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.structure.json", () => {
		 const dataelementExample3262 = require("../stu3-resources/DataElement-StructureMap.structure.json");
		 expect(dataelementValidateFunction(dataelementExample3262)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.structure.mode.json", () => {
		 const dataelementExample3263 = require("../stu3-resources/DataElement-StructureMap.structure.mode.json");
		 expect(dataelementValidateFunction(dataelementExample3263)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.structure.url.json", () => {
		 const dataelementExample3264 = require("../stu3-resources/DataElement-StructureMap.structure.url.json");
		 expect(dataelementValidateFunction(dataelementExample3264)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.title.json", () => {
		 const dataelementExample3265 = require("../stu3-resources/DataElement-StructureMap.title.json");
		 expect(dataelementValidateFunction(dataelementExample3265)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.url.json", () => {
		 const dataelementExample3266 = require("../stu3-resources/DataElement-StructureMap.url.json");
		 expect(dataelementValidateFunction(dataelementExample3266)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.useContext.json", () => {
		 const dataelementExample3267 = require("../stu3-resources/DataElement-StructureMap.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample3267)).toBe(true);
	 });

	 test("validate DataElement-StructureMap.version.json", () => {
		 const dataelementExample3268 = require("../stu3-resources/DataElement-StructureMap.version.json");
		 expect(dataelementValidateFunction(dataelementExample3268)).toBe(true);
	 });

	 test("validate DataElement-Subscription.channel.endpoint.json", () => {
		 const dataelementExample3269 = require("../stu3-resources/DataElement-Subscription.channel.endpoint.json");
		 expect(dataelementValidateFunction(dataelementExample3269)).toBe(true);
	 });

	 test("validate DataElement-Subscription.channel.header.json", () => {
		 const dataelementExample3270 = require("../stu3-resources/DataElement-Subscription.channel.header.json");
		 expect(dataelementValidateFunction(dataelementExample3270)).toBe(true);
	 });

	 test("validate DataElement-Subscription.channel.json", () => {
		 const dataelementExample3271 = require("../stu3-resources/DataElement-Subscription.channel.json");
		 expect(dataelementValidateFunction(dataelementExample3271)).toBe(true);
	 });

	 test("validate DataElement-Subscription.channel.payload.json", () => {
		 const dataelementExample3272 = require("../stu3-resources/DataElement-Subscription.channel.payload.json");
		 expect(dataelementValidateFunction(dataelementExample3272)).toBe(true);
	 });

	 test("validate DataElement-Subscription.channel.type.json", () => {
		 const dataelementExample3273 = require("../stu3-resources/DataElement-Subscription.channel.type.json");
		 expect(dataelementValidateFunction(dataelementExample3273)).toBe(true);
	 });

	 test("validate DataElement-Subscription.contact.json", () => {
		 const dataelementExample3274 = require("../stu3-resources/DataElement-Subscription.contact.json");
		 expect(dataelementValidateFunction(dataelementExample3274)).toBe(true);
	 });

	 test("validate DataElement-Subscription.criteria.json", () => {
		 const dataelementExample3275 = require("../stu3-resources/DataElement-Subscription.criteria.json");
		 expect(dataelementValidateFunction(dataelementExample3275)).toBe(true);
	 });

	 test("validate DataElement-Subscription.end.json", () => {
		 const dataelementExample3276 = require("../stu3-resources/DataElement-Subscription.end.json");
		 expect(dataelementValidateFunction(dataelementExample3276)).toBe(true);
	 });

	 test("validate DataElement-Subscription.error.json", () => {
		 const dataelementExample3277 = require("../stu3-resources/DataElement-Subscription.error.json");
		 expect(dataelementValidateFunction(dataelementExample3277)).toBe(true);
	 });

	 test("validate DataElement-Subscription.json", () => {
		 const dataelementExample3278 = require("../stu3-resources/DataElement-Subscription.json");
		 expect(dataelementValidateFunction(dataelementExample3278)).toBe(true);
	 });

	 test("validate DataElement-Subscription.reason.json", () => {
		 const dataelementExample3279 = require("../stu3-resources/DataElement-Subscription.reason.json");
		 expect(dataelementValidateFunction(dataelementExample3279)).toBe(true);
	 });

	 test("validate DataElement-Subscription.status.json", () => {
		 const dataelementExample3280 = require("../stu3-resources/DataElement-Subscription.status.json");
		 expect(dataelementValidateFunction(dataelementExample3280)).toBe(true);
	 });

	 test("validate DataElement-Subscription.tag.json", () => {
		 const dataelementExample3281 = require("../stu3-resources/DataElement-Subscription.tag.json");
		 expect(dataelementValidateFunction(dataelementExample3281)).toBe(true);
	 });

	 test("validate DataElement-Substance.category.json", () => {
		 const dataelementExample3282 = require("../stu3-resources/DataElement-Substance.category.json");
		 expect(dataelementValidateFunction(dataelementExample3282)).toBe(true);
	 });

	 test("validate DataElement-Substance.code.json", () => {
		 const dataelementExample3283 = require("../stu3-resources/DataElement-Substance.code.json");
		 expect(dataelementValidateFunction(dataelementExample3283)).toBe(true);
	 });

	 test("validate DataElement-Substance.description.json", () => {
		 const dataelementExample3284 = require("../stu3-resources/DataElement-Substance.description.json");
		 expect(dataelementValidateFunction(dataelementExample3284)).toBe(true);
	 });

	 test("validate DataElement-Substance.identifier.json", () => {
		 const dataelementExample3285 = require("../stu3-resources/DataElement-Substance.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3285)).toBe(true);
	 });

	 test("validate DataElement-Substance.ingredient.json", () => {
		 const dataelementExample3286 = require("../stu3-resources/DataElement-Substance.ingredient.json");
		 expect(dataelementValidateFunction(dataelementExample3286)).toBe(true);
	 });

	 test("validate DataElement-Substance.ingredient.quantity.json", () => {
		 const dataelementExample3287 = require("../stu3-resources/DataElement-Substance.ingredient.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample3287)).toBe(true);
	 });

	 test("validate DataElement-Substance.ingredient.substanceX.json", () => {
		 const dataelementExample3288 = require("../stu3-resources/DataElement-Substance.ingredient.substanceX.json");
		 expect(dataelementValidateFunction(dataelementExample3288)).toBe(true);
	 });

	 test("validate DataElement-Substance.instance.expiry.json", () => {
		 const dataelementExample3289 = require("../stu3-resources/DataElement-Substance.instance.expiry.json");
		 expect(dataelementValidateFunction(dataelementExample3289)).toBe(true);
	 });

	 test("validate DataElement-Substance.instance.identifier.json", () => {
		 const dataelementExample3290 = require("../stu3-resources/DataElement-Substance.instance.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3290)).toBe(true);
	 });

	 test("validate DataElement-Substance.instance.json", () => {
		 const dataelementExample3291 = require("../stu3-resources/DataElement-Substance.instance.json");
		 expect(dataelementValidateFunction(dataelementExample3291)).toBe(true);
	 });

	 test("validate DataElement-Substance.instance.quantity.json", () => {
		 const dataelementExample3292 = require("../stu3-resources/DataElement-Substance.instance.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample3292)).toBe(true);
	 });

	 test("validate DataElement-Substance.json", () => {
		 const dataelementExample3293 = require("../stu3-resources/DataElement-Substance.json");
		 expect(dataelementValidateFunction(dataelementExample3293)).toBe(true);
	 });

	 test("validate DataElement-Substance.status.json", () => {
		 const dataelementExample3294 = require("../stu3-resources/DataElement-Substance.status.json");
		 expect(dataelementValidateFunction(dataelementExample3294)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.basedOn.json", () => {
		 const dataelementExample3295 = require("../stu3-resources/DataElement-SupplyDelivery.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample3295)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.destination.json", () => {
		 const dataelementExample3296 = require("../stu3-resources/DataElement-SupplyDelivery.destination.json");
		 expect(dataelementValidateFunction(dataelementExample3296)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.identifier.json", () => {
		 const dataelementExample3297 = require("../stu3-resources/DataElement-SupplyDelivery.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3297)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.json", () => {
		 const dataelementExample3298 = require("../stu3-resources/DataElement-SupplyDelivery.json");
		 expect(dataelementValidateFunction(dataelementExample3298)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.occurrenceX.json", () => {
		 const dataelementExample3299 = require("../stu3-resources/DataElement-SupplyDelivery.occurrenceX.json");
		 expect(dataelementValidateFunction(dataelementExample3299)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.partOf.json", () => {
		 const dataelementExample3300 = require("../stu3-resources/DataElement-SupplyDelivery.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample3300)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.patient.json", () => {
		 const dataelementExample3301 = require("../stu3-resources/DataElement-SupplyDelivery.patient.json");
		 expect(dataelementValidateFunction(dataelementExample3301)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.receiver.json", () => {
		 const dataelementExample3302 = require("../stu3-resources/DataElement-SupplyDelivery.receiver.json");
		 expect(dataelementValidateFunction(dataelementExample3302)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.status.json", () => {
		 const dataelementExample3303 = require("../stu3-resources/DataElement-SupplyDelivery.status.json");
		 expect(dataelementValidateFunction(dataelementExample3303)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.suppliedItem.itemX.json", () => {
		 const dataelementExample3304 = require("../stu3-resources/DataElement-SupplyDelivery.suppliedItem.itemX.json");
		 expect(dataelementValidateFunction(dataelementExample3304)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.suppliedItem.json", () => {
		 const dataelementExample3305 = require("../stu3-resources/DataElement-SupplyDelivery.suppliedItem.json");
		 expect(dataelementValidateFunction(dataelementExample3305)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.suppliedItem.quantity.json", () => {
		 const dataelementExample3306 = require("../stu3-resources/DataElement-SupplyDelivery.suppliedItem.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample3306)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.supplier.json", () => {
		 const dataelementExample3307 = require("../stu3-resources/DataElement-SupplyDelivery.supplier.json");
		 expect(dataelementValidateFunction(dataelementExample3307)).toBe(true);
	 });

	 test("validate DataElement-SupplyDelivery.type.json", () => {
		 const dataelementExample3308 = require("../stu3-resources/DataElement-SupplyDelivery.type.json");
		 expect(dataelementValidateFunction(dataelementExample3308)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.authoredOn.json", () => {
		 const dataelementExample3309 = require("../stu3-resources/DataElement-SupplyRequest.authoredOn.json");
		 expect(dataelementValidateFunction(dataelementExample3309)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.category.json", () => {
		 const dataelementExample3310 = require("../stu3-resources/DataElement-SupplyRequest.category.json");
		 expect(dataelementValidateFunction(dataelementExample3310)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.deliverFrom.json", () => {
		 const dataelementExample3311 = require("../stu3-resources/DataElement-SupplyRequest.deliverFrom.json");
		 expect(dataelementValidateFunction(dataelementExample3311)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.deliverTo.json", () => {
		 const dataelementExample3312 = require("../stu3-resources/DataElement-SupplyRequest.deliverTo.json");
		 expect(dataelementValidateFunction(dataelementExample3312)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.identifier.json", () => {
		 const dataelementExample3313 = require("../stu3-resources/DataElement-SupplyRequest.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3313)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.json", () => {
		 const dataelementExample3314 = require("../stu3-resources/DataElement-SupplyRequest.json");
		 expect(dataelementValidateFunction(dataelementExample3314)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.occurrenceX.json", () => {
		 const dataelementExample3315 = require("../stu3-resources/DataElement-SupplyRequest.occurrenceX.json");
		 expect(dataelementValidateFunction(dataelementExample3315)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.orderedItem.itemX.json", () => {
		 const dataelementExample3316 = require("../stu3-resources/DataElement-SupplyRequest.orderedItem.itemX.json");
		 expect(dataelementValidateFunction(dataelementExample3316)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.orderedItem.json", () => {
		 const dataelementExample3317 = require("../stu3-resources/DataElement-SupplyRequest.orderedItem.json");
		 expect(dataelementValidateFunction(dataelementExample3317)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.orderedItem.quantity.json", () => {
		 const dataelementExample3318 = require("../stu3-resources/DataElement-SupplyRequest.orderedItem.quantity.json");
		 expect(dataelementValidateFunction(dataelementExample3318)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.priority.json", () => {
		 const dataelementExample3319 = require("../stu3-resources/DataElement-SupplyRequest.priority.json");
		 expect(dataelementValidateFunction(dataelementExample3319)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.reasonX.json", () => {
		 const dataelementExample3320 = require("../stu3-resources/DataElement-SupplyRequest.reasonX.json");
		 expect(dataelementValidateFunction(dataelementExample3320)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.requester.agent.json", () => {
		 const dataelementExample3321 = require("../stu3-resources/DataElement-SupplyRequest.requester.agent.json");
		 expect(dataelementValidateFunction(dataelementExample3321)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.requester.json", () => {
		 const dataelementExample3322 = require("../stu3-resources/DataElement-SupplyRequest.requester.json");
		 expect(dataelementValidateFunction(dataelementExample3322)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.requester.onBehalfOf.json", () => {
		 const dataelementExample3323 = require("../stu3-resources/DataElement-SupplyRequest.requester.onBehalfOf.json");
		 expect(dataelementValidateFunction(dataelementExample3323)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.status.json", () => {
		 const dataelementExample3324 = require("../stu3-resources/DataElement-SupplyRequest.status.json");
		 expect(dataelementValidateFunction(dataelementExample3324)).toBe(true);
	 });

	 test("validate DataElement-SupplyRequest.supplier.json", () => {
		 const dataelementExample3325 = require("../stu3-resources/DataElement-SupplyRequest.supplier.json");
		 expect(dataelementValidateFunction(dataelementExample3325)).toBe(true);
	 });

	 test("validate DataElement-Task.authoredOn.json", () => {
		 const dataelementExample3326 = require("../stu3-resources/DataElement-Task.authoredOn.json");
		 expect(dataelementValidateFunction(dataelementExample3326)).toBe(true);
	 });

	 test("validate DataElement-Task.basedOn.json", () => {
		 const dataelementExample3327 = require("../stu3-resources/DataElement-Task.basedOn.json");
		 expect(dataelementValidateFunction(dataelementExample3327)).toBe(true);
	 });

	 test("validate DataElement-Task.businessStatus.json", () => {
		 const dataelementExample3328 = require("../stu3-resources/DataElement-Task.businessStatus.json");
		 expect(dataelementValidateFunction(dataelementExample3328)).toBe(true);
	 });

	 test("validate DataElement-Task.code.json", () => {
		 const dataelementExample3329 = require("../stu3-resources/DataElement-Task.code.json");
		 expect(dataelementValidateFunction(dataelementExample3329)).toBe(true);
	 });

	 test("validate DataElement-Task.context.json", () => {
		 const dataelementExample3330 = require("../stu3-resources/DataElement-Task.context.json");
		 expect(dataelementValidateFunction(dataelementExample3330)).toBe(true);
	 });

	 test("validate DataElement-Task.definitionX.json", () => {
		 const dataelementExample3331 = require("../stu3-resources/DataElement-Task.definitionX.json");
		 expect(dataelementValidateFunction(dataelementExample3331)).toBe(true);
	 });

	 test("validate DataElement-Task.description.json", () => {
		 const dataelementExample3332 = require("../stu3-resources/DataElement-Task.description.json");
		 expect(dataelementValidateFunction(dataelementExample3332)).toBe(true);
	 });

	 test("validate DataElement-Task.executionPeriod.json", () => {
		 const dataelementExample3333 = require("../stu3-resources/DataElement-Task.executionPeriod.json");
		 expect(dataelementValidateFunction(dataelementExample3333)).toBe(true);
	 });

	 test("validate DataElement-Task.focus.json", () => {
		 const dataelementExample3334 = require("../stu3-resources/DataElement-Task.focus.json");
		 expect(dataelementValidateFunction(dataelementExample3334)).toBe(true);
	 });

	 test("validate DataElement-Task.for.json", () => {
		 const dataelementExample3335 = require("../stu3-resources/DataElement-Task.for.json");
		 expect(dataelementValidateFunction(dataelementExample3335)).toBe(true);
	 });

	 test("validate DataElement-Task.groupIdentifier.json", () => {
		 const dataelementExample3336 = require("../stu3-resources/DataElement-Task.groupIdentifier.json");
		 expect(dataelementValidateFunction(dataelementExample3336)).toBe(true);
	 });

	 test("validate DataElement-Task.identifier.json", () => {
		 const dataelementExample3337 = require("../stu3-resources/DataElement-Task.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3337)).toBe(true);
	 });

	 test("validate DataElement-Task.input.json", () => {
		 const dataelementExample3338 = require("../stu3-resources/DataElement-Task.input.json");
		 expect(dataelementValidateFunction(dataelementExample3338)).toBe(true);
	 });

	 test("validate DataElement-Task.input.type.json", () => {
		 const dataelementExample3339 = require("../stu3-resources/DataElement-Task.input.type.json");
		 expect(dataelementValidateFunction(dataelementExample3339)).toBe(true);
	 });

	 test("validate DataElement-Task.input.valueX.json", () => {
		 const dataelementExample3340 = require("../stu3-resources/DataElement-Task.input.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample3340)).toBe(true);
	 });

	 test("validate DataElement-Task.intent.json", () => {
		 const dataelementExample3341 = require("../stu3-resources/DataElement-Task.intent.json");
		 expect(dataelementValidateFunction(dataelementExample3341)).toBe(true);
	 });

	 test("validate DataElement-Task.json", () => {
		 const dataelementExample3342 = require("../stu3-resources/DataElement-Task.json");
		 expect(dataelementValidateFunction(dataelementExample3342)).toBe(true);
	 });

	 test("validate DataElement-Task.lastModified.json", () => {
		 const dataelementExample3343 = require("../stu3-resources/DataElement-Task.lastModified.json");
		 expect(dataelementValidateFunction(dataelementExample3343)).toBe(true);
	 });

	 test("validate DataElement-Task.note.json", () => {
		 const dataelementExample3344 = require("../stu3-resources/DataElement-Task.note.json");
		 expect(dataelementValidateFunction(dataelementExample3344)).toBe(true);
	 });

	 test("validate DataElement-Task.output.json", () => {
		 const dataelementExample3345 = require("../stu3-resources/DataElement-Task.output.json");
		 expect(dataelementValidateFunction(dataelementExample3345)).toBe(true);
	 });

	 test("validate DataElement-Task.output.type.json", () => {
		 const dataelementExample3346 = require("../stu3-resources/DataElement-Task.output.type.json");
		 expect(dataelementValidateFunction(dataelementExample3346)).toBe(true);
	 });

	 test("validate DataElement-Task.output.valueX.json", () => {
		 const dataelementExample3347 = require("../stu3-resources/DataElement-Task.output.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample3347)).toBe(true);
	 });

	 test("validate DataElement-Task.owner.json", () => {
		 const dataelementExample3348 = require("../stu3-resources/DataElement-Task.owner.json");
		 expect(dataelementValidateFunction(dataelementExample3348)).toBe(true);
	 });

	 test("validate DataElement-Task.partOf.json", () => {
		 const dataelementExample3349 = require("../stu3-resources/DataElement-Task.partOf.json");
		 expect(dataelementValidateFunction(dataelementExample3349)).toBe(true);
	 });

	 test("validate DataElement-Task.performerType.json", () => {
		 const dataelementExample3350 = require("../stu3-resources/DataElement-Task.performerType.json");
		 expect(dataelementValidateFunction(dataelementExample3350)).toBe(true);
	 });

	 test("validate DataElement-Task.priority.json", () => {
		 const dataelementExample3351 = require("../stu3-resources/DataElement-Task.priority.json");
		 expect(dataelementValidateFunction(dataelementExample3351)).toBe(true);
	 });

	 test("validate DataElement-Task.reason.json", () => {
		 const dataelementExample3352 = require("../stu3-resources/DataElement-Task.reason.json");
		 expect(dataelementValidateFunction(dataelementExample3352)).toBe(true);
	 });

	 test("validate DataElement-Task.relevantHistory.json", () => {
		 const dataelementExample3353 = require("../stu3-resources/DataElement-Task.relevantHistory.json");
		 expect(dataelementValidateFunction(dataelementExample3353)).toBe(true);
	 });

	 test("validate DataElement-Task.requester.agent.json", () => {
		 const dataelementExample3354 = require("../stu3-resources/DataElement-Task.requester.agent.json");
		 expect(dataelementValidateFunction(dataelementExample3354)).toBe(true);
	 });

	 test("validate DataElement-Task.requester.json", () => {
		 const dataelementExample3355 = require("../stu3-resources/DataElement-Task.requester.json");
		 expect(dataelementValidateFunction(dataelementExample3355)).toBe(true);
	 });

	 test("validate DataElement-Task.requester.onBehalfOf.json", () => {
		 const dataelementExample3356 = require("../stu3-resources/DataElement-Task.requester.onBehalfOf.json");
		 expect(dataelementValidateFunction(dataelementExample3356)).toBe(true);
	 });

	 test("validate DataElement-Task.restriction.json", () => {
		 const dataelementExample3357 = require("../stu3-resources/DataElement-Task.restriction.json");
		 expect(dataelementValidateFunction(dataelementExample3357)).toBe(true);
	 });

	 test("validate DataElement-Task.restriction.period.json", () => {
		 const dataelementExample3358 = require("../stu3-resources/DataElement-Task.restriction.period.json");
		 expect(dataelementValidateFunction(dataelementExample3358)).toBe(true);
	 });

	 test("validate DataElement-Task.restriction.recipient.json", () => {
		 const dataelementExample3359 = require("../stu3-resources/DataElement-Task.restriction.recipient.json");
		 expect(dataelementValidateFunction(dataelementExample3359)).toBe(true);
	 });

	 test("validate DataElement-Task.restriction.repetitions.json", () => {
		 const dataelementExample3360 = require("../stu3-resources/DataElement-Task.restriction.repetitions.json");
		 expect(dataelementValidateFunction(dataelementExample3360)).toBe(true);
	 });

	 test("validate DataElement-Task.status.json", () => {
		 const dataelementExample3361 = require("../stu3-resources/DataElement-Task.status.json");
		 expect(dataelementValidateFunction(dataelementExample3361)).toBe(true);
	 });

	 test("validate DataElement-Task.statusReason.json", () => {
		 const dataelementExample3362 = require("../stu3-resources/DataElement-Task.statusReason.json");
		 expect(dataelementValidateFunction(dataelementExample3362)).toBe(true);
	 });

	 test("validate DataElement-TestReport.identifier.json", () => {
		 const dataelementExample3363 = require("../stu3-resources/DataElement-TestReport.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3363)).toBe(true);
	 });

	 test("validate DataElement-TestReport.issued.json", () => {
		 const dataelementExample3364 = require("../stu3-resources/DataElement-TestReport.issued.json");
		 expect(dataelementValidateFunction(dataelementExample3364)).toBe(true);
	 });

	 test("validate DataElement-TestReport.json", () => {
		 const dataelementExample3365 = require("../stu3-resources/DataElement-TestReport.json");
		 expect(dataelementValidateFunction(dataelementExample3365)).toBe(true);
	 });

	 test("validate DataElement-TestReport.name.json", () => {
		 const dataelementExample3366 = require("../stu3-resources/DataElement-TestReport.name.json");
		 expect(dataelementValidateFunction(dataelementExample3366)).toBe(true);
	 });

	 test("validate DataElement-TestReport.participant.display.json", () => {
		 const dataelementExample3367 = require("../stu3-resources/DataElement-TestReport.participant.display.json");
		 expect(dataelementValidateFunction(dataelementExample3367)).toBe(true);
	 });

	 test("validate DataElement-TestReport.participant.json", () => {
		 const dataelementExample3368 = require("../stu3-resources/DataElement-TestReport.participant.json");
		 expect(dataelementValidateFunction(dataelementExample3368)).toBe(true);
	 });

	 test("validate DataElement-TestReport.participant.type.json", () => {
		 const dataelementExample3369 = require("../stu3-resources/DataElement-TestReport.participant.type.json");
		 expect(dataelementValidateFunction(dataelementExample3369)).toBe(true);
	 });

	 test("validate DataElement-TestReport.participant.uri.json", () => {
		 const dataelementExample3370 = require("../stu3-resources/DataElement-TestReport.participant.uri.json");
		 expect(dataelementValidateFunction(dataelementExample3370)).toBe(true);
	 });

	 test("validate DataElement-TestReport.result.json", () => {
		 const dataelementExample3371 = require("../stu3-resources/DataElement-TestReport.result.json");
		 expect(dataelementValidateFunction(dataelementExample3371)).toBe(true);
	 });

	 test("validate DataElement-TestReport.score.json", () => {
		 const dataelementExample3372 = require("../stu3-resources/DataElement-TestReport.score.json");
		 expect(dataelementValidateFunction(dataelementExample3372)).toBe(true);
	 });

	 test("validate DataElement-TestReport.setup.action.assert.detail.json", () => {
		 const dataelementExample3373 = require("../stu3-resources/DataElement-TestReport.setup.action.assert.detail.json");
		 expect(dataelementValidateFunction(dataelementExample3373)).toBe(true);
	 });

	 test("validate DataElement-TestReport.setup.action.assert.json", () => {
		 const dataelementExample3374 = require("../stu3-resources/DataElement-TestReport.setup.action.assert.json");
		 expect(dataelementValidateFunction(dataelementExample3374)).toBe(true);
	 });

	 test("validate DataElement-TestReport.setup.action.assert.message.json", () => {
		 const dataelementExample3375 = require("../stu3-resources/DataElement-TestReport.setup.action.assert.message.json");
		 expect(dataelementValidateFunction(dataelementExample3375)).toBe(true);
	 });

	 test("validate DataElement-TestReport.setup.action.assert.result.json", () => {
		 const dataelementExample3376 = require("../stu3-resources/DataElement-TestReport.setup.action.assert.result.json");
		 expect(dataelementValidateFunction(dataelementExample3376)).toBe(true);
	 });

	 test("validate DataElement-TestReport.setup.action.json", () => {
		 const dataelementExample3377 = require("../stu3-resources/DataElement-TestReport.setup.action.json");
		 expect(dataelementValidateFunction(dataelementExample3377)).toBe(true);
	 });

	 test("validate DataElement-TestReport.setup.action.operation.detail.json", () => {
		 const dataelementExample3378 = require("../stu3-resources/DataElement-TestReport.setup.action.operation.detail.json");
		 expect(dataelementValidateFunction(dataelementExample3378)).toBe(true);
	 });

	 test("validate DataElement-TestReport.setup.action.operation.json", () => {
		 const dataelementExample3379 = require("../stu3-resources/DataElement-TestReport.setup.action.operation.json");
		 expect(dataelementValidateFunction(dataelementExample3379)).toBe(true);
	 });

	 test("validate DataElement-TestReport.setup.action.operation.message.json", () => {
		 const dataelementExample3380 = require("../stu3-resources/DataElement-TestReport.setup.action.operation.message.json");
		 expect(dataelementValidateFunction(dataelementExample3380)).toBe(true);
	 });

	 test("validate DataElement-TestReport.setup.action.operation.result.json", () => {
		 const dataelementExample3381 = require("../stu3-resources/DataElement-TestReport.setup.action.operation.result.json");
		 expect(dataelementValidateFunction(dataelementExample3381)).toBe(true);
	 });

	 test("validate DataElement-TestReport.setup.json", () => {
		 const dataelementExample3382 = require("../stu3-resources/DataElement-TestReport.setup.json");
		 expect(dataelementValidateFunction(dataelementExample3382)).toBe(true);
	 });

	 test("validate DataElement-TestReport.status.json", () => {
		 const dataelementExample3383 = require("../stu3-resources/DataElement-TestReport.status.json");
		 expect(dataelementValidateFunction(dataelementExample3383)).toBe(true);
	 });

	 test("validate DataElement-TestReport.teardown.action.json", () => {
		 const dataelementExample3384 = require("../stu3-resources/DataElement-TestReport.teardown.action.json");
		 expect(dataelementValidateFunction(dataelementExample3384)).toBe(true);
	 });

	 test("validate DataElement-TestReport.teardown.action.operation.json", () => {
		 const dataelementExample3385 = require("../stu3-resources/DataElement-TestReport.teardown.action.operation.json");
		 expect(dataelementValidateFunction(dataelementExample3385)).toBe(true);
	 });

	 test("validate DataElement-TestReport.teardown.json", () => {
		 const dataelementExample3386 = require("../stu3-resources/DataElement-TestReport.teardown.json");
		 expect(dataelementValidateFunction(dataelementExample3386)).toBe(true);
	 });

	 test("validate DataElement-TestReport.test.action.assert.json", () => {
		 const dataelementExample3387 = require("../stu3-resources/DataElement-TestReport.test.action.assert.json");
		 expect(dataelementValidateFunction(dataelementExample3387)).toBe(true);
	 });

	 test("validate DataElement-TestReport.test.action.json", () => {
		 const dataelementExample3388 = require("../stu3-resources/DataElement-TestReport.test.action.json");
		 expect(dataelementValidateFunction(dataelementExample3388)).toBe(true);
	 });

	 test("validate DataElement-TestReport.test.action.operation.json", () => {
		 const dataelementExample3389 = require("../stu3-resources/DataElement-TestReport.test.action.operation.json");
		 expect(dataelementValidateFunction(dataelementExample3389)).toBe(true);
	 });

	 test("validate DataElement-TestReport.test.description.json", () => {
		 const dataelementExample3390 = require("../stu3-resources/DataElement-TestReport.test.description.json");
		 expect(dataelementValidateFunction(dataelementExample3390)).toBe(true);
	 });

	 test("validate DataElement-TestReport.test.json", () => {
		 const dataelementExample3391 = require("../stu3-resources/DataElement-TestReport.test.json");
		 expect(dataelementValidateFunction(dataelementExample3391)).toBe(true);
	 });

	 test("validate DataElement-TestReport.test.name.json", () => {
		 const dataelementExample3392 = require("../stu3-resources/DataElement-TestReport.test.name.json");
		 expect(dataelementValidateFunction(dataelementExample3392)).toBe(true);
	 });

	 test("validate DataElement-TestReport.testScript.json", () => {
		 const dataelementExample3393 = require("../stu3-resources/DataElement-TestReport.testScript.json");
		 expect(dataelementValidateFunction(dataelementExample3393)).toBe(true);
	 });

	 test("validate DataElement-TestReport.tester.json", () => {
		 const dataelementExample3394 = require("../stu3-resources/DataElement-TestReport.tester.json");
		 expect(dataelementValidateFunction(dataelementExample3394)).toBe(true);
	 });

	 test("validate DataElement-TestScript.contact.json", () => {
		 const dataelementExample3395 = require("../stu3-resources/DataElement-TestScript.contact.json");
		 expect(dataelementValidateFunction(dataelementExample3395)).toBe(true);
	 });

	 test("validate DataElement-TestScript.copyright.json", () => {
		 const dataelementExample3396 = require("../stu3-resources/DataElement-TestScript.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample3396)).toBe(true);
	 });

	 test("validate DataElement-TestScript.date.json", () => {
		 const dataelementExample3397 = require("../stu3-resources/DataElement-TestScript.date.json");
		 expect(dataelementValidateFunction(dataelementExample3397)).toBe(true);
	 });

	 test("validate DataElement-TestScript.description.json", () => {
		 const dataelementExample3398 = require("../stu3-resources/DataElement-TestScript.description.json");
		 expect(dataelementValidateFunction(dataelementExample3398)).toBe(true);
	 });

	 test("validate DataElement-TestScript.destination.json", () => {
		 const dataelementExample3399 = require("../stu3-resources/DataElement-TestScript.destination.json");
		 expect(dataelementValidateFunction(dataelementExample3399)).toBe(true);
	 });

	 test("validate DataElement-TestScript.destination.profile.json", () => {
		 const dataelementExample3400 = require("../stu3-resources/DataElement-TestScript.destination.profile.json");
		 expect(dataelementValidateFunction(dataelementExample3400)).toBe(true);
	 });

	 test("validate DataElement-TestScript.experimental.json", () => {
		 const dataelementExample3401 = require("../stu3-resources/DataElement-TestScript.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample3401)).toBe(true);
	 });

	 test("validate DataElement-TestScript.fixture.autocreate.json", () => {
		 const dataelementExample3402 = require("../stu3-resources/DataElement-TestScript.fixture.autocreate.json");
		 expect(dataelementValidateFunction(dataelementExample3402)).toBe(true);
	 });

	 test("validate DataElement-TestScript.fixture.autodelete.json", () => {
		 const dataelementExample3403 = require("../stu3-resources/DataElement-TestScript.fixture.autodelete.json");
		 expect(dataelementValidateFunction(dataelementExample3403)).toBe(true);
	 });

	 test("validate DataElement-TestScript.fixture.json", () => {
		 const dataelementExample3404 = require("../stu3-resources/DataElement-TestScript.fixture.json");
		 expect(dataelementValidateFunction(dataelementExample3404)).toBe(true);
	 });

	 test("validate DataElement-TestScript.fixture.resource.json", () => {
		 const dataelementExample3405 = require("../stu3-resources/DataElement-TestScript.fixture.resource.json");
		 expect(dataelementValidateFunction(dataelementExample3405)).toBe(true);
	 });

	 test("validate DataElement-TestScript.identifier.json", () => {
		 const dataelementExample3406 = require("../stu3-resources/DataElement-TestScript.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3406)).toBe(true);
	 });

	 test("validate DataElement-TestScript.json", () => {
		 const dataelementExample3407 = require("../stu3-resources/DataElement-TestScript.json");
		 expect(dataelementValidateFunction(dataelementExample3407)).toBe(true);
	 });

	 test("validate DataElement-TestScript.jurisdiction.json", () => {
		 const dataelementExample3408 = require("../stu3-resources/DataElement-TestScript.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample3408)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.capability.capabilities.json", () => {
		 const dataelementExample3409 = require("../stu3-resources/DataElement-TestScript.metadata.capability.capabilities.json");
		 expect(dataelementValidateFunction(dataelementExample3409)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.capability.description.json", () => {
		 const dataelementExample3410 = require("../stu3-resources/DataElement-TestScript.metadata.capability.description.json");
		 expect(dataelementValidateFunction(dataelementExample3410)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.capability.destination.json", () => {
		 const dataelementExample3411 = require("../stu3-resources/DataElement-TestScript.metadata.capability.destination.json");
		 expect(dataelementValidateFunction(dataelementExample3411)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.capability.json", () => {
		 const dataelementExample3412 = require("../stu3-resources/DataElement-TestScript.metadata.capability.json");
		 expect(dataelementValidateFunction(dataelementExample3412)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.capability.link.json", () => {
		 const dataelementExample3413 = require("../stu3-resources/DataElement-TestScript.metadata.capability.link.json");
		 expect(dataelementValidateFunction(dataelementExample3413)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.capability.origin.json", () => {
		 const dataelementExample3414 = require("../stu3-resources/DataElement-TestScript.metadata.capability.origin.json");
		 expect(dataelementValidateFunction(dataelementExample3414)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.capability.required.json", () => {
		 const dataelementExample3415 = require("../stu3-resources/DataElement-TestScript.metadata.capability.required.json");
		 expect(dataelementValidateFunction(dataelementExample3415)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.capability.validated.json", () => {
		 const dataelementExample3416 = require("../stu3-resources/DataElement-TestScript.metadata.capability.validated.json");
		 expect(dataelementValidateFunction(dataelementExample3416)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.json", () => {
		 const dataelementExample3417 = require("../stu3-resources/DataElement-TestScript.metadata.json");
		 expect(dataelementValidateFunction(dataelementExample3417)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.link.description.json", () => {
		 const dataelementExample3418 = require("../stu3-resources/DataElement-TestScript.metadata.link.description.json");
		 expect(dataelementValidateFunction(dataelementExample3418)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.link.json", () => {
		 const dataelementExample3419 = require("../stu3-resources/DataElement-TestScript.metadata.link.json");
		 expect(dataelementValidateFunction(dataelementExample3419)).toBe(true);
	 });

	 test("validate DataElement-TestScript.metadata.link.url.json", () => {
		 const dataelementExample3420 = require("../stu3-resources/DataElement-TestScript.metadata.link.url.json");
		 expect(dataelementValidateFunction(dataelementExample3420)).toBe(true);
	 });

	 test("validate DataElement-TestScript.name.json", () => {
		 const dataelementExample3421 = require("../stu3-resources/DataElement-TestScript.name.json");
		 expect(dataelementValidateFunction(dataelementExample3421)).toBe(true);
	 });

	 test("validate DataElement-TestScript.origin.json", () => {
		 const dataelementExample3422 = require("../stu3-resources/DataElement-TestScript.origin.json");
		 expect(dataelementValidateFunction(dataelementExample3422)).toBe(true);
	 });

	 test("validate DataElement-TestScript.origin.profile.json", () => {
		 const dataelementExample3423 = require("../stu3-resources/DataElement-TestScript.origin.profile.json");
		 expect(dataelementValidateFunction(dataelementExample3423)).toBe(true);
	 });

	 test("validate DataElement-TestScript.profile.json", () => {
		 const dataelementExample3424 = require("../stu3-resources/DataElement-TestScript.profile.json");
		 expect(dataelementValidateFunction(dataelementExample3424)).toBe(true);
	 });

	 test("validate DataElement-TestScript.publisher.json", () => {
		 const dataelementExample3425 = require("../stu3-resources/DataElement-TestScript.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample3425)).toBe(true);
	 });

	 test("validate DataElement-TestScript.purpose.json", () => {
		 const dataelementExample3426 = require("../stu3-resources/DataElement-TestScript.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample3426)).toBe(true);
	 });

	 test("validate DataElement-TestScript.rule.json", () => {
		 const dataelementExample3427 = require("../stu3-resources/DataElement-TestScript.rule.json");
		 expect(dataelementValidateFunction(dataelementExample3427)).toBe(true);
	 });

	 test("validate DataElement-TestScript.rule.param.json", () => {
		 const dataelementExample3428 = require("../stu3-resources/DataElement-TestScript.rule.param.json");
		 expect(dataelementValidateFunction(dataelementExample3428)).toBe(true);
	 });

	 test("validate DataElement-TestScript.rule.param.name.json", () => {
		 const dataelementExample3429 = require("../stu3-resources/DataElement-TestScript.rule.param.name.json");
		 expect(dataelementValidateFunction(dataelementExample3429)).toBe(true);
	 });

	 test("validate DataElement-TestScript.rule.param.value.json", () => {
		 const dataelementExample3430 = require("../stu3-resources/DataElement-TestScript.rule.param.value.json");
		 expect(dataelementValidateFunction(dataelementExample3430)).toBe(true);
	 });

	 test("validate DataElement-TestScript.rule.resource.json", () => {
		 const dataelementExample3431 = require("../stu3-resources/DataElement-TestScript.rule.resource.json");
		 expect(dataelementValidateFunction(dataelementExample3431)).toBe(true);
	 });

	 test("validate DataElement-TestScript.ruleset.json", () => {
		 const dataelementExample3432 = require("../stu3-resources/DataElement-TestScript.ruleset.json");
		 expect(dataelementValidateFunction(dataelementExample3432)).toBe(true);
	 });

	 test("validate DataElement-TestScript.ruleset.resource.json", () => {
		 const dataelementExample3433 = require("../stu3-resources/DataElement-TestScript.ruleset.resource.json");
		 expect(dataelementValidateFunction(dataelementExample3433)).toBe(true);
	 });

	 test("validate DataElement-TestScript.ruleset.rule.json", () => {
		 const dataelementExample3434 = require("../stu3-resources/DataElement-TestScript.ruleset.rule.json");
		 expect(dataelementValidateFunction(dataelementExample3434)).toBe(true);
	 });

	 test("validate DataElement-TestScript.ruleset.rule.param.json", () => {
		 const dataelementExample3435 = require("../stu3-resources/DataElement-TestScript.ruleset.rule.param.json");
		 expect(dataelementValidateFunction(dataelementExample3435)).toBe(true);
	 });

	 test("validate DataElement-TestScript.ruleset.rule.param.name.json", () => {
		 const dataelementExample3436 = require("../stu3-resources/DataElement-TestScript.ruleset.rule.param.name.json");
		 expect(dataelementValidateFunction(dataelementExample3436)).toBe(true);
	 });

	 test("validate DataElement-TestScript.ruleset.rule.param.value.json", () => {
		 const dataelementExample3437 = require("../stu3-resources/DataElement-TestScript.ruleset.rule.param.value.json");
		 expect(dataelementValidateFunction(dataelementExample3437)).toBe(true);
	 });

	 test("validate DataElement-TestScript.ruleset.rule.ruleId.json", () => {
		 const dataelementExample3438 = require("../stu3-resources/DataElement-TestScript.ruleset.rule.ruleId.json");
		 expect(dataelementValidateFunction(dataelementExample3438)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.compareToSourceExpression.json", () => {
		 const dataelementExample3439 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.compareToSourceExpression.json");
		 expect(dataelementValidateFunction(dataelementExample3439)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.compareToSourceId.json", () => {
		 const dataelementExample3440 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.compareToSourceId.json");
		 expect(dataelementValidateFunction(dataelementExample3440)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.compareToSourcePath.json", () => {
		 const dataelementExample3441 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.compareToSourcePath.json");
		 expect(dataelementValidateFunction(dataelementExample3441)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.contentType.json", () => {
		 const dataelementExample3442 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.contentType.json");
		 expect(dataelementValidateFunction(dataelementExample3442)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.description.json", () => {
		 const dataelementExample3443 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.description.json");
		 expect(dataelementValidateFunction(dataelementExample3443)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.direction.json", () => {
		 const dataelementExample3444 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.direction.json");
		 expect(dataelementValidateFunction(dataelementExample3444)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.expression.json", () => {
		 const dataelementExample3445 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.expression.json");
		 expect(dataelementValidateFunction(dataelementExample3445)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.headerField.json", () => {
		 const dataelementExample3446 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.headerField.json");
		 expect(dataelementValidateFunction(dataelementExample3446)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.json", () => {
		 const dataelementExample3447 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.json");
		 expect(dataelementValidateFunction(dataelementExample3447)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.label.json", () => {
		 const dataelementExample3448 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.label.json");
		 expect(dataelementValidateFunction(dataelementExample3448)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.minimumId.json", () => {
		 const dataelementExample3449 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.minimumId.json");
		 expect(dataelementValidateFunction(dataelementExample3449)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.navigationLinks.json", () => {
		 const dataelementExample3450 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.navigationLinks.json");
		 expect(dataelementValidateFunction(dataelementExample3450)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.operator.json", () => {
		 const dataelementExample3451 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.operator.json");
		 expect(dataelementValidateFunction(dataelementExample3451)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.path.json", () => {
		 const dataelementExample3452 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.path.json");
		 expect(dataelementValidateFunction(dataelementExample3452)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.requestMethod.json", () => {
		 const dataelementExample3453 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.requestMethod.json");
		 expect(dataelementValidateFunction(dataelementExample3453)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.requestURL.json", () => {
		 const dataelementExample3454 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.requestURL.json");
		 expect(dataelementValidateFunction(dataelementExample3454)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.resource.json", () => {
		 const dataelementExample3455 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.resource.json");
		 expect(dataelementValidateFunction(dataelementExample3455)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.response.json", () => {
		 const dataelementExample3456 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.response.json");
		 expect(dataelementValidateFunction(dataelementExample3456)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.responseCode.json", () => {
		 const dataelementExample3457 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.responseCode.json");
		 expect(dataelementValidateFunction(dataelementExample3457)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.rule.json", () => {
		 const dataelementExample3458 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.rule.json");
		 expect(dataelementValidateFunction(dataelementExample3458)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.rule.param.json", () => {
		 const dataelementExample3459 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.rule.param.json");
		 expect(dataelementValidateFunction(dataelementExample3459)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.rule.param.name.json", () => {
		 const dataelementExample3460 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.rule.param.name.json");
		 expect(dataelementValidateFunction(dataelementExample3460)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.rule.param.value.json", () => {
		 const dataelementExample3461 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.rule.param.value.json");
		 expect(dataelementValidateFunction(dataelementExample3461)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.rule.ruleId.json", () => {
		 const dataelementExample3462 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.rule.ruleId.json");
		 expect(dataelementValidateFunction(dataelementExample3462)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.ruleset.json", () => {
		 const dataelementExample3463 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.ruleset.json");
		 expect(dataelementValidateFunction(dataelementExample3463)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.ruleset.rule.json", () => {
		 const dataelementExample3464 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.ruleset.rule.json");
		 expect(dataelementValidateFunction(dataelementExample3464)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.ruleset.rule.param.json", () => {
		 const dataelementExample3465 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.ruleset.rule.param.json");
		 expect(dataelementValidateFunction(dataelementExample3465)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.ruleset.rule.param.name.json", () => {
		 const dataelementExample3466 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.ruleset.rule.param.name.json");
		 expect(dataelementValidateFunction(dataelementExample3466)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.ruleset.rule.param.value.json", () => {
		 const dataelementExample3467 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.ruleset.rule.param.value.json");
		 expect(dataelementValidateFunction(dataelementExample3467)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.ruleset.rule.ruleId.json", () => {
		 const dataelementExample3468 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.ruleset.rule.ruleId.json");
		 expect(dataelementValidateFunction(dataelementExample3468)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.ruleset.rulesetId.json", () => {
		 const dataelementExample3469 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.ruleset.rulesetId.json");
		 expect(dataelementValidateFunction(dataelementExample3469)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.sourceId.json", () => {
		 const dataelementExample3470 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.sourceId.json");
		 expect(dataelementValidateFunction(dataelementExample3470)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.validateProfileId.json", () => {
		 const dataelementExample3471 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.validateProfileId.json");
		 expect(dataelementValidateFunction(dataelementExample3471)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.value.json", () => {
		 const dataelementExample3472 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.value.json");
		 expect(dataelementValidateFunction(dataelementExample3472)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.assert.warningOnly.json", () => {
		 const dataelementExample3473 = require("../stu3-resources/DataElement-TestScript.setup.action.assert.warningOnly.json");
		 expect(dataelementValidateFunction(dataelementExample3473)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.json", () => {
		 const dataelementExample3474 = require("../stu3-resources/DataElement-TestScript.setup.action.json");
		 expect(dataelementValidateFunction(dataelementExample3474)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.accept.json", () => {
		 const dataelementExample3475 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.accept.json");
		 expect(dataelementValidateFunction(dataelementExample3475)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.contentType.json", () => {
		 const dataelementExample3476 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.contentType.json");
		 expect(dataelementValidateFunction(dataelementExample3476)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.description.json", () => {
		 const dataelementExample3477 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.description.json");
		 expect(dataelementValidateFunction(dataelementExample3477)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.destination.json", () => {
		 const dataelementExample3478 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.destination.json");
		 expect(dataelementValidateFunction(dataelementExample3478)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.encodeRequestUrl.json", () => {
		 const dataelementExample3479 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.encodeRequestUrl.json");
		 expect(dataelementValidateFunction(dataelementExample3479)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.json", () => {
		 const dataelementExample3480 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.json");
		 expect(dataelementValidateFunction(dataelementExample3480)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.label.json", () => {
		 const dataelementExample3481 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.label.json");
		 expect(dataelementValidateFunction(dataelementExample3481)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.origin.json", () => {
		 const dataelementExample3482 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.origin.json");
		 expect(dataelementValidateFunction(dataelementExample3482)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.params.json", () => {
		 const dataelementExample3483 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.params.json");
		 expect(dataelementValidateFunction(dataelementExample3483)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.requestHeader.field.json", () => {
		 const dataelementExample3484 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.requestHeader.field.json");
		 expect(dataelementValidateFunction(dataelementExample3484)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.requestHeader.json", () => {
		 const dataelementExample3485 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.requestHeader.json");
		 expect(dataelementValidateFunction(dataelementExample3485)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.requestHeader.value.json", () => {
		 const dataelementExample3486 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.requestHeader.value.json");
		 expect(dataelementValidateFunction(dataelementExample3486)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.requestId.json", () => {
		 const dataelementExample3487 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.requestId.json");
		 expect(dataelementValidateFunction(dataelementExample3487)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.resource.json", () => {
		 const dataelementExample3488 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.resource.json");
		 expect(dataelementValidateFunction(dataelementExample3488)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.responseId.json", () => {
		 const dataelementExample3489 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.responseId.json");
		 expect(dataelementValidateFunction(dataelementExample3489)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.sourceId.json", () => {
		 const dataelementExample3490 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.sourceId.json");
		 expect(dataelementValidateFunction(dataelementExample3490)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.targetId.json", () => {
		 const dataelementExample3491 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.targetId.json");
		 expect(dataelementValidateFunction(dataelementExample3491)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.type.json", () => {
		 const dataelementExample3492 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.type.json");
		 expect(dataelementValidateFunction(dataelementExample3492)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.action.operation.url.json", () => {
		 const dataelementExample3493 = require("../stu3-resources/DataElement-TestScript.setup.action.operation.url.json");
		 expect(dataelementValidateFunction(dataelementExample3493)).toBe(true);
	 });

	 test("validate DataElement-TestScript.setup.json", () => {
		 const dataelementExample3494 = require("../stu3-resources/DataElement-TestScript.setup.json");
		 expect(dataelementValidateFunction(dataelementExample3494)).toBe(true);
	 });

	 test("validate DataElement-TestScript.status.json", () => {
		 const dataelementExample3495 = require("../stu3-resources/DataElement-TestScript.status.json");
		 expect(dataelementValidateFunction(dataelementExample3495)).toBe(true);
	 });

	 test("validate DataElement-TestScript.teardown.action.json", () => {
		 const dataelementExample3496 = require("../stu3-resources/DataElement-TestScript.teardown.action.json");
		 expect(dataelementValidateFunction(dataelementExample3496)).toBe(true);
	 });

	 test("validate DataElement-TestScript.teardown.action.operation.json", () => {
		 const dataelementExample3497 = require("../stu3-resources/DataElement-TestScript.teardown.action.operation.json");
		 expect(dataelementValidateFunction(dataelementExample3497)).toBe(true);
	 });

	 test("validate DataElement-TestScript.teardown.json", () => {
		 const dataelementExample3498 = require("../stu3-resources/DataElement-TestScript.teardown.json");
		 expect(dataelementValidateFunction(dataelementExample3498)).toBe(true);
	 });

	 test("validate DataElement-TestScript.test.action.assert.json", () => {
		 const dataelementExample3499 = require("../stu3-resources/DataElement-TestScript.test.action.assert.json");
		 expect(dataelementValidateFunction(dataelementExample3499)).toBe(true);
	 });

	 test("validate DataElement-TestScript.test.action.json", () => {
		 const dataelementExample3500 = require("../stu3-resources/DataElement-TestScript.test.action.json");
		 expect(dataelementValidateFunction(dataelementExample3500)).toBe(true);
	 });

	 test("validate DataElement-TestScript.test.action.operation.json", () => {
		 const dataelementExample3501 = require("../stu3-resources/DataElement-TestScript.test.action.operation.json");
		 expect(dataelementValidateFunction(dataelementExample3501)).toBe(true);
	 });

	 test("validate DataElement-TestScript.test.description.json", () => {
		 const dataelementExample3502 = require("../stu3-resources/DataElement-TestScript.test.description.json");
		 expect(dataelementValidateFunction(dataelementExample3502)).toBe(true);
	 });

	 test("validate DataElement-TestScript.test.json", () => {
		 const dataelementExample3503 = require("../stu3-resources/DataElement-TestScript.test.json");
		 expect(dataelementValidateFunction(dataelementExample3503)).toBe(true);
	 });

	 test("validate DataElement-TestScript.test.name.json", () => {
		 const dataelementExample3504 = require("../stu3-resources/DataElement-TestScript.test.name.json");
		 expect(dataelementValidateFunction(dataelementExample3504)).toBe(true);
	 });

	 test("validate DataElement-TestScript.title.json", () => {
		 const dataelementExample3505 = require("../stu3-resources/DataElement-TestScript.title.json");
		 expect(dataelementValidateFunction(dataelementExample3505)).toBe(true);
	 });

	 test("validate DataElement-TestScript.url.json", () => {
		 const dataelementExample3506 = require("../stu3-resources/DataElement-TestScript.url.json");
		 expect(dataelementValidateFunction(dataelementExample3506)).toBe(true);
	 });

	 test("validate DataElement-TestScript.useContext.json", () => {
		 const dataelementExample3507 = require("../stu3-resources/DataElement-TestScript.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample3507)).toBe(true);
	 });

	 test("validate DataElement-TestScript.variable.defaultValue.json", () => {
		 const dataelementExample3508 = require("../stu3-resources/DataElement-TestScript.variable.defaultValue.json");
		 expect(dataelementValidateFunction(dataelementExample3508)).toBe(true);
	 });

	 test("validate DataElement-TestScript.variable.description.json", () => {
		 const dataelementExample3509 = require("../stu3-resources/DataElement-TestScript.variable.description.json");
		 expect(dataelementValidateFunction(dataelementExample3509)).toBe(true);
	 });

	 test("validate DataElement-TestScript.variable.expression.json", () => {
		 const dataelementExample3510 = require("../stu3-resources/DataElement-TestScript.variable.expression.json");
		 expect(dataelementValidateFunction(dataelementExample3510)).toBe(true);
	 });

	 test("validate DataElement-TestScript.variable.headerField.json", () => {
		 const dataelementExample3511 = require("../stu3-resources/DataElement-TestScript.variable.headerField.json");
		 expect(dataelementValidateFunction(dataelementExample3511)).toBe(true);
	 });

	 test("validate DataElement-TestScript.variable.hint.json", () => {
		 const dataelementExample3512 = require("../stu3-resources/DataElement-TestScript.variable.hint.json");
		 expect(dataelementValidateFunction(dataelementExample3512)).toBe(true);
	 });

	 test("validate DataElement-TestScript.variable.json", () => {
		 const dataelementExample3513 = require("../stu3-resources/DataElement-TestScript.variable.json");
		 expect(dataelementValidateFunction(dataelementExample3513)).toBe(true);
	 });

	 test("validate DataElement-TestScript.variable.name.json", () => {
		 const dataelementExample3514 = require("../stu3-resources/DataElement-TestScript.variable.name.json");
		 expect(dataelementValidateFunction(dataelementExample3514)).toBe(true);
	 });

	 test("validate DataElement-TestScript.variable.path.json", () => {
		 const dataelementExample3515 = require("../stu3-resources/DataElement-TestScript.variable.path.json");
		 expect(dataelementValidateFunction(dataelementExample3515)).toBe(true);
	 });

	 test("validate DataElement-TestScript.variable.sourceId.json", () => {
		 const dataelementExample3516 = require("../stu3-resources/DataElement-TestScript.variable.sourceId.json");
		 expect(dataelementValidateFunction(dataelementExample3516)).toBe(true);
	 });

	 test("validate DataElement-TestScript.version.json", () => {
		 const dataelementExample3517 = require("../stu3-resources/DataElement-TestScript.version.json");
		 expect(dataelementValidateFunction(dataelementExample3517)).toBe(true);
	 });

	 test("validate DataElement-Timing.code.json", () => {
		 const dataelementExample3518 = require("../stu3-resources/DataElement-Timing.code.json");
		 expect(dataelementValidateFunction(dataelementExample3518)).toBe(true);
	 });

	 test("validate DataElement-Timing.event.json", () => {
		 const dataelementExample3519 = require("../stu3-resources/DataElement-Timing.event.json");
		 expect(dataelementValidateFunction(dataelementExample3519)).toBe(true);
	 });

	 test("validate DataElement-Timing.json", () => {
		 const dataelementExample3520 = require("../stu3-resources/DataElement-Timing.json");
		 expect(dataelementValidateFunction(dataelementExample3520)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.boundsX.json", () => {
		 const dataelementExample3521 = require("../stu3-resources/DataElement-Timing.repeat.boundsX.json");
		 expect(dataelementValidateFunction(dataelementExample3521)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.count.json", () => {
		 const dataelementExample3522 = require("../stu3-resources/DataElement-Timing.repeat.count.json");
		 expect(dataelementValidateFunction(dataelementExample3522)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.countMax.json", () => {
		 const dataelementExample3523 = require("../stu3-resources/DataElement-Timing.repeat.countMax.json");
		 expect(dataelementValidateFunction(dataelementExample3523)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.dayOfWeek.json", () => {
		 const dataelementExample3524 = require("../stu3-resources/DataElement-Timing.repeat.dayOfWeek.json");
		 expect(dataelementValidateFunction(dataelementExample3524)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.duration.json", () => {
		 const dataelementExample3525 = require("../stu3-resources/DataElement-Timing.repeat.duration.json");
		 expect(dataelementValidateFunction(dataelementExample3525)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.durationMax.json", () => {
		 const dataelementExample3526 = require("../stu3-resources/DataElement-Timing.repeat.durationMax.json");
		 expect(dataelementValidateFunction(dataelementExample3526)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.durationUnit.json", () => {
		 const dataelementExample3527 = require("../stu3-resources/DataElement-Timing.repeat.durationUnit.json");
		 expect(dataelementValidateFunction(dataelementExample3527)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.frequency.json", () => {
		 const dataelementExample3528 = require("../stu3-resources/DataElement-Timing.repeat.frequency.json");
		 expect(dataelementValidateFunction(dataelementExample3528)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.frequencyMax.json", () => {
		 const dataelementExample3529 = require("../stu3-resources/DataElement-Timing.repeat.frequencyMax.json");
		 expect(dataelementValidateFunction(dataelementExample3529)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.json", () => {
		 const dataelementExample3530 = require("../stu3-resources/DataElement-Timing.repeat.json");
		 expect(dataelementValidateFunction(dataelementExample3530)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.offset.json", () => {
		 const dataelementExample3531 = require("../stu3-resources/DataElement-Timing.repeat.offset.json");
		 expect(dataelementValidateFunction(dataelementExample3531)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.period.json", () => {
		 const dataelementExample3532 = require("../stu3-resources/DataElement-Timing.repeat.period.json");
		 expect(dataelementValidateFunction(dataelementExample3532)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.periodMax.json", () => {
		 const dataelementExample3533 = require("../stu3-resources/DataElement-Timing.repeat.periodMax.json");
		 expect(dataelementValidateFunction(dataelementExample3533)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.periodUnit.json", () => {
		 const dataelementExample3534 = require("../stu3-resources/DataElement-Timing.repeat.periodUnit.json");
		 expect(dataelementValidateFunction(dataelementExample3534)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.timeOfDay.json", () => {
		 const dataelementExample3535 = require("../stu3-resources/DataElement-Timing.repeat.timeOfDay.json");
		 expect(dataelementValidateFunction(dataelementExample3535)).toBe(true);
	 });

	 test("validate DataElement-Timing.repeat.when.json", () => {
		 const dataelementExample3536 = require("../stu3-resources/DataElement-Timing.repeat.when.json");
		 expect(dataelementValidateFunction(dataelementExample3536)).toBe(true);
	 });

	 test("validate DataElement-TriggerDefinition.eventData.json", () => {
		 const dataelementExample3537 = require("../stu3-resources/DataElement-TriggerDefinition.eventData.json");
		 expect(dataelementValidateFunction(dataelementExample3537)).toBe(true);
	 });

	 test("validate DataElement-TriggerDefinition.eventName.json", () => {
		 const dataelementExample3538 = require("../stu3-resources/DataElement-TriggerDefinition.eventName.json");
		 expect(dataelementValidateFunction(dataelementExample3538)).toBe(true);
	 });

	 test("validate DataElement-TriggerDefinition.eventTimingX.json", () => {
		 const dataelementExample3539 = require("../stu3-resources/DataElement-TriggerDefinition.eventTimingX.json");
		 expect(dataelementValidateFunction(dataelementExample3539)).toBe(true);
	 });

	 test("validate DataElement-TriggerDefinition.json", () => {
		 const dataelementExample3540 = require("../stu3-resources/DataElement-TriggerDefinition.json");
		 expect(dataelementValidateFunction(dataelementExample3540)).toBe(true);
	 });

	 test("validate DataElement-TriggerDefinition.type.json", () => {
		 const dataelementExample3541 = require("../stu3-resources/DataElement-TriggerDefinition.type.json");
		 expect(dataelementValidateFunction(dataelementExample3541)).toBe(true);
	 });

	 test("validate DataElement-UsageContext.code.json", () => {
		 const dataelementExample3542 = require("../stu3-resources/DataElement-UsageContext.code.json");
		 expect(dataelementValidateFunction(dataelementExample3542)).toBe(true);
	 });

	 test("validate DataElement-UsageContext.json", () => {
		 const dataelementExample3543 = require("../stu3-resources/DataElement-UsageContext.json");
		 expect(dataelementValidateFunction(dataelementExample3543)).toBe(true);
	 });

	 test("validate DataElement-UsageContext.valueX.json", () => {
		 const dataelementExample3544 = require("../stu3-resources/DataElement-UsageContext.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample3544)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.exclude.json", () => {
		 const dataelementExample3545 = require("../stu3-resources/DataElement-ValueSet.compose.exclude.json");
		 expect(dataelementValidateFunction(dataelementExample3545)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.inactive.json", () => {
		 const dataelementExample3546 = require("../stu3-resources/DataElement-ValueSet.compose.inactive.json");
		 expect(dataelementValidateFunction(dataelementExample3546)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.concept.code.json", () => {
		 const dataelementExample3547 = require("../stu3-resources/DataElement-ValueSet.compose.include.concept.code.json");
		 expect(dataelementValidateFunction(dataelementExample3547)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.concept.designation.json", () => {
		 const dataelementExample3548 = require("../stu3-resources/DataElement-ValueSet.compose.include.concept.designation.json");
		 expect(dataelementValidateFunction(dataelementExample3548)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.concept.designation.language.json", () => {
		 const dataelementExample3549 = require("../stu3-resources/DataElement-ValueSet.compose.include.concept.designation.language.json");
		 expect(dataelementValidateFunction(dataelementExample3549)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.concept.designation.use.json", () => {
		 const dataelementExample3550 = require("../stu3-resources/DataElement-ValueSet.compose.include.concept.designation.use.json");
		 expect(dataelementValidateFunction(dataelementExample3550)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.concept.designation.value.json", () => {
		 const dataelementExample3551 = require("../stu3-resources/DataElement-ValueSet.compose.include.concept.designation.value.json");
		 expect(dataelementValidateFunction(dataelementExample3551)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.concept.display.json", () => {
		 const dataelementExample3552 = require("../stu3-resources/DataElement-ValueSet.compose.include.concept.display.json");
		 expect(dataelementValidateFunction(dataelementExample3552)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.concept.json", () => {
		 const dataelementExample3553 = require("../stu3-resources/DataElement-ValueSet.compose.include.concept.json");
		 expect(dataelementValidateFunction(dataelementExample3553)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.filter.json", () => {
		 const dataelementExample3554 = require("../stu3-resources/DataElement-ValueSet.compose.include.filter.json");
		 expect(dataelementValidateFunction(dataelementExample3554)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.filter.op.json", () => {
		 const dataelementExample3555 = require("../stu3-resources/DataElement-ValueSet.compose.include.filter.op.json");
		 expect(dataelementValidateFunction(dataelementExample3555)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.filter.property.json", () => {
		 const dataelementExample3556 = require("../stu3-resources/DataElement-ValueSet.compose.include.filter.property.json");
		 expect(dataelementValidateFunction(dataelementExample3556)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.filter.value.json", () => {
		 const dataelementExample3557 = require("../stu3-resources/DataElement-ValueSet.compose.include.filter.value.json");
		 expect(dataelementValidateFunction(dataelementExample3557)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.json", () => {
		 const dataelementExample3558 = require("../stu3-resources/DataElement-ValueSet.compose.include.json");
		 expect(dataelementValidateFunction(dataelementExample3558)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.system.json", () => {
		 const dataelementExample3559 = require("../stu3-resources/DataElement-ValueSet.compose.include.system.json");
		 expect(dataelementValidateFunction(dataelementExample3559)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.valueSet.json", () => {
		 const dataelementExample3560 = require("../stu3-resources/DataElement-ValueSet.compose.include.valueSet.json");
		 expect(dataelementValidateFunction(dataelementExample3560)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.include.version.json", () => {
		 const dataelementExample3561 = require("../stu3-resources/DataElement-ValueSet.compose.include.version.json");
		 expect(dataelementValidateFunction(dataelementExample3561)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.json", () => {
		 const dataelementExample3562 = require("../stu3-resources/DataElement-ValueSet.compose.json");
		 expect(dataelementValidateFunction(dataelementExample3562)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.compose.lockedDate.json", () => {
		 const dataelementExample3563 = require("../stu3-resources/DataElement-ValueSet.compose.lockedDate.json");
		 expect(dataelementValidateFunction(dataelementExample3563)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.contact.json", () => {
		 const dataelementExample3564 = require("../stu3-resources/DataElement-ValueSet.contact.json");
		 expect(dataelementValidateFunction(dataelementExample3564)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.copyright.json", () => {
		 const dataelementExample3565 = require("../stu3-resources/DataElement-ValueSet.copyright.json");
		 expect(dataelementValidateFunction(dataelementExample3565)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.date.json", () => {
		 const dataelementExample3566 = require("../stu3-resources/DataElement-ValueSet.date.json");
		 expect(dataelementValidateFunction(dataelementExample3566)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.description.json", () => {
		 const dataelementExample3567 = require("../stu3-resources/DataElement-ValueSet.description.json");
		 expect(dataelementValidateFunction(dataelementExample3567)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.contains.abstract.json", () => {
		 const dataelementExample3568 = require("../stu3-resources/DataElement-ValueSet.expansion.contains.abstract.json");
		 expect(dataelementValidateFunction(dataelementExample3568)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.contains.code.json", () => {
		 const dataelementExample3569 = require("../stu3-resources/DataElement-ValueSet.expansion.contains.code.json");
		 expect(dataelementValidateFunction(dataelementExample3569)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.contains.contains.json", () => {
		 const dataelementExample3570 = require("../stu3-resources/DataElement-ValueSet.expansion.contains.contains.json");
		 expect(dataelementValidateFunction(dataelementExample3570)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.contains.designation.json", () => {
		 const dataelementExample3571 = require("../stu3-resources/DataElement-ValueSet.expansion.contains.designation.json");
		 expect(dataelementValidateFunction(dataelementExample3571)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.contains.display.json", () => {
		 const dataelementExample3572 = require("../stu3-resources/DataElement-ValueSet.expansion.contains.display.json");
		 expect(dataelementValidateFunction(dataelementExample3572)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.contains.inactive.json", () => {
		 const dataelementExample3573 = require("../stu3-resources/DataElement-ValueSet.expansion.contains.inactive.json");
		 expect(dataelementValidateFunction(dataelementExample3573)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.contains.json", () => {
		 const dataelementExample3574 = require("../stu3-resources/DataElement-ValueSet.expansion.contains.json");
		 expect(dataelementValidateFunction(dataelementExample3574)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.contains.system.json", () => {
		 const dataelementExample3575 = require("../stu3-resources/DataElement-ValueSet.expansion.contains.system.json");
		 expect(dataelementValidateFunction(dataelementExample3575)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.contains.version.json", () => {
		 const dataelementExample3576 = require("../stu3-resources/DataElement-ValueSet.expansion.contains.version.json");
		 expect(dataelementValidateFunction(dataelementExample3576)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.identifier.json", () => {
		 const dataelementExample3577 = require("../stu3-resources/DataElement-ValueSet.expansion.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3577)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.json", () => {
		 const dataelementExample3578 = require("../stu3-resources/DataElement-ValueSet.expansion.json");
		 expect(dataelementValidateFunction(dataelementExample3578)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.offset.json", () => {
		 const dataelementExample3579 = require("../stu3-resources/DataElement-ValueSet.expansion.offset.json");
		 expect(dataelementValidateFunction(dataelementExample3579)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.parameter.json", () => {
		 const dataelementExample3580 = require("../stu3-resources/DataElement-ValueSet.expansion.parameter.json");
		 expect(dataelementValidateFunction(dataelementExample3580)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.parameter.name.json", () => {
		 const dataelementExample3581 = require("../stu3-resources/DataElement-ValueSet.expansion.parameter.name.json");
		 expect(dataelementValidateFunction(dataelementExample3581)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.parameter.valueX.json", () => {
		 const dataelementExample3582 = require("../stu3-resources/DataElement-ValueSet.expansion.parameter.valueX.json");
		 expect(dataelementValidateFunction(dataelementExample3582)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.timestamp.json", () => {
		 const dataelementExample3583 = require("../stu3-resources/DataElement-ValueSet.expansion.timestamp.json");
		 expect(dataelementValidateFunction(dataelementExample3583)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.expansion.total.json", () => {
		 const dataelementExample3584 = require("../stu3-resources/DataElement-ValueSet.expansion.total.json");
		 expect(dataelementValidateFunction(dataelementExample3584)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.experimental.json", () => {
		 const dataelementExample3585 = require("../stu3-resources/DataElement-ValueSet.experimental.json");
		 expect(dataelementValidateFunction(dataelementExample3585)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.extensible.json", () => {
		 const dataelementExample3586 = require("../stu3-resources/DataElement-ValueSet.extensible.json");
		 expect(dataelementValidateFunction(dataelementExample3586)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.identifier.json", () => {
		 const dataelementExample3587 = require("../stu3-resources/DataElement-ValueSet.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3587)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.immutable.json", () => {
		 const dataelementExample3588 = require("../stu3-resources/DataElement-ValueSet.immutable.json");
		 expect(dataelementValidateFunction(dataelementExample3588)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.json", () => {
		 const dataelementExample3589 = require("../stu3-resources/DataElement-ValueSet.json");
		 expect(dataelementValidateFunction(dataelementExample3589)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.jurisdiction.json", () => {
		 const dataelementExample3590 = require("../stu3-resources/DataElement-ValueSet.jurisdiction.json");
		 expect(dataelementValidateFunction(dataelementExample3590)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.name.json", () => {
		 const dataelementExample3591 = require("../stu3-resources/DataElement-ValueSet.name.json");
		 expect(dataelementValidateFunction(dataelementExample3591)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.publisher.json", () => {
		 const dataelementExample3592 = require("../stu3-resources/DataElement-ValueSet.publisher.json");
		 expect(dataelementValidateFunction(dataelementExample3592)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.purpose.json", () => {
		 const dataelementExample3593 = require("../stu3-resources/DataElement-ValueSet.purpose.json");
		 expect(dataelementValidateFunction(dataelementExample3593)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.status.json", () => {
		 const dataelementExample3594 = require("../stu3-resources/DataElement-ValueSet.status.json");
		 expect(dataelementValidateFunction(dataelementExample3594)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.title.json", () => {
		 const dataelementExample3595 = require("../stu3-resources/DataElement-ValueSet.title.json");
		 expect(dataelementValidateFunction(dataelementExample3595)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.url.json", () => {
		 const dataelementExample3596 = require("../stu3-resources/DataElement-ValueSet.url.json");
		 expect(dataelementValidateFunction(dataelementExample3596)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.useContext.json", () => {
		 const dataelementExample3597 = require("../stu3-resources/DataElement-ValueSet.useContext.json");
		 expect(dataelementValidateFunction(dataelementExample3597)).toBe(true);
	 });

	 test("validate DataElement-ValueSet.version.json", () => {
		 const dataelementExample3598 = require("../stu3-resources/DataElement-ValueSet.version.json");
		 expect(dataelementValidateFunction(dataelementExample3598)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dateWritten.json", () => {
		 const dataelementExample3599 = require("../stu3-resources/DataElement-VisionPrescription.dateWritten.json");
		 expect(dataelementValidateFunction(dataelementExample3599)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.add.json", () => {
		 const dataelementExample3600 = require("../stu3-resources/DataElement-VisionPrescription.dispense.add.json");
		 expect(dataelementValidateFunction(dataelementExample3600)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.axis.json", () => {
		 const dataelementExample3601 = require("../stu3-resources/DataElement-VisionPrescription.dispense.axis.json");
		 expect(dataelementValidateFunction(dataelementExample3601)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.backCurve.json", () => {
		 const dataelementExample3602 = require("../stu3-resources/DataElement-VisionPrescription.dispense.backCurve.json");
		 expect(dataelementValidateFunction(dataelementExample3602)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.base.json", () => {
		 const dataelementExample3603 = require("../stu3-resources/DataElement-VisionPrescription.dispense.base.json");
		 expect(dataelementValidateFunction(dataelementExample3603)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.brand.json", () => {
		 const dataelementExample3604 = require("../stu3-resources/DataElement-VisionPrescription.dispense.brand.json");
		 expect(dataelementValidateFunction(dataelementExample3604)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.color.json", () => {
		 const dataelementExample3605 = require("../stu3-resources/DataElement-VisionPrescription.dispense.color.json");
		 expect(dataelementValidateFunction(dataelementExample3605)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.cylinder.json", () => {
		 const dataelementExample3606 = require("../stu3-resources/DataElement-VisionPrescription.dispense.cylinder.json");
		 expect(dataelementValidateFunction(dataelementExample3606)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.diameter.json", () => {
		 const dataelementExample3607 = require("../stu3-resources/DataElement-VisionPrescription.dispense.diameter.json");
		 expect(dataelementValidateFunction(dataelementExample3607)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.duration.json", () => {
		 const dataelementExample3608 = require("../stu3-resources/DataElement-VisionPrescription.dispense.duration.json");
		 expect(dataelementValidateFunction(dataelementExample3608)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.eye.json", () => {
		 const dataelementExample3609 = require("../stu3-resources/DataElement-VisionPrescription.dispense.eye.json");
		 expect(dataelementValidateFunction(dataelementExample3609)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.json", () => {
		 const dataelementExample3610 = require("../stu3-resources/DataElement-VisionPrescription.dispense.json");
		 expect(dataelementValidateFunction(dataelementExample3610)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.note.json", () => {
		 const dataelementExample3611 = require("../stu3-resources/DataElement-VisionPrescription.dispense.note.json");
		 expect(dataelementValidateFunction(dataelementExample3611)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.power.json", () => {
		 const dataelementExample3612 = require("../stu3-resources/DataElement-VisionPrescription.dispense.power.json");
		 expect(dataelementValidateFunction(dataelementExample3612)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.prism.json", () => {
		 const dataelementExample3613 = require("../stu3-resources/DataElement-VisionPrescription.dispense.prism.json");
		 expect(dataelementValidateFunction(dataelementExample3613)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.product.json", () => {
		 const dataelementExample3614 = require("../stu3-resources/DataElement-VisionPrescription.dispense.product.json");
		 expect(dataelementValidateFunction(dataelementExample3614)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.dispense.sphere.json", () => {
		 const dataelementExample3615 = require("../stu3-resources/DataElement-VisionPrescription.dispense.sphere.json");
		 expect(dataelementValidateFunction(dataelementExample3615)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.encounter.json", () => {
		 const dataelementExample3616 = require("../stu3-resources/DataElement-VisionPrescription.encounter.json");
		 expect(dataelementValidateFunction(dataelementExample3616)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.identifier.json", () => {
		 const dataelementExample3617 = require("../stu3-resources/DataElement-VisionPrescription.identifier.json");
		 expect(dataelementValidateFunction(dataelementExample3617)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.json", () => {
		 const dataelementExample3618 = require("../stu3-resources/DataElement-VisionPrescription.json");
		 expect(dataelementValidateFunction(dataelementExample3618)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.patient.json", () => {
		 const dataelementExample3619 = require("../stu3-resources/DataElement-VisionPrescription.patient.json");
		 expect(dataelementValidateFunction(dataelementExample3619)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.prescriber.json", () => {
		 const dataelementExample3620 = require("../stu3-resources/DataElement-VisionPrescription.prescriber.json");
		 expect(dataelementValidateFunction(dataelementExample3620)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.reasonX.json", () => {
		 const dataelementExample3621 = require("../stu3-resources/DataElement-VisionPrescription.reasonX.json");
		 expect(dataelementValidateFunction(dataelementExample3621)).toBe(true);
	 });

	 test("validate DataElement-VisionPrescription.status.json", () => {
		 const dataelementExample3622 = require("../stu3-resources/DataElement-VisionPrescription.status.json");
		 expect(dataelementValidateFunction(dataelementExample3622)).toBe(true);
	 });

	 test("validate DataElement-base64Binary.id.json", () => {
		 const dataelementExample3623 = require("../stu3-resources/DataElement-base64Binary.id.json");
		 expect(dataelementValidateFunction(dataelementExample3623)).toBe(true);
	 });

	 test("validate DataElement-base64Binary.json", () => {
		 const dataelementExample3624 = require("../stu3-resources/DataElement-base64Binary.json");
		 expect(dataelementValidateFunction(dataelementExample3624)).toBe(true);
	 });

	 test("validate DataElement-base64Binary.value.json", () => {
		 const dataelementExample3625 = require("../stu3-resources/DataElement-base64Binary.value.json");
		 expect(dataelementValidateFunction(dataelementExample3625)).toBe(true);
	 });

	 test("validate DataElement-boolean.id.json", () => {
		 const dataelementExample3626 = require("../stu3-resources/DataElement-boolean.id.json");
		 expect(dataelementValidateFunction(dataelementExample3626)).toBe(true);
	 });

	 test("validate DataElement-boolean.json", () => {
		 const dataelementExample3627 = require("../stu3-resources/DataElement-boolean.json");
		 expect(dataelementValidateFunction(dataelementExample3627)).toBe(true);
	 });

	 test("validate DataElement-boolean.value.json", () => {
		 const dataelementExample3628 = require("../stu3-resources/DataElement-boolean.value.json");
		 expect(dataelementValidateFunction(dataelementExample3628)).toBe(true);
	 });

	 test("validate DataElement-date.id.json", () => {
		 const dataelementExample3629 = require("../stu3-resources/DataElement-date.id.json");
		 expect(dataelementValidateFunction(dataelementExample3629)).toBe(true);
	 });

	 test("validate DataElement-date.json", () => {
		 const dataelementExample3630 = require("../stu3-resources/DataElement-date.json");
		 expect(dataelementValidateFunction(dataelementExample3630)).toBe(true);
	 });

	 test("validate DataElement-date.value.json", () => {
		 const dataelementExample3631 = require("../stu3-resources/DataElement-date.value.json");
		 expect(dataelementValidateFunction(dataelementExample3631)).toBe(true);
	 });

	 test("validate DataElement-dateTime.id.json", () => {
		 const dataelementExample3632 = require("../stu3-resources/DataElement-dateTime.id.json");
		 expect(dataelementValidateFunction(dataelementExample3632)).toBe(true);
	 });

	 test("validate DataElement-dateTime.json", () => {
		 const dataelementExample3633 = require("../stu3-resources/DataElement-dateTime.json");
		 expect(dataelementValidateFunction(dataelementExample3633)).toBe(true);
	 });

	 test("validate DataElement-dateTime.value.json", () => {
		 const dataelementExample3634 = require("../stu3-resources/DataElement-dateTime.value.json");
		 expect(dataelementValidateFunction(dataelementExample3634)).toBe(true);
	 });

	 test("validate DataElement-decimal.id.json", () => {
		 const dataelementExample3635 = require("../stu3-resources/DataElement-decimal.id.json");
		 expect(dataelementValidateFunction(dataelementExample3635)).toBe(true);
	 });

	 test("validate DataElement-decimal.json", () => {
		 const dataelementExample3636 = require("../stu3-resources/DataElement-decimal.json");
		 expect(dataelementValidateFunction(dataelementExample3636)).toBe(true);
	 });

	 test("validate DataElement-decimal.value.json", () => {
		 const dataelementExample3637 = require("../stu3-resources/DataElement-decimal.value.json");
		 expect(dataelementValidateFunction(dataelementExample3637)).toBe(true);
	 });

	 test("validate DataElement-instant.id.json", () => {
		 const dataelementExample3638 = require("../stu3-resources/DataElement-instant.id.json");
		 expect(dataelementValidateFunction(dataelementExample3638)).toBe(true);
	 });

	 test("validate DataElement-instant.json", () => {
		 const dataelementExample3639 = require("../stu3-resources/DataElement-instant.json");
		 expect(dataelementValidateFunction(dataelementExample3639)).toBe(true);
	 });

	 test("validate DataElement-instant.value.json", () => {
		 const dataelementExample3640 = require("../stu3-resources/DataElement-instant.value.json");
		 expect(dataelementValidateFunction(dataelementExample3640)).toBe(true);
	 });

	 test("validate DataElement-integer.id.json", () => {
		 const dataelementExample3641 = require("../stu3-resources/DataElement-integer.id.json");
		 expect(dataelementValidateFunction(dataelementExample3641)).toBe(true);
	 });

	 test("validate DataElement-integer.json", () => {
		 const dataelementExample3642 = require("../stu3-resources/DataElement-integer.json");
		 expect(dataelementValidateFunction(dataelementExample3642)).toBe(true);
	 });

	 test("validate DataElement-integer.value.json", () => {
		 const dataelementExample3643 = require("../stu3-resources/DataElement-integer.value.json");
		 expect(dataelementValidateFunction(dataelementExample3643)).toBe(true);
	 });

	 test("validate DataElement-prothrombin.json", () => {
		 const dataelementExample3644 = require("../stu3-resources/DataElement-prothrombin.json");
		 expect(dataelementValidateFunction(dataelementExample3644)).toBe(true);
	 });

	 test("validate DataElement-string.id.json", () => {
		 const dataelementExample3645 = require("../stu3-resources/DataElement-string.id.json");
		 expect(dataelementValidateFunction(dataelementExample3645)).toBe(true);
	 });

	 test("validate DataElement-string.json", () => {
		 const dataelementExample3646 = require("../stu3-resources/DataElement-string.json");
		 expect(dataelementValidateFunction(dataelementExample3646)).toBe(true);
	 });

	 test("validate DataElement-string.value.json", () => {
		 const dataelementExample3647 = require("../stu3-resources/DataElement-string.value.json");
		 expect(dataelementValidateFunction(dataelementExample3647)).toBe(true);
	 });

	 test("validate DataElement-time.id.json", () => {
		 const dataelementExample3648 = require("../stu3-resources/DataElement-time.id.json");
		 expect(dataelementValidateFunction(dataelementExample3648)).toBe(true);
	 });

	 test("validate DataElement-time.json", () => {
		 const dataelementExample3649 = require("../stu3-resources/DataElement-time.json");
		 expect(dataelementValidateFunction(dataelementExample3649)).toBe(true);
	 });

	 test("validate DataElement-time.value.json", () => {
		 const dataelementExample3650 = require("../stu3-resources/DataElement-time.value.json");
		 expect(dataelementValidateFunction(dataelementExample3650)).toBe(true);
	 });

	 test("validate DataElement-uri.id.json", () => {
		 const dataelementExample3651 = require("../stu3-resources/DataElement-uri.id.json");
		 expect(dataelementValidateFunction(dataelementExample3651)).toBe(true);
	 });

	 test("validate DataElement-uri.json", () => {
		 const dataelementExample3652 = require("../stu3-resources/DataElement-uri.json");
		 expect(dataelementValidateFunction(dataelementExample3652)).toBe(true);
	 });

	 test("validate DataElement-uri.value.json", () => {
		 const dataelementExample3653 = require("../stu3-resources/DataElement-uri.value.json");
		 expect(dataelementValidateFunction(dataelementExample3653)).toBe(true);
	 });

	 test("validate DataElement-xhtml.id.json", () => {
		 const dataelementExample3654 = require("../stu3-resources/DataElement-xhtml.id.json");
		 expect(dataelementValidateFunction(dataelementExample3654)).toBe(true);
	 });

	 test("validate DataElement-xhtml.json", () => {
		 const dataelementExample3655 = require("../stu3-resources/DataElement-xhtml.json");
		 expect(dataelementValidateFunction(dataelementExample3655)).toBe(true);
	 });

	 test("validate DataElement-xhtml.value.json", () => {
		 const dataelementExample3656 = require("../stu3-resources/DataElement-xhtml.value.json");
		 console.log(dataelementValidateFunction(dataelementExample3656));
		 console.log(dataelementValidateFunction.errors);
		 expect(dataelementValidateFunction(dataelementExample3656)).toBe(true);
	 });

});
