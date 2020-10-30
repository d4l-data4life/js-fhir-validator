const searchparameterValidateFunction = require("../../stu3/js/SearchParameter");

describe("SearchParameter", () => {
	 test("validate SearchParameter-Account-balance.json", () => {
		 const searchparameterExample1 = require("../stu3-resources/SearchParameter-Account-balance.json");
		 expect(searchparameterValidateFunction(searchparameterExample1)).toBe(true);
	 });

	 test("validate SearchParameter-Account-identifier.json", () => {
		 const searchparameterExample2 = require("../stu3-resources/SearchParameter-Account-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample2)).toBe(true);
	 });

	 test("validate SearchParameter-Account-name.json", () => {
		 const searchparameterExample3 = require("../stu3-resources/SearchParameter-Account-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample3)).toBe(true);
	 });

	 test("validate SearchParameter-Account-owner.json", () => {
		 const searchparameterExample4 = require("../stu3-resources/SearchParameter-Account-owner.json");
		 expect(searchparameterValidateFunction(searchparameterExample4)).toBe(true);
	 });

	 test("validate SearchParameter-Account-patient.json", () => {
		 const searchparameterExample5 = require("../stu3-resources/SearchParameter-Account-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample5)).toBe(true);
	 });

	 test("validate SearchParameter-Account-period.json", () => {
		 const searchparameterExample6 = require("../stu3-resources/SearchParameter-Account-period.json");
		 expect(searchparameterValidateFunction(searchparameterExample6)).toBe(true);
	 });

	 test("validate SearchParameter-Account-status.json", () => {
		 const searchparameterExample7 = require("../stu3-resources/SearchParameter-Account-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample7)).toBe(true);
	 });

	 test("validate SearchParameter-Account-subject.json", () => {
		 const searchparameterExample8 = require("../stu3-resources/SearchParameter-Account-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample8)).toBe(true);
	 });

	 test("validate SearchParameter-Account-type.json", () => {
		 const searchparameterExample9 = require("../stu3-resources/SearchParameter-Account-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample9)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-composed-of.json", () => {
		 const searchparameterExample10 = require("../stu3-resources/SearchParameter-ActivityDefinition-composed-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample10)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-date.json", () => {
		 const searchparameterExample11 = require("../stu3-resources/SearchParameter-ActivityDefinition-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample11)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-depends-on.json", () => {
		 const searchparameterExample12 = require("../stu3-resources/SearchParameter-ActivityDefinition-depends-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample12)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-derived-from.json", () => {
		 const searchparameterExample13 = require("../stu3-resources/SearchParameter-ActivityDefinition-derived-from.json");
		 expect(searchparameterValidateFunction(searchparameterExample13)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-description.json", () => {
		 const searchparameterExample14 = require("../stu3-resources/SearchParameter-ActivityDefinition-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample14)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-effective.json", () => {
		 const searchparameterExample15 = require("../stu3-resources/SearchParameter-ActivityDefinition-effective.json");
		 expect(searchparameterValidateFunction(searchparameterExample15)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-identifier.json", () => {
		 const searchparameterExample16 = require("../stu3-resources/SearchParameter-ActivityDefinition-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample16)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-jurisdiction.json", () => {
		 const searchparameterExample17 = require("../stu3-resources/SearchParameter-ActivityDefinition-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample17)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-name.json", () => {
		 const searchparameterExample18 = require("../stu3-resources/SearchParameter-ActivityDefinition-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample18)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-predecessor.json", () => {
		 const searchparameterExample19 = require("../stu3-resources/SearchParameter-ActivityDefinition-predecessor.json");
		 expect(searchparameterValidateFunction(searchparameterExample19)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-publisher.json", () => {
		 const searchparameterExample20 = require("../stu3-resources/SearchParameter-ActivityDefinition-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample20)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-status.json", () => {
		 const searchparameterExample21 = require("../stu3-resources/SearchParameter-ActivityDefinition-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample21)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-successor.json", () => {
		 const searchparameterExample22 = require("../stu3-resources/SearchParameter-ActivityDefinition-successor.json");
		 expect(searchparameterValidateFunction(searchparameterExample22)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-title.json", () => {
		 const searchparameterExample23 = require("../stu3-resources/SearchParameter-ActivityDefinition-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample23)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-topic.json", () => {
		 const searchparameterExample24 = require("../stu3-resources/SearchParameter-ActivityDefinition-topic.json");
		 expect(searchparameterValidateFunction(searchparameterExample24)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-url.json", () => {
		 const searchparameterExample25 = require("../stu3-resources/SearchParameter-ActivityDefinition-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample25)).toBe(true);
	 });

	 test("validate SearchParameter-ActivityDefinition-version.json", () => {
		 const searchparameterExample26 = require("../stu3-resources/SearchParameter-ActivityDefinition-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample26)).toBe(true);
	 });

	 test("validate SearchParameter-AdverseEvent-category.json", () => {
		 const searchparameterExample27 = require("../stu3-resources/SearchParameter-AdverseEvent-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample27)).toBe(true);
	 });

	 test("validate SearchParameter-AdverseEvent-date.json", () => {
		 const searchparameterExample28 = require("../stu3-resources/SearchParameter-AdverseEvent-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample28)).toBe(true);
	 });

	 test("validate SearchParameter-AdverseEvent-location.json", () => {
		 const searchparameterExample29 = require("../stu3-resources/SearchParameter-AdverseEvent-location.json");
		 expect(searchparameterValidateFunction(searchparameterExample29)).toBe(true);
	 });

	 test("validate SearchParameter-AdverseEvent-reaction.json", () => {
		 const searchparameterExample30 = require("../stu3-resources/SearchParameter-AdverseEvent-reaction.json");
		 expect(searchparameterValidateFunction(searchparameterExample30)).toBe(true);
	 });

	 test("validate SearchParameter-AdverseEvent-recorder.json", () => {
		 const searchparameterExample31 = require("../stu3-resources/SearchParameter-AdverseEvent-recorder.json");
		 expect(searchparameterValidateFunction(searchparameterExample31)).toBe(true);
	 });

	 test("validate SearchParameter-AdverseEvent-seriousness.json", () => {
		 const searchparameterExample32 = require("../stu3-resources/SearchParameter-AdverseEvent-seriousness.json");
		 expect(searchparameterValidateFunction(searchparameterExample32)).toBe(true);
	 });

	 test("validate SearchParameter-AdverseEvent-study.json", () => {
		 const searchparameterExample33 = require("../stu3-resources/SearchParameter-AdverseEvent-study.json");
		 expect(searchparameterValidateFunction(searchparameterExample33)).toBe(true);
	 });

	 test("validate SearchParameter-AdverseEvent-subject.json", () => {
		 const searchparameterExample34 = require("../stu3-resources/SearchParameter-AdverseEvent-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample34)).toBe(true);
	 });

	 test("validate SearchParameter-AdverseEvent-substance.json", () => {
		 const searchparameterExample35 = require("../stu3-resources/SearchParameter-AdverseEvent-substance.json");
		 expect(searchparameterValidateFunction(searchparameterExample35)).toBe(true);
	 });

	 test("validate SearchParameter-AdverseEvent-type.json", () => {
		 const searchparameterExample36 = require("../stu3-resources/SearchParameter-AdverseEvent-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample36)).toBe(true);
	 });

	 test("validate SearchParameter-AllergyIntolerance-asserter.json", () => {
		 const searchparameterExample37 = require("../stu3-resources/SearchParameter-AllergyIntolerance-asserter.json");
		 expect(searchparameterValidateFunction(searchparameterExample37)).toBe(true);
	 });

	 test("validate SearchParameter-AllergyIntolerance-category.json", () => {
		 const searchparameterExample38 = require("../stu3-resources/SearchParameter-AllergyIntolerance-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample38)).toBe(true);
	 });

	 test("validate SearchParameter-AllergyIntolerance-clinical-status.json", () => {
		 const searchparameterExample39 = require("../stu3-resources/SearchParameter-AllergyIntolerance-clinical-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample39)).toBe(true);
	 });

	 test("validate SearchParameter-AllergyIntolerance-criticality.json", () => {
		 const searchparameterExample40 = require("../stu3-resources/SearchParameter-AllergyIntolerance-criticality.json");
		 expect(searchparameterValidateFunction(searchparameterExample40)).toBe(true);
	 });

	 test("validate SearchParameter-AllergyIntolerance-last-date.json", () => {
		 const searchparameterExample41 = require("../stu3-resources/SearchParameter-AllergyIntolerance-last-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample41)).toBe(true);
	 });

	 test("validate SearchParameter-AllergyIntolerance-manifestation.json", () => {
		 const searchparameterExample42 = require("../stu3-resources/SearchParameter-AllergyIntolerance-manifestation.json");
		 expect(searchparameterValidateFunction(searchparameterExample42)).toBe(true);
	 });

	 test("validate SearchParameter-AllergyIntolerance-onset.json", () => {
		 const searchparameterExample43 = require("../stu3-resources/SearchParameter-AllergyIntolerance-onset.json");
		 expect(searchparameterValidateFunction(searchparameterExample43)).toBe(true);
	 });

	 test("validate SearchParameter-AllergyIntolerance-recorder.json", () => {
		 const searchparameterExample44 = require("../stu3-resources/SearchParameter-AllergyIntolerance-recorder.json");
		 expect(searchparameterValidateFunction(searchparameterExample44)).toBe(true);
	 });

	 test("validate SearchParameter-AllergyIntolerance-route.json", () => {
		 const searchparameterExample45 = require("../stu3-resources/SearchParameter-AllergyIntolerance-route.json");
		 expect(searchparameterValidateFunction(searchparameterExample45)).toBe(true);
	 });

	 test("validate SearchParameter-AllergyIntolerance-severity.json", () => {
		 const searchparameterExample46 = require("../stu3-resources/SearchParameter-AllergyIntolerance-severity.json");
		 expect(searchparameterValidateFunction(searchparameterExample46)).toBe(true);
	 });

	 test("validate SearchParameter-AllergyIntolerance-verification-status.json", () => {
		 const searchparameterExample47 = require("../stu3-resources/SearchParameter-AllergyIntolerance-verification-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample47)).toBe(true);
	 });

	 test("validate SearchParameter-Appointment-actor.json", () => {
		 const searchparameterExample48 = require("../stu3-resources/SearchParameter-Appointment-actor.json");
		 expect(searchparameterValidateFunction(searchparameterExample48)).toBe(true);
	 });

	 test("validate SearchParameter-Appointment-appointment-type.json", () => {
		 const searchparameterExample49 = require("../stu3-resources/SearchParameter-Appointment-appointment-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample49)).toBe(true);
	 });

	 test("validate SearchParameter-Appointment-date.json", () => {
		 const searchparameterExample50 = require("../stu3-resources/SearchParameter-Appointment-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample50)).toBe(true);
	 });

	 test("validate SearchParameter-Appointment-identifier.json", () => {
		 const searchparameterExample51 = require("../stu3-resources/SearchParameter-Appointment-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample51)).toBe(true);
	 });

	 test("validate SearchParameter-Appointment-incomingreferral.json", () => {
		 const searchparameterExample52 = require("../stu3-resources/SearchParameter-Appointment-incomingreferral.json");
		 expect(searchparameterValidateFunction(searchparameterExample52)).toBe(true);
	 });

	 test("validate SearchParameter-Appointment-location.json", () => {
		 const searchparameterExample53 = require("../stu3-resources/SearchParameter-Appointment-location.json");
		 expect(searchparameterValidateFunction(searchparameterExample53)).toBe(true);
	 });

	 test("validate SearchParameter-Appointment-part-status.json", () => {
		 const searchparameterExample54 = require("../stu3-resources/SearchParameter-Appointment-part-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample54)).toBe(true);
	 });

	 test("validate SearchParameter-Appointment-patient.json", () => {
		 const searchparameterExample55 = require("../stu3-resources/SearchParameter-Appointment-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample55)).toBe(true);
	 });

	 test("validate SearchParameter-Appointment-practitioner.json", () => {
		 const searchparameterExample56 = require("../stu3-resources/SearchParameter-Appointment-practitioner.json");
		 expect(searchparameterValidateFunction(searchparameterExample56)).toBe(true);
	 });

	 test("validate SearchParameter-Appointment-service-type.json", () => {
		 const searchparameterExample57 = require("../stu3-resources/SearchParameter-Appointment-service-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample57)).toBe(true);
	 });

	 test("validate SearchParameter-Appointment-status.json", () => {
		 const searchparameterExample58 = require("../stu3-resources/SearchParameter-Appointment-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample58)).toBe(true);
	 });

	 test("validate SearchParameter-AppointmentResponse-actor.json", () => {
		 const searchparameterExample59 = require("../stu3-resources/SearchParameter-AppointmentResponse-actor.json");
		 expect(searchparameterValidateFunction(searchparameterExample59)).toBe(true);
	 });

	 test("validate SearchParameter-AppointmentResponse-appointment.json", () => {
		 const searchparameterExample60 = require("../stu3-resources/SearchParameter-AppointmentResponse-appointment.json");
		 expect(searchparameterValidateFunction(searchparameterExample60)).toBe(true);
	 });

	 test("validate SearchParameter-AppointmentResponse-identifier.json", () => {
		 const searchparameterExample61 = require("../stu3-resources/SearchParameter-AppointmentResponse-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample61)).toBe(true);
	 });

	 test("validate SearchParameter-AppointmentResponse-location.json", () => {
		 const searchparameterExample62 = require("../stu3-resources/SearchParameter-AppointmentResponse-location.json");
		 expect(searchparameterValidateFunction(searchparameterExample62)).toBe(true);
	 });

	 test("validate SearchParameter-AppointmentResponse-part-status.json", () => {
		 const searchparameterExample63 = require("../stu3-resources/SearchParameter-AppointmentResponse-part-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample63)).toBe(true);
	 });

	 test("validate SearchParameter-AppointmentResponse-patient.json", () => {
		 const searchparameterExample64 = require("../stu3-resources/SearchParameter-AppointmentResponse-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample64)).toBe(true);
	 });

	 test("validate SearchParameter-AppointmentResponse-practitioner.json", () => {
		 const searchparameterExample65 = require("../stu3-resources/SearchParameter-AppointmentResponse-practitioner.json");
		 expect(searchparameterValidateFunction(searchparameterExample65)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-action.json", () => {
		 const searchparameterExample66 = require("../stu3-resources/SearchParameter-AuditEvent-action.json");
		 expect(searchparameterValidateFunction(searchparameterExample66)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-address.json", () => {
		 const searchparameterExample67 = require("../stu3-resources/SearchParameter-AuditEvent-address.json");
		 expect(searchparameterValidateFunction(searchparameterExample67)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-agent-name.json", () => {
		 const searchparameterExample68 = require("../stu3-resources/SearchParameter-AuditEvent-agent-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample68)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-agent-role.json", () => {
		 const searchparameterExample69 = require("../stu3-resources/SearchParameter-AuditEvent-agent-role.json");
		 expect(searchparameterValidateFunction(searchparameterExample69)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-agent.json", () => {
		 const searchparameterExample70 = require("../stu3-resources/SearchParameter-AuditEvent-agent.json");
		 expect(searchparameterValidateFunction(searchparameterExample70)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-altid.json", () => {
		 const searchparameterExample71 = require("../stu3-resources/SearchParameter-AuditEvent-altid.json");
		 expect(searchparameterValidateFunction(searchparameterExample71)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-date.json", () => {
		 const searchparameterExample72 = require("../stu3-resources/SearchParameter-AuditEvent-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample72)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-entity-id.json", () => {
		 const searchparameterExample73 = require("../stu3-resources/SearchParameter-AuditEvent-entity-id.json");
		 expect(searchparameterValidateFunction(searchparameterExample73)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-entity-name.json", () => {
		 const searchparameterExample74 = require("../stu3-resources/SearchParameter-AuditEvent-entity-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample74)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-entity-role.json", () => {
		 const searchparameterExample75 = require("../stu3-resources/SearchParameter-AuditEvent-entity-role.json");
		 expect(searchparameterValidateFunction(searchparameterExample75)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-entity-type.json", () => {
		 const searchparameterExample76 = require("../stu3-resources/SearchParameter-AuditEvent-entity-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample76)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-entity.json", () => {
		 const searchparameterExample77 = require("../stu3-resources/SearchParameter-AuditEvent-entity.json");
		 expect(searchparameterValidateFunction(searchparameterExample77)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-outcome.json", () => {
		 const searchparameterExample78 = require("../stu3-resources/SearchParameter-AuditEvent-outcome.json");
		 expect(searchparameterValidateFunction(searchparameterExample78)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-patient.json", () => {
		 const searchparameterExample79 = require("../stu3-resources/SearchParameter-AuditEvent-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample79)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-policy.json", () => {
		 const searchparameterExample80 = require("../stu3-resources/SearchParameter-AuditEvent-policy.json");
		 expect(searchparameterValidateFunction(searchparameterExample80)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-site.json", () => {
		 const searchparameterExample81 = require("../stu3-resources/SearchParameter-AuditEvent-site.json");
		 expect(searchparameterValidateFunction(searchparameterExample81)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-source.json", () => {
		 const searchparameterExample82 = require("../stu3-resources/SearchParameter-AuditEvent-source.json");
		 expect(searchparameterValidateFunction(searchparameterExample82)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-subtype.json", () => {
		 const searchparameterExample83 = require("../stu3-resources/SearchParameter-AuditEvent-subtype.json");
		 expect(searchparameterValidateFunction(searchparameterExample83)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-type.json", () => {
		 const searchparameterExample84 = require("../stu3-resources/SearchParameter-AuditEvent-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample84)).toBe(true);
	 });

	 test("validate SearchParameter-AuditEvent-user.json", () => {
		 const searchparameterExample85 = require("../stu3-resources/SearchParameter-AuditEvent-user.json");
		 expect(searchparameterValidateFunction(searchparameterExample85)).toBe(true);
	 });

	 test("validate SearchParameter-Basic-author.json", () => {
		 const searchparameterExample86 = require("../stu3-resources/SearchParameter-Basic-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample86)).toBe(true);
	 });

	 test("validate SearchParameter-Basic-code.json", () => {
		 const searchparameterExample87 = require("../stu3-resources/SearchParameter-Basic-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample87)).toBe(true);
	 });

	 test("validate SearchParameter-Basic-created.json", () => {
		 const searchparameterExample88 = require("../stu3-resources/SearchParameter-Basic-created.json");
		 expect(searchparameterValidateFunction(searchparameterExample88)).toBe(true);
	 });

	 test("validate SearchParameter-Basic-identifier.json", () => {
		 const searchparameterExample89 = require("../stu3-resources/SearchParameter-Basic-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample89)).toBe(true);
	 });

	 test("validate SearchParameter-Basic-patient.json", () => {
		 const searchparameterExample90 = require("../stu3-resources/SearchParameter-Basic-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample90)).toBe(true);
	 });

	 test("validate SearchParameter-Basic-subject.json", () => {
		 const searchparameterExample91 = require("../stu3-resources/SearchParameter-Basic-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample91)).toBe(true);
	 });

	 test("validate SearchParameter-Binary-contenttype.json", () => {
		 const searchparameterExample92 = require("../stu3-resources/SearchParameter-Binary-contenttype.json");
		 expect(searchparameterValidateFunction(searchparameterExample92)).toBe(true);
	 });

	 test("validate SearchParameter-BodySite-code.json", () => {
		 const searchparameterExample93 = require("../stu3-resources/SearchParameter-BodySite-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample93)).toBe(true);
	 });

	 test("validate SearchParameter-BodySite-identifier.json", () => {
		 const searchparameterExample94 = require("../stu3-resources/SearchParameter-BodySite-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample94)).toBe(true);
	 });

	 test("validate SearchParameter-BodySite-patient.json", () => {
		 const searchparameterExample95 = require("../stu3-resources/SearchParameter-BodySite-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample95)).toBe(true);
	 });

	 test("validate SearchParameter-Bundle-composition.json", () => {
		 const searchparameterExample96 = require("../stu3-resources/SearchParameter-Bundle-composition.json");
		 expect(searchparameterValidateFunction(searchparameterExample96)).toBe(true);
	 });

	 test("validate SearchParameter-Bundle-identifier.json", () => {
		 const searchparameterExample97 = require("../stu3-resources/SearchParameter-Bundle-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample97)).toBe(true);
	 });

	 test("validate SearchParameter-Bundle-message.json", () => {
		 const searchparameterExample98 = require("../stu3-resources/SearchParameter-Bundle-message.json");
		 expect(searchparameterValidateFunction(searchparameterExample98)).toBe(true);
	 });

	 test("validate SearchParameter-Bundle-type.json", () => {
		 const searchparameterExample99 = require("../stu3-resources/SearchParameter-Bundle-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample99)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-date.json", () => {
		 const searchparameterExample100 = require("../stu3-resources/SearchParameter-CapabilityStatement-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample100)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-description.json", () => {
		 const searchparameterExample101 = require("../stu3-resources/SearchParameter-CapabilityStatement-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample101)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-event.json", () => {
		 const searchparameterExample102 = require("../stu3-resources/SearchParameter-CapabilityStatement-event.json");
		 expect(searchparameterValidateFunction(searchparameterExample102)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-fhirversion.json", () => {
		 const searchparameterExample103 = require("../stu3-resources/SearchParameter-CapabilityStatement-fhirversion.json");
		 expect(searchparameterValidateFunction(searchparameterExample103)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-format.json", () => {
		 const searchparameterExample104 = require("../stu3-resources/SearchParameter-CapabilityStatement-format.json");
		 expect(searchparameterValidateFunction(searchparameterExample104)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-guide.json", () => {
		 const searchparameterExample105 = require("../stu3-resources/SearchParameter-CapabilityStatement-guide.json");
		 expect(searchparameterValidateFunction(searchparameterExample105)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-jurisdiction.json", () => {
		 const searchparameterExample106 = require("../stu3-resources/SearchParameter-CapabilityStatement-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample106)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-mode.json", () => {
		 const searchparameterExample107 = require("../stu3-resources/SearchParameter-CapabilityStatement-mode.json");
		 expect(searchparameterValidateFunction(searchparameterExample107)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-name.json", () => {
		 const searchparameterExample108 = require("../stu3-resources/SearchParameter-CapabilityStatement-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample108)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-publisher.json", () => {
		 const searchparameterExample109 = require("../stu3-resources/SearchParameter-CapabilityStatement-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample109)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-resource-profile.json", () => {
		 const searchparameterExample110 = require("../stu3-resources/SearchParameter-CapabilityStatement-resource-profile.json");
		 expect(searchparameterValidateFunction(searchparameterExample110)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-resource.json", () => {
		 const searchparameterExample111 = require("../stu3-resources/SearchParameter-CapabilityStatement-resource.json");
		 expect(searchparameterValidateFunction(searchparameterExample111)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-security-service.json", () => {
		 const searchparameterExample112 = require("../stu3-resources/SearchParameter-CapabilityStatement-security-service.json");
		 expect(searchparameterValidateFunction(searchparameterExample112)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-software.json", () => {
		 const searchparameterExample113 = require("../stu3-resources/SearchParameter-CapabilityStatement-software.json");
		 expect(searchparameterValidateFunction(searchparameterExample113)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-status.json", () => {
		 const searchparameterExample114 = require("../stu3-resources/SearchParameter-CapabilityStatement-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample114)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-supported-profile.json", () => {
		 const searchparameterExample115 = require("../stu3-resources/SearchParameter-CapabilityStatement-supported-profile.json");
		 expect(searchparameterValidateFunction(searchparameterExample115)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-title.json", () => {
		 const searchparameterExample116 = require("../stu3-resources/SearchParameter-CapabilityStatement-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample116)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-url.json", () => {
		 const searchparameterExample117 = require("../stu3-resources/SearchParameter-CapabilityStatement-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample117)).toBe(true);
	 });

	 test("validate SearchParameter-CapabilityStatement-version.json", () => {
		 const searchparameterExample118 = require("../stu3-resources/SearchParameter-CapabilityStatement-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample118)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-activity-code.json", () => {
		 const searchparameterExample119 = require("../stu3-resources/SearchParameter-CarePlan-activity-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample119)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-activity-date.json", () => {
		 const searchparameterExample120 = require("../stu3-resources/SearchParameter-CarePlan-activity-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample120)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-activity-reference.json", () => {
		 const searchparameterExample121 = require("../stu3-resources/SearchParameter-CarePlan-activity-reference.json");
		 expect(searchparameterValidateFunction(searchparameterExample121)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-based-on.json", () => {
		 const searchparameterExample122 = require("../stu3-resources/SearchParameter-CarePlan-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample122)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-care-team.json", () => {
		 const searchparameterExample123 = require("../stu3-resources/SearchParameter-CarePlan-care-team.json");
		 expect(searchparameterValidateFunction(searchparameterExample123)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-category.json", () => {
		 const searchparameterExample124 = require("../stu3-resources/SearchParameter-CarePlan-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample124)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-condition.json", () => {
		 const searchparameterExample125 = require("../stu3-resources/SearchParameter-CarePlan-condition.json");
		 expect(searchparameterValidateFunction(searchparameterExample125)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-context.json", () => {
		 const searchparameterExample126 = require("../stu3-resources/SearchParameter-CarePlan-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample126)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-definition.json", () => {
		 const searchparameterExample127 = require("../stu3-resources/SearchParameter-CarePlan-definition.json");
		 expect(searchparameterValidateFunction(searchparameterExample127)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-encounter.json", () => {
		 const searchparameterExample128 = require("../stu3-resources/SearchParameter-CarePlan-encounter.json");
		 expect(searchparameterValidateFunction(searchparameterExample128)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-goal.json", () => {
		 const searchparameterExample129 = require("../stu3-resources/SearchParameter-CarePlan-goal.json");
		 expect(searchparameterValidateFunction(searchparameterExample129)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-intent.json", () => {
		 const searchparameterExample130 = require("../stu3-resources/SearchParameter-CarePlan-intent.json");
		 expect(searchparameterValidateFunction(searchparameterExample130)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-part-of.json", () => {
		 const searchparameterExample131 = require("../stu3-resources/SearchParameter-CarePlan-part-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample131)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-performer.json", () => {
		 const searchparameterExample132 = require("../stu3-resources/SearchParameter-CarePlan-performer.json");
		 expect(searchparameterValidateFunction(searchparameterExample132)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-replaces.json", () => {
		 const searchparameterExample133 = require("../stu3-resources/SearchParameter-CarePlan-replaces.json");
		 expect(searchparameterValidateFunction(searchparameterExample133)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-status.json", () => {
		 const searchparameterExample134 = require("../stu3-resources/SearchParameter-CarePlan-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample134)).toBe(true);
	 });

	 test("validate SearchParameter-CarePlan-subject.json", () => {
		 const searchparameterExample135 = require("../stu3-resources/SearchParameter-CarePlan-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample135)).toBe(true);
	 });

	 test("validate SearchParameter-CareTeam-category.json", () => {
		 const searchparameterExample136 = require("../stu3-resources/SearchParameter-CareTeam-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample136)).toBe(true);
	 });

	 test("validate SearchParameter-CareTeam-context.json", () => {
		 const searchparameterExample137 = require("../stu3-resources/SearchParameter-CareTeam-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample137)).toBe(true);
	 });

	 test("validate SearchParameter-CareTeam-encounter.json", () => {
		 const searchparameterExample138 = require("../stu3-resources/SearchParameter-CareTeam-encounter.json");
		 expect(searchparameterValidateFunction(searchparameterExample138)).toBe(true);
	 });

	 test("validate SearchParameter-CareTeam-participant.json", () => {
		 const searchparameterExample139 = require("../stu3-resources/SearchParameter-CareTeam-participant.json");
		 expect(searchparameterValidateFunction(searchparameterExample139)).toBe(true);
	 });

	 test("validate SearchParameter-CareTeam-status.json", () => {
		 const searchparameterExample140 = require("../stu3-resources/SearchParameter-CareTeam-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample140)).toBe(true);
	 });

	 test("validate SearchParameter-CareTeam-subject.json", () => {
		 const searchparameterExample141 = require("../stu3-resources/SearchParameter-CareTeam-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample141)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-account.json", () => {
		 const searchparameterExample142 = require("../stu3-resources/SearchParameter-ChargeItem-account.json");
		 expect(searchparameterValidateFunction(searchparameterExample142)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-code.json", () => {
		 const searchparameterExample143 = require("../stu3-resources/SearchParameter-ChargeItem-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample143)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-context.json", () => {
		 const searchparameterExample144 = require("../stu3-resources/SearchParameter-ChargeItem-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample144)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-entered-date.json", () => {
		 const searchparameterExample145 = require("../stu3-resources/SearchParameter-ChargeItem-entered-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample145)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-enterer.json", () => {
		 const searchparameterExample146 = require("../stu3-resources/SearchParameter-ChargeItem-enterer.json");
		 expect(searchparameterValidateFunction(searchparameterExample146)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-factor-override.json", () => {
		 const searchparameterExample147 = require("../stu3-resources/SearchParameter-ChargeItem-factor-override.json");
		 expect(searchparameterValidateFunction(searchparameterExample147)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-identifier.json", () => {
		 const searchparameterExample148 = require("../stu3-resources/SearchParameter-ChargeItem-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample148)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-occurrence.json", () => {
		 const searchparameterExample149 = require("../stu3-resources/SearchParameter-ChargeItem-occurrence.json");
		 expect(searchparameterValidateFunction(searchparameterExample149)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-participant-actor.json", () => {
		 const searchparameterExample150 = require("../stu3-resources/SearchParameter-ChargeItem-participant-actor.json");
		 expect(searchparameterValidateFunction(searchparameterExample150)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-participant-role.json", () => {
		 const searchparameterExample151 = require("../stu3-resources/SearchParameter-ChargeItem-participant-role.json");
		 expect(searchparameterValidateFunction(searchparameterExample151)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-patient.json", () => {
		 const searchparameterExample152 = require("../stu3-resources/SearchParameter-ChargeItem-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample152)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-performing-organization.json", () => {
		 const searchparameterExample153 = require("../stu3-resources/SearchParameter-ChargeItem-performing-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample153)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-price-override.json", () => {
		 const searchparameterExample154 = require("../stu3-resources/SearchParameter-ChargeItem-price-override.json");
		 expect(searchparameterValidateFunction(searchparameterExample154)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-quantity.json", () => {
		 const searchparameterExample155 = require("../stu3-resources/SearchParameter-ChargeItem-quantity.json");
		 expect(searchparameterValidateFunction(searchparameterExample155)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-requesting-organization.json", () => {
		 const searchparameterExample156 = require("../stu3-resources/SearchParameter-ChargeItem-requesting-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample156)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-service.json", () => {
		 const searchparameterExample157 = require("../stu3-resources/SearchParameter-ChargeItem-service.json");
		 expect(searchparameterValidateFunction(searchparameterExample157)).toBe(true);
	 });

	 test("validate SearchParameter-ChargeItem-subject.json", () => {
		 const searchparameterExample158 = require("../stu3-resources/SearchParameter-ChargeItem-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample158)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-care-team.json", () => {
		 const searchparameterExample159 = require("../stu3-resources/SearchParameter-Claim-care-team.json");
		 expect(searchparameterValidateFunction(searchparameterExample159)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-created.json", () => {
		 const searchparameterExample160 = require("../stu3-resources/SearchParameter-Claim-created.json");
		 expect(searchparameterValidateFunction(searchparameterExample160)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-encounter.json", () => {
		 const searchparameterExample161 = require("../stu3-resources/SearchParameter-Claim-encounter.json");
		 expect(searchparameterValidateFunction(searchparameterExample161)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-enterer.json", () => {
		 const searchparameterExample162 = require("../stu3-resources/SearchParameter-Claim-enterer.json");
		 expect(searchparameterValidateFunction(searchparameterExample162)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-facility.json", () => {
		 const searchparameterExample163 = require("../stu3-resources/SearchParameter-Claim-facility.json");
		 expect(searchparameterValidateFunction(searchparameterExample163)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-identifier.json", () => {
		 const searchparameterExample164 = require("../stu3-resources/SearchParameter-Claim-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample164)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-insurer.json", () => {
		 const searchparameterExample165 = require("../stu3-resources/SearchParameter-Claim-insurer.json");
		 expect(searchparameterValidateFunction(searchparameterExample165)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-organization.json", () => {
		 const searchparameterExample166 = require("../stu3-resources/SearchParameter-Claim-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample166)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-patient.json", () => {
		 const searchparameterExample167 = require("../stu3-resources/SearchParameter-Claim-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample167)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-payee.json", () => {
		 const searchparameterExample168 = require("../stu3-resources/SearchParameter-Claim-payee.json");
		 expect(searchparameterValidateFunction(searchparameterExample168)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-priority.json", () => {
		 const searchparameterExample169 = require("../stu3-resources/SearchParameter-Claim-priority.json");
		 expect(searchparameterValidateFunction(searchparameterExample169)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-provider.json", () => {
		 const searchparameterExample170 = require("../stu3-resources/SearchParameter-Claim-provider.json");
		 expect(searchparameterValidateFunction(searchparameterExample170)).toBe(true);
	 });

	 test("validate SearchParameter-Claim-use.json", () => {
		 const searchparameterExample171 = require("../stu3-resources/SearchParameter-Claim-use.json");
		 expect(searchparameterValidateFunction(searchparameterExample171)).toBe(true);
	 });

	 test("validate SearchParameter-ClaimResponse-created.json", () => {
		 const searchparameterExample172 = require("../stu3-resources/SearchParameter-ClaimResponse-created.json");
		 expect(searchparameterValidateFunction(searchparameterExample172)).toBe(true);
	 });

	 test("validate SearchParameter-ClaimResponse-disposition.json", () => {
		 const searchparameterExample173 = require("../stu3-resources/SearchParameter-ClaimResponse-disposition.json");
		 expect(searchparameterValidateFunction(searchparameterExample173)).toBe(true);
	 });

	 test("validate SearchParameter-ClaimResponse-identifier.json", () => {
		 const searchparameterExample174 = require("../stu3-resources/SearchParameter-ClaimResponse-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample174)).toBe(true);
	 });

	 test("validate SearchParameter-ClaimResponse-insurer.json", () => {
		 const searchparameterExample175 = require("../stu3-resources/SearchParameter-ClaimResponse-insurer.json");
		 expect(searchparameterValidateFunction(searchparameterExample175)).toBe(true);
	 });

	 test("validate SearchParameter-ClaimResponse-outcome.json", () => {
		 const searchparameterExample176 = require("../stu3-resources/SearchParameter-ClaimResponse-outcome.json");
		 expect(searchparameterValidateFunction(searchparameterExample176)).toBe(true);
	 });

	 test("validate SearchParameter-ClaimResponse-patient.json", () => {
		 const searchparameterExample177 = require("../stu3-resources/SearchParameter-ClaimResponse-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample177)).toBe(true);
	 });

	 test("validate SearchParameter-ClaimResponse-payment-date.json", () => {
		 const searchparameterExample178 = require("../stu3-resources/SearchParameter-ClaimResponse-payment-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample178)).toBe(true);
	 });

	 test("validate SearchParameter-ClaimResponse-request-provider.json", () => {
		 const searchparameterExample179 = require("../stu3-resources/SearchParameter-ClaimResponse-request-provider.json");
		 expect(searchparameterValidateFunction(searchparameterExample179)).toBe(true);
	 });

	 test("validate SearchParameter-ClaimResponse-request.json", () => {
		 const searchparameterExample180 = require("../stu3-resources/SearchParameter-ClaimResponse-request.json");
		 expect(searchparameterValidateFunction(searchparameterExample180)).toBe(true);
	 });

	 test("validate SearchParameter-ClinicalImpression-action.json", () => {
		 const searchparameterExample181 = require("../stu3-resources/SearchParameter-ClinicalImpression-action.json");
		 expect(searchparameterValidateFunction(searchparameterExample181)).toBe(true);
	 });

	 test("validate SearchParameter-ClinicalImpression-assessor.json", () => {
		 const searchparameterExample182 = require("../stu3-resources/SearchParameter-ClinicalImpression-assessor.json");
		 expect(searchparameterValidateFunction(searchparameterExample182)).toBe(true);
	 });

	 test("validate SearchParameter-ClinicalImpression-context.json", () => {
		 const searchparameterExample183 = require("../stu3-resources/SearchParameter-ClinicalImpression-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample183)).toBe(true);
	 });

	 test("validate SearchParameter-ClinicalImpression-finding-code.json", () => {
		 const searchparameterExample184 = require("../stu3-resources/SearchParameter-ClinicalImpression-finding-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample184)).toBe(true);
	 });

	 test("validate SearchParameter-ClinicalImpression-finding-ref.json", () => {
		 const searchparameterExample185 = require("../stu3-resources/SearchParameter-ClinicalImpression-finding-ref.json");
		 expect(searchparameterValidateFunction(searchparameterExample185)).toBe(true);
	 });

	 test("validate SearchParameter-ClinicalImpression-identifier.json", () => {
		 const searchparameterExample186 = require("../stu3-resources/SearchParameter-ClinicalImpression-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample186)).toBe(true);
	 });

	 test("validate SearchParameter-ClinicalImpression-investigation.json", () => {
		 const searchparameterExample187 = require("../stu3-resources/SearchParameter-ClinicalImpression-investigation.json");
		 expect(searchparameterValidateFunction(searchparameterExample187)).toBe(true);
	 });

	 test("validate SearchParameter-ClinicalImpression-previous.json", () => {
		 const searchparameterExample188 = require("../stu3-resources/SearchParameter-ClinicalImpression-previous.json");
		 expect(searchparameterValidateFunction(searchparameterExample188)).toBe(true);
	 });

	 test("validate SearchParameter-ClinicalImpression-problem.json", () => {
		 const searchparameterExample189 = require("../stu3-resources/SearchParameter-ClinicalImpression-problem.json");
		 expect(searchparameterValidateFunction(searchparameterExample189)).toBe(true);
	 });

	 test("validate SearchParameter-ClinicalImpression-status.json", () => {
		 const searchparameterExample190 = require("../stu3-resources/SearchParameter-ClinicalImpression-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample190)).toBe(true);
	 });

	 test("validate SearchParameter-ClinicalImpression-subject.json", () => {
		 const searchparameterExample191 = require("../stu3-resources/SearchParameter-ClinicalImpression-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample191)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-code.json", () => {
		 const searchparameterExample192 = require("../stu3-resources/SearchParameter-CodeSystem-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample192)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-content-mode.json", () => {
		 const searchparameterExample193 = require("../stu3-resources/SearchParameter-CodeSystem-content-mode.json");
		 expect(searchparameterValidateFunction(searchparameterExample193)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-date.json", () => {
		 const searchparameterExample194 = require("../stu3-resources/SearchParameter-CodeSystem-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample194)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-description.json", () => {
		 const searchparameterExample195 = require("../stu3-resources/SearchParameter-CodeSystem-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample195)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-identifier.json", () => {
		 const searchparameterExample196 = require("../stu3-resources/SearchParameter-CodeSystem-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample196)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-jurisdiction.json", () => {
		 const searchparameterExample197 = require("../stu3-resources/SearchParameter-CodeSystem-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample197)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-language.json", () => {
		 const searchparameterExample198 = require("../stu3-resources/SearchParameter-CodeSystem-language.json");
		 expect(searchparameterValidateFunction(searchparameterExample198)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-name.json", () => {
		 const searchparameterExample199 = require("../stu3-resources/SearchParameter-CodeSystem-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample199)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-publisher.json", () => {
		 const searchparameterExample200 = require("../stu3-resources/SearchParameter-CodeSystem-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample200)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-status.json", () => {
		 const searchparameterExample201 = require("../stu3-resources/SearchParameter-CodeSystem-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample201)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-system.json", () => {
		 const searchparameterExample202 = require("../stu3-resources/SearchParameter-CodeSystem-system.json");
		 expect(searchparameterValidateFunction(searchparameterExample202)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-title.json", () => {
		 const searchparameterExample203 = require("../stu3-resources/SearchParameter-CodeSystem-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample203)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-url.json", () => {
		 const searchparameterExample204 = require("../stu3-resources/SearchParameter-CodeSystem-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample204)).toBe(true);
	 });

	 test("validate SearchParameter-CodeSystem-version.json", () => {
		 const searchparameterExample205 = require("../stu3-resources/SearchParameter-CodeSystem-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample205)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-based-on.json", () => {
		 const searchparameterExample206 = require("../stu3-resources/SearchParameter-Communication-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample206)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-category.json", () => {
		 const searchparameterExample207 = require("../stu3-resources/SearchParameter-Communication-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample207)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-context.json", () => {
		 const searchparameterExample208 = require("../stu3-resources/SearchParameter-Communication-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample208)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-definition.json", () => {
		 const searchparameterExample209 = require("../stu3-resources/SearchParameter-Communication-definition.json");
		 expect(searchparameterValidateFunction(searchparameterExample209)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-encounter.json", () => {
		 const searchparameterExample210 = require("../stu3-resources/SearchParameter-Communication-encounter.json");
		 expect(searchparameterValidateFunction(searchparameterExample210)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-identifier.json", () => {
		 const searchparameterExample211 = require("../stu3-resources/SearchParameter-Communication-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample211)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-medium.json", () => {
		 const searchparameterExample212 = require("../stu3-resources/SearchParameter-Communication-medium.json");
		 expect(searchparameterValidateFunction(searchparameterExample212)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-part-of.json", () => {
		 const searchparameterExample213 = require("../stu3-resources/SearchParameter-Communication-part-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample213)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-patient.json", () => {
		 const searchparameterExample214 = require("../stu3-resources/SearchParameter-Communication-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample214)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-received.json", () => {
		 const searchparameterExample215 = require("../stu3-resources/SearchParameter-Communication-received.json");
		 expect(searchparameterValidateFunction(searchparameterExample215)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-recipient.json", () => {
		 const searchparameterExample216 = require("../stu3-resources/SearchParameter-Communication-recipient.json");
		 expect(searchparameterValidateFunction(searchparameterExample216)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-sender.json", () => {
		 const searchparameterExample217 = require("../stu3-resources/SearchParameter-Communication-sender.json");
		 expect(searchparameterValidateFunction(searchparameterExample217)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-sent.json", () => {
		 const searchparameterExample218 = require("../stu3-resources/SearchParameter-Communication-sent.json");
		 expect(searchparameterValidateFunction(searchparameterExample218)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-status.json", () => {
		 const searchparameterExample219 = require("../stu3-resources/SearchParameter-Communication-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample219)).toBe(true);
	 });

	 test("validate SearchParameter-Communication-subject.json", () => {
		 const searchparameterExample220 = require("../stu3-resources/SearchParameter-Communication-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample220)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-authored.json", () => {
		 const searchparameterExample221 = require("../stu3-resources/SearchParameter-CommunicationRequest-authored.json");
		 expect(searchparameterValidateFunction(searchparameterExample221)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-based-on.json", () => {
		 const searchparameterExample222 = require("../stu3-resources/SearchParameter-CommunicationRequest-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample222)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-category.json", () => {
		 const searchparameterExample223 = require("../stu3-resources/SearchParameter-CommunicationRequest-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample223)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-context.json", () => {
		 const searchparameterExample224 = require("../stu3-resources/SearchParameter-CommunicationRequest-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample224)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-encounter.json", () => {
		 const searchparameterExample225 = require("../stu3-resources/SearchParameter-CommunicationRequest-encounter.json");
		 expect(searchparameterValidateFunction(searchparameterExample225)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-group-identifier.json", () => {
		 const searchparameterExample226 = require("../stu3-resources/SearchParameter-CommunicationRequest-group-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample226)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-identifier.json", () => {
		 const searchparameterExample227 = require("../stu3-resources/SearchParameter-CommunicationRequest-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample227)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-medium.json", () => {
		 const searchparameterExample228 = require("../stu3-resources/SearchParameter-CommunicationRequest-medium.json");
		 expect(searchparameterValidateFunction(searchparameterExample228)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-occurrence.json", () => {
		 const searchparameterExample229 = require("../stu3-resources/SearchParameter-CommunicationRequest-occurrence.json");
		 expect(searchparameterValidateFunction(searchparameterExample229)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-patient.json", () => {
		 const searchparameterExample230 = require("../stu3-resources/SearchParameter-CommunicationRequest-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample230)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-priority.json", () => {
		 const searchparameterExample231 = require("../stu3-resources/SearchParameter-CommunicationRequest-priority.json");
		 expect(searchparameterValidateFunction(searchparameterExample231)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-recipient.json", () => {
		 const searchparameterExample232 = require("../stu3-resources/SearchParameter-CommunicationRequest-recipient.json");
		 expect(searchparameterValidateFunction(searchparameterExample232)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-replaces.json", () => {
		 const searchparameterExample233 = require("../stu3-resources/SearchParameter-CommunicationRequest-replaces.json");
		 expect(searchparameterValidateFunction(searchparameterExample233)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-requester.json", () => {
		 const searchparameterExample234 = require("../stu3-resources/SearchParameter-CommunicationRequest-requester.json");
		 expect(searchparameterValidateFunction(searchparameterExample234)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-sender.json", () => {
		 const searchparameterExample235 = require("../stu3-resources/SearchParameter-CommunicationRequest-sender.json");
		 expect(searchparameterValidateFunction(searchparameterExample235)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-status.json", () => {
		 const searchparameterExample236 = require("../stu3-resources/SearchParameter-CommunicationRequest-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample236)).toBe(true);
	 });

	 test("validate SearchParameter-CommunicationRequest-subject.json", () => {
		 const searchparameterExample237 = require("../stu3-resources/SearchParameter-CommunicationRequest-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample237)).toBe(true);
	 });

	 test("validate SearchParameter-CompartmentDefinition-code.json", () => {
		 const searchparameterExample238 = require("../stu3-resources/SearchParameter-CompartmentDefinition-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample238)).toBe(true);
	 });

	 test("validate SearchParameter-CompartmentDefinition-date.json", () => {
		 const searchparameterExample239 = require("../stu3-resources/SearchParameter-CompartmentDefinition-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample239)).toBe(true);
	 });

	 test("validate SearchParameter-CompartmentDefinition-description.json", () => {
		 const searchparameterExample240 = require("../stu3-resources/SearchParameter-CompartmentDefinition-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample240)).toBe(true);
	 });

	 test("validate SearchParameter-CompartmentDefinition-jurisdiction.json", () => {
		 const searchparameterExample241 = require("../stu3-resources/SearchParameter-CompartmentDefinition-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample241)).toBe(true);
	 });

	 test("validate SearchParameter-CompartmentDefinition-name.json", () => {
		 const searchparameterExample242 = require("../stu3-resources/SearchParameter-CompartmentDefinition-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample242)).toBe(true);
	 });

	 test("validate SearchParameter-CompartmentDefinition-publisher.json", () => {
		 const searchparameterExample243 = require("../stu3-resources/SearchParameter-CompartmentDefinition-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample243)).toBe(true);
	 });

	 test("validate SearchParameter-CompartmentDefinition-resource.json", () => {
		 const searchparameterExample244 = require("../stu3-resources/SearchParameter-CompartmentDefinition-resource.json");
		 expect(searchparameterValidateFunction(searchparameterExample244)).toBe(true);
	 });

	 test("validate SearchParameter-CompartmentDefinition-status.json", () => {
		 const searchparameterExample245 = require("../stu3-resources/SearchParameter-CompartmentDefinition-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample245)).toBe(true);
	 });

	 test("validate SearchParameter-CompartmentDefinition-title.json", () => {
		 const searchparameterExample246 = require("../stu3-resources/SearchParameter-CompartmentDefinition-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample246)).toBe(true);
	 });

	 test("validate SearchParameter-CompartmentDefinition-url.json", () => {
		 const searchparameterExample247 = require("../stu3-resources/SearchParameter-CompartmentDefinition-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample247)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-attester.json", () => {
		 const searchparameterExample248 = require("../stu3-resources/SearchParameter-Composition-attester.json");
		 expect(searchparameterValidateFunction(searchparameterExample248)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-author.json", () => {
		 const searchparameterExample249 = require("../stu3-resources/SearchParameter-Composition-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample249)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-class.json", () => {
		 const searchparameterExample250 = require("../stu3-resources/SearchParameter-Composition-class.json");
		 expect(searchparameterValidateFunction(searchparameterExample250)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-confidentiality.json", () => {
		 const searchparameterExample251 = require("../stu3-resources/SearchParameter-Composition-confidentiality.json");
		 expect(searchparameterValidateFunction(searchparameterExample251)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-context.json", () => {
		 const searchparameterExample252 = require("../stu3-resources/SearchParameter-Composition-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample252)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-entry.json", () => {
		 const searchparameterExample253 = require("../stu3-resources/SearchParameter-Composition-entry.json");
		 expect(searchparameterValidateFunction(searchparameterExample253)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-period.json", () => {
		 const searchparameterExample254 = require("../stu3-resources/SearchParameter-Composition-period.json");
		 expect(searchparameterValidateFunction(searchparameterExample254)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-related-id.json", () => {
		 const searchparameterExample255 = require("../stu3-resources/SearchParameter-Composition-related-id.json");
		 expect(searchparameterValidateFunction(searchparameterExample255)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-related-ref.json", () => {
		 const searchparameterExample256 = require("../stu3-resources/SearchParameter-Composition-related-ref.json");
		 expect(searchparameterValidateFunction(searchparameterExample256)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-section.json", () => {
		 const searchparameterExample257 = require("../stu3-resources/SearchParameter-Composition-section.json");
		 expect(searchparameterValidateFunction(searchparameterExample257)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-status.json", () => {
		 const searchparameterExample258 = require("../stu3-resources/SearchParameter-Composition-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample258)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-subject.json", () => {
		 const searchparameterExample259 = require("../stu3-resources/SearchParameter-Composition-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample259)).toBe(true);
	 });

	 test("validate SearchParameter-Composition-title.json", () => {
		 const searchparameterExample260 = require("../stu3-resources/SearchParameter-Composition-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample260)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-date.json", () => {
		 const searchparameterExample261 = require("../stu3-resources/SearchParameter-ConceptMap-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample261)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-dependson.json", () => {
		 const searchparameterExample262 = require("../stu3-resources/SearchParameter-ConceptMap-dependson.json");
		 expect(searchparameterValidateFunction(searchparameterExample262)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-description.json", () => {
		 const searchparameterExample263 = require("../stu3-resources/SearchParameter-ConceptMap-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample263)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-identifier.json", () => {
		 const searchparameterExample264 = require("../stu3-resources/SearchParameter-ConceptMap-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample264)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-jurisdiction.json", () => {
		 const searchparameterExample265 = require("../stu3-resources/SearchParameter-ConceptMap-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample265)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-name.json", () => {
		 const searchparameterExample266 = require("../stu3-resources/SearchParameter-ConceptMap-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample266)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-other.json", () => {
		 const searchparameterExample267 = require("../stu3-resources/SearchParameter-ConceptMap-other.json");
		 expect(searchparameterValidateFunction(searchparameterExample267)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-product.json", () => {
		 const searchparameterExample268 = require("../stu3-resources/SearchParameter-ConceptMap-product.json");
		 expect(searchparameterValidateFunction(searchparameterExample268)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-publisher.json", () => {
		 const searchparameterExample269 = require("../stu3-resources/SearchParameter-ConceptMap-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample269)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-source-code.json", () => {
		 const searchparameterExample270 = require("../stu3-resources/SearchParameter-ConceptMap-source-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample270)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-source-system.json", () => {
		 const searchparameterExample271 = require("../stu3-resources/SearchParameter-ConceptMap-source-system.json");
		 expect(searchparameterValidateFunction(searchparameterExample271)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-source-uri.json", () => {
		 const searchparameterExample272 = require("../stu3-resources/SearchParameter-ConceptMap-source-uri.json");
		 expect(searchparameterValidateFunction(searchparameterExample272)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-source.json", () => {
		 const searchparameterExample273 = require("../stu3-resources/SearchParameter-ConceptMap-source.json");
		 expect(searchparameterValidateFunction(searchparameterExample273)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-status.json", () => {
		 const searchparameterExample274 = require("../stu3-resources/SearchParameter-ConceptMap-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample274)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-target-code.json", () => {
		 const searchparameterExample275 = require("../stu3-resources/SearchParameter-ConceptMap-target-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample275)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-target-system.json", () => {
		 const searchparameterExample276 = require("../stu3-resources/SearchParameter-ConceptMap-target-system.json");
		 expect(searchparameterValidateFunction(searchparameterExample276)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-target-uri.json", () => {
		 const searchparameterExample277 = require("../stu3-resources/SearchParameter-ConceptMap-target-uri.json");
		 expect(searchparameterValidateFunction(searchparameterExample277)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-target.json", () => {
		 const searchparameterExample278 = require("../stu3-resources/SearchParameter-ConceptMap-target.json");
		 expect(searchparameterValidateFunction(searchparameterExample278)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-title.json", () => {
		 const searchparameterExample279 = require("../stu3-resources/SearchParameter-ConceptMap-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample279)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-url.json", () => {
		 const searchparameterExample280 = require("../stu3-resources/SearchParameter-ConceptMap-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample280)).toBe(true);
	 });

	 test("validate SearchParameter-ConceptMap-version.json", () => {
		 const searchparameterExample281 = require("../stu3-resources/SearchParameter-ConceptMap-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample281)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-abatement-age.json", () => {
		 const searchparameterExample282 = require("../stu3-resources/SearchParameter-Condition-abatement-age.json");
		 expect(searchparameterValidateFunction(searchparameterExample282)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-abatement-boolean.json", () => {
		 const searchparameterExample283 = require("../stu3-resources/SearchParameter-Condition-abatement-boolean.json");
		 expect(searchparameterValidateFunction(searchparameterExample283)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-abatement-date.json", () => {
		 const searchparameterExample284 = require("../stu3-resources/SearchParameter-Condition-abatement-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample284)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-abatement-string.json", () => {
		 const searchparameterExample285 = require("../stu3-resources/SearchParameter-Condition-abatement-string.json");
		 expect(searchparameterValidateFunction(searchparameterExample285)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-asserted-date.json", () => {
		 const searchparameterExample286 = require("../stu3-resources/SearchParameter-Condition-asserted-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample286)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-asserter.json", () => {
		 const searchparameterExample287 = require("../stu3-resources/SearchParameter-Condition-asserter.json");
		 expect(searchparameterValidateFunction(searchparameterExample287)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-body-site.json", () => {
		 const searchparameterExample288 = require("../stu3-resources/SearchParameter-Condition-body-site.json");
		 expect(searchparameterValidateFunction(searchparameterExample288)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-category.json", () => {
		 const searchparameterExample289 = require("../stu3-resources/SearchParameter-Condition-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample289)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-clinical-status.json", () => {
		 const searchparameterExample290 = require("../stu3-resources/SearchParameter-Condition-clinical-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample290)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-context.json", () => {
		 const searchparameterExample291 = require("../stu3-resources/SearchParameter-Condition-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample291)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-encounter.json", () => {
		 const searchparameterExample292 = require("../stu3-resources/SearchParameter-Condition-encounter.json");
		 expect(searchparameterValidateFunction(searchparameterExample292)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-evidence-detail.json", () => {
		 const searchparameterExample293 = require("../stu3-resources/SearchParameter-Condition-evidence-detail.json");
		 expect(searchparameterValidateFunction(searchparameterExample293)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-evidence.json", () => {
		 const searchparameterExample294 = require("../stu3-resources/SearchParameter-Condition-evidence.json");
		 expect(searchparameterValidateFunction(searchparameterExample294)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-onset-age.json", () => {
		 const searchparameterExample295 = require("../stu3-resources/SearchParameter-Condition-onset-age.json");
		 expect(searchparameterValidateFunction(searchparameterExample295)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-onset-date.json", () => {
		 const searchparameterExample296 = require("../stu3-resources/SearchParameter-Condition-onset-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample296)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-onset-info.json", () => {
		 const searchparameterExample297 = require("../stu3-resources/SearchParameter-Condition-onset-info.json");
		 expect(searchparameterValidateFunction(searchparameterExample297)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-severity.json", () => {
		 const searchparameterExample298 = require("../stu3-resources/SearchParameter-Condition-severity.json");
		 expect(searchparameterValidateFunction(searchparameterExample298)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-stage.json", () => {
		 const searchparameterExample299 = require("../stu3-resources/SearchParameter-Condition-stage.json");
		 expect(searchparameterValidateFunction(searchparameterExample299)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-subject.json", () => {
		 const searchparameterExample300 = require("../stu3-resources/SearchParameter-Condition-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample300)).toBe(true);
	 });

	 test("validate SearchParameter-Condition-verification-status.json", () => {
		 const searchparameterExample301 = require("../stu3-resources/SearchParameter-Condition-verification-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample301)).toBe(true);
	 });

	 test("validate SearchParameter-Consent-action.json", () => {
		 const searchparameterExample302 = require("../stu3-resources/SearchParameter-Consent-action.json");
		 expect(searchparameterValidateFunction(searchparameterExample302)).toBe(true);
	 });

	 test("validate SearchParameter-Consent-actor.json", () => {
		 const searchparameterExample303 = require("../stu3-resources/SearchParameter-Consent-actor.json");
		 expect(searchparameterValidateFunction(searchparameterExample303)).toBe(true);
	 });

	 test("validate SearchParameter-Consent-category.json", () => {
		 const searchparameterExample304 = require("../stu3-resources/SearchParameter-Consent-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample304)).toBe(true);
	 });

	 test("validate SearchParameter-Consent-consentor.json", () => {
		 const searchparameterExample305 = require("../stu3-resources/SearchParameter-Consent-consentor.json");
		 expect(searchparameterValidateFunction(searchparameterExample305)).toBe(true);
	 });

	 test("validate SearchParameter-Consent-data.json", () => {
		 const searchparameterExample306 = require("../stu3-resources/SearchParameter-Consent-data.json");
		 expect(searchparameterValidateFunction(searchparameterExample306)).toBe(true);
	 });

	 test("validate SearchParameter-Consent-organization.json", () => {
		 const searchparameterExample307 = require("../stu3-resources/SearchParameter-Consent-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample307)).toBe(true);
	 });

	 test("validate SearchParameter-Consent-period.json", () => {
		 const searchparameterExample308 = require("../stu3-resources/SearchParameter-Consent-period.json");
		 expect(searchparameterValidateFunction(searchparameterExample308)).toBe(true);
	 });

	 test("validate SearchParameter-Consent-purpose.json", () => {
		 const searchparameterExample309 = require("../stu3-resources/SearchParameter-Consent-purpose.json");
		 expect(searchparameterValidateFunction(searchparameterExample309)).toBe(true);
	 });

	 test("validate SearchParameter-Consent-securitylabel.json", () => {
		 const searchparameterExample310 = require("../stu3-resources/SearchParameter-Consent-securitylabel.json");
		 expect(searchparameterValidateFunction(searchparameterExample310)).toBe(true);
	 });

	 test("validate SearchParameter-Consent-source.json", () => {
		 const searchparameterExample311 = require("../stu3-resources/SearchParameter-Consent-source.json");
		 expect(searchparameterValidateFunction(searchparameterExample311)).toBe(true);
	 });

	 test("validate SearchParameter-Consent-status.json", () => {
		 const searchparameterExample312 = require("../stu3-resources/SearchParameter-Consent-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample312)).toBe(true);
	 });

	 test("validate SearchParameter-Contract-agent.json", () => {
		 const searchparameterExample313 = require("../stu3-resources/SearchParameter-Contract-agent.json");
		 expect(searchparameterValidateFunction(searchparameterExample313)).toBe(true);
	 });

	 test("validate SearchParameter-Contract-authority.json", () => {
		 const searchparameterExample314 = require("../stu3-resources/SearchParameter-Contract-authority.json");
		 expect(searchparameterValidateFunction(searchparameterExample314)).toBe(true);
	 });

	 test("validate SearchParameter-Contract-domain.json", () => {
		 const searchparameterExample315 = require("../stu3-resources/SearchParameter-Contract-domain.json");
		 expect(searchparameterValidateFunction(searchparameterExample315)).toBe(true);
	 });

	 test("validate SearchParameter-Contract-identifier.json", () => {
		 const searchparameterExample316 = require("../stu3-resources/SearchParameter-Contract-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample316)).toBe(true);
	 });

	 test("validate SearchParameter-Contract-issued.json", () => {
		 const searchparameterExample317 = require("../stu3-resources/SearchParameter-Contract-issued.json");
		 expect(searchparameterValidateFunction(searchparameterExample317)).toBe(true);
	 });

	 test("validate SearchParameter-Contract-patient.json", () => {
		 const searchparameterExample318 = require("../stu3-resources/SearchParameter-Contract-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample318)).toBe(true);
	 });

	 test("validate SearchParameter-Contract-signer.json", () => {
		 const searchparameterExample319 = require("../stu3-resources/SearchParameter-Contract-signer.json");
		 expect(searchparameterValidateFunction(searchparameterExample319)).toBe(true);
	 });

	 test("validate SearchParameter-Contract-subject.json", () => {
		 const searchparameterExample320 = require("../stu3-resources/SearchParameter-Contract-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample320)).toBe(true);
	 });

	 test("validate SearchParameter-Contract-term-topic.json", () => {
		 const searchparameterExample321 = require("../stu3-resources/SearchParameter-Contract-term-topic.json");
		 expect(searchparameterValidateFunction(searchparameterExample321)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-beneficiary.json", () => {
		 const searchparameterExample322 = require("../stu3-resources/SearchParameter-Coverage-beneficiary.json");
		 expect(searchparameterValidateFunction(searchparameterExample322)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-class.json", () => {
		 const searchparameterExample323 = require("../stu3-resources/SearchParameter-Coverage-class.json");
		 expect(searchparameterValidateFunction(searchparameterExample323)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-dependent.json", () => {
		 const searchparameterExample324 = require("../stu3-resources/SearchParameter-Coverage-dependent.json");
		 expect(searchparameterValidateFunction(searchparameterExample324)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-group.json", () => {
		 const searchparameterExample325 = require("../stu3-resources/SearchParameter-Coverage-group.json");
		 expect(searchparameterValidateFunction(searchparameterExample325)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-identifier.json", () => {
		 const searchparameterExample326 = require("../stu3-resources/SearchParameter-Coverage-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample326)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-payor.json", () => {
		 const searchparameterExample327 = require("../stu3-resources/SearchParameter-Coverage-payor.json");
		 expect(searchparameterValidateFunction(searchparameterExample327)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-plan.json", () => {
		 const searchparameterExample328 = require("../stu3-resources/SearchParameter-Coverage-plan.json");
		 expect(searchparameterValidateFunction(searchparameterExample328)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-policy-holder.json", () => {
		 const searchparameterExample329 = require("../stu3-resources/SearchParameter-Coverage-policy-holder.json");
		 expect(searchparameterValidateFunction(searchparameterExample329)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-sequence.json", () => {
		 const searchparameterExample330 = require("../stu3-resources/SearchParameter-Coverage-sequence.json");
		 expect(searchparameterValidateFunction(searchparameterExample330)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-subclass.json", () => {
		 const searchparameterExample331 = require("../stu3-resources/SearchParameter-Coverage-subclass.json");
		 expect(searchparameterValidateFunction(searchparameterExample331)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-subgroup.json", () => {
		 const searchparameterExample332 = require("../stu3-resources/SearchParameter-Coverage-subgroup.json");
		 expect(searchparameterValidateFunction(searchparameterExample332)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-subplan.json", () => {
		 const searchparameterExample333 = require("../stu3-resources/SearchParameter-Coverage-subplan.json");
		 expect(searchparameterValidateFunction(searchparameterExample333)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-subscriber.json", () => {
		 const searchparameterExample334 = require("../stu3-resources/SearchParameter-Coverage-subscriber.json");
		 expect(searchparameterValidateFunction(searchparameterExample334)).toBe(true);
	 });

	 test("validate SearchParameter-Coverage-type.json", () => {
		 const searchparameterExample335 = require("../stu3-resources/SearchParameter-Coverage-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample335)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-code.json", () => {
		 const searchparameterExample336 = require("../stu3-resources/SearchParameter-DataElement-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample336)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-date.json", () => {
		 const searchparameterExample337 = require("../stu3-resources/SearchParameter-DataElement-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample337)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-description.json", () => {
		 const searchparameterExample338 = require("../stu3-resources/SearchParameter-DataElement-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample338)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-identifier.json", () => {
		 const searchparameterExample339 = require("../stu3-resources/SearchParameter-DataElement-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample339)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-jurisdiction.json", () => {
		 const searchparameterExample340 = require("../stu3-resources/SearchParameter-DataElement-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample340)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-name.json", () => {
		 const searchparameterExample341 = require("../stu3-resources/SearchParameter-DataElement-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample341)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-publisher.json", () => {
		 const searchparameterExample342 = require("../stu3-resources/SearchParameter-DataElement-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample342)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-status.json", () => {
		 const searchparameterExample343 = require("../stu3-resources/SearchParameter-DataElement-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample343)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-stringency.json", () => {
		 const searchparameterExample344 = require("../stu3-resources/SearchParameter-DataElement-stringency.json");
		 expect(searchparameterValidateFunction(searchparameterExample344)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-title.json", () => {
		 const searchparameterExample345 = require("../stu3-resources/SearchParameter-DataElement-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample345)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-url.json", () => {
		 const searchparameterExample346 = require("../stu3-resources/SearchParameter-DataElement-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample346)).toBe(true);
	 });

	 test("validate SearchParameter-DataElement-version.json", () => {
		 const searchparameterExample347 = require("../stu3-resources/SearchParameter-DataElement-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample347)).toBe(true);
	 });

	 test("validate SearchParameter-DetectedIssue-author.json", () => {
		 const searchparameterExample348 = require("../stu3-resources/SearchParameter-DetectedIssue-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample348)).toBe(true);
	 });

	 test("validate SearchParameter-DetectedIssue-category.json", () => {
		 const searchparameterExample349 = require("../stu3-resources/SearchParameter-DetectedIssue-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample349)).toBe(true);
	 });

	 test("validate SearchParameter-DetectedIssue-implicated.json", () => {
		 const searchparameterExample350 = require("../stu3-resources/SearchParameter-DetectedIssue-implicated.json");
		 expect(searchparameterValidateFunction(searchparameterExample350)).toBe(true);
	 });

	 test("validate SearchParameter-Device-device-name.json", () => {
		 const searchparameterExample351 = require("../stu3-resources/SearchParameter-Device-device-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample351)).toBe(true);
	 });

	 test("validate SearchParameter-Device-identifier.json", () => {
		 const searchparameterExample352 = require("../stu3-resources/SearchParameter-Device-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample352)).toBe(true);
	 });

	 test("validate SearchParameter-Device-location.json", () => {
		 const searchparameterExample353 = require("../stu3-resources/SearchParameter-Device-location.json");
		 expect(searchparameterValidateFunction(searchparameterExample353)).toBe(true);
	 });

	 test("validate SearchParameter-Device-manufacturer.json", () => {
		 const searchparameterExample354 = require("../stu3-resources/SearchParameter-Device-manufacturer.json");
		 expect(searchparameterValidateFunction(searchparameterExample354)).toBe(true);
	 });

	 test("validate SearchParameter-Device-model.json", () => {
		 const searchparameterExample355 = require("../stu3-resources/SearchParameter-Device-model.json");
		 expect(searchparameterValidateFunction(searchparameterExample355)).toBe(true);
	 });

	 test("validate SearchParameter-Device-organization.json", () => {
		 const searchparameterExample356 = require("../stu3-resources/SearchParameter-Device-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample356)).toBe(true);
	 });

	 test("validate SearchParameter-Device-patient.json", () => {
		 const searchparameterExample357 = require("../stu3-resources/SearchParameter-Device-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample357)).toBe(true);
	 });

	 test("validate SearchParameter-Device-status.json", () => {
		 const searchparameterExample358 = require("../stu3-resources/SearchParameter-Device-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample358)).toBe(true);
	 });

	 test("validate SearchParameter-Device-type.json", () => {
		 const searchparameterExample359 = require("../stu3-resources/SearchParameter-Device-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample359)).toBe(true);
	 });

	 test("validate SearchParameter-Device-udi-carrier.json", () => {
		 const searchparameterExample360 = require("../stu3-resources/SearchParameter-Device-udi-carrier.json");
		 expect(searchparameterValidateFunction(searchparameterExample360)).toBe(true);
	 });

	 test("validate SearchParameter-Device-udi-di.json", () => {
		 const searchparameterExample361 = require("../stu3-resources/SearchParameter-Device-udi-di.json");
		 expect(searchparameterValidateFunction(searchparameterExample361)).toBe(true);
	 });

	 test("validate SearchParameter-Device-url.json", () => {
		 const searchparameterExample362 = require("../stu3-resources/SearchParameter-Device-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample362)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceComponent-identifier.json", () => {
		 const searchparameterExample363 = require("../stu3-resources/SearchParameter-DeviceComponent-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample363)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceComponent-parent.json", () => {
		 const searchparameterExample364 = require("../stu3-resources/SearchParameter-DeviceComponent-parent.json");
		 expect(searchparameterValidateFunction(searchparameterExample364)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceComponent-source.json", () => {
		 const searchparameterExample365 = require("../stu3-resources/SearchParameter-DeviceComponent-source.json");
		 expect(searchparameterValidateFunction(searchparameterExample365)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceComponent-type.json", () => {
		 const searchparameterExample366 = require("../stu3-resources/SearchParameter-DeviceComponent-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample366)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceMetric-category.json", () => {
		 const searchparameterExample367 = require("../stu3-resources/SearchParameter-DeviceMetric-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample367)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceMetric-identifier.json", () => {
		 const searchparameterExample368 = require("../stu3-resources/SearchParameter-DeviceMetric-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample368)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceMetric-parent.json", () => {
		 const searchparameterExample369 = require("../stu3-resources/SearchParameter-DeviceMetric-parent.json");
		 expect(searchparameterValidateFunction(searchparameterExample369)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceMetric-source.json", () => {
		 const searchparameterExample370 = require("../stu3-resources/SearchParameter-DeviceMetric-source.json");
		 expect(searchparameterValidateFunction(searchparameterExample370)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceMetric-type.json", () => {
		 const searchparameterExample371 = require("../stu3-resources/SearchParameter-DeviceMetric-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample371)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-authored-on.json", () => {
		 const searchparameterExample372 = require("../stu3-resources/SearchParameter-DeviceRequest-authored-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample372)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-based-on.json", () => {
		 const searchparameterExample373 = require("../stu3-resources/SearchParameter-DeviceRequest-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample373)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-definition.json", () => {
		 const searchparameterExample374 = require("../stu3-resources/SearchParameter-DeviceRequest-definition.json");
		 expect(searchparameterValidateFunction(searchparameterExample374)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-device.json", () => {
		 const searchparameterExample375 = require("../stu3-resources/SearchParameter-DeviceRequest-device.json");
		 expect(searchparameterValidateFunction(searchparameterExample375)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-event-date.json", () => {
		 const searchparameterExample376 = require("../stu3-resources/SearchParameter-DeviceRequest-event-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample376)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-group-identifier.json", () => {
		 const searchparameterExample377 = require("../stu3-resources/SearchParameter-DeviceRequest-group-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample377)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-intent.json", () => {
		 const searchparameterExample378 = require("../stu3-resources/SearchParameter-DeviceRequest-intent.json");
		 expect(searchparameterValidateFunction(searchparameterExample378)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-performer.json", () => {
		 const searchparameterExample379 = require("../stu3-resources/SearchParameter-DeviceRequest-performer.json");
		 expect(searchparameterValidateFunction(searchparameterExample379)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-priorrequest.json", () => {
		 const searchparameterExample380 = require("../stu3-resources/SearchParameter-DeviceRequest-priorrequest.json");
		 expect(searchparameterValidateFunction(searchparameterExample380)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-requester.json", () => {
		 const searchparameterExample381 = require("../stu3-resources/SearchParameter-DeviceRequest-requester.json");
		 expect(searchparameterValidateFunction(searchparameterExample381)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-status.json", () => {
		 const searchparameterExample382 = require("../stu3-resources/SearchParameter-DeviceRequest-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample382)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceRequest-subject.json", () => {
		 const searchparameterExample383 = require("../stu3-resources/SearchParameter-DeviceRequest-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample383)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceUseStatement-device.json", () => {
		 const searchparameterExample384 = require("../stu3-resources/SearchParameter-DeviceUseStatement-device.json");
		 expect(searchparameterValidateFunction(searchparameterExample384)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceUseStatement-identifier.json", () => {
		 const searchparameterExample385 = require("../stu3-resources/SearchParameter-DeviceUseStatement-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample385)).toBe(true);
	 });

	 test("validate SearchParameter-DeviceUseStatement-subject.json", () => {
		 const searchparameterExample386 = require("../stu3-resources/SearchParameter-DeviceUseStatement-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample386)).toBe(true);
	 });

	 test("validate SearchParameter-DiagnosticReport-based-on.json", () => {
		 const searchparameterExample387 = require("../stu3-resources/SearchParameter-DiagnosticReport-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample387)).toBe(true);
	 });

	 test("validate SearchParameter-DiagnosticReport-category.json", () => {
		 const searchparameterExample388 = require("../stu3-resources/SearchParameter-DiagnosticReport-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample388)).toBe(true);
	 });

	 test("validate SearchParameter-DiagnosticReport-context.json", () => {
		 const searchparameterExample389 = require("../stu3-resources/SearchParameter-DiagnosticReport-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample389)).toBe(true);
	 });

	 test("validate SearchParameter-DiagnosticReport-diagnosis.json", () => {
		 const searchparameterExample390 = require("../stu3-resources/SearchParameter-DiagnosticReport-diagnosis.json");
		 expect(searchparameterValidateFunction(searchparameterExample390)).toBe(true);
	 });

	 test("validate SearchParameter-DiagnosticReport-image.json", () => {
		 const searchparameterExample391 = require("../stu3-resources/SearchParameter-DiagnosticReport-image.json");
		 expect(searchparameterValidateFunction(searchparameterExample391)).toBe(true);
	 });

	 test("validate SearchParameter-DiagnosticReport-issued.json", () => {
		 const searchparameterExample392 = require("../stu3-resources/SearchParameter-DiagnosticReport-issued.json");
		 expect(searchparameterValidateFunction(searchparameterExample392)).toBe(true);
	 });

	 test("validate SearchParameter-DiagnosticReport-performer.json", () => {
		 const searchparameterExample393 = require("../stu3-resources/SearchParameter-DiagnosticReport-performer.json");
		 expect(searchparameterValidateFunction(searchparameterExample393)).toBe(true);
	 });

	 test("validate SearchParameter-DiagnosticReport-result.json", () => {
		 const searchparameterExample394 = require("../stu3-resources/SearchParameter-DiagnosticReport-result.json");
		 expect(searchparameterValidateFunction(searchparameterExample394)).toBe(true);
	 });

	 test("validate SearchParameter-DiagnosticReport-specimen.json", () => {
		 const searchparameterExample395 = require("../stu3-resources/SearchParameter-DiagnosticReport-specimen.json");
		 expect(searchparameterValidateFunction(searchparameterExample395)).toBe(true);
	 });

	 test("validate SearchParameter-DiagnosticReport-status.json", () => {
		 const searchparameterExample396 = require("../stu3-resources/SearchParameter-DiagnosticReport-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample396)).toBe(true);
	 });

	 test("validate SearchParameter-DiagnosticReport-subject.json", () => {
		 const searchparameterExample397 = require("../stu3-resources/SearchParameter-DiagnosticReport-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample397)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentManifest-author.json", () => {
		 const searchparameterExample398 = require("../stu3-resources/SearchParameter-DocumentManifest-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample398)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentManifest-content-ref.json", () => {
		 const searchparameterExample399 = require("../stu3-resources/SearchParameter-DocumentManifest-content-ref.json");
		 expect(searchparameterValidateFunction(searchparameterExample399)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentManifest-created.json", () => {
		 const searchparameterExample400 = require("../stu3-resources/SearchParameter-DocumentManifest-created.json");
		 expect(searchparameterValidateFunction(searchparameterExample400)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentManifest-description.json", () => {
		 const searchparameterExample401 = require("../stu3-resources/SearchParameter-DocumentManifest-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample401)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentManifest-recipient.json", () => {
		 const searchparameterExample402 = require("../stu3-resources/SearchParameter-DocumentManifest-recipient.json");
		 expect(searchparameterValidateFunction(searchparameterExample402)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentManifest-related-id.json", () => {
		 const searchparameterExample403 = require("../stu3-resources/SearchParameter-DocumentManifest-related-id.json");
		 expect(searchparameterValidateFunction(searchparameterExample403)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentManifest-related-ref.json", () => {
		 const searchparameterExample404 = require("../stu3-resources/SearchParameter-DocumentManifest-related-ref.json");
		 expect(searchparameterValidateFunction(searchparameterExample404)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentManifest-source.json", () => {
		 const searchparameterExample405 = require("../stu3-resources/SearchParameter-DocumentManifest-source.json");
		 expect(searchparameterValidateFunction(searchparameterExample405)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentManifest-status.json", () => {
		 const searchparameterExample406 = require("../stu3-resources/SearchParameter-DocumentManifest-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample406)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentManifest-subject.json", () => {
		 const searchparameterExample407 = require("../stu3-resources/SearchParameter-DocumentManifest-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample407)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-authenticator.json", () => {
		 const searchparameterExample408 = require("../stu3-resources/SearchParameter-DocumentReference-authenticator.json");
		 expect(searchparameterValidateFunction(searchparameterExample408)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-author.json", () => {
		 const searchparameterExample409 = require("../stu3-resources/SearchParameter-DocumentReference-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample409)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-class.json", () => {
		 const searchparameterExample410 = require("../stu3-resources/SearchParameter-DocumentReference-class.json");
		 expect(searchparameterValidateFunction(searchparameterExample410)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-created.json", () => {
		 const searchparameterExample411 = require("../stu3-resources/SearchParameter-DocumentReference-created.json");
		 expect(searchparameterValidateFunction(searchparameterExample411)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-custodian.json", () => {
		 const searchparameterExample412 = require("../stu3-resources/SearchParameter-DocumentReference-custodian.json");
		 expect(searchparameterValidateFunction(searchparameterExample412)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-description.json", () => {
		 const searchparameterExample413 = require("../stu3-resources/SearchParameter-DocumentReference-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample413)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-event.json", () => {
		 const searchparameterExample414 = require("../stu3-resources/SearchParameter-DocumentReference-event.json");
		 expect(searchparameterValidateFunction(searchparameterExample414)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-facility.json", () => {
		 const searchparameterExample415 = require("../stu3-resources/SearchParameter-DocumentReference-facility.json");
		 expect(searchparameterValidateFunction(searchparameterExample415)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-format.json", () => {
		 const searchparameterExample416 = require("../stu3-resources/SearchParameter-DocumentReference-format.json");
		 expect(searchparameterValidateFunction(searchparameterExample416)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-indexed.json", () => {
		 const searchparameterExample417 = require("../stu3-resources/SearchParameter-DocumentReference-indexed.json");
		 expect(searchparameterValidateFunction(searchparameterExample417)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-language.json", () => {
		 const searchparameterExample418 = require("../stu3-resources/SearchParameter-DocumentReference-language.json");
		 expect(searchparameterValidateFunction(searchparameterExample418)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-location.json", () => {
		 const searchparameterExample419 = require("../stu3-resources/SearchParameter-DocumentReference-location.json");
		 expect(searchparameterValidateFunction(searchparameterExample419)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-period.json", () => {
		 const searchparameterExample420 = require("../stu3-resources/SearchParameter-DocumentReference-period.json");
		 expect(searchparameterValidateFunction(searchparameterExample420)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-related-id.json", () => {
		 const searchparameterExample421 = require("../stu3-resources/SearchParameter-DocumentReference-related-id.json");
		 expect(searchparameterValidateFunction(searchparameterExample421)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-related-ref.json", () => {
		 const searchparameterExample422 = require("../stu3-resources/SearchParameter-DocumentReference-related-ref.json");
		 expect(searchparameterValidateFunction(searchparameterExample422)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-relatesto.json", () => {
		 const searchparameterExample423 = require("../stu3-resources/SearchParameter-DocumentReference-relatesto.json");
		 expect(searchparameterValidateFunction(searchparameterExample423)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-relation.json", () => {
		 const searchparameterExample424 = require("../stu3-resources/SearchParameter-DocumentReference-relation.json");
		 expect(searchparameterValidateFunction(searchparameterExample424)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-relationship.json", () => {
		 const searchparameterExample425 = require("../stu3-resources/SearchParameter-DocumentReference-relationship.json");
		 expect(searchparameterValidateFunction(searchparameterExample425)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-securitylabel.json", () => {
		 const searchparameterExample426 = require("../stu3-resources/SearchParameter-DocumentReference-securitylabel.json");
		 expect(searchparameterValidateFunction(searchparameterExample426)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-setting.json", () => {
		 const searchparameterExample427 = require("../stu3-resources/SearchParameter-DocumentReference-setting.json");
		 expect(searchparameterValidateFunction(searchparameterExample427)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-status.json", () => {
		 const searchparameterExample428 = require("../stu3-resources/SearchParameter-DocumentReference-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample428)).toBe(true);
	 });

	 test("validate SearchParameter-DocumentReference-subject.json", () => {
		 const searchparameterExample429 = require("../stu3-resources/SearchParameter-DocumentReference-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample429)).toBe(true);
	 });

	 test("validate SearchParameter-DomainResource-text.json", () => {
		 const searchparameterExample430 = require("../stu3-resources/SearchParameter-DomainResource-text.json");
		 expect(searchparameterValidateFunction(searchparameterExample430)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityRequest-created.json", () => {
		 const searchparameterExample431 = require("../stu3-resources/SearchParameter-EligibilityRequest-created.json");
		 expect(searchparameterValidateFunction(searchparameterExample431)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityRequest-enterer.json", () => {
		 const searchparameterExample432 = require("../stu3-resources/SearchParameter-EligibilityRequest-enterer.json");
		 expect(searchparameterValidateFunction(searchparameterExample432)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityRequest-facility.json", () => {
		 const searchparameterExample433 = require("../stu3-resources/SearchParameter-EligibilityRequest-facility.json");
		 expect(searchparameterValidateFunction(searchparameterExample433)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityRequest-identifier.json", () => {
		 const searchparameterExample434 = require("../stu3-resources/SearchParameter-EligibilityRequest-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample434)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityRequest-organization.json", () => {
		 const searchparameterExample435 = require("../stu3-resources/SearchParameter-EligibilityRequest-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample435)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityRequest-patient.json", () => {
		 const searchparameterExample436 = require("../stu3-resources/SearchParameter-EligibilityRequest-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample436)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityRequest-provider.json", () => {
		 const searchparameterExample437 = require("../stu3-resources/SearchParameter-EligibilityRequest-provider.json");
		 expect(searchparameterValidateFunction(searchparameterExample437)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityResponse-created.json", () => {
		 const searchparameterExample438 = require("../stu3-resources/SearchParameter-EligibilityResponse-created.json");
		 expect(searchparameterValidateFunction(searchparameterExample438)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityResponse-disposition.json", () => {
		 const searchparameterExample439 = require("../stu3-resources/SearchParameter-EligibilityResponse-disposition.json");
		 expect(searchparameterValidateFunction(searchparameterExample439)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityResponse-identifier.json", () => {
		 const searchparameterExample440 = require("../stu3-resources/SearchParameter-EligibilityResponse-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample440)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityResponse-insurer.json", () => {
		 const searchparameterExample441 = require("../stu3-resources/SearchParameter-EligibilityResponse-insurer.json");
		 expect(searchparameterValidateFunction(searchparameterExample441)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityResponse-outcome.json", () => {
		 const searchparameterExample442 = require("../stu3-resources/SearchParameter-EligibilityResponse-outcome.json");
		 expect(searchparameterValidateFunction(searchparameterExample442)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityResponse-request-organization.json", () => {
		 const searchparameterExample443 = require("../stu3-resources/SearchParameter-EligibilityResponse-request-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample443)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityResponse-request-provider.json", () => {
		 const searchparameterExample444 = require("../stu3-resources/SearchParameter-EligibilityResponse-request-provider.json");
		 expect(searchparameterValidateFunction(searchparameterExample444)).toBe(true);
	 });

	 test("validate SearchParameter-EligibilityResponse-request.json", () => {
		 const searchparameterExample445 = require("../stu3-resources/SearchParameter-EligibilityResponse-request.json");
		 expect(searchparameterValidateFunction(searchparameterExample445)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-appointment.json", () => {
		 const searchparameterExample446 = require("../stu3-resources/SearchParameter-Encounter-appointment.json");
		 expect(searchparameterValidateFunction(searchparameterExample446)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-class.json", () => {
		 const searchparameterExample447 = require("../stu3-resources/SearchParameter-Encounter-class.json");
		 expect(searchparameterValidateFunction(searchparameterExample447)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-diagnosis.json", () => {
		 const searchparameterExample448 = require("../stu3-resources/SearchParameter-Encounter-diagnosis.json");
		 expect(searchparameterValidateFunction(searchparameterExample448)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-episodeofcare.json", () => {
		 const searchparameterExample449 = require("../stu3-resources/SearchParameter-Encounter-episodeofcare.json");
		 expect(searchparameterValidateFunction(searchparameterExample449)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-incomingreferral.json", () => {
		 const searchparameterExample450 = require("../stu3-resources/SearchParameter-Encounter-incomingreferral.json");
		 expect(searchparameterValidateFunction(searchparameterExample450)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-length.json", () => {
		 const searchparameterExample451 = require("../stu3-resources/SearchParameter-Encounter-length.json");
		 expect(searchparameterValidateFunction(searchparameterExample451)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-location-period.json", () => {
		 const searchparameterExample452 = require("../stu3-resources/SearchParameter-Encounter-location-period.json");
		 expect(searchparameterValidateFunction(searchparameterExample452)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-location.json", () => {
		 const searchparameterExample453 = require("../stu3-resources/SearchParameter-Encounter-location.json");
		 expect(searchparameterValidateFunction(searchparameterExample453)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-part-of.json", () => {
		 const searchparameterExample454 = require("../stu3-resources/SearchParameter-Encounter-part-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample454)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-participant-type.json", () => {
		 const searchparameterExample455 = require("../stu3-resources/SearchParameter-Encounter-participant-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample455)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-participant.json", () => {
		 const searchparameterExample456 = require("../stu3-resources/SearchParameter-Encounter-participant.json");
		 expect(searchparameterValidateFunction(searchparameterExample456)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-practitioner.json", () => {
		 const searchparameterExample457 = require("../stu3-resources/SearchParameter-Encounter-practitioner.json");
		 expect(searchparameterValidateFunction(searchparameterExample457)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-reason.json", () => {
		 const searchparameterExample458 = require("../stu3-resources/SearchParameter-Encounter-reason.json");
		 expect(searchparameterValidateFunction(searchparameterExample458)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-service-provider.json", () => {
		 const searchparameterExample459 = require("../stu3-resources/SearchParameter-Encounter-service-provider.json");
		 expect(searchparameterValidateFunction(searchparameterExample459)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-special-arrangement.json", () => {
		 const searchparameterExample460 = require("../stu3-resources/SearchParameter-Encounter-special-arrangement.json");
		 expect(searchparameterValidateFunction(searchparameterExample460)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-status.json", () => {
		 const searchparameterExample461 = require("../stu3-resources/SearchParameter-Encounter-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample461)).toBe(true);
	 });

	 test("validate SearchParameter-Encounter-subject.json", () => {
		 const searchparameterExample462 = require("../stu3-resources/SearchParameter-Encounter-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample462)).toBe(true);
	 });

	 test("validate SearchParameter-Endpoint-connection-type.json", () => {
		 const searchparameterExample463 = require("../stu3-resources/SearchParameter-Endpoint-connection-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample463)).toBe(true);
	 });

	 test("validate SearchParameter-Endpoint-identifier.json", () => {
		 const searchparameterExample464 = require("../stu3-resources/SearchParameter-Endpoint-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample464)).toBe(true);
	 });

	 test("validate SearchParameter-Endpoint-name.json", () => {
		 const searchparameterExample465 = require("../stu3-resources/SearchParameter-Endpoint-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample465)).toBe(true);
	 });

	 test("validate SearchParameter-Endpoint-organization.json", () => {
		 const searchparameterExample466 = require("../stu3-resources/SearchParameter-Endpoint-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample466)).toBe(true);
	 });

	 test("validate SearchParameter-Endpoint-payload-type.json", () => {
		 const searchparameterExample467 = require("../stu3-resources/SearchParameter-Endpoint-payload-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample467)).toBe(true);
	 });

	 test("validate SearchParameter-Endpoint-status.json", () => {
		 const searchparameterExample468 = require("../stu3-resources/SearchParameter-Endpoint-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample468)).toBe(true);
	 });

	 test("validate SearchParameter-EnrollmentRequest-identifier.json", () => {
		 const searchparameterExample469 = require("../stu3-resources/SearchParameter-EnrollmentRequest-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample469)).toBe(true);
	 });

	 test("validate SearchParameter-EnrollmentRequest-organization.json", () => {
		 const searchparameterExample470 = require("../stu3-resources/SearchParameter-EnrollmentRequest-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample470)).toBe(true);
	 });

	 test("validate SearchParameter-EnrollmentRequest-patient.json", () => {
		 const searchparameterExample471 = require("../stu3-resources/SearchParameter-EnrollmentRequest-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample471)).toBe(true);
	 });

	 test("validate SearchParameter-EnrollmentRequest-subject.json", () => {
		 const searchparameterExample472 = require("../stu3-resources/SearchParameter-EnrollmentRequest-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample472)).toBe(true);
	 });

	 test("validate SearchParameter-EnrollmentResponse-identifier.json", () => {
		 const searchparameterExample473 = require("../stu3-resources/SearchParameter-EnrollmentResponse-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample473)).toBe(true);
	 });

	 test("validate SearchParameter-EnrollmentResponse-organization.json", () => {
		 const searchparameterExample474 = require("../stu3-resources/SearchParameter-EnrollmentResponse-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample474)).toBe(true);
	 });

	 test("validate SearchParameter-EnrollmentResponse-request.json", () => {
		 const searchparameterExample475 = require("../stu3-resources/SearchParameter-EnrollmentResponse-request.json");
		 expect(searchparameterValidateFunction(searchparameterExample475)).toBe(true);
	 });

	 test("validate SearchParameter-EpisodeOfCare-care-manager.json", () => {
		 const searchparameterExample476 = require("../stu3-resources/SearchParameter-EpisodeOfCare-care-manager.json");
		 expect(searchparameterValidateFunction(searchparameterExample476)).toBe(true);
	 });

	 test("validate SearchParameter-EpisodeOfCare-condition.json", () => {
		 const searchparameterExample477 = require("../stu3-resources/SearchParameter-EpisodeOfCare-condition.json");
		 expect(searchparameterValidateFunction(searchparameterExample477)).toBe(true);
	 });

	 test("validate SearchParameter-EpisodeOfCare-incomingreferral.json", () => {
		 const searchparameterExample478 = require("../stu3-resources/SearchParameter-EpisodeOfCare-incomingreferral.json");
		 expect(searchparameterValidateFunction(searchparameterExample478)).toBe(true);
	 });

	 test("validate SearchParameter-EpisodeOfCare-organization.json", () => {
		 const searchparameterExample479 = require("../stu3-resources/SearchParameter-EpisodeOfCare-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample479)).toBe(true);
	 });

	 test("validate SearchParameter-EpisodeOfCare-status.json", () => {
		 const searchparameterExample480 = require("../stu3-resources/SearchParameter-EpisodeOfCare-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample480)).toBe(true);
	 });

	 test("validate SearchParameter-ExpansionProfile-date.json", () => {
		 const searchparameterExample481 = require("../stu3-resources/SearchParameter-ExpansionProfile-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample481)).toBe(true);
	 });

	 test("validate SearchParameter-ExpansionProfile-description.json", () => {
		 const searchparameterExample482 = require("../stu3-resources/SearchParameter-ExpansionProfile-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample482)).toBe(true);
	 });

	 test("validate SearchParameter-ExpansionProfile-identifier.json", () => {
		 const searchparameterExample483 = require("../stu3-resources/SearchParameter-ExpansionProfile-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample483)).toBe(true);
	 });

	 test("validate SearchParameter-ExpansionProfile-jurisdiction.json", () => {
		 const searchparameterExample484 = require("../stu3-resources/SearchParameter-ExpansionProfile-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample484)).toBe(true);
	 });

	 test("validate SearchParameter-ExpansionProfile-name.json", () => {
		 const searchparameterExample485 = require("../stu3-resources/SearchParameter-ExpansionProfile-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample485)).toBe(true);
	 });

	 test("validate SearchParameter-ExpansionProfile-publisher.json", () => {
		 const searchparameterExample486 = require("../stu3-resources/SearchParameter-ExpansionProfile-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample486)).toBe(true);
	 });

	 test("validate SearchParameter-ExpansionProfile-status.json", () => {
		 const searchparameterExample487 = require("../stu3-resources/SearchParameter-ExpansionProfile-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample487)).toBe(true);
	 });

	 test("validate SearchParameter-ExpansionProfile-url.json", () => {
		 const searchparameterExample488 = require("../stu3-resources/SearchParameter-ExpansionProfile-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample488)).toBe(true);
	 });

	 test("validate SearchParameter-ExpansionProfile-version.json", () => {
		 const searchparameterExample489 = require("../stu3-resources/SearchParameter-ExpansionProfile-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample489)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-care-team.json", () => {
		 const searchparameterExample490 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-care-team.json");
		 expect(searchparameterValidateFunction(searchparameterExample490)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-claim.json", () => {
		 const searchparameterExample491 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-claim.json");
		 expect(searchparameterValidateFunction(searchparameterExample491)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-coverage.json", () => {
		 const searchparameterExample492 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-coverage.json");
		 expect(searchparameterValidateFunction(searchparameterExample492)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-created.json", () => {
		 const searchparameterExample493 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-created.json");
		 expect(searchparameterValidateFunction(searchparameterExample493)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-disposition.json", () => {
		 const searchparameterExample494 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-disposition.json");
		 expect(searchparameterValidateFunction(searchparameterExample494)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-encounter.json", () => {
		 const searchparameterExample495 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-encounter.json");
		 expect(searchparameterValidateFunction(searchparameterExample495)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-enterer.json", () => {
		 const searchparameterExample496 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-enterer.json");
		 expect(searchparameterValidateFunction(searchparameterExample496)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-facility.json", () => {
		 const searchparameterExample497 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-facility.json");
		 expect(searchparameterValidateFunction(searchparameterExample497)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-identifier.json", () => {
		 const searchparameterExample498 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample498)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-organization.json", () => {
		 const searchparameterExample499 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample499)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-patient.json", () => {
		 const searchparameterExample500 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample500)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-payee.json", () => {
		 const searchparameterExample501 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-payee.json");
		 expect(searchparameterValidateFunction(searchparameterExample501)).toBe(true);
	 });

	 test("validate SearchParameter-ExplanationOfBenefit-provider.json", () => {
		 const searchparameterExample502 = require("../stu3-resources/SearchParameter-ExplanationOfBenefit-provider.json");
		 expect(searchparameterValidateFunction(searchparameterExample502)).toBe(true);
	 });

	 test("validate SearchParameter-FamilyMemberHistory-definition.json", () => {
		 const searchparameterExample503 = require("../stu3-resources/SearchParameter-FamilyMemberHistory-definition.json");
		 expect(searchparameterValidateFunction(searchparameterExample503)).toBe(true);
	 });

	 test("validate SearchParameter-FamilyMemberHistory-gender.json", () => {
		 const searchparameterExample504 = require("../stu3-resources/SearchParameter-FamilyMemberHistory-gender.json");
		 expect(searchparameterValidateFunction(searchparameterExample504)).toBe(true);
	 });

	 test("validate SearchParameter-FamilyMemberHistory-relationship.json", () => {
		 const searchparameterExample505 = require("../stu3-resources/SearchParameter-FamilyMemberHistory-relationship.json");
		 expect(searchparameterValidateFunction(searchparameterExample505)).toBe(true);
	 });

	 test("validate SearchParameter-FamilyMemberHistory-status.json", () => {
		 const searchparameterExample506 = require("../stu3-resources/SearchParameter-FamilyMemberHistory-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample506)).toBe(true);
	 });

	 test("validate SearchParameter-Flag-author.json", () => {
		 const searchparameterExample507 = require("../stu3-resources/SearchParameter-Flag-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample507)).toBe(true);
	 });

	 test("validate SearchParameter-Flag-identifier.json", () => {
		 const searchparameterExample508 = require("../stu3-resources/SearchParameter-Flag-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample508)).toBe(true);
	 });

	 test("validate SearchParameter-Flag-subject.json", () => {
		 const searchparameterExample509 = require("../stu3-resources/SearchParameter-Flag-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample509)).toBe(true);
	 });

	 test("validate SearchParameter-Goal-category.json", () => {
		 const searchparameterExample510 = require("../stu3-resources/SearchParameter-Goal-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample510)).toBe(true);
	 });

	 test("validate SearchParameter-Goal-start-date.json", () => {
		 const searchparameterExample511 = require("../stu3-resources/SearchParameter-Goal-start-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample511)).toBe(true);
	 });

	 test("validate SearchParameter-Goal-status.json", () => {
		 const searchparameterExample512 = require("../stu3-resources/SearchParameter-Goal-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample512)).toBe(true);
	 });

	 test("validate SearchParameter-Goal-subject.json", () => {
		 const searchparameterExample513 = require("../stu3-resources/SearchParameter-Goal-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample513)).toBe(true);
	 });

	 test("validate SearchParameter-Goal-target-date.json", () => {
		 const searchparameterExample514 = require("../stu3-resources/SearchParameter-Goal-target-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample514)).toBe(true);
	 });

	 test("validate SearchParameter-GraphDefinition-date.json", () => {
		 const searchparameterExample515 = require("../stu3-resources/SearchParameter-GraphDefinition-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample515)).toBe(true);
	 });

	 test("validate SearchParameter-GraphDefinition-description.json", () => {
		 const searchparameterExample516 = require("../stu3-resources/SearchParameter-GraphDefinition-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample516)).toBe(true);
	 });

	 test("validate SearchParameter-GraphDefinition-jurisdiction.json", () => {
		 const searchparameterExample517 = require("../stu3-resources/SearchParameter-GraphDefinition-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample517)).toBe(true);
	 });

	 test("validate SearchParameter-GraphDefinition-name.json", () => {
		 const searchparameterExample518 = require("../stu3-resources/SearchParameter-GraphDefinition-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample518)).toBe(true);
	 });

	 test("validate SearchParameter-GraphDefinition-publisher.json", () => {
		 const searchparameterExample519 = require("../stu3-resources/SearchParameter-GraphDefinition-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample519)).toBe(true);
	 });

	 test("validate SearchParameter-GraphDefinition-start.json", () => {
		 const searchparameterExample520 = require("../stu3-resources/SearchParameter-GraphDefinition-start.json");
		 expect(searchparameterValidateFunction(searchparameterExample520)).toBe(true);
	 });

	 test("validate SearchParameter-GraphDefinition-status.json", () => {
		 const searchparameterExample521 = require("../stu3-resources/SearchParameter-GraphDefinition-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample521)).toBe(true);
	 });

	 test("validate SearchParameter-GraphDefinition-url.json", () => {
		 const searchparameterExample522 = require("../stu3-resources/SearchParameter-GraphDefinition-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample522)).toBe(true);
	 });

	 test("validate SearchParameter-GraphDefinition-version.json", () => {
		 const searchparameterExample523 = require("../stu3-resources/SearchParameter-GraphDefinition-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample523)).toBe(true);
	 });

	 test("validate SearchParameter-Group-actual.json", () => {
		 const searchparameterExample524 = require("../stu3-resources/SearchParameter-Group-actual.json");
		 expect(searchparameterValidateFunction(searchparameterExample524)).toBe(true);
	 });

	 test("validate SearchParameter-Group-characteristic-value.json", () => {
		 const searchparameterExample525 = require("../stu3-resources/SearchParameter-Group-characteristic-value.json");
		 expect(searchparameterValidateFunction(searchparameterExample525)).toBe(true);
	 });

	 test("validate SearchParameter-Group-characteristic.json", () => {
		 const searchparameterExample526 = require("../stu3-resources/SearchParameter-Group-characteristic.json");
		 expect(searchparameterValidateFunction(searchparameterExample526)).toBe(true);
	 });

	 test("validate SearchParameter-Group-code.json", () => {
		 const searchparameterExample527 = require("../stu3-resources/SearchParameter-Group-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample527)).toBe(true);
	 });

	 test("validate SearchParameter-Group-exclude.json", () => {
		 const searchparameterExample528 = require("../stu3-resources/SearchParameter-Group-exclude.json");
		 expect(searchparameterValidateFunction(searchparameterExample528)).toBe(true);
	 });

	 test("validate SearchParameter-Group-identifier.json", () => {
		 const searchparameterExample529 = require("../stu3-resources/SearchParameter-Group-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample529)).toBe(true);
	 });

	 test("validate SearchParameter-Group-member.json", () => {
		 const searchparameterExample530 = require("../stu3-resources/SearchParameter-Group-member.json");
		 expect(searchparameterValidateFunction(searchparameterExample530)).toBe(true);
	 });

	 test("validate SearchParameter-Group-type.json", () => {
		 const searchparameterExample531 = require("../stu3-resources/SearchParameter-Group-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample531)).toBe(true);
	 });

	 test("validate SearchParameter-Group-value.json", () => {
		 const searchparameterExample532 = require("../stu3-resources/SearchParameter-Group-value.json");
		 expect(searchparameterValidateFunction(searchparameterExample532)).toBe(true);
	 });

	 test("validate SearchParameter-GuidanceResponse-identifier.json", () => {
		 const searchparameterExample533 = require("../stu3-resources/SearchParameter-GuidanceResponse-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample533)).toBe(true);
	 });

	 test("validate SearchParameter-GuidanceResponse-patient.json", () => {
		 const searchparameterExample534 = require("../stu3-resources/SearchParameter-GuidanceResponse-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample534)).toBe(true);
	 });

	 test("validate SearchParameter-GuidanceResponse-request.json", () => {
		 const searchparameterExample535 = require("../stu3-resources/SearchParameter-GuidanceResponse-request.json");
		 expect(searchparameterValidateFunction(searchparameterExample535)).toBe(true);
	 });

	 test("validate SearchParameter-GuidanceResponse-subject.json", () => {
		 const searchparameterExample536 = require("../stu3-resources/SearchParameter-GuidanceResponse-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample536)).toBe(true);
	 });

	 test("validate SearchParameter-HealthcareService-active.json", () => {
		 const searchparameterExample537 = require("../stu3-resources/SearchParameter-HealthcareService-active.json");
		 expect(searchparameterValidateFunction(searchparameterExample537)).toBe(true);
	 });

	 test("validate SearchParameter-HealthcareService-category.json", () => {
		 const searchparameterExample538 = require("../stu3-resources/SearchParameter-HealthcareService-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample538)).toBe(true);
	 });

	 test("validate SearchParameter-HealthcareService-characteristic.json", () => {
		 const searchparameterExample539 = require("../stu3-resources/SearchParameter-HealthcareService-characteristic.json");
		 expect(searchparameterValidateFunction(searchparameterExample539)).toBe(true);
	 });

	 test("validate SearchParameter-HealthcareService-endpoint.json", () => {
		 const searchparameterExample540 = require("../stu3-resources/SearchParameter-HealthcareService-endpoint.json");
		 expect(searchparameterValidateFunction(searchparameterExample540)).toBe(true);
	 });

	 test("validate SearchParameter-HealthcareService-identifier.json", () => {
		 const searchparameterExample541 = require("../stu3-resources/SearchParameter-HealthcareService-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample541)).toBe(true);
	 });

	 test("validate SearchParameter-HealthcareService-location.json", () => {
		 const searchparameterExample542 = require("../stu3-resources/SearchParameter-HealthcareService-location.json");
		 expect(searchparameterValidateFunction(searchparameterExample542)).toBe(true);
	 });

	 test("validate SearchParameter-HealthcareService-name.json", () => {
		 const searchparameterExample543 = require("../stu3-resources/SearchParameter-HealthcareService-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample543)).toBe(true);
	 });

	 test("validate SearchParameter-HealthcareService-organization.json", () => {
		 const searchparameterExample544 = require("../stu3-resources/SearchParameter-HealthcareService-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample544)).toBe(true);
	 });

	 test("validate SearchParameter-HealthcareService-programname.json", () => {
		 const searchparameterExample545 = require("../stu3-resources/SearchParameter-HealthcareService-programname.json");
		 expect(searchparameterValidateFunction(searchparameterExample545)).toBe(true);
	 });

	 test("validate SearchParameter-HealthcareService-type.json", () => {
		 const searchparameterExample546 = require("../stu3-resources/SearchParameter-HealthcareService-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample546)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingManifest-author.json", () => {
		 const searchparameterExample547 = require("../stu3-resources/SearchParameter-ImagingManifest-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample547)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingManifest-authoring-time.json", () => {
		 const searchparameterExample548 = require("../stu3-resources/SearchParameter-ImagingManifest-authoring-time.json");
		 expect(searchparameterValidateFunction(searchparameterExample548)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingManifest-endpoint.json", () => {
		 const searchparameterExample549 = require("../stu3-resources/SearchParameter-ImagingManifest-endpoint.json");
		 expect(searchparameterValidateFunction(searchparameterExample549)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingManifest-identifier.json", () => {
		 const searchparameterExample550 = require("../stu3-resources/SearchParameter-ImagingManifest-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample550)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingManifest-imaging-study.json", () => {
		 const searchparameterExample551 = require("../stu3-resources/SearchParameter-ImagingManifest-imaging-study.json");
		 expect(searchparameterValidateFunction(searchparameterExample551)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingManifest-selected-study.json", () => {
		 const searchparameterExample552 = require("../stu3-resources/SearchParameter-ImagingManifest-selected-study.json");
		 expect(searchparameterValidateFunction(searchparameterExample552)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-accession.json", () => {
		 const searchparameterExample553 = require("../stu3-resources/SearchParameter-ImagingStudy-accession.json");
		 expect(searchparameterValidateFunction(searchparameterExample553)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-basedon.json", () => {
		 const searchparameterExample554 = require("../stu3-resources/SearchParameter-ImagingStudy-basedon.json");
		 expect(searchparameterValidateFunction(searchparameterExample554)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-bodysite.json", () => {
		 const searchparameterExample555 = require("../stu3-resources/SearchParameter-ImagingStudy-bodysite.json");
		 expect(searchparameterValidateFunction(searchparameterExample555)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-context.json", () => {
		 const searchparameterExample556 = require("../stu3-resources/SearchParameter-ImagingStudy-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample556)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-dicom-class.json", () => {
		 const searchparameterExample557 = require("../stu3-resources/SearchParameter-ImagingStudy-dicom-class.json");
		 expect(searchparameterValidateFunction(searchparameterExample557)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-endpoint.json", () => {
		 const searchparameterExample558 = require("../stu3-resources/SearchParameter-ImagingStudy-endpoint.json");
		 expect(searchparameterValidateFunction(searchparameterExample558)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-modality.json", () => {
		 const searchparameterExample559 = require("../stu3-resources/SearchParameter-ImagingStudy-modality.json");
		 expect(searchparameterValidateFunction(searchparameterExample559)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-performer.json", () => {
		 const searchparameterExample560 = require("../stu3-resources/SearchParameter-ImagingStudy-performer.json");
		 expect(searchparameterValidateFunction(searchparameterExample560)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-reason.json", () => {
		 const searchparameterExample561 = require("../stu3-resources/SearchParameter-ImagingStudy-reason.json");
		 expect(searchparameterValidateFunction(searchparameterExample561)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-series.json", () => {
		 const searchparameterExample562 = require("../stu3-resources/SearchParameter-ImagingStudy-series.json");
		 expect(searchparameterValidateFunction(searchparameterExample562)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-started.json", () => {
		 const searchparameterExample563 = require("../stu3-resources/SearchParameter-ImagingStudy-started.json");
		 expect(searchparameterValidateFunction(searchparameterExample563)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-study.json", () => {
		 const searchparameterExample564 = require("../stu3-resources/SearchParameter-ImagingStudy-study.json");
		 expect(searchparameterValidateFunction(searchparameterExample564)).toBe(true);
	 });

	 test("validate SearchParameter-ImagingStudy-uid.json", () => {
		 const searchparameterExample565 = require("../stu3-resources/SearchParameter-ImagingStudy-uid.json");
		 expect(searchparameterValidateFunction(searchparameterExample565)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-dose-sequence.json", () => {
		 const searchparameterExample566 = require("../stu3-resources/SearchParameter-Immunization-dose-sequence.json");
		 expect(searchparameterValidateFunction(searchparameterExample566)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-location.json", () => {
		 const searchparameterExample567 = require("../stu3-resources/SearchParameter-Immunization-location.json");
		 expect(searchparameterValidateFunction(searchparameterExample567)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-lot-number.json", () => {
		 const searchparameterExample568 = require("../stu3-resources/SearchParameter-Immunization-lot-number.json");
		 expect(searchparameterValidateFunction(searchparameterExample568)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-manufacturer.json", () => {
		 const searchparameterExample569 = require("../stu3-resources/SearchParameter-Immunization-manufacturer.json");
		 expect(searchparameterValidateFunction(searchparameterExample569)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-notgiven.json", () => {
		 const searchparameterExample570 = require("../stu3-resources/SearchParameter-Immunization-notgiven.json");
		 expect(searchparameterValidateFunction(searchparameterExample570)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-practitioner.json", () => {
		 const searchparameterExample571 = require("../stu3-resources/SearchParameter-Immunization-practitioner.json");
		 expect(searchparameterValidateFunction(searchparameterExample571)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-reaction-date.json", () => {
		 const searchparameterExample572 = require("../stu3-resources/SearchParameter-Immunization-reaction-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample572)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-reaction.json", () => {
		 const searchparameterExample573 = require("../stu3-resources/SearchParameter-Immunization-reaction.json");
		 expect(searchparameterValidateFunction(searchparameterExample573)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-reason-not-given.json", () => {
		 const searchparameterExample574 = require("../stu3-resources/SearchParameter-Immunization-reason-not-given.json");
		 expect(searchparameterValidateFunction(searchparameterExample574)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-reason.json", () => {
		 const searchparameterExample575 = require("../stu3-resources/SearchParameter-Immunization-reason.json");
		 expect(searchparameterValidateFunction(searchparameterExample575)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-status.json", () => {
		 const searchparameterExample576 = require("../stu3-resources/SearchParameter-Immunization-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample576)).toBe(true);
	 });

	 test("validate SearchParameter-Immunization-vaccine-code.json", () => {
		 const searchparameterExample577 = require("../stu3-resources/SearchParameter-Immunization-vaccine-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample577)).toBe(true);
	 });

	 test("validate SearchParameter-ImmunizationRecommendation-date.json", () => {
		 const searchparameterExample578 = require("../stu3-resources/SearchParameter-ImmunizationRecommendation-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample578)).toBe(true);
	 });

	 test("validate SearchParameter-ImmunizationRecommendation-dose-number.json", () => {
		 const searchparameterExample579 = require("../stu3-resources/SearchParameter-ImmunizationRecommendation-dose-number.json");
		 expect(searchparameterValidateFunction(searchparameterExample579)).toBe(true);
	 });

	 test("validate SearchParameter-ImmunizationRecommendation-dose-sequence.json", () => {
		 const searchparameterExample580 = require("../stu3-resources/SearchParameter-ImmunizationRecommendation-dose-sequence.json");
		 expect(searchparameterValidateFunction(searchparameterExample580)).toBe(true);
	 });

	 test("validate SearchParameter-ImmunizationRecommendation-identifier.json", () => {
		 const searchparameterExample581 = require("../stu3-resources/SearchParameter-ImmunizationRecommendation-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample581)).toBe(true);
	 });

	 test("validate SearchParameter-ImmunizationRecommendation-information.json", () => {
		 const searchparameterExample582 = require("../stu3-resources/SearchParameter-ImmunizationRecommendation-information.json");
		 expect(searchparameterValidateFunction(searchparameterExample582)).toBe(true);
	 });

	 test("validate SearchParameter-ImmunizationRecommendation-patient.json", () => {
		 const searchparameterExample583 = require("../stu3-resources/SearchParameter-ImmunizationRecommendation-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample583)).toBe(true);
	 });

	 test("validate SearchParameter-ImmunizationRecommendation-status.json", () => {
		 const searchparameterExample584 = require("../stu3-resources/SearchParameter-ImmunizationRecommendation-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample584)).toBe(true);
	 });

	 test("validate SearchParameter-ImmunizationRecommendation-support.json", () => {
		 const searchparameterExample585 = require("../stu3-resources/SearchParameter-ImmunizationRecommendation-support.json");
		 expect(searchparameterValidateFunction(searchparameterExample585)).toBe(true);
	 });

	 test("validate SearchParameter-ImmunizationRecommendation-target-disease.json", () => {
		 const searchparameterExample586 = require("../stu3-resources/SearchParameter-ImmunizationRecommendation-target-disease.json");
		 expect(searchparameterValidateFunction(searchparameterExample586)).toBe(true);
	 });

	 test("validate SearchParameter-ImmunizationRecommendation-vaccine-type.json", () => {
		 const searchparameterExample587 = require("../stu3-resources/SearchParameter-ImmunizationRecommendation-vaccine-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample587)).toBe(true);
	 });

	 test("validate SearchParameter-ImplementationGuide-date.json", () => {
		 const searchparameterExample588 = require("../stu3-resources/SearchParameter-ImplementationGuide-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample588)).toBe(true);
	 });

	 test("validate SearchParameter-ImplementationGuide-dependency.json", () => {
		 const searchparameterExample589 = require("../stu3-resources/SearchParameter-ImplementationGuide-dependency.json");
		 expect(searchparameterValidateFunction(searchparameterExample589)).toBe(true);
	 });

	 test("validate SearchParameter-ImplementationGuide-description.json", () => {
		 const searchparameterExample590 = require("../stu3-resources/SearchParameter-ImplementationGuide-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample590)).toBe(true);
	 });

	 test("validate SearchParameter-ImplementationGuide-experimental.json", () => {
		 const searchparameterExample591 = require("../stu3-resources/SearchParameter-ImplementationGuide-experimental.json");
		 expect(searchparameterValidateFunction(searchparameterExample591)).toBe(true);
	 });

	 test("validate SearchParameter-ImplementationGuide-jurisdiction.json", () => {
		 const searchparameterExample592 = require("../stu3-resources/SearchParameter-ImplementationGuide-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample592)).toBe(true);
	 });

	 test("validate SearchParameter-ImplementationGuide-name.json", () => {
		 const searchparameterExample593 = require("../stu3-resources/SearchParameter-ImplementationGuide-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample593)).toBe(true);
	 });

	 test("validate SearchParameter-ImplementationGuide-publisher.json", () => {
		 const searchparameterExample594 = require("../stu3-resources/SearchParameter-ImplementationGuide-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample594)).toBe(true);
	 });

	 test("validate SearchParameter-ImplementationGuide-resource.json", () => {
		 const searchparameterExample595 = require("../stu3-resources/SearchParameter-ImplementationGuide-resource.json");
		 expect(searchparameterValidateFunction(searchparameterExample595)).toBe(true);
	 });

	 test("validate SearchParameter-ImplementationGuide-status.json", () => {
		 const searchparameterExample596 = require("../stu3-resources/SearchParameter-ImplementationGuide-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample596)).toBe(true);
	 });

	 test("validate SearchParameter-ImplementationGuide-url.json", () => {
		 const searchparameterExample597 = require("../stu3-resources/SearchParameter-ImplementationGuide-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample597)).toBe(true);
	 });

	 test("validate SearchParameter-ImplementationGuide-version.json", () => {
		 const searchparameterExample598 = require("../stu3-resources/SearchParameter-ImplementationGuide-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample598)).toBe(true);
	 });

	 test("validate SearchParameter-Library-composed-of.json", () => {
		 const searchparameterExample599 = require("../stu3-resources/SearchParameter-Library-composed-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample599)).toBe(true);
	 });

	 test("validate SearchParameter-Library-date.json", () => {
		 const searchparameterExample600 = require("../stu3-resources/SearchParameter-Library-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample600)).toBe(true);
	 });

	 test("validate SearchParameter-Library-depends-on.json", () => {
		 const searchparameterExample601 = require("../stu3-resources/SearchParameter-Library-depends-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample601)).toBe(true);
	 });

	 test("validate SearchParameter-Library-derived-from.json", () => {
		 const searchparameterExample602 = require("../stu3-resources/SearchParameter-Library-derived-from.json");
		 expect(searchparameterValidateFunction(searchparameterExample602)).toBe(true);
	 });

	 test("validate SearchParameter-Library-description.json", () => {
		 const searchparameterExample603 = require("../stu3-resources/SearchParameter-Library-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample603)).toBe(true);
	 });

	 test("validate SearchParameter-Library-effective.json", () => {
		 const searchparameterExample604 = require("../stu3-resources/SearchParameter-Library-effective.json");
		 expect(searchparameterValidateFunction(searchparameterExample604)).toBe(true);
	 });

	 test("validate SearchParameter-Library-identifier.json", () => {
		 const searchparameterExample605 = require("../stu3-resources/SearchParameter-Library-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample605)).toBe(true);
	 });

	 test("validate SearchParameter-Library-jurisdiction.json", () => {
		 const searchparameterExample606 = require("../stu3-resources/SearchParameter-Library-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample606)).toBe(true);
	 });

	 test("validate SearchParameter-Library-name.json", () => {
		 const searchparameterExample607 = require("../stu3-resources/SearchParameter-Library-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample607)).toBe(true);
	 });

	 test("validate SearchParameter-Library-predecessor.json", () => {
		 const searchparameterExample608 = require("../stu3-resources/SearchParameter-Library-predecessor.json");
		 expect(searchparameterValidateFunction(searchparameterExample608)).toBe(true);
	 });

	 test("validate SearchParameter-Library-publisher.json", () => {
		 const searchparameterExample609 = require("../stu3-resources/SearchParameter-Library-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample609)).toBe(true);
	 });

	 test("validate SearchParameter-Library-status.json", () => {
		 const searchparameterExample610 = require("../stu3-resources/SearchParameter-Library-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample610)).toBe(true);
	 });

	 test("validate SearchParameter-Library-successor.json", () => {
		 const searchparameterExample611 = require("../stu3-resources/SearchParameter-Library-successor.json");
		 expect(searchparameterValidateFunction(searchparameterExample611)).toBe(true);
	 });

	 test("validate SearchParameter-Library-title.json", () => {
		 const searchparameterExample612 = require("../stu3-resources/SearchParameter-Library-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample612)).toBe(true);
	 });

	 test("validate SearchParameter-Library-topic.json", () => {
		 const searchparameterExample613 = require("../stu3-resources/SearchParameter-Library-topic.json");
		 expect(searchparameterValidateFunction(searchparameterExample613)).toBe(true);
	 });

	 test("validate SearchParameter-Library-url.json", () => {
		 const searchparameterExample614 = require("../stu3-resources/SearchParameter-Library-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample614)).toBe(true);
	 });

	 test("validate SearchParameter-Library-version.json", () => {
		 const searchparameterExample615 = require("../stu3-resources/SearchParameter-Library-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample615)).toBe(true);
	 });

	 test("validate SearchParameter-Linkage-author.json", () => {
		 const searchparameterExample616 = require("../stu3-resources/SearchParameter-Linkage-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample616)).toBe(true);
	 });

	 test("validate SearchParameter-Linkage-item.json", () => {
		 const searchparameterExample617 = require("../stu3-resources/SearchParameter-Linkage-item.json");
		 expect(searchparameterValidateFunction(searchparameterExample617)).toBe(true);
	 });

	 test("validate SearchParameter-Linkage-source.json", () => {
		 const searchparameterExample618 = require("../stu3-resources/SearchParameter-Linkage-source.json");
		 expect(searchparameterValidateFunction(searchparameterExample618)).toBe(true);
	 });

	 test("validate SearchParameter-List-empty-reason.json", () => {
		 const searchparameterExample619 = require("../stu3-resources/SearchParameter-List-empty-reason.json");
		 expect(searchparameterValidateFunction(searchparameterExample619)).toBe(true);
	 });

	 test("validate SearchParameter-List-item.json", () => {
		 const searchparameterExample620 = require("../stu3-resources/SearchParameter-List-item.json");
		 expect(searchparameterValidateFunction(searchparameterExample620)).toBe(true);
	 });

	 test("validate SearchParameter-List-notes.json", () => {
		 const searchparameterExample621 = require("../stu3-resources/SearchParameter-List-notes.json");
		 expect(searchparameterValidateFunction(searchparameterExample621)).toBe(true);
	 });

	 test("validate SearchParameter-List-source.json", () => {
		 const searchparameterExample622 = require("../stu3-resources/SearchParameter-List-source.json");
		 expect(searchparameterValidateFunction(searchparameterExample622)).toBe(true);
	 });

	 test("validate SearchParameter-List-status.json", () => {
		 const searchparameterExample623 = require("../stu3-resources/SearchParameter-List-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample623)).toBe(true);
	 });

	 test("validate SearchParameter-List-subject.json", () => {
		 const searchparameterExample624 = require("../stu3-resources/SearchParameter-List-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample624)).toBe(true);
	 });

	 test("validate SearchParameter-List-title.json", () => {
		 const searchparameterExample625 = require("../stu3-resources/SearchParameter-List-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample625)).toBe(true);
	 });

	 test("validate SearchParameter-Location-address-city.json", () => {
		 const searchparameterExample626 = require("../stu3-resources/SearchParameter-Location-address-city.json");
		 expect(searchparameterValidateFunction(searchparameterExample626)).toBe(true);
	 });

	 test("validate SearchParameter-Location-address-country.json", () => {
		 const searchparameterExample627 = require("../stu3-resources/SearchParameter-Location-address-country.json");
		 expect(searchparameterValidateFunction(searchparameterExample627)).toBe(true);
	 });

	 test("validate SearchParameter-Location-address-postalcode.json", () => {
		 const searchparameterExample628 = require("../stu3-resources/SearchParameter-Location-address-postalcode.json");
		 expect(searchparameterValidateFunction(searchparameterExample628)).toBe(true);
	 });

	 test("validate SearchParameter-Location-address-state.json", () => {
		 const searchparameterExample629 = require("../stu3-resources/SearchParameter-Location-address-state.json");
		 expect(searchparameterValidateFunction(searchparameterExample629)).toBe(true);
	 });

	 test("validate SearchParameter-Location-address-use.json", () => {
		 const searchparameterExample630 = require("../stu3-resources/SearchParameter-Location-address-use.json");
		 expect(searchparameterValidateFunction(searchparameterExample630)).toBe(true);
	 });

	 test("validate SearchParameter-Location-address.json", () => {
		 const searchparameterExample631 = require("../stu3-resources/SearchParameter-Location-address.json");
		 expect(searchparameterValidateFunction(searchparameterExample631)).toBe(true);
	 });

	 test("validate SearchParameter-Location-endpoint.json", () => {
		 const searchparameterExample632 = require("../stu3-resources/SearchParameter-Location-endpoint.json");
		 expect(searchparameterValidateFunction(searchparameterExample632)).toBe(true);
	 });

	 test("validate SearchParameter-Location-identifier.json", () => {
		 const searchparameterExample633 = require("../stu3-resources/SearchParameter-Location-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample633)).toBe(true);
	 });

	 test("validate SearchParameter-Location-name.json", () => {
		 const searchparameterExample634 = require("../stu3-resources/SearchParameter-Location-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample634)).toBe(true);
	 });

	 test("validate SearchParameter-Location-near-distance.json", () => {
		 const searchparameterExample635 = require("../stu3-resources/SearchParameter-Location-near-distance.json");
		 expect(searchparameterValidateFunction(searchparameterExample635)).toBe(true);
	 });

	 test("validate SearchParameter-Location-near.json", () => {
		 const searchparameterExample636 = require("../stu3-resources/SearchParameter-Location-near.json");
		 expect(searchparameterValidateFunction(searchparameterExample636)).toBe(true);
	 });

	 test("validate SearchParameter-Location-operational-status.json", () => {
		 const searchparameterExample637 = require("../stu3-resources/SearchParameter-Location-operational-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample637)).toBe(true);
	 });

	 test("validate SearchParameter-Location-organization.json", () => {
		 const searchparameterExample638 = require("../stu3-resources/SearchParameter-Location-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample638)).toBe(true);
	 });

	 test("validate SearchParameter-Location-partof.json", () => {
		 const searchparameterExample639 = require("../stu3-resources/SearchParameter-Location-partof.json");
		 expect(searchparameterValidateFunction(searchparameterExample639)).toBe(true);
	 });

	 test("validate SearchParameter-Location-status.json", () => {
		 const searchparameterExample640 = require("../stu3-resources/SearchParameter-Location-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample640)).toBe(true);
	 });

	 test("validate SearchParameter-Location-type.json", () => {
		 const searchparameterExample641 = require("../stu3-resources/SearchParameter-Location-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample641)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-composed-of.json", () => {
		 const searchparameterExample642 = require("../stu3-resources/SearchParameter-Measure-composed-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample642)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-date.json", () => {
		 const searchparameterExample643 = require("../stu3-resources/SearchParameter-Measure-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample643)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-depends-on.json", () => {
		 const searchparameterExample644 = require("../stu3-resources/SearchParameter-Measure-depends-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample644)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-derived-from.json", () => {
		 const searchparameterExample645 = require("../stu3-resources/SearchParameter-Measure-derived-from.json");
		 expect(searchparameterValidateFunction(searchparameterExample645)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-description.json", () => {
		 const searchparameterExample646 = require("../stu3-resources/SearchParameter-Measure-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample646)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-effective.json", () => {
		 const searchparameterExample647 = require("../stu3-resources/SearchParameter-Measure-effective.json");
		 expect(searchparameterValidateFunction(searchparameterExample647)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-identifier.json", () => {
		 const searchparameterExample648 = require("../stu3-resources/SearchParameter-Measure-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample648)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-jurisdiction.json", () => {
		 const searchparameterExample649 = require("../stu3-resources/SearchParameter-Measure-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample649)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-name.json", () => {
		 const searchparameterExample650 = require("../stu3-resources/SearchParameter-Measure-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample650)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-predecessor.json", () => {
		 const searchparameterExample651 = require("../stu3-resources/SearchParameter-Measure-predecessor.json");
		 expect(searchparameterValidateFunction(searchparameterExample651)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-publisher.json", () => {
		 const searchparameterExample652 = require("../stu3-resources/SearchParameter-Measure-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample652)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-status.json", () => {
		 const searchparameterExample653 = require("../stu3-resources/SearchParameter-Measure-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample653)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-successor.json", () => {
		 const searchparameterExample654 = require("../stu3-resources/SearchParameter-Measure-successor.json");
		 expect(searchparameterValidateFunction(searchparameterExample654)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-title.json", () => {
		 const searchparameterExample655 = require("../stu3-resources/SearchParameter-Measure-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample655)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-topic.json", () => {
		 const searchparameterExample656 = require("../stu3-resources/SearchParameter-Measure-topic.json");
		 expect(searchparameterValidateFunction(searchparameterExample656)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-url.json", () => {
		 const searchparameterExample657 = require("../stu3-resources/SearchParameter-Measure-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample657)).toBe(true);
	 });

	 test("validate SearchParameter-Measure-version.json", () => {
		 const searchparameterExample658 = require("../stu3-resources/SearchParameter-Measure-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample658)).toBe(true);
	 });

	 test("validate SearchParameter-MeasureReport-identifier.json", () => {
		 const searchparameterExample659 = require("../stu3-resources/SearchParameter-MeasureReport-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample659)).toBe(true);
	 });

	 test("validate SearchParameter-MeasureReport-patient.json", () => {
		 const searchparameterExample660 = require("../stu3-resources/SearchParameter-MeasureReport-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample660)).toBe(true);
	 });

	 test("validate SearchParameter-MeasureReport-status.json", () => {
		 const searchparameterExample661 = require("../stu3-resources/SearchParameter-MeasureReport-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample661)).toBe(true);
	 });

	 test("validate SearchParameter-Media-based-on.json", () => {
		 const searchparameterExample662 = require("../stu3-resources/SearchParameter-Media-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample662)).toBe(true);
	 });

	 test("validate SearchParameter-Media-context.json", () => {
		 const searchparameterExample663 = require("../stu3-resources/SearchParameter-Media-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample663)).toBe(true);
	 });

	 test("validate SearchParameter-Media-created.json", () => {
		 const searchparameterExample664 = require("../stu3-resources/SearchParameter-Media-created.json");
		 expect(searchparameterValidateFunction(searchparameterExample664)).toBe(true);
	 });

	 test("validate SearchParameter-Media-date.json", () => {
		 const searchparameterExample665 = require("../stu3-resources/SearchParameter-Media-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample665)).toBe(true);
	 });

	 test("validate SearchParameter-Media-device.json", () => {
		 const searchparameterExample666 = require("../stu3-resources/SearchParameter-Media-device.json");
		 expect(searchparameterValidateFunction(searchparameterExample666)).toBe(true);
	 });

	 test("validate SearchParameter-Media-identifier.json", () => {
		 const searchparameterExample667 = require("../stu3-resources/SearchParameter-Media-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample667)).toBe(true);
	 });

	 test("validate SearchParameter-Media-operator.json", () => {
		 const searchparameterExample668 = require("../stu3-resources/SearchParameter-Media-operator.json");
		 expect(searchparameterValidateFunction(searchparameterExample668)).toBe(true);
	 });

	 test("validate SearchParameter-Media-patient.json", () => {
		 const searchparameterExample669 = require("../stu3-resources/SearchParameter-Media-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample669)).toBe(true);
	 });

	 test("validate SearchParameter-Media-site.json", () => {
		 const searchparameterExample670 = require("../stu3-resources/SearchParameter-Media-site.json");
		 expect(searchparameterValidateFunction(searchparameterExample670)).toBe(true);
	 });

	 test("validate SearchParameter-Media-subject.json", () => {
		 const searchparameterExample671 = require("../stu3-resources/SearchParameter-Media-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample671)).toBe(true);
	 });

	 test("validate SearchParameter-Media-subtype.json", () => {
		 const searchparameterExample672 = require("../stu3-resources/SearchParameter-Media-subtype.json");
		 expect(searchparameterValidateFunction(searchparameterExample672)).toBe(true);
	 });

	 test("validate SearchParameter-Media-type.json", () => {
		 const searchparameterExample673 = require("../stu3-resources/SearchParameter-Media-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample673)).toBe(true);
	 });

	 test("validate SearchParameter-Media-view.json", () => {
		 const searchparameterExample674 = require("../stu3-resources/SearchParameter-Media-view.json");
		 expect(searchparameterValidateFunction(searchparameterExample674)).toBe(true);
	 });

	 test("validate SearchParameter-Medication-container.json", () => {
		 const searchparameterExample675 = require("../stu3-resources/SearchParameter-Medication-container.json");
		 expect(searchparameterValidateFunction(searchparameterExample675)).toBe(true);
	 });

	 test("validate SearchParameter-Medication-form.json", () => {
		 const searchparameterExample676 = require("../stu3-resources/SearchParameter-Medication-form.json");
		 expect(searchparameterValidateFunction(searchparameterExample676)).toBe(true);
	 });

	 test("validate SearchParameter-Medication-ingredient-code.json", () => {
		 const searchparameterExample677 = require("../stu3-resources/SearchParameter-Medication-ingredient-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample677)).toBe(true);
	 });

	 test("validate SearchParameter-Medication-ingredient.json", () => {
		 const searchparameterExample678 = require("../stu3-resources/SearchParameter-Medication-ingredient.json");
		 expect(searchparameterValidateFunction(searchparameterExample678)).toBe(true);
	 });

	 test("validate SearchParameter-Medication-manufacturer.json", () => {
		 const searchparameterExample679 = require("../stu3-resources/SearchParameter-Medication-manufacturer.json");
		 expect(searchparameterValidateFunction(searchparameterExample679)).toBe(true);
	 });

	 test("validate SearchParameter-Medication-over-the-counter.json", () => {
		 const searchparameterExample680 = require("../stu3-resources/SearchParameter-Medication-over-the-counter.json");
		 expect(searchparameterValidateFunction(searchparameterExample680)).toBe(true);
	 });

	 test("validate SearchParameter-Medication-package-item-code.json", () => {
		 const searchparameterExample681 = require("../stu3-resources/SearchParameter-Medication-package-item-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample681)).toBe(true);
	 });

	 test("validate SearchParameter-Medication-package-item.json", () => {
		 const searchparameterExample682 = require("../stu3-resources/SearchParameter-Medication-package-item.json");
		 expect(searchparameterValidateFunction(searchparameterExample682)).toBe(true);
	 });

	 test("validate SearchParameter-Medication-status.json", () => {
		 const searchparameterExample683 = require("../stu3-resources/SearchParameter-Medication-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample683)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationAdministration-context.json", () => {
		 const searchparameterExample684 = require("../stu3-resources/SearchParameter-MedicationAdministration-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample684)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationAdministration-device.json", () => {
		 const searchparameterExample685 = require("../stu3-resources/SearchParameter-MedicationAdministration-device.json");
		 expect(searchparameterValidateFunction(searchparameterExample685)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationAdministration-effective-time.json", () => {
		 const searchparameterExample686 = require("../stu3-resources/SearchParameter-MedicationAdministration-effective-time.json");
		 expect(searchparameterValidateFunction(searchparameterExample686)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationAdministration-not-given.json", () => {
		 const searchparameterExample687 = require("../stu3-resources/SearchParameter-MedicationAdministration-not-given.json");
		 expect(searchparameterValidateFunction(searchparameterExample687)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationAdministration-performer.json", () => {
		 const searchparameterExample688 = require("../stu3-resources/SearchParameter-MedicationAdministration-performer.json");
		 expect(searchparameterValidateFunction(searchparameterExample688)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationAdministration-reason-given.json", () => {
		 const searchparameterExample689 = require("../stu3-resources/SearchParameter-MedicationAdministration-reason-given.json");
		 expect(searchparameterValidateFunction(searchparameterExample689)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationAdministration-reason-not-given.json", () => {
		 const searchparameterExample690 = require("../stu3-resources/SearchParameter-MedicationAdministration-reason-not-given.json");
		 expect(searchparameterValidateFunction(searchparameterExample690)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationAdministration-subject.json", () => {
		 const searchparameterExample691 = require("../stu3-resources/SearchParameter-MedicationAdministration-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample691)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationDispense-context.json", () => {
		 const searchparameterExample692 = require("../stu3-resources/SearchParameter-MedicationDispense-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample692)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationDispense-destination.json", () => {
		 const searchparameterExample693 = require("../stu3-resources/SearchParameter-MedicationDispense-destination.json");
		 expect(searchparameterValidateFunction(searchparameterExample693)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationDispense-performer.json", () => {
		 const searchparameterExample694 = require("../stu3-resources/SearchParameter-MedicationDispense-performer.json");
		 expect(searchparameterValidateFunction(searchparameterExample694)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationDispense-receiver.json", () => {
		 const searchparameterExample695 = require("../stu3-resources/SearchParameter-MedicationDispense-receiver.json");
		 expect(searchparameterValidateFunction(searchparameterExample695)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationDispense-responsibleparty.json", () => {
		 const searchparameterExample696 = require("../stu3-resources/SearchParameter-MedicationDispense-responsibleparty.json");
		 expect(searchparameterValidateFunction(searchparameterExample696)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationDispense-subject.json", () => {
		 const searchparameterExample697 = require("../stu3-resources/SearchParameter-MedicationDispense-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample697)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationDispense-type.json", () => {
		 const searchparameterExample698 = require("../stu3-resources/SearchParameter-MedicationDispense-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample698)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationDispense-whenhandedover.json", () => {
		 const searchparameterExample699 = require("../stu3-resources/SearchParameter-MedicationDispense-whenhandedover.json");
		 expect(searchparameterValidateFunction(searchparameterExample699)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationDispense-whenprepared.json", () => {
		 const searchparameterExample700 = require("../stu3-resources/SearchParameter-MedicationDispense-whenprepared.json");
		 expect(searchparameterValidateFunction(searchparameterExample700)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationRequest-authoredon.json", () => {
		 const searchparameterExample701 = require("../stu3-resources/SearchParameter-MedicationRequest-authoredon.json");
		 expect(searchparameterValidateFunction(searchparameterExample701)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationRequest-category.json", () => {
		 const searchparameterExample702 = require("../stu3-resources/SearchParameter-MedicationRequest-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample702)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationRequest-context.json", () => {
		 const searchparameterExample703 = require("../stu3-resources/SearchParameter-MedicationRequest-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample703)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationRequest-intended-dispenser.json", () => {
		 const searchparameterExample704 = require("../stu3-resources/SearchParameter-MedicationRequest-intended-dispenser.json");
		 expect(searchparameterValidateFunction(searchparameterExample704)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationRequest-intent.json", () => {
		 const searchparameterExample705 = require("../stu3-resources/SearchParameter-MedicationRequest-intent.json");
		 expect(searchparameterValidateFunction(searchparameterExample705)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationRequest-priority.json", () => {
		 const searchparameterExample706 = require("../stu3-resources/SearchParameter-MedicationRequest-priority.json");
		 expect(searchparameterValidateFunction(searchparameterExample706)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationRequest-requester.json", () => {
		 const searchparameterExample707 = require("../stu3-resources/SearchParameter-MedicationRequest-requester.json");
		 expect(searchparameterValidateFunction(searchparameterExample707)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationRequest-subject.json", () => {
		 const searchparameterExample708 = require("../stu3-resources/SearchParameter-MedicationRequest-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample708)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationStatement-category.json", () => {
		 const searchparameterExample709 = require("../stu3-resources/SearchParameter-MedicationStatement-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample709)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationStatement-context.json", () => {
		 const searchparameterExample710 = require("../stu3-resources/SearchParameter-MedicationStatement-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample710)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationStatement-effective.json", () => {
		 const searchparameterExample711 = require("../stu3-resources/SearchParameter-MedicationStatement-effective.json");
		 expect(searchparameterValidateFunction(searchparameterExample711)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationStatement-part-of.json", () => {
		 const searchparameterExample712 = require("../stu3-resources/SearchParameter-MedicationStatement-part-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample712)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationStatement-source.json", () => {
		 const searchparameterExample713 = require("../stu3-resources/SearchParameter-MedicationStatement-source.json");
		 expect(searchparameterValidateFunction(searchparameterExample713)).toBe(true);
	 });

	 test("validate SearchParameter-MedicationStatement-subject.json", () => {
		 const searchparameterExample714 = require("../stu3-resources/SearchParameter-MedicationStatement-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample714)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-category.json", () => {
		 const searchparameterExample715 = require("../stu3-resources/SearchParameter-MessageDefinition-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample715)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-date.json", () => {
		 const searchparameterExample716 = require("../stu3-resources/SearchParameter-MessageDefinition-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample716)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-description.json", () => {
		 const searchparameterExample717 = require("../stu3-resources/SearchParameter-MessageDefinition-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample717)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-event.json", () => {
		 const searchparameterExample718 = require("../stu3-resources/SearchParameter-MessageDefinition-event.json");
		 expect(searchparameterValidateFunction(searchparameterExample718)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-focus.json", () => {
		 const searchparameterExample719 = require("../stu3-resources/SearchParameter-MessageDefinition-focus.json");
		 expect(searchparameterValidateFunction(searchparameterExample719)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-identifier.json", () => {
		 const searchparameterExample720 = require("../stu3-resources/SearchParameter-MessageDefinition-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample720)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-jurisdiction.json", () => {
		 const searchparameterExample721 = require("../stu3-resources/SearchParameter-MessageDefinition-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample721)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-name.json", () => {
		 const searchparameterExample722 = require("../stu3-resources/SearchParameter-MessageDefinition-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample722)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-publisher.json", () => {
		 const searchparameterExample723 = require("../stu3-resources/SearchParameter-MessageDefinition-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample723)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-status.json", () => {
		 const searchparameterExample724 = require("../stu3-resources/SearchParameter-MessageDefinition-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample724)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-title.json", () => {
		 const searchparameterExample725 = require("../stu3-resources/SearchParameter-MessageDefinition-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample725)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-url.json", () => {
		 const searchparameterExample726 = require("../stu3-resources/SearchParameter-MessageDefinition-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample726)).toBe(true);
	 });

	 test("validate SearchParameter-MessageDefinition-version.json", () => {
		 const searchparameterExample727 = require("../stu3-resources/SearchParameter-MessageDefinition-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample727)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-author.json", () => {
		 const searchparameterExample728 = require("../stu3-resources/SearchParameter-MessageHeader-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample728)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-code.json", () => {
		 const searchparameterExample729 = require("../stu3-resources/SearchParameter-MessageHeader-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample729)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-destination-uri.json", () => {
		 const searchparameterExample730 = require("../stu3-resources/SearchParameter-MessageHeader-destination-uri.json");
		 expect(searchparameterValidateFunction(searchparameterExample730)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-destination.json", () => {
		 const searchparameterExample731 = require("../stu3-resources/SearchParameter-MessageHeader-destination.json");
		 expect(searchparameterValidateFunction(searchparameterExample731)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-enterer.json", () => {
		 const searchparameterExample732 = require("../stu3-resources/SearchParameter-MessageHeader-enterer.json");
		 expect(searchparameterValidateFunction(searchparameterExample732)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-event.json", () => {
		 const searchparameterExample733 = require("../stu3-resources/SearchParameter-MessageHeader-event.json");
		 expect(searchparameterValidateFunction(searchparameterExample733)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-focus.json", () => {
		 const searchparameterExample734 = require("../stu3-resources/SearchParameter-MessageHeader-focus.json");
		 expect(searchparameterValidateFunction(searchparameterExample734)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-receiver.json", () => {
		 const searchparameterExample735 = require("../stu3-resources/SearchParameter-MessageHeader-receiver.json");
		 expect(searchparameterValidateFunction(searchparameterExample735)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-response-id.json", () => {
		 const searchparameterExample736 = require("../stu3-resources/SearchParameter-MessageHeader-response-id.json");
		 expect(searchparameterValidateFunction(searchparameterExample736)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-responsible.json", () => {
		 const searchparameterExample737 = require("../stu3-resources/SearchParameter-MessageHeader-responsible.json");
		 expect(searchparameterValidateFunction(searchparameterExample737)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-sender.json", () => {
		 const searchparameterExample738 = require("../stu3-resources/SearchParameter-MessageHeader-sender.json");
		 expect(searchparameterValidateFunction(searchparameterExample738)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-source-uri.json", () => {
		 const searchparameterExample739 = require("../stu3-resources/SearchParameter-MessageHeader-source-uri.json");
		 expect(searchparameterValidateFunction(searchparameterExample739)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-source.json", () => {
		 const searchparameterExample740 = require("../stu3-resources/SearchParameter-MessageHeader-source.json");
		 expect(searchparameterValidateFunction(searchparameterExample740)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-target.json", () => {
		 const searchparameterExample741 = require("../stu3-resources/SearchParameter-MessageHeader-target.json");
		 expect(searchparameterValidateFunction(searchparameterExample741)).toBe(true);
	 });

	 test("validate SearchParameter-MessageHeader-timestamp.json", () => {
		 const searchparameterExample742 = require("../stu3-resources/SearchParameter-MessageHeader-timestamp.json");
		 expect(searchparameterValidateFunction(searchparameterExample742)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-contact.json", () => {
		 const searchparameterExample743 = require("../stu3-resources/SearchParameter-NamingSystem-contact.json");
		 expect(searchparameterValidateFunction(searchparameterExample743)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-date.json", () => {
		 const searchparameterExample744 = require("../stu3-resources/SearchParameter-NamingSystem-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample744)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-description.json", () => {
		 const searchparameterExample745 = require("../stu3-resources/SearchParameter-NamingSystem-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample745)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-id-type.json", () => {
		 const searchparameterExample746 = require("../stu3-resources/SearchParameter-NamingSystem-id-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample746)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-jurisdiction.json", () => {
		 const searchparameterExample747 = require("../stu3-resources/SearchParameter-NamingSystem-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample747)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-kind.json", () => {
		 const searchparameterExample748 = require("../stu3-resources/SearchParameter-NamingSystem-kind.json");
		 expect(searchparameterValidateFunction(searchparameterExample748)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-name.json", () => {
		 const searchparameterExample749 = require("../stu3-resources/SearchParameter-NamingSystem-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample749)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-period.json", () => {
		 const searchparameterExample750 = require("../stu3-resources/SearchParameter-NamingSystem-period.json");
		 expect(searchparameterValidateFunction(searchparameterExample750)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-publisher.json", () => {
		 const searchparameterExample751 = require("../stu3-resources/SearchParameter-NamingSystem-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample751)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-replaced-by.json", () => {
		 const searchparameterExample752 = require("../stu3-resources/SearchParameter-NamingSystem-replaced-by.json");
		 expect(searchparameterValidateFunction(searchparameterExample752)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-responsible.json", () => {
		 const searchparameterExample753 = require("../stu3-resources/SearchParameter-NamingSystem-responsible.json");
		 expect(searchparameterValidateFunction(searchparameterExample753)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-status.json", () => {
		 const searchparameterExample754 = require("../stu3-resources/SearchParameter-NamingSystem-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample754)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-telecom.json", () => {
		 const searchparameterExample755 = require("../stu3-resources/SearchParameter-NamingSystem-telecom.json");
		 expect(searchparameterValidateFunction(searchparameterExample755)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-type.json", () => {
		 const searchparameterExample756 = require("../stu3-resources/SearchParameter-NamingSystem-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample756)).toBe(true);
	 });

	 test("validate SearchParameter-NamingSystem-value.json", () => {
		 const searchparameterExample757 = require("../stu3-resources/SearchParameter-NamingSystem-value.json");
		 expect(searchparameterValidateFunction(searchparameterExample757)).toBe(true);
	 });

	 test("validate SearchParameter-NutritionOrder-additive.json", () => {
		 const searchparameterExample758 = require("../stu3-resources/SearchParameter-NutritionOrder-additive.json");
		 expect(searchparameterValidateFunction(searchparameterExample758)).toBe(true);
	 });

	 test("validate SearchParameter-NutritionOrder-datetime.json", () => {
		 const searchparameterExample759 = require("../stu3-resources/SearchParameter-NutritionOrder-datetime.json");
		 expect(searchparameterValidateFunction(searchparameterExample759)).toBe(true);
	 });

	 test("validate SearchParameter-NutritionOrder-formula.json", () => {
		 const searchparameterExample760 = require("../stu3-resources/SearchParameter-NutritionOrder-formula.json");
		 expect(searchparameterValidateFunction(searchparameterExample760)).toBe(true);
	 });

	 test("validate SearchParameter-NutritionOrder-oraldiet.json", () => {
		 const searchparameterExample761 = require("../stu3-resources/SearchParameter-NutritionOrder-oraldiet.json");
		 expect(searchparameterValidateFunction(searchparameterExample761)).toBe(true);
	 });

	 test("validate SearchParameter-NutritionOrder-provider.json", () => {
		 const searchparameterExample762 = require("../stu3-resources/SearchParameter-NutritionOrder-provider.json");
		 expect(searchparameterValidateFunction(searchparameterExample762)).toBe(true);
	 });

	 test("validate SearchParameter-NutritionOrder-status.json", () => {
		 const searchparameterExample763 = require("../stu3-resources/SearchParameter-NutritionOrder-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample763)).toBe(true);
	 });

	 test("validate SearchParameter-NutritionOrder-supplement.json", () => {
		 const searchparameterExample764 = require("../stu3-resources/SearchParameter-NutritionOrder-supplement.json");
		 expect(searchparameterValidateFunction(searchparameterExample764)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-based-on.json", () => {
		 const searchparameterExample765 = require("../stu3-resources/SearchParameter-Observation-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample765)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-category.json", () => {
		 const searchparameterExample766 = require("../stu3-resources/SearchParameter-Observation-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample766)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-code-value-concept.json", () => {
		 const searchparameterExample767 = require("../stu3-resources/SearchParameter-Observation-code-value-concept.json");
		 expect(searchparameterValidateFunction(searchparameterExample767)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-code-value-date.json", () => {
		 const searchparameterExample768 = require("../stu3-resources/SearchParameter-Observation-code-value-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample768)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-code-value-quantity.json", () => {
		 const searchparameterExample769 = require("../stu3-resources/SearchParameter-Observation-code-value-quantity.json");
		 expect(searchparameterValidateFunction(searchparameterExample769)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-code-value-string.json", () => {
		 const searchparameterExample770 = require("../stu3-resources/SearchParameter-Observation-code-value-string.json");
		 expect(searchparameterValidateFunction(searchparameterExample770)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-combo-code-value-concept.json", () => {
		 const searchparameterExample771 = require("../stu3-resources/SearchParameter-Observation-combo-code-value-concept.json");
		 expect(searchparameterValidateFunction(searchparameterExample771)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-combo-code-value-quantity.json", () => {
		 const searchparameterExample772 = require("../stu3-resources/SearchParameter-Observation-combo-code-value-quantity.json");
		 expect(searchparameterValidateFunction(searchparameterExample772)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-combo-code.json", () => {
		 const searchparameterExample773 = require("../stu3-resources/SearchParameter-Observation-combo-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample773)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-combo-data-absent-reason.json", () => {
		 const searchparameterExample774 = require("../stu3-resources/SearchParameter-Observation-combo-data-absent-reason.json");
		 expect(searchparameterValidateFunction(searchparameterExample774)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-combo-value-concept.json", () => {
		 const searchparameterExample775 = require("../stu3-resources/SearchParameter-Observation-combo-value-concept.json");
		 expect(searchparameterValidateFunction(searchparameterExample775)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-combo-value-quantity.json", () => {
		 const searchparameterExample776 = require("../stu3-resources/SearchParameter-Observation-combo-value-quantity.json");
		 expect(searchparameterValidateFunction(searchparameterExample776)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-component-code-value-concept.json", () => {
		 const searchparameterExample777 = require("../stu3-resources/SearchParameter-Observation-component-code-value-concept.json");
		 expect(searchparameterValidateFunction(searchparameterExample777)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-component-code-value-quantity.json", () => {
		 const searchparameterExample778 = require("../stu3-resources/SearchParameter-Observation-component-code-value-quantity.json");
		 expect(searchparameterValidateFunction(searchparameterExample778)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-component-code.json", () => {
		 const searchparameterExample779 = require("../stu3-resources/SearchParameter-Observation-component-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample779)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-component-data-absent-reason.json", () => {
		 const searchparameterExample780 = require("../stu3-resources/SearchParameter-Observation-component-data-absent-reason.json");
		 expect(searchparameterValidateFunction(searchparameterExample780)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-component-value-concept.json", () => {
		 const searchparameterExample781 = require("../stu3-resources/SearchParameter-Observation-component-value-concept.json");
		 expect(searchparameterValidateFunction(searchparameterExample781)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-component-value-quantity.json", () => {
		 const searchparameterExample782 = require("../stu3-resources/SearchParameter-Observation-component-value-quantity.json");
		 expect(searchparameterValidateFunction(searchparameterExample782)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-context.json", () => {
		 const searchparameterExample783 = require("../stu3-resources/SearchParameter-Observation-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample783)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-data-absent-reason.json", () => {
		 const searchparameterExample784 = require("../stu3-resources/SearchParameter-Observation-data-absent-reason.json");
		 expect(searchparameterValidateFunction(searchparameterExample784)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-device.json", () => {
		 const searchparameterExample785 = require("../stu3-resources/SearchParameter-Observation-device.json");
		 expect(searchparameterValidateFunction(searchparameterExample785)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-method.json", () => {
		 const searchparameterExample786 = require("../stu3-resources/SearchParameter-Observation-method.json");
		 expect(searchparameterValidateFunction(searchparameterExample786)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-performer.json", () => {
		 const searchparameterExample787 = require("../stu3-resources/SearchParameter-Observation-performer.json");
		 expect(searchparameterValidateFunction(searchparameterExample787)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-related-target.json", () => {
		 const searchparameterExample788 = require("../stu3-resources/SearchParameter-Observation-related-target.json");
		 expect(searchparameterValidateFunction(searchparameterExample788)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-related-type.json", () => {
		 const searchparameterExample789 = require("../stu3-resources/SearchParameter-Observation-related-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample789)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-related.json", () => {
		 const searchparameterExample790 = require("../stu3-resources/SearchParameter-Observation-related.json");
		 expect(searchparameterValidateFunction(searchparameterExample790)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-specimen.json", () => {
		 const searchparameterExample791 = require("../stu3-resources/SearchParameter-Observation-specimen.json");
		 expect(searchparameterValidateFunction(searchparameterExample791)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-status.json", () => {
		 const searchparameterExample792 = require("../stu3-resources/SearchParameter-Observation-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample792)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-subject.json", () => {
		 const searchparameterExample793 = require("../stu3-resources/SearchParameter-Observation-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample793)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-value-concept.json", () => {
		 const searchparameterExample794 = require("../stu3-resources/SearchParameter-Observation-value-concept.json");
		 expect(searchparameterValidateFunction(searchparameterExample794)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-value-date.json", () => {
		 const searchparameterExample795 = require("../stu3-resources/SearchParameter-Observation-value-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample795)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-value-quantity.json", () => {
		 const searchparameterExample796 = require("../stu3-resources/SearchParameter-Observation-value-quantity.json");
		 expect(searchparameterValidateFunction(searchparameterExample796)).toBe(true);
	 });

	 test("validate SearchParameter-Observation-value-string.json", () => {
		 const searchparameterExample797 = require("../stu3-resources/SearchParameter-Observation-value-string.json");
		 expect(searchparameterValidateFunction(searchparameterExample797)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-base.json", () => {
		 const searchparameterExample798 = require("../stu3-resources/SearchParameter-OperationDefinition-base.json");
		 expect(searchparameterValidateFunction(searchparameterExample798)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-code.json", () => {
		 const searchparameterExample799 = require("../stu3-resources/SearchParameter-OperationDefinition-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample799)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-date.json", () => {
		 const searchparameterExample800 = require("../stu3-resources/SearchParameter-OperationDefinition-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample800)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-description.json", () => {
		 const searchparameterExample801 = require("../stu3-resources/SearchParameter-OperationDefinition-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample801)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-instance.json", () => {
		 const searchparameterExample802 = require("../stu3-resources/SearchParameter-OperationDefinition-instance.json");
		 expect(searchparameterValidateFunction(searchparameterExample802)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-jurisdiction.json", () => {
		 const searchparameterExample803 = require("../stu3-resources/SearchParameter-OperationDefinition-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample803)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-kind.json", () => {
		 const searchparameterExample804 = require("../stu3-resources/SearchParameter-OperationDefinition-kind.json");
		 expect(searchparameterValidateFunction(searchparameterExample804)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-name.json", () => {
		 const searchparameterExample805 = require("../stu3-resources/SearchParameter-OperationDefinition-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample805)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-param-profile.json", () => {
		 const searchparameterExample806 = require("../stu3-resources/SearchParameter-OperationDefinition-param-profile.json");
		 expect(searchparameterValidateFunction(searchparameterExample806)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-publisher.json", () => {
		 const searchparameterExample807 = require("../stu3-resources/SearchParameter-OperationDefinition-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample807)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-status.json", () => {
		 const searchparameterExample808 = require("../stu3-resources/SearchParameter-OperationDefinition-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample808)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-system.json", () => {
		 const searchparameterExample809 = require("../stu3-resources/SearchParameter-OperationDefinition-system.json");
		 expect(searchparameterValidateFunction(searchparameterExample809)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-type.json", () => {
		 const searchparameterExample810 = require("../stu3-resources/SearchParameter-OperationDefinition-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample810)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-url.json", () => {
		 const searchparameterExample811 = require("../stu3-resources/SearchParameter-OperationDefinition-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample811)).toBe(true);
	 });

	 test("validate SearchParameter-OperationDefinition-version.json", () => {
		 const searchparameterExample812 = require("../stu3-resources/SearchParameter-OperationDefinition-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample812)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-active.json", () => {
		 const searchparameterExample813 = require("../stu3-resources/SearchParameter-Organization-active.json");
		 expect(searchparameterValidateFunction(searchparameterExample813)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-address-city.json", () => {
		 const searchparameterExample814 = require("../stu3-resources/SearchParameter-Organization-address-city.json");
		 expect(searchparameterValidateFunction(searchparameterExample814)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-address-country.json", () => {
		 const searchparameterExample815 = require("../stu3-resources/SearchParameter-Organization-address-country.json");
		 expect(searchparameterValidateFunction(searchparameterExample815)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-address-postalcode.json", () => {
		 const searchparameterExample816 = require("../stu3-resources/SearchParameter-Organization-address-postalcode.json");
		 expect(searchparameterValidateFunction(searchparameterExample816)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-address-state.json", () => {
		 const searchparameterExample817 = require("../stu3-resources/SearchParameter-Organization-address-state.json");
		 expect(searchparameterValidateFunction(searchparameterExample817)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-address-use.json", () => {
		 const searchparameterExample818 = require("../stu3-resources/SearchParameter-Organization-address-use.json");
		 expect(searchparameterValidateFunction(searchparameterExample818)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-address.json", () => {
		 const searchparameterExample819 = require("../stu3-resources/SearchParameter-Organization-address.json");
		 expect(searchparameterValidateFunction(searchparameterExample819)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-endpoint.json", () => {
		 const searchparameterExample820 = require("../stu3-resources/SearchParameter-Organization-endpoint.json");
		 expect(searchparameterValidateFunction(searchparameterExample820)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-identifier.json", () => {
		 const searchparameterExample821 = require("../stu3-resources/SearchParameter-Organization-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample821)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-name.json", () => {
		 const searchparameterExample822 = require("../stu3-resources/SearchParameter-Organization-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample822)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-partof.json", () => {
		 const searchparameterExample823 = require("../stu3-resources/SearchParameter-Organization-partof.json");
		 expect(searchparameterValidateFunction(searchparameterExample823)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-phonetic.json", () => {
		 const searchparameterExample824 = require("../stu3-resources/SearchParameter-Organization-phonetic.json");
		 expect(searchparameterValidateFunction(searchparameterExample824)).toBe(true);
	 });

	 test("validate SearchParameter-Organization-type.json", () => {
		 const searchparameterExample825 = require("../stu3-resources/SearchParameter-Organization-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample825)).toBe(true);
	 });

	 test("validate SearchParameter-Patient-active.json", () => {
		 const searchparameterExample826 = require("../stu3-resources/SearchParameter-Patient-active.json");
		 expect(searchparameterValidateFunction(searchparameterExample826)).toBe(true);
	 });

	 test("validate SearchParameter-Patient-animal-breed.json", () => {
		 const searchparameterExample827 = require("../stu3-resources/SearchParameter-Patient-animal-breed.json");
		 expect(searchparameterValidateFunction(searchparameterExample827)).toBe(true);
	 });

	 test("validate SearchParameter-Patient-animal-species.json", () => {
		 const searchparameterExample828 = require("../stu3-resources/SearchParameter-Patient-animal-species.json");
		 expect(searchparameterValidateFunction(searchparameterExample828)).toBe(true);
	 });

	 test("validate SearchParameter-Patient-death-date.json", () => {
		 const searchparameterExample829 = require("../stu3-resources/SearchParameter-Patient-death-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample829)).toBe(true);
	 });

	 test("validate SearchParameter-Patient-deceased.json", () => {
		 const searchparameterExample830 = require("../stu3-resources/SearchParameter-Patient-deceased.json");
		 expect(searchparameterValidateFunction(searchparameterExample830)).toBe(true);
	 });

	 test("validate SearchParameter-Patient-general-practitioner.json", () => {
		 const searchparameterExample831 = require("../stu3-resources/SearchParameter-Patient-general-practitioner.json");
		 expect(searchparameterValidateFunction(searchparameterExample831)).toBe(true);
	 });

	 test("validate SearchParameter-Patient-identifier.json", () => {
		 const searchparameterExample832 = require("../stu3-resources/SearchParameter-Patient-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample832)).toBe(true);
	 });

	 test("validate SearchParameter-Patient-language.json", () => {
		 const searchparameterExample833 = require("../stu3-resources/SearchParameter-Patient-language.json");
		 expect(searchparameterValidateFunction(searchparameterExample833)).toBe(true);
	 });

	 test("validate SearchParameter-Patient-link.json", () => {
		 const searchparameterExample834 = require("../stu3-resources/SearchParameter-Patient-link.json");
		 expect(searchparameterValidateFunction(searchparameterExample834)).toBe(true);
	 });

	 test("validate SearchParameter-Patient-name.json", () => {
		 const searchparameterExample835 = require("../stu3-resources/SearchParameter-Patient-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample835)).toBe(true);
	 });

	 test("validate SearchParameter-Patient-organization.json", () => {
		 const searchparameterExample836 = require("../stu3-resources/SearchParameter-Patient-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample836)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentNotice-created.json", () => {
		 const searchparameterExample837 = require("../stu3-resources/SearchParameter-PaymentNotice-created.json");
		 expect(searchparameterValidateFunction(searchparameterExample837)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentNotice-identifier.json", () => {
		 const searchparameterExample838 = require("../stu3-resources/SearchParameter-PaymentNotice-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample838)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentNotice-organization.json", () => {
		 const searchparameterExample839 = require("../stu3-resources/SearchParameter-PaymentNotice-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample839)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentNotice-payment-status.json", () => {
		 const searchparameterExample840 = require("../stu3-resources/SearchParameter-PaymentNotice-payment-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample840)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentNotice-provider.json", () => {
		 const searchparameterExample841 = require("../stu3-resources/SearchParameter-PaymentNotice-provider.json");
		 expect(searchparameterValidateFunction(searchparameterExample841)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentNotice-request.json", () => {
		 const searchparameterExample842 = require("../stu3-resources/SearchParameter-PaymentNotice-request.json");
		 expect(searchparameterValidateFunction(searchparameterExample842)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentNotice-response.json", () => {
		 const searchparameterExample843 = require("../stu3-resources/SearchParameter-PaymentNotice-response.json");
		 expect(searchparameterValidateFunction(searchparameterExample843)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentNotice-statusdate.json", () => {
		 const searchparameterExample844 = require("../stu3-resources/SearchParameter-PaymentNotice-statusdate.json");
		 expect(searchparameterValidateFunction(searchparameterExample844)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentReconciliation-created.json", () => {
		 const searchparameterExample845 = require("../stu3-resources/SearchParameter-PaymentReconciliation-created.json");
		 expect(searchparameterValidateFunction(searchparameterExample845)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentReconciliation-disposition.json", () => {
		 const searchparameterExample846 = require("../stu3-resources/SearchParameter-PaymentReconciliation-disposition.json");
		 expect(searchparameterValidateFunction(searchparameterExample846)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentReconciliation-identifier.json", () => {
		 const searchparameterExample847 = require("../stu3-resources/SearchParameter-PaymentReconciliation-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample847)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentReconciliation-organization.json", () => {
		 const searchparameterExample848 = require("../stu3-resources/SearchParameter-PaymentReconciliation-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample848)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentReconciliation-outcome.json", () => {
		 const searchparameterExample849 = require("../stu3-resources/SearchParameter-PaymentReconciliation-outcome.json");
		 expect(searchparameterValidateFunction(searchparameterExample849)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentReconciliation-request-organization.json", () => {
		 const searchparameterExample850 = require("../stu3-resources/SearchParameter-PaymentReconciliation-request-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample850)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentReconciliation-request-provider.json", () => {
		 const searchparameterExample851 = require("../stu3-resources/SearchParameter-PaymentReconciliation-request-provider.json");
		 expect(searchparameterValidateFunction(searchparameterExample851)).toBe(true);
	 });

	 test("validate SearchParameter-PaymentReconciliation-request.json", () => {
		 const searchparameterExample852 = require("../stu3-resources/SearchParameter-PaymentReconciliation-request.json");
		 expect(searchparameterValidateFunction(searchparameterExample852)).toBe(true);
	 });

	 test("validate SearchParameter-Person-identifier.json", () => {
		 const searchparameterExample853 = require("../stu3-resources/SearchParameter-Person-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample853)).toBe(true);
	 });

	 test("validate SearchParameter-Person-link.json", () => {
		 const searchparameterExample854 = require("../stu3-resources/SearchParameter-Person-link.json");
		 expect(searchparameterValidateFunction(searchparameterExample854)).toBe(true);
	 });

	 test("validate SearchParameter-Person-name.json", () => {
		 const searchparameterExample855 = require("../stu3-resources/SearchParameter-Person-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample855)).toBe(true);
	 });

	 test("validate SearchParameter-Person-organization.json", () => {
		 const searchparameterExample856 = require("../stu3-resources/SearchParameter-Person-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample856)).toBe(true);
	 });

	 test("validate SearchParameter-Person-patient.json", () => {
		 const searchparameterExample857 = require("../stu3-resources/SearchParameter-Person-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample857)).toBe(true);
	 });

	 test("validate SearchParameter-Person-practitioner.json", () => {
		 const searchparameterExample858 = require("../stu3-resources/SearchParameter-Person-practitioner.json");
		 expect(searchparameterValidateFunction(searchparameterExample858)).toBe(true);
	 });

	 test("validate SearchParameter-Person-relatedperson.json", () => {
		 const searchparameterExample859 = require("../stu3-resources/SearchParameter-Person-relatedperson.json");
		 expect(searchparameterValidateFunction(searchparameterExample859)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-composed-of.json", () => {
		 const searchparameterExample860 = require("../stu3-resources/SearchParameter-PlanDefinition-composed-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample860)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-date.json", () => {
		 const searchparameterExample861 = require("../stu3-resources/SearchParameter-PlanDefinition-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample861)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-depends-on.json", () => {
		 const searchparameterExample862 = require("../stu3-resources/SearchParameter-PlanDefinition-depends-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample862)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-derived-from.json", () => {
		 const searchparameterExample863 = require("../stu3-resources/SearchParameter-PlanDefinition-derived-from.json");
		 expect(searchparameterValidateFunction(searchparameterExample863)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-description.json", () => {
		 const searchparameterExample864 = require("../stu3-resources/SearchParameter-PlanDefinition-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample864)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-effective.json", () => {
		 const searchparameterExample865 = require("../stu3-resources/SearchParameter-PlanDefinition-effective.json");
		 expect(searchparameterValidateFunction(searchparameterExample865)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-identifier.json", () => {
		 const searchparameterExample866 = require("../stu3-resources/SearchParameter-PlanDefinition-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample866)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-jurisdiction.json", () => {
		 const searchparameterExample867 = require("../stu3-resources/SearchParameter-PlanDefinition-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample867)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-name.json", () => {
		 const searchparameterExample868 = require("../stu3-resources/SearchParameter-PlanDefinition-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample868)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-predecessor.json", () => {
		 const searchparameterExample869 = require("../stu3-resources/SearchParameter-PlanDefinition-predecessor.json");
		 expect(searchparameterValidateFunction(searchparameterExample869)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-publisher.json", () => {
		 const searchparameterExample870 = require("../stu3-resources/SearchParameter-PlanDefinition-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample870)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-status.json", () => {
		 const searchparameterExample871 = require("../stu3-resources/SearchParameter-PlanDefinition-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample871)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-successor.json", () => {
		 const searchparameterExample872 = require("../stu3-resources/SearchParameter-PlanDefinition-successor.json");
		 expect(searchparameterValidateFunction(searchparameterExample872)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-title.json", () => {
		 const searchparameterExample873 = require("../stu3-resources/SearchParameter-PlanDefinition-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample873)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-topic.json", () => {
		 const searchparameterExample874 = require("../stu3-resources/SearchParameter-PlanDefinition-topic.json");
		 expect(searchparameterValidateFunction(searchparameterExample874)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-url.json", () => {
		 const searchparameterExample875 = require("../stu3-resources/SearchParameter-PlanDefinition-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample875)).toBe(true);
	 });

	 test("validate SearchParameter-PlanDefinition-version.json", () => {
		 const searchparameterExample876 = require("../stu3-resources/SearchParameter-PlanDefinition-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample876)).toBe(true);
	 });

	 test("validate SearchParameter-Practitioner-active.json", () => {
		 const searchparameterExample877 = require("../stu3-resources/SearchParameter-Practitioner-active.json");
		 expect(searchparameterValidateFunction(searchparameterExample877)).toBe(true);
	 });

	 test("validate SearchParameter-Practitioner-communication.json", () => {
		 const searchparameterExample878 = require("../stu3-resources/SearchParameter-Practitioner-communication.json");
		 expect(searchparameterValidateFunction(searchparameterExample878)).toBe(true);
	 });

	 test("validate SearchParameter-Practitioner-identifier.json", () => {
		 const searchparameterExample879 = require("../stu3-resources/SearchParameter-Practitioner-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample879)).toBe(true);
	 });

	 test("validate SearchParameter-Practitioner-name.json", () => {
		 const searchparameterExample880 = require("../stu3-resources/SearchParameter-Practitioner-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample880)).toBe(true);
	 });

	 test("validate SearchParameter-PractitionerRole-active.json", () => {
		 const searchparameterExample881 = require("../stu3-resources/SearchParameter-PractitionerRole-active.json");
		 expect(searchparameterValidateFunction(searchparameterExample881)).toBe(true);
	 });

	 test("validate SearchParameter-PractitionerRole-date.json", () => {
		 const searchparameterExample882 = require("../stu3-resources/SearchParameter-PractitionerRole-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample882)).toBe(true);
	 });

	 test("validate SearchParameter-PractitionerRole-endpoint.json", () => {
		 const searchparameterExample883 = require("../stu3-resources/SearchParameter-PractitionerRole-endpoint.json");
		 expect(searchparameterValidateFunction(searchparameterExample883)).toBe(true);
	 });

	 test("validate SearchParameter-PractitionerRole-identifier.json", () => {
		 const searchparameterExample884 = require("../stu3-resources/SearchParameter-PractitionerRole-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample884)).toBe(true);
	 });

	 test("validate SearchParameter-PractitionerRole-location.json", () => {
		 const searchparameterExample885 = require("../stu3-resources/SearchParameter-PractitionerRole-location.json");
		 expect(searchparameterValidateFunction(searchparameterExample885)).toBe(true);
	 });

	 test("validate SearchParameter-PractitionerRole-organization.json", () => {
		 const searchparameterExample886 = require("../stu3-resources/SearchParameter-PractitionerRole-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample886)).toBe(true);
	 });

	 test("validate SearchParameter-PractitionerRole-practitioner.json", () => {
		 const searchparameterExample887 = require("../stu3-resources/SearchParameter-PractitionerRole-practitioner.json");
		 expect(searchparameterValidateFunction(searchparameterExample887)).toBe(true);
	 });

	 test("validate SearchParameter-PractitionerRole-role.json", () => {
		 const searchparameterExample888 = require("../stu3-resources/SearchParameter-PractitionerRole-role.json");
		 expect(searchparameterValidateFunction(searchparameterExample888)).toBe(true);
	 });

	 test("validate SearchParameter-PractitionerRole-service.json", () => {
		 const searchparameterExample889 = require("../stu3-resources/SearchParameter-PractitionerRole-service.json");
		 expect(searchparameterValidateFunction(searchparameterExample889)).toBe(true);
	 });

	 test("validate SearchParameter-PractitionerRole-specialty.json", () => {
		 const searchparameterExample890 = require("../stu3-resources/SearchParameter-PractitionerRole-specialty.json");
		 expect(searchparameterValidateFunction(searchparameterExample890)).toBe(true);
	 });

	 test("validate SearchParameter-Procedure-based-on.json", () => {
		 const searchparameterExample891 = require("../stu3-resources/SearchParameter-Procedure-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample891)).toBe(true);
	 });

	 test("validate SearchParameter-Procedure-category.json", () => {
		 const searchparameterExample892 = require("../stu3-resources/SearchParameter-Procedure-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample892)).toBe(true);
	 });

	 test("validate SearchParameter-Procedure-context.json", () => {
		 const searchparameterExample893 = require("../stu3-resources/SearchParameter-Procedure-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample893)).toBe(true);
	 });

	 test("validate SearchParameter-Procedure-definition.json", () => {
		 const searchparameterExample894 = require("../stu3-resources/SearchParameter-Procedure-definition.json");
		 expect(searchparameterValidateFunction(searchparameterExample894)).toBe(true);
	 });

	 test("validate SearchParameter-Procedure-location.json", () => {
		 const searchparameterExample895 = require("../stu3-resources/SearchParameter-Procedure-location.json");
		 expect(searchparameterValidateFunction(searchparameterExample895)).toBe(true);
	 });

	 test("validate SearchParameter-Procedure-part-of.json", () => {
		 const searchparameterExample896 = require("../stu3-resources/SearchParameter-Procedure-part-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample896)).toBe(true);
	 });

	 test("validate SearchParameter-Procedure-performer.json", () => {
		 const searchparameterExample897 = require("../stu3-resources/SearchParameter-Procedure-performer.json");
		 expect(searchparameterValidateFunction(searchparameterExample897)).toBe(true);
	 });

	 test("validate SearchParameter-Procedure-status.json", () => {
		 const searchparameterExample898 = require("../stu3-resources/SearchParameter-Procedure-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample898)).toBe(true);
	 });

	 test("validate SearchParameter-Procedure-subject.json", () => {
		 const searchparameterExample899 = require("../stu3-resources/SearchParameter-Procedure-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample899)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-authored.json", () => {
		 const searchparameterExample900 = require("../stu3-resources/SearchParameter-ProcedureRequest-authored.json");
		 expect(searchparameterValidateFunction(searchparameterExample900)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-based-on.json", () => {
		 const searchparameterExample901 = require("../stu3-resources/SearchParameter-ProcedureRequest-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample901)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-body-site.json", () => {
		 const searchparameterExample902 = require("../stu3-resources/SearchParameter-ProcedureRequest-body-site.json");
		 expect(searchparameterValidateFunction(searchparameterExample902)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-context.json", () => {
		 const searchparameterExample903 = require("../stu3-resources/SearchParameter-ProcedureRequest-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample903)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-definition.json", () => {
		 const searchparameterExample904 = require("../stu3-resources/SearchParameter-ProcedureRequest-definition.json");
		 expect(searchparameterValidateFunction(searchparameterExample904)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-intent.json", () => {
		 const searchparameterExample905 = require("../stu3-resources/SearchParameter-ProcedureRequest-intent.json");
		 expect(searchparameterValidateFunction(searchparameterExample905)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-occurrence.json", () => {
		 const searchparameterExample906 = require("../stu3-resources/SearchParameter-ProcedureRequest-occurrence.json");
		 expect(searchparameterValidateFunction(searchparameterExample906)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-performer-type.json", () => {
		 const searchparameterExample907 = require("../stu3-resources/SearchParameter-ProcedureRequest-performer-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample907)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-performer.json", () => {
		 const searchparameterExample908 = require("../stu3-resources/SearchParameter-ProcedureRequest-performer.json");
		 expect(searchparameterValidateFunction(searchparameterExample908)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-priority.json", () => {
		 const searchparameterExample909 = require("../stu3-resources/SearchParameter-ProcedureRequest-priority.json");
		 expect(searchparameterValidateFunction(searchparameterExample909)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-replaces.json", () => {
		 const searchparameterExample910 = require("../stu3-resources/SearchParameter-ProcedureRequest-replaces.json");
		 expect(searchparameterValidateFunction(searchparameterExample910)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-requester.json", () => {
		 const searchparameterExample911 = require("../stu3-resources/SearchParameter-ProcedureRequest-requester.json");
		 expect(searchparameterValidateFunction(searchparameterExample911)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-requisition.json", () => {
		 const searchparameterExample912 = require("../stu3-resources/SearchParameter-ProcedureRequest-requisition.json");
		 expect(searchparameterValidateFunction(searchparameterExample912)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-specimen.json", () => {
		 const searchparameterExample913 = require("../stu3-resources/SearchParameter-ProcedureRequest-specimen.json");
		 expect(searchparameterValidateFunction(searchparameterExample913)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-status.json", () => {
		 const searchparameterExample914 = require("../stu3-resources/SearchParameter-ProcedureRequest-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample914)).toBe(true);
	 });

	 test("validate SearchParameter-ProcedureRequest-subject.json", () => {
		 const searchparameterExample915 = require("../stu3-resources/SearchParameter-ProcedureRequest-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample915)).toBe(true);
	 });

	 test("validate SearchParameter-ProcessRequest-action.json", () => {
		 const searchparameterExample916 = require("../stu3-resources/SearchParameter-ProcessRequest-action.json");
		 expect(searchparameterValidateFunction(searchparameterExample916)).toBe(true);
	 });

	 test("validate SearchParameter-ProcessRequest-identifier.json", () => {
		 const searchparameterExample917 = require("../stu3-resources/SearchParameter-ProcessRequest-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample917)).toBe(true);
	 });

	 test("validate SearchParameter-ProcessRequest-organization.json", () => {
		 const searchparameterExample918 = require("../stu3-resources/SearchParameter-ProcessRequest-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample918)).toBe(true);
	 });

	 test("validate SearchParameter-ProcessRequest-provider.json", () => {
		 const searchparameterExample919 = require("../stu3-resources/SearchParameter-ProcessRequest-provider.json");
		 expect(searchparameterValidateFunction(searchparameterExample919)).toBe(true);
	 });

	 test("validate SearchParameter-ProcessResponse-identifier.json", () => {
		 const searchparameterExample920 = require("../stu3-resources/SearchParameter-ProcessResponse-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample920)).toBe(true);
	 });

	 test("validate SearchParameter-ProcessResponse-organization.json", () => {
		 const searchparameterExample921 = require("../stu3-resources/SearchParameter-ProcessResponse-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample921)).toBe(true);
	 });

	 test("validate SearchParameter-ProcessResponse-request-organization.json", () => {
		 const searchparameterExample922 = require("../stu3-resources/SearchParameter-ProcessResponse-request-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample922)).toBe(true);
	 });

	 test("validate SearchParameter-ProcessResponse-request-provider.json", () => {
		 const searchparameterExample923 = require("../stu3-resources/SearchParameter-ProcessResponse-request-provider.json");
		 expect(searchparameterValidateFunction(searchparameterExample923)).toBe(true);
	 });

	 test("validate SearchParameter-ProcessResponse-request.json", () => {
		 const searchparameterExample924 = require("../stu3-resources/SearchParameter-ProcessResponse-request.json");
		 expect(searchparameterValidateFunction(searchparameterExample924)).toBe(true);
	 });

	 test("validate SearchParameter-Provenance-agent-role.json", () => {
		 const searchparameterExample925 = require("../stu3-resources/SearchParameter-Provenance-agent-role.json");
		 expect(searchparameterValidateFunction(searchparameterExample925)).toBe(true);
	 });

	 test("validate SearchParameter-Provenance-agent.json", () => {
		 const searchparameterExample926 = require("../stu3-resources/SearchParameter-Provenance-agent.json");
		 expect(searchparameterValidateFunction(searchparameterExample926)).toBe(true);
	 });

	 test("validate SearchParameter-Provenance-end.json", () => {
		 const searchparameterExample927 = require("../stu3-resources/SearchParameter-Provenance-end.json");
		 expect(searchparameterValidateFunction(searchparameterExample927)).toBe(true);
	 });

	 test("validate SearchParameter-Provenance-entity-id.json", () => {
		 const searchparameterExample928 = require("../stu3-resources/SearchParameter-Provenance-entity-id.json");
		 expect(searchparameterValidateFunction(searchparameterExample928)).toBe(true);
	 });

	 test("validate SearchParameter-Provenance-entity-ref.json", () => {
		 const searchparameterExample929 = require("../stu3-resources/SearchParameter-Provenance-entity-ref.json");
		 expect(searchparameterValidateFunction(searchparameterExample929)).toBe(true);
	 });

	 test("validate SearchParameter-Provenance-location.json", () => {
		 const searchparameterExample930 = require("../stu3-resources/SearchParameter-Provenance-location.json");
		 expect(searchparameterValidateFunction(searchparameterExample930)).toBe(true);
	 });

	 test("validate SearchParameter-Provenance-patient.json", () => {
		 const searchparameterExample931 = require("../stu3-resources/SearchParameter-Provenance-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample931)).toBe(true);
	 });

	 test("validate SearchParameter-Provenance-recorded.json", () => {
		 const searchparameterExample932 = require("../stu3-resources/SearchParameter-Provenance-recorded.json");
		 expect(searchparameterValidateFunction(searchparameterExample932)).toBe(true);
	 });

	 test("validate SearchParameter-Provenance-signature-type.json", () => {
		 const searchparameterExample933 = require("../stu3-resources/SearchParameter-Provenance-signature-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample933)).toBe(true);
	 });

	 test("validate SearchParameter-Provenance-start.json", () => {
		 const searchparameterExample934 = require("../stu3-resources/SearchParameter-Provenance-start.json");
		 expect(searchparameterValidateFunction(searchparameterExample934)).toBe(true);
	 });

	 test("validate SearchParameter-Provenance-target.json", () => {
		 const searchparameterExample935 = require("../stu3-resources/SearchParameter-Provenance-target.json");
		 expect(searchparameterValidateFunction(searchparameterExample935)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-code.json", () => {
		 const searchparameterExample936 = require("../stu3-resources/SearchParameter-Questionnaire-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample936)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-date.json", () => {
		 const searchparameterExample937 = require("../stu3-resources/SearchParameter-Questionnaire-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample937)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-description.json", () => {
		 const searchparameterExample938 = require("../stu3-resources/SearchParameter-Questionnaire-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample938)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-effective.json", () => {
		 const searchparameterExample939 = require("../stu3-resources/SearchParameter-Questionnaire-effective.json");
		 expect(searchparameterValidateFunction(searchparameterExample939)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-identifier.json", () => {
		 const searchparameterExample940 = require("../stu3-resources/SearchParameter-Questionnaire-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample940)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-jurisdiction.json", () => {
		 const searchparameterExample941 = require("../stu3-resources/SearchParameter-Questionnaire-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample941)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-name.json", () => {
		 const searchparameterExample942 = require("../stu3-resources/SearchParameter-Questionnaire-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample942)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-publisher.json", () => {
		 const searchparameterExample943 = require("../stu3-resources/SearchParameter-Questionnaire-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample943)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-status.json", () => {
		 const searchparameterExample944 = require("../stu3-resources/SearchParameter-Questionnaire-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample944)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-title.json", () => {
		 const searchparameterExample945 = require("../stu3-resources/SearchParameter-Questionnaire-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample945)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-url.json", () => {
		 const searchparameterExample946 = require("../stu3-resources/SearchParameter-Questionnaire-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample946)).toBe(true);
	 });

	 test("validate SearchParameter-Questionnaire-version.json", () => {
		 const searchparameterExample947 = require("../stu3-resources/SearchParameter-Questionnaire-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample947)).toBe(true);
	 });

	 test("validate SearchParameter-QuestionnaireResponse-author.json", () => {
		 const searchparameterExample948 = require("../stu3-resources/SearchParameter-QuestionnaireResponse-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample948)).toBe(true);
	 });

	 test("validate SearchParameter-QuestionnaireResponse-authored.json", () => {
		 const searchparameterExample949 = require("../stu3-resources/SearchParameter-QuestionnaireResponse-authored.json");
		 expect(searchparameterValidateFunction(searchparameterExample949)).toBe(true);
	 });

	 test("validate SearchParameter-QuestionnaireResponse-based-on.json", () => {
		 const searchparameterExample950 = require("../stu3-resources/SearchParameter-QuestionnaireResponse-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample950)).toBe(true);
	 });

	 test("validate SearchParameter-QuestionnaireResponse-context.json", () => {
		 const searchparameterExample951 = require("../stu3-resources/SearchParameter-QuestionnaireResponse-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample951)).toBe(true);
	 });

	 test("validate SearchParameter-QuestionnaireResponse-identifier.json", () => {
		 const searchparameterExample952 = require("../stu3-resources/SearchParameter-QuestionnaireResponse-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample952)).toBe(true);
	 });

	 test("validate SearchParameter-QuestionnaireResponse-parent.json", () => {
		 const searchparameterExample953 = require("../stu3-resources/SearchParameter-QuestionnaireResponse-parent.json");
		 expect(searchparameterValidateFunction(searchparameterExample953)).toBe(true);
	 });

	 test("validate SearchParameter-QuestionnaireResponse-patient.json", () => {
		 const searchparameterExample954 = require("../stu3-resources/SearchParameter-QuestionnaireResponse-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample954)).toBe(true);
	 });

	 test("validate SearchParameter-QuestionnaireResponse-questionnaire.json", () => {
		 const searchparameterExample955 = require("../stu3-resources/SearchParameter-QuestionnaireResponse-questionnaire.json");
		 expect(searchparameterValidateFunction(searchparameterExample955)).toBe(true);
	 });

	 test("validate SearchParameter-QuestionnaireResponse-source.json", () => {
		 const searchparameterExample956 = require("../stu3-resources/SearchParameter-QuestionnaireResponse-source.json");
		 expect(searchparameterValidateFunction(searchparameterExample956)).toBe(true);
	 });

	 test("validate SearchParameter-QuestionnaireResponse-status.json", () => {
		 const searchparameterExample957 = require("../stu3-resources/SearchParameter-QuestionnaireResponse-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample957)).toBe(true);
	 });

	 test("validate SearchParameter-QuestionnaireResponse-subject.json", () => {
		 const searchparameterExample958 = require("../stu3-resources/SearchParameter-QuestionnaireResponse-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample958)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-authored-on.json", () => {
		 const searchparameterExample959 = require("../stu3-resources/SearchParameter-ReferralRequest-authored-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample959)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-based-on.json", () => {
		 const searchparameterExample960 = require("../stu3-resources/SearchParameter-ReferralRequest-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample960)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-context.json", () => {
		 const searchparameterExample961 = require("../stu3-resources/SearchParameter-ReferralRequest-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample961)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-definition.json", () => {
		 const searchparameterExample962 = require("../stu3-resources/SearchParameter-ReferralRequest-definition.json");
		 expect(searchparameterValidateFunction(searchparameterExample962)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-encounter.json", () => {
		 const searchparameterExample963 = require("../stu3-resources/SearchParameter-ReferralRequest-encounter.json");
		 expect(searchparameterValidateFunction(searchparameterExample963)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-group-identifier.json", () => {
		 const searchparameterExample964 = require("../stu3-resources/SearchParameter-ReferralRequest-group-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample964)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-identifier.json", () => {
		 const searchparameterExample965 = require("../stu3-resources/SearchParameter-ReferralRequest-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample965)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-intent.json", () => {
		 const searchparameterExample966 = require("../stu3-resources/SearchParameter-ReferralRequest-intent.json");
		 expect(searchparameterValidateFunction(searchparameterExample966)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-occurrence-date.json", () => {
		 const searchparameterExample967 = require("../stu3-resources/SearchParameter-ReferralRequest-occurrence-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample967)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-priority.json", () => {
		 const searchparameterExample968 = require("../stu3-resources/SearchParameter-ReferralRequest-priority.json");
		 expect(searchparameterValidateFunction(searchparameterExample968)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-recipient.json", () => {
		 const searchparameterExample969 = require("../stu3-resources/SearchParameter-ReferralRequest-recipient.json");
		 expect(searchparameterValidateFunction(searchparameterExample969)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-replaces.json", () => {
		 const searchparameterExample970 = require("../stu3-resources/SearchParameter-ReferralRequest-replaces.json");
		 expect(searchparameterValidateFunction(searchparameterExample970)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-requester.json", () => {
		 const searchparameterExample971 = require("../stu3-resources/SearchParameter-ReferralRequest-requester.json");
		 expect(searchparameterValidateFunction(searchparameterExample971)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-service.json", () => {
		 const searchparameterExample972 = require("../stu3-resources/SearchParameter-ReferralRequest-service.json");
		 expect(searchparameterValidateFunction(searchparameterExample972)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-specialty.json", () => {
		 const searchparameterExample973 = require("../stu3-resources/SearchParameter-ReferralRequest-specialty.json");
		 expect(searchparameterValidateFunction(searchparameterExample973)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-status.json", () => {
		 const searchparameterExample974 = require("../stu3-resources/SearchParameter-ReferralRequest-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample974)).toBe(true);
	 });

	 test("validate SearchParameter-ReferralRequest-subject.json", () => {
		 const searchparameterExample975 = require("../stu3-resources/SearchParameter-ReferralRequest-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample975)).toBe(true);
	 });

	 test("validate SearchParameter-RelatedPerson-active.json", () => {
		 const searchparameterExample976 = require("../stu3-resources/SearchParameter-RelatedPerson-active.json");
		 expect(searchparameterValidateFunction(searchparameterExample976)).toBe(true);
	 });

	 test("validate SearchParameter-RelatedPerson-identifier.json", () => {
		 const searchparameterExample977 = require("../stu3-resources/SearchParameter-RelatedPerson-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample977)).toBe(true);
	 });

	 test("validate SearchParameter-RelatedPerson-name.json", () => {
		 const searchparameterExample978 = require("../stu3-resources/SearchParameter-RelatedPerson-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample978)).toBe(true);
	 });

	 test("validate SearchParameter-RelatedPerson-patient.json", () => {
		 const searchparameterExample979 = require("../stu3-resources/SearchParameter-RelatedPerson-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample979)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-author.json", () => {
		 const searchparameterExample980 = require("../stu3-resources/SearchParameter-RequestGroup-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample980)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-authored.json", () => {
		 const searchparameterExample981 = require("../stu3-resources/SearchParameter-RequestGroup-authored.json");
		 expect(searchparameterValidateFunction(searchparameterExample981)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-context.json", () => {
		 const searchparameterExample982 = require("../stu3-resources/SearchParameter-RequestGroup-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample982)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-definition.json", () => {
		 const searchparameterExample983 = require("../stu3-resources/SearchParameter-RequestGroup-definition.json");
		 expect(searchparameterValidateFunction(searchparameterExample983)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-encounter.json", () => {
		 const searchparameterExample984 = require("../stu3-resources/SearchParameter-RequestGroup-encounter.json");
		 expect(searchparameterValidateFunction(searchparameterExample984)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-group-identifier.json", () => {
		 const searchparameterExample985 = require("../stu3-resources/SearchParameter-RequestGroup-group-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample985)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-identifier.json", () => {
		 const searchparameterExample986 = require("../stu3-resources/SearchParameter-RequestGroup-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample986)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-intent.json", () => {
		 const searchparameterExample987 = require("../stu3-resources/SearchParameter-RequestGroup-intent.json");
		 expect(searchparameterValidateFunction(searchparameterExample987)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-participant.json", () => {
		 const searchparameterExample988 = require("../stu3-resources/SearchParameter-RequestGroup-participant.json");
		 expect(searchparameterValidateFunction(searchparameterExample988)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-patient.json", () => {
		 const searchparameterExample989 = require("../stu3-resources/SearchParameter-RequestGroup-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample989)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-priority.json", () => {
		 const searchparameterExample990 = require("../stu3-resources/SearchParameter-RequestGroup-priority.json");
		 expect(searchparameterValidateFunction(searchparameterExample990)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-status.json", () => {
		 const searchparameterExample991 = require("../stu3-resources/SearchParameter-RequestGroup-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample991)).toBe(true);
	 });

	 test("validate SearchParameter-RequestGroup-subject.json", () => {
		 const searchparameterExample992 = require("../stu3-resources/SearchParameter-RequestGroup-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample992)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-category.json", () => {
		 const searchparameterExample993 = require("../stu3-resources/SearchParameter-ResearchStudy-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample993)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-date.json", () => {
		 const searchparameterExample994 = require("../stu3-resources/SearchParameter-ResearchStudy-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample994)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-focus.json", () => {
		 const searchparameterExample995 = require("../stu3-resources/SearchParameter-ResearchStudy-focus.json");
		 expect(searchparameterValidateFunction(searchparameterExample995)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-identifier.json", () => {
		 const searchparameterExample996 = require("../stu3-resources/SearchParameter-ResearchStudy-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample996)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-jurisdiction.json", () => {
		 const searchparameterExample997 = require("../stu3-resources/SearchParameter-ResearchStudy-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample997)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-keyword.json", () => {
		 const searchparameterExample998 = require("../stu3-resources/SearchParameter-ResearchStudy-keyword.json");
		 expect(searchparameterValidateFunction(searchparameterExample998)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-partof.json", () => {
		 const searchparameterExample999 = require("../stu3-resources/SearchParameter-ResearchStudy-partof.json");
		 expect(searchparameterValidateFunction(searchparameterExample999)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-principalinvestigator.json", () => {
		 const searchparameterExample1000 = require("../stu3-resources/SearchParameter-ResearchStudy-principalinvestigator.json");
		 expect(searchparameterValidateFunction(searchparameterExample1000)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-protocol.json", () => {
		 const searchparameterExample1001 = require("../stu3-resources/SearchParameter-ResearchStudy-protocol.json");
		 expect(searchparameterValidateFunction(searchparameterExample1001)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-site.json", () => {
		 const searchparameterExample1002 = require("../stu3-resources/SearchParameter-ResearchStudy-site.json");
		 expect(searchparameterValidateFunction(searchparameterExample1002)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-sponsor.json", () => {
		 const searchparameterExample1003 = require("../stu3-resources/SearchParameter-ResearchStudy-sponsor.json");
		 expect(searchparameterValidateFunction(searchparameterExample1003)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-status.json", () => {
		 const searchparameterExample1004 = require("../stu3-resources/SearchParameter-ResearchStudy-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1004)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchStudy-title.json", () => {
		 const searchparameterExample1005 = require("../stu3-resources/SearchParameter-ResearchStudy-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample1005)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchSubject-date.json", () => {
		 const searchparameterExample1006 = require("../stu3-resources/SearchParameter-ResearchSubject-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample1006)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchSubject-identifier.json", () => {
		 const searchparameterExample1007 = require("../stu3-resources/SearchParameter-ResearchSubject-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1007)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchSubject-individual.json", () => {
		 const searchparameterExample1008 = require("../stu3-resources/SearchParameter-ResearchSubject-individual.json");
		 expect(searchparameterValidateFunction(searchparameterExample1008)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchSubject-patient.json", () => {
		 const searchparameterExample1009 = require("../stu3-resources/SearchParameter-ResearchSubject-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample1009)).toBe(true);
	 });

	 test("validate SearchParameter-ResearchSubject-status.json", () => {
		 const searchparameterExample1010 = require("../stu3-resources/SearchParameter-ResearchSubject-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1010)).toBe(true);
	 });

	 test("validate SearchParameter-Resource-content.json", () => {
		 const searchparameterExample1011 = require("../stu3-resources/SearchParameter-Resource-content.json");
		 expect(searchparameterValidateFunction(searchparameterExample1011)).toBe(true);
	 });

	 test("validate SearchParameter-Resource-id.json", () => {
		 const searchparameterExample1012 = require("../stu3-resources/SearchParameter-Resource-id.json");
		 expect(searchparameterValidateFunction(searchparameterExample1012)).toBe(true);
	 });

	 test("validate SearchParameter-Resource-lastUpdated.json", () => {
		 const searchparameterExample1013 = require("../stu3-resources/SearchParameter-Resource-lastUpdated.json");
		 expect(searchparameterValidateFunction(searchparameterExample1013)).toBe(true);
	 });

	 test("validate SearchParameter-Resource-profile.json", () => {
		 const searchparameterExample1014 = require("../stu3-resources/SearchParameter-Resource-profile.json");
		 expect(searchparameterValidateFunction(searchparameterExample1014)).toBe(true);
	 });

	 test("validate SearchParameter-Resource-query.json", () => {
		 const searchparameterExample1015 = require("../stu3-resources/SearchParameter-Resource-query.json");
		 expect(searchparameterValidateFunction(searchparameterExample1015)).toBe(true);
	 });

	 test("validate SearchParameter-Resource-security.json", () => {
		 const searchparameterExample1016 = require("../stu3-resources/SearchParameter-Resource-security.json");
		 expect(searchparameterValidateFunction(searchparameterExample1016)).toBe(true);
	 });

	 test("validate SearchParameter-Resource-tag.json", () => {
		 const searchparameterExample1017 = require("../stu3-resources/SearchParameter-Resource-tag.json");
		 expect(searchparameterValidateFunction(searchparameterExample1017)).toBe(true);
	 });

	 test("validate SearchParameter-RiskAssessment-condition.json", () => {
		 const searchparameterExample1018 = require("../stu3-resources/SearchParameter-RiskAssessment-condition.json");
		 expect(searchparameterValidateFunction(searchparameterExample1018)).toBe(true);
	 });

	 test("validate SearchParameter-RiskAssessment-method.json", () => {
		 const searchparameterExample1019 = require("../stu3-resources/SearchParameter-RiskAssessment-method.json");
		 expect(searchparameterValidateFunction(searchparameterExample1019)).toBe(true);
	 });

	 test("validate SearchParameter-RiskAssessment-performer.json", () => {
		 const searchparameterExample1020 = require("../stu3-resources/SearchParameter-RiskAssessment-performer.json");
		 expect(searchparameterValidateFunction(searchparameterExample1020)).toBe(true);
	 });

	 test("validate SearchParameter-RiskAssessment-probability.json", () => {
		 const searchparameterExample1021 = require("../stu3-resources/SearchParameter-RiskAssessment-probability.json");
		 expect(searchparameterValidateFunction(searchparameterExample1021)).toBe(true);
	 });

	 test("validate SearchParameter-RiskAssessment-risk.json", () => {
		 const searchparameterExample1022 = require("../stu3-resources/SearchParameter-RiskAssessment-risk.json");
		 expect(searchparameterValidateFunction(searchparameterExample1022)).toBe(true);
	 });

	 test("validate SearchParameter-RiskAssessment-subject.json", () => {
		 const searchparameterExample1023 = require("../stu3-resources/SearchParameter-RiskAssessment-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample1023)).toBe(true);
	 });

	 test("validate SearchParameter-Schedule-active.json", () => {
		 const searchparameterExample1024 = require("../stu3-resources/SearchParameter-Schedule-active.json");
		 expect(searchparameterValidateFunction(searchparameterExample1024)).toBe(true);
	 });

	 test("validate SearchParameter-Schedule-actor.json", () => {
		 const searchparameterExample1025 = require("../stu3-resources/SearchParameter-Schedule-actor.json");
		 expect(searchparameterValidateFunction(searchparameterExample1025)).toBe(true);
	 });

	 test("validate SearchParameter-Schedule-date.json", () => {
		 const searchparameterExample1026 = require("../stu3-resources/SearchParameter-Schedule-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample1026)).toBe(true);
	 });

	 test("validate SearchParameter-Schedule-identifier.json", () => {
		 const searchparameterExample1027 = require("../stu3-resources/SearchParameter-Schedule-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1027)).toBe(true);
	 });

	 test("validate SearchParameter-Schedule-type.json", () => {
		 const searchparameterExample1028 = require("../stu3-resources/SearchParameter-Schedule-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample1028)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-base.json", () => {
		 const searchparameterExample1029 = require("../stu3-resources/SearchParameter-SearchParameter-base.json");
		 expect(searchparameterValidateFunction(searchparameterExample1029)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-code.json", () => {
		 const searchparameterExample1030 = require("../stu3-resources/SearchParameter-SearchParameter-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample1030)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-component.json", () => {
		 const searchparameterExample1031 = require("../stu3-resources/SearchParameter-SearchParameter-component.json");
		 expect(searchparameterValidateFunction(searchparameterExample1031)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-date.json", () => {
		 const searchparameterExample1032 = require("../stu3-resources/SearchParameter-SearchParameter-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample1032)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-derived-from.json", () => {
		 const searchparameterExample1033 = require("../stu3-resources/SearchParameter-SearchParameter-derived-from.json");
		 expect(searchparameterValidateFunction(searchparameterExample1033)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-description.json", () => {
		 const searchparameterExample1034 = require("../stu3-resources/SearchParameter-SearchParameter-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample1034)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-jurisdiction.json", () => {
		 const searchparameterExample1035 = require("../stu3-resources/SearchParameter-SearchParameter-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample1035)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-name.json", () => {
		 const searchparameterExample1036 = require("../stu3-resources/SearchParameter-SearchParameter-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample1036)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-publisher.json", () => {
		 const searchparameterExample1037 = require("../stu3-resources/SearchParameter-SearchParameter-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample1037)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-status.json", () => {
		 const searchparameterExample1038 = require("../stu3-resources/SearchParameter-SearchParameter-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1038)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-target.json", () => {
		 const searchparameterExample1039 = require("../stu3-resources/SearchParameter-SearchParameter-target.json");
		 expect(searchparameterValidateFunction(searchparameterExample1039)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-type.json", () => {
		 const searchparameterExample1040 = require("../stu3-resources/SearchParameter-SearchParameter-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample1040)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-url.json", () => {
		 const searchparameterExample1041 = require("../stu3-resources/SearchParameter-SearchParameter-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample1041)).toBe(true);
	 });

	 test("validate SearchParameter-SearchParameter-version.json", () => {
		 const searchparameterExample1042 = require("../stu3-resources/SearchParameter-SearchParameter-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample1042)).toBe(true);
	 });

	 test("validate SearchParameter-Sequence-chromosome.json", () => {
		 const searchparameterExample1043 = require("../stu3-resources/SearchParameter-Sequence-chromosome.json");
		 expect(searchparameterValidateFunction(searchparameterExample1043)).toBe(true);
	 });

	 test("validate SearchParameter-Sequence-coordinate.json", () => {
		 const searchparameterExample1044 = require("../stu3-resources/SearchParameter-Sequence-coordinate.json");
		 expect(searchparameterValidateFunction(searchparameterExample1044)).toBe(true);
	 });

	 test("validate SearchParameter-Sequence-end.json", () => {
		 const searchparameterExample1045 = require("../stu3-resources/SearchParameter-Sequence-end.json");
		 expect(searchparameterValidateFunction(searchparameterExample1045)).toBe(true);
	 });

	 test("validate SearchParameter-Sequence-identifier.json", () => {
		 const searchparameterExample1046 = require("../stu3-resources/SearchParameter-Sequence-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1046)).toBe(true);
	 });

	 test("validate SearchParameter-Sequence-patient.json", () => {
		 const searchparameterExample1047 = require("../stu3-resources/SearchParameter-Sequence-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample1047)).toBe(true);
	 });

	 test("validate SearchParameter-Sequence-start.json", () => {
		 const searchparameterExample1048 = require("../stu3-resources/SearchParameter-Sequence-start.json");
		 expect(searchparameterValidateFunction(searchparameterExample1048)).toBe(true);
	 });

	 test("validate SearchParameter-Sequence-type.json", () => {
		 const searchparameterExample1049 = require("../stu3-resources/SearchParameter-Sequence-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample1049)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-composed-of.json", () => {
		 const searchparameterExample1050 = require("../stu3-resources/SearchParameter-ServiceDefinition-composed-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample1050)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-date.json", () => {
		 const searchparameterExample1051 = require("../stu3-resources/SearchParameter-ServiceDefinition-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample1051)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-depends-on.json", () => {
		 const searchparameterExample1052 = require("../stu3-resources/SearchParameter-ServiceDefinition-depends-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample1052)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-derived-from.json", () => {
		 const searchparameterExample1053 = require("../stu3-resources/SearchParameter-ServiceDefinition-derived-from.json");
		 expect(searchparameterValidateFunction(searchparameterExample1053)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-description.json", () => {
		 const searchparameterExample1054 = require("../stu3-resources/SearchParameter-ServiceDefinition-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample1054)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-effective.json", () => {
		 const searchparameterExample1055 = require("../stu3-resources/SearchParameter-ServiceDefinition-effective.json");
		 expect(searchparameterValidateFunction(searchparameterExample1055)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-identifier.json", () => {
		 const searchparameterExample1056 = require("../stu3-resources/SearchParameter-ServiceDefinition-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1056)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-jurisdiction.json", () => {
		 const searchparameterExample1057 = require("../stu3-resources/SearchParameter-ServiceDefinition-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample1057)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-name.json", () => {
		 const searchparameterExample1058 = require("../stu3-resources/SearchParameter-ServiceDefinition-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample1058)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-predecessor.json", () => {
		 const searchparameterExample1059 = require("../stu3-resources/SearchParameter-ServiceDefinition-predecessor.json");
		 expect(searchparameterValidateFunction(searchparameterExample1059)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-publisher.json", () => {
		 const searchparameterExample1060 = require("../stu3-resources/SearchParameter-ServiceDefinition-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample1060)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-status.json", () => {
		 const searchparameterExample1061 = require("../stu3-resources/SearchParameter-ServiceDefinition-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1061)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-successor.json", () => {
		 const searchparameterExample1062 = require("../stu3-resources/SearchParameter-ServiceDefinition-successor.json");
		 expect(searchparameterValidateFunction(searchparameterExample1062)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-title.json", () => {
		 const searchparameterExample1063 = require("../stu3-resources/SearchParameter-ServiceDefinition-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample1063)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-topic.json", () => {
		 const searchparameterExample1064 = require("../stu3-resources/SearchParameter-ServiceDefinition-topic.json");
		 expect(searchparameterValidateFunction(searchparameterExample1064)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-url.json", () => {
		 const searchparameterExample1065 = require("../stu3-resources/SearchParameter-ServiceDefinition-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample1065)).toBe(true);
	 });

	 test("validate SearchParameter-ServiceDefinition-version.json", () => {
		 const searchparameterExample1066 = require("../stu3-resources/SearchParameter-ServiceDefinition-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample1066)).toBe(true);
	 });

	 test("validate SearchParameter-Slot-identifier.json", () => {
		 const searchparameterExample1067 = require("../stu3-resources/SearchParameter-Slot-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1067)).toBe(true);
	 });

	 test("validate SearchParameter-Slot-schedule.json", () => {
		 const searchparameterExample1068 = require("../stu3-resources/SearchParameter-Slot-schedule.json");
		 expect(searchparameterValidateFunction(searchparameterExample1068)).toBe(true);
	 });

	 test("validate SearchParameter-Slot-slot-type.json", () => {
		 const searchparameterExample1069 = require("../stu3-resources/SearchParameter-Slot-slot-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample1069)).toBe(true);
	 });

	 test("validate SearchParameter-Slot-start.json", () => {
		 const searchparameterExample1070 = require("../stu3-resources/SearchParameter-Slot-start.json");
		 expect(searchparameterValidateFunction(searchparameterExample1070)).toBe(true);
	 });

	 test("validate SearchParameter-Slot-status.json", () => {
		 const searchparameterExample1071 = require("../stu3-resources/SearchParameter-Slot-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1071)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-accession.json", () => {
		 const searchparameterExample1072 = require("../stu3-resources/SearchParameter-Specimen-accession.json");
		 expect(searchparameterValidateFunction(searchparameterExample1072)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-bodysite.json", () => {
		 const searchparameterExample1073 = require("../stu3-resources/SearchParameter-Specimen-bodysite.json");
		 expect(searchparameterValidateFunction(searchparameterExample1073)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-collected.json", () => {
		 const searchparameterExample1074 = require("../stu3-resources/SearchParameter-Specimen-collected.json");
		 expect(searchparameterValidateFunction(searchparameterExample1074)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-collector.json", () => {
		 const searchparameterExample1075 = require("../stu3-resources/SearchParameter-Specimen-collector.json");
		 expect(searchparameterValidateFunction(searchparameterExample1075)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-container-id.json", () => {
		 const searchparameterExample1076 = require("../stu3-resources/SearchParameter-Specimen-container-id.json");
		 expect(searchparameterValidateFunction(searchparameterExample1076)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-container.json", () => {
		 const searchparameterExample1077 = require("../stu3-resources/SearchParameter-Specimen-container.json");
		 expect(searchparameterValidateFunction(searchparameterExample1077)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-identifier.json", () => {
		 const searchparameterExample1078 = require("../stu3-resources/SearchParameter-Specimen-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1078)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-parent.json", () => {
		 const searchparameterExample1079 = require("../stu3-resources/SearchParameter-Specimen-parent.json");
		 expect(searchparameterValidateFunction(searchparameterExample1079)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-patient.json", () => {
		 const searchparameterExample1080 = require("../stu3-resources/SearchParameter-Specimen-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample1080)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-status.json", () => {
		 const searchparameterExample1081 = require("../stu3-resources/SearchParameter-Specimen-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1081)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-subject.json", () => {
		 const searchparameterExample1082 = require("../stu3-resources/SearchParameter-Specimen-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample1082)).toBe(true);
	 });

	 test("validate SearchParameter-Specimen-type.json", () => {
		 const searchparameterExample1083 = require("../stu3-resources/SearchParameter-Specimen-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample1083)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-abstract.json", () => {
		 const searchparameterExample1084 = require("../stu3-resources/SearchParameter-StructureDefinition-abstract.json");
		 expect(searchparameterValidateFunction(searchparameterExample1084)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-base-path.json", () => {
		 const searchparameterExample1085 = require("../stu3-resources/SearchParameter-StructureDefinition-base-path.json");
		 expect(searchparameterValidateFunction(searchparameterExample1085)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-base.json", () => {
		 const searchparameterExample1086 = require("../stu3-resources/SearchParameter-StructureDefinition-base.json");
		 expect(searchparameterValidateFunction(searchparameterExample1086)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-context-type.json", () => {
		 const searchparameterExample1087 = require("../stu3-resources/SearchParameter-StructureDefinition-context-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample1087)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-date.json", () => {
		 const searchparameterExample1088 = require("../stu3-resources/SearchParameter-StructureDefinition-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample1088)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-derivation.json", () => {
		 const searchparameterExample1089 = require("../stu3-resources/SearchParameter-StructureDefinition-derivation.json");
		 expect(searchparameterValidateFunction(searchparameterExample1089)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-description.json", () => {
		 const searchparameterExample1090 = require("../stu3-resources/SearchParameter-StructureDefinition-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample1090)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-experimental.json", () => {
		 const searchparameterExample1091 = require("../stu3-resources/SearchParameter-StructureDefinition-experimental.json");
		 expect(searchparameterValidateFunction(searchparameterExample1091)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-ext-context.json", () => {
		 const searchparameterExample1092 = require("../stu3-resources/SearchParameter-StructureDefinition-ext-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample1092)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-identifier.json", () => {
		 const searchparameterExample1093 = require("../stu3-resources/SearchParameter-StructureDefinition-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1093)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-jurisdiction.json", () => {
		 const searchparameterExample1094 = require("../stu3-resources/SearchParameter-StructureDefinition-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample1094)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-keyword.json", () => {
		 const searchparameterExample1095 = require("../stu3-resources/SearchParameter-StructureDefinition-keyword.json");
		 expect(searchparameterValidateFunction(searchparameterExample1095)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-kind.json", () => {
		 const searchparameterExample1096 = require("../stu3-resources/SearchParameter-StructureDefinition-kind.json");
		 expect(searchparameterValidateFunction(searchparameterExample1096)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-name.json", () => {
		 const searchparameterExample1097 = require("../stu3-resources/SearchParameter-StructureDefinition-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample1097)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-path.json", () => {
		 const searchparameterExample1098 = require("../stu3-resources/SearchParameter-StructureDefinition-path.json");
		 expect(searchparameterValidateFunction(searchparameterExample1098)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-publisher.json", () => {
		 const searchparameterExample1099 = require("../stu3-resources/SearchParameter-StructureDefinition-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample1099)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-status.json", () => {
		 const searchparameterExample1100 = require("../stu3-resources/SearchParameter-StructureDefinition-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1100)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-title.json", () => {
		 const searchparameterExample1101 = require("../stu3-resources/SearchParameter-StructureDefinition-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample1101)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-type.json", () => {
		 const searchparameterExample1102 = require("../stu3-resources/SearchParameter-StructureDefinition-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample1102)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-url.json", () => {
		 const searchparameterExample1103 = require("../stu3-resources/SearchParameter-StructureDefinition-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample1103)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-valueset.json", () => {
		 const searchparameterExample1104 = require("../stu3-resources/SearchParameter-StructureDefinition-valueset.json");
		 expect(searchparameterValidateFunction(searchparameterExample1104)).toBe(true);
	 });

	 test("validate SearchParameter-StructureDefinition-version.json", () => {
		 const searchparameterExample1105 = require("../stu3-resources/SearchParameter-StructureDefinition-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample1105)).toBe(true);
	 });

	 test("validate SearchParameter-StructureMap-date.json", () => {
		 const searchparameterExample1106 = require("../stu3-resources/SearchParameter-StructureMap-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample1106)).toBe(true);
	 });

	 test("validate SearchParameter-StructureMap-description.json", () => {
		 const searchparameterExample1107 = require("../stu3-resources/SearchParameter-StructureMap-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample1107)).toBe(true);
	 });

	 test("validate SearchParameter-StructureMap-identifier.json", () => {
		 const searchparameterExample1108 = require("../stu3-resources/SearchParameter-StructureMap-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1108)).toBe(true);
	 });

	 test("validate SearchParameter-StructureMap-jurisdiction.json", () => {
		 const searchparameterExample1109 = require("../stu3-resources/SearchParameter-StructureMap-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample1109)).toBe(true);
	 });

	 test("validate SearchParameter-StructureMap-name.json", () => {
		 const searchparameterExample1110 = require("../stu3-resources/SearchParameter-StructureMap-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample1110)).toBe(true);
	 });

	 test("validate SearchParameter-StructureMap-publisher.json", () => {
		 const searchparameterExample1111 = require("../stu3-resources/SearchParameter-StructureMap-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample1111)).toBe(true);
	 });

	 test("validate SearchParameter-StructureMap-status.json", () => {
		 const searchparameterExample1112 = require("../stu3-resources/SearchParameter-StructureMap-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1112)).toBe(true);
	 });

	 test("validate SearchParameter-StructureMap-title.json", () => {
		 const searchparameterExample1113 = require("../stu3-resources/SearchParameter-StructureMap-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample1113)).toBe(true);
	 });

	 test("validate SearchParameter-StructureMap-url.json", () => {
		 const searchparameterExample1114 = require("../stu3-resources/SearchParameter-StructureMap-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample1114)).toBe(true);
	 });

	 test("validate SearchParameter-StructureMap-version.json", () => {
		 const searchparameterExample1115 = require("../stu3-resources/SearchParameter-StructureMap-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample1115)).toBe(true);
	 });

	 test("validate SearchParameter-Subscription-add-tag.json", () => {
		 const searchparameterExample1116 = require("../stu3-resources/SearchParameter-Subscription-add-tag.json");
		 expect(searchparameterValidateFunction(searchparameterExample1116)).toBe(true);
	 });

	 test("validate SearchParameter-Subscription-contact.json", () => {
		 const searchparameterExample1117 = require("../stu3-resources/SearchParameter-Subscription-contact.json");
		 expect(searchparameterValidateFunction(searchparameterExample1117)).toBe(true);
	 });

	 test("validate SearchParameter-Subscription-criteria.json", () => {
		 const searchparameterExample1118 = require("../stu3-resources/SearchParameter-Subscription-criteria.json");
		 expect(searchparameterValidateFunction(searchparameterExample1118)).toBe(true);
	 });

	 test("validate SearchParameter-Subscription-payload.json", () => {
		 const searchparameterExample1119 = require("../stu3-resources/SearchParameter-Subscription-payload.json");
		 expect(searchparameterValidateFunction(searchparameterExample1119)).toBe(true);
	 });

	 test("validate SearchParameter-Subscription-status.json", () => {
		 const searchparameterExample1120 = require("../stu3-resources/SearchParameter-Subscription-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1120)).toBe(true);
	 });

	 test("validate SearchParameter-Subscription-type.json", () => {
		 const searchparameterExample1121 = require("../stu3-resources/SearchParameter-Subscription-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample1121)).toBe(true);
	 });

	 test("validate SearchParameter-Subscription-url.json", () => {
		 const searchparameterExample1122 = require("../stu3-resources/SearchParameter-Subscription-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample1122)).toBe(true);
	 });

	 test("validate SearchParameter-Substance-category.json", () => {
		 const searchparameterExample1123 = require("../stu3-resources/SearchParameter-Substance-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample1123)).toBe(true);
	 });

	 test("validate SearchParameter-Substance-code.json", () => {
		 const searchparameterExample1124 = require("../stu3-resources/SearchParameter-Substance-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample1124)).toBe(true);
	 });

	 test("validate SearchParameter-Substance-container-identifier.json", () => {
		 const searchparameterExample1125 = require("../stu3-resources/SearchParameter-Substance-container-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1125)).toBe(true);
	 });

	 test("validate SearchParameter-Substance-expiry.json", () => {
		 const searchparameterExample1126 = require("../stu3-resources/SearchParameter-Substance-expiry.json");
		 expect(searchparameterValidateFunction(searchparameterExample1126)).toBe(true);
	 });

	 test("validate SearchParameter-Substance-identifier.json", () => {
		 const searchparameterExample1127 = require("../stu3-resources/SearchParameter-Substance-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1127)).toBe(true);
	 });

	 test("validate SearchParameter-Substance-quantity.json", () => {
		 const searchparameterExample1128 = require("../stu3-resources/SearchParameter-Substance-quantity.json");
		 expect(searchparameterValidateFunction(searchparameterExample1128)).toBe(true);
	 });

	 test("validate SearchParameter-Substance-status.json", () => {
		 const searchparameterExample1129 = require("../stu3-resources/SearchParameter-Substance-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1129)).toBe(true);
	 });

	 test("validate SearchParameter-Substance-substance-reference.json", () => {
		 const searchparameterExample1130 = require("../stu3-resources/SearchParameter-Substance-substance-reference.json");
		 expect(searchparameterValidateFunction(searchparameterExample1130)).toBe(true);
	 });

	 test("validate SearchParameter-SupplyDelivery-receiver.json", () => {
		 const searchparameterExample1131 = require("../stu3-resources/SearchParameter-SupplyDelivery-receiver.json");
		 expect(searchparameterValidateFunction(searchparameterExample1131)).toBe(true);
	 });

	 test("validate SearchParameter-SupplyDelivery-status.json", () => {
		 const searchparameterExample1132 = require("../stu3-resources/SearchParameter-SupplyDelivery-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1132)).toBe(true);
	 });

	 test("validate SearchParameter-SupplyDelivery-supplier.json", () => {
		 const searchparameterExample1133 = require("../stu3-resources/SearchParameter-SupplyDelivery-supplier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1133)).toBe(true);
	 });

	 test("validate SearchParameter-SupplyRequest-category.json", () => {
		 const searchparameterExample1134 = require("../stu3-resources/SearchParameter-SupplyRequest-category.json");
		 expect(searchparameterValidateFunction(searchparameterExample1134)).toBe(true);
	 });

	 test("validate SearchParameter-SupplyRequest-requester.json", () => {
		 const searchparameterExample1135 = require("../stu3-resources/SearchParameter-SupplyRequest-requester.json");
		 expect(searchparameterValidateFunction(searchparameterExample1135)).toBe(true);
	 });

	 test("validate SearchParameter-SupplyRequest-status.json", () => {
		 const searchparameterExample1136 = require("../stu3-resources/SearchParameter-SupplyRequest-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1136)).toBe(true);
	 });

	 test("validate SearchParameter-SupplyRequest-supplier.json", () => {
		 const searchparameterExample1137 = require("../stu3-resources/SearchParameter-SupplyRequest-supplier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1137)).toBe(true);
	 });

	 test("validate SearchParameter-Task-authored-on.json", () => {
		 const searchparameterExample1138 = require("../stu3-resources/SearchParameter-Task-authored-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample1138)).toBe(true);
	 });

	 test("validate SearchParameter-Task-based-on.json", () => {
		 const searchparameterExample1139 = require("../stu3-resources/SearchParameter-Task-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample1139)).toBe(true);
	 });

	 test("validate SearchParameter-Task-business-status.json", () => {
		 const searchparameterExample1140 = require("../stu3-resources/SearchParameter-Task-business-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1140)).toBe(true);
	 });

	 test("validate SearchParameter-Task-code.json", () => {
		 const searchparameterExample1141 = require("../stu3-resources/SearchParameter-Task-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample1141)).toBe(true);
	 });

	 test("validate SearchParameter-Task-context.json", () => {
		 const searchparameterExample1142 = require("../stu3-resources/SearchParameter-Task-context.json");
		 expect(searchparameterValidateFunction(searchparameterExample1142)).toBe(true);
	 });

	 test("validate SearchParameter-Task-focus.json", () => {
		 const searchparameterExample1143 = require("../stu3-resources/SearchParameter-Task-focus.json");
		 expect(searchparameterValidateFunction(searchparameterExample1143)).toBe(true);
	 });

	 test("validate SearchParameter-Task-group-identifier.json", () => {
		 const searchparameterExample1144 = require("../stu3-resources/SearchParameter-Task-group-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1144)).toBe(true);
	 });

	 test("validate SearchParameter-Task-identifier.json", () => {
		 const searchparameterExample1145 = require("../stu3-resources/SearchParameter-Task-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1145)).toBe(true);
	 });

	 test("validate SearchParameter-Task-intent.json", () => {
		 const searchparameterExample1146 = require("../stu3-resources/SearchParameter-Task-intent.json");
		 expect(searchparameterValidateFunction(searchparameterExample1146)).toBe(true);
	 });

	 test("validate SearchParameter-Task-modified.json", () => {
		 const searchparameterExample1147 = require("../stu3-resources/SearchParameter-Task-modified.json");
		 expect(searchparameterValidateFunction(searchparameterExample1147)).toBe(true);
	 });

	 test("validate SearchParameter-Task-organization.json", () => {
		 const searchparameterExample1148 = require("../stu3-resources/SearchParameter-Task-organization.json");
		 expect(searchparameterValidateFunction(searchparameterExample1148)).toBe(true);
	 });

	 test("validate SearchParameter-Task-owner.json", () => {
		 const searchparameterExample1149 = require("../stu3-resources/SearchParameter-Task-owner.json");
		 expect(searchparameterValidateFunction(searchparameterExample1149)).toBe(true);
	 });

	 test("validate SearchParameter-Task-part-of.json", () => {
		 const searchparameterExample1150 = require("../stu3-resources/SearchParameter-Task-part-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample1150)).toBe(true);
	 });

	 test("validate SearchParameter-Task-patient.json", () => {
		 const searchparameterExample1151 = require("../stu3-resources/SearchParameter-Task-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample1151)).toBe(true);
	 });

	 test("validate SearchParameter-Task-performer.json", () => {
		 const searchparameterExample1152 = require("../stu3-resources/SearchParameter-Task-performer.json");
		 expect(searchparameterValidateFunction(searchparameterExample1152)).toBe(true);
	 });

	 test("validate SearchParameter-Task-period.json", () => {
		 const searchparameterExample1153 = require("../stu3-resources/SearchParameter-Task-period.json");
		 expect(searchparameterValidateFunction(searchparameterExample1153)).toBe(true);
	 });

	 test("validate SearchParameter-Task-priority.json", () => {
		 const searchparameterExample1154 = require("../stu3-resources/SearchParameter-Task-priority.json");
		 expect(searchparameterValidateFunction(searchparameterExample1154)).toBe(true);
	 });

	 test("validate SearchParameter-Task-requester.json", () => {
		 const searchparameterExample1155 = require("../stu3-resources/SearchParameter-Task-requester.json");
		 expect(searchparameterValidateFunction(searchparameterExample1155)).toBe(true);
	 });

	 test("validate SearchParameter-Task-status.json", () => {
		 const searchparameterExample1156 = require("../stu3-resources/SearchParameter-Task-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1156)).toBe(true);
	 });

	 test("validate SearchParameter-Task-subject.json", () => {
		 const searchparameterExample1157 = require("../stu3-resources/SearchParameter-Task-subject.json");
		 expect(searchparameterValidateFunction(searchparameterExample1157)).toBe(true);
	 });

	 test("validate SearchParameter-TestReport-identifier.json", () => {
		 const searchparameterExample1158 = require("../stu3-resources/SearchParameter-TestReport-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1158)).toBe(true);
	 });

	 test("validate SearchParameter-TestReport-issued.json", () => {
		 const searchparameterExample1159 = require("../stu3-resources/SearchParameter-TestReport-issued.json");
		 expect(searchparameterValidateFunction(searchparameterExample1159)).toBe(true);
	 });

	 test("validate SearchParameter-TestReport-participant.json", () => {
		 const searchparameterExample1160 = require("../stu3-resources/SearchParameter-TestReport-participant.json");
		 expect(searchparameterValidateFunction(searchparameterExample1160)).toBe(true);
	 });

	 test("validate SearchParameter-TestReport-result.json", () => {
		 const searchparameterExample1161 = require("../stu3-resources/SearchParameter-TestReport-result.json");
		 expect(searchparameterValidateFunction(searchparameterExample1161)).toBe(true);
	 });

	 test("validate SearchParameter-TestReport-tester.json", () => {
		 const searchparameterExample1162 = require("../stu3-resources/SearchParameter-TestReport-tester.json");
		 expect(searchparameterValidateFunction(searchparameterExample1162)).toBe(true);
	 });

	 test("validate SearchParameter-TestReport-testscript.json", () => {
		 const searchparameterExample1163 = require("../stu3-resources/SearchParameter-TestReport-testscript.json");
		 expect(searchparameterValidateFunction(searchparameterExample1163)).toBe(true);
	 });

	 test("validate SearchParameter-TestScript-date.json", () => {
		 const searchparameterExample1164 = require("../stu3-resources/SearchParameter-TestScript-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample1164)).toBe(true);
	 });

	 test("validate SearchParameter-TestScript-description.json", () => {
		 const searchparameterExample1165 = require("../stu3-resources/SearchParameter-TestScript-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample1165)).toBe(true);
	 });

	 test("validate SearchParameter-TestScript-identifier.json", () => {
		 const searchparameterExample1166 = require("../stu3-resources/SearchParameter-TestScript-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1166)).toBe(true);
	 });

	 test("validate SearchParameter-TestScript-jurisdiction.json", () => {
		 const searchparameterExample1167 = require("../stu3-resources/SearchParameter-TestScript-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample1167)).toBe(true);
	 });

	 test("validate SearchParameter-TestScript-name.json", () => {
		 const searchparameterExample1168 = require("../stu3-resources/SearchParameter-TestScript-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample1168)).toBe(true);
	 });

	 test("validate SearchParameter-TestScript-publisher.json", () => {
		 const searchparameterExample1169 = require("../stu3-resources/SearchParameter-TestScript-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample1169)).toBe(true);
	 });

	 test("validate SearchParameter-TestScript-status.json", () => {
		 const searchparameterExample1170 = require("../stu3-resources/SearchParameter-TestScript-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1170)).toBe(true);
	 });

	 test("validate SearchParameter-TestScript-testscript-capability.json", () => {
		 const searchparameterExample1171 = require("../stu3-resources/SearchParameter-TestScript-testscript-capability.json");
		 expect(searchparameterValidateFunction(searchparameterExample1171)).toBe(true);
	 });

	 test("validate SearchParameter-TestScript-title.json", () => {
		 const searchparameterExample1172 = require("../stu3-resources/SearchParameter-TestScript-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample1172)).toBe(true);
	 });

	 test("validate SearchParameter-TestScript-url.json", () => {
		 const searchparameterExample1173 = require("../stu3-resources/SearchParameter-TestScript-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample1173)).toBe(true);
	 });

	 test("validate SearchParameter-TestScript-version.json", () => {
		 const searchparameterExample1174 = require("../stu3-resources/SearchParameter-TestScript-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample1174)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-date.json", () => {
		 const searchparameterExample1175 = require("../stu3-resources/SearchParameter-ValueSet-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample1175)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-description.json", () => {
		 const searchparameterExample1176 = require("../stu3-resources/SearchParameter-ValueSet-description.json");
		 expect(searchparameterValidateFunction(searchparameterExample1176)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-expansion.json", () => {
		 const searchparameterExample1177 = require("../stu3-resources/SearchParameter-ValueSet-expansion.json");
		 expect(searchparameterValidateFunction(searchparameterExample1177)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-identifier.json", () => {
		 const searchparameterExample1178 = require("../stu3-resources/SearchParameter-ValueSet-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1178)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-jurisdiction.json", () => {
		 const searchparameterExample1179 = require("../stu3-resources/SearchParameter-ValueSet-jurisdiction.json");
		 expect(searchparameterValidateFunction(searchparameterExample1179)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-name.json", () => {
		 const searchparameterExample1180 = require("../stu3-resources/SearchParameter-ValueSet-name.json");
		 expect(searchparameterValidateFunction(searchparameterExample1180)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-publisher.json", () => {
		 const searchparameterExample1181 = require("../stu3-resources/SearchParameter-ValueSet-publisher.json");
		 expect(searchparameterValidateFunction(searchparameterExample1181)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-reference.json", () => {
		 const searchparameterExample1182 = require("../stu3-resources/SearchParameter-ValueSet-reference.json");
		 expect(searchparameterValidateFunction(searchparameterExample1182)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-status.json", () => {
		 const searchparameterExample1183 = require("../stu3-resources/SearchParameter-ValueSet-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1183)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-title.json", () => {
		 const searchparameterExample1184 = require("../stu3-resources/SearchParameter-ValueSet-title.json");
		 expect(searchparameterValidateFunction(searchparameterExample1184)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-url.json", () => {
		 const searchparameterExample1185 = require("../stu3-resources/SearchParameter-ValueSet-url.json");
		 expect(searchparameterValidateFunction(searchparameterExample1185)).toBe(true);
	 });

	 test("validate SearchParameter-ValueSet-version.json", () => {
		 const searchparameterExample1186 = require("../stu3-resources/SearchParameter-ValueSet-version.json");
		 expect(searchparameterValidateFunction(searchparameterExample1186)).toBe(true);
	 });

	 test("validate SearchParameter-VisionPrescription-datewritten.json", () => {
		 const searchparameterExample1187 = require("../stu3-resources/SearchParameter-VisionPrescription-datewritten.json");
		 expect(searchparameterValidateFunction(searchparameterExample1187)).toBe(true);
	 });

	 test("validate SearchParameter-VisionPrescription-prescriber.json", () => {
		 const searchparameterExample1188 = require("../stu3-resources/SearchParameter-VisionPrescription-prescriber.json");
		 expect(searchparameterValidateFunction(searchparameterExample1188)).toBe(true);
	 });

	 test("validate SearchParameter-clinical-code.json", () => {
		 const searchparameterExample1189 = require("../stu3-resources/SearchParameter-clinical-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample1189)).toBe(true);
	 });

	 test("validate SearchParameter-clinical-date.json", () => {
		 const searchparameterExample1190 = require("../stu3-resources/SearchParameter-clinical-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample1190)).toBe(true);
	 });

	 test("validate SearchParameter-clinical-encounter.json", () => {
		 const searchparameterExample1191 = require("../stu3-resources/SearchParameter-clinical-encounter.json");
		 expect(searchparameterValidateFunction(searchparameterExample1191)).toBe(true);
	 });

	 test("validate SearchParameter-clinical-identifier.json", () => {
		 const searchparameterExample1192 = require("../stu3-resources/SearchParameter-clinical-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1192)).toBe(true);
	 });

	 test("validate SearchParameter-clinical-patient.json", () => {
		 const searchparameterExample1193 = require("../stu3-resources/SearchParameter-clinical-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample1193)).toBe(true);
	 });

	 test("validate SearchParameter-clinical-type.json", () => {
		 const searchparameterExample1194 = require("../stu3-resources/SearchParameter-clinical-type.json");
		 expect(searchparameterValidateFunction(searchparameterExample1194)).toBe(true);
	 });

	 test("validate SearchParameter-codesystem-extensions-CodeSystem-author.json", () => {
		 const searchparameterExample1195 = require("../stu3-resources/SearchParameter-codesystem-extensions-CodeSystem-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample1195)).toBe(true);
	 });

	 test("validate SearchParameter-codesystem-extensions-CodeSystem-effective.json", () => {
		 const searchparameterExample1196 = require("../stu3-resources/SearchParameter-codesystem-extensions-CodeSystem-effective.json");
		 expect(searchparameterValidateFunction(searchparameterExample1196)).toBe(true);
	 });

	 test("validate SearchParameter-codesystem-extensions-CodeSystem-end.json", () => {
		 const searchparameterExample1197 = require("../stu3-resources/SearchParameter-codesystem-extensions-CodeSystem-end.json");
		 expect(searchparameterValidateFunction(searchparameterExample1197)).toBe(true);
	 });

	 test("validate SearchParameter-codesystem-extensions-CodeSystem-keyword.json", () => {
		 const searchparameterExample1198 = require("../stu3-resources/SearchParameter-codesystem-extensions-CodeSystem-keyword.json");
		 expect(searchparameterValidateFunction(searchparameterExample1198)).toBe(true);
	 });

	 test("validate SearchParameter-codesystem-extensions-CodeSystem-workflow.json", () => {
		 const searchparameterExample1199 = require("../stu3-resources/SearchParameter-codesystem-extensions-CodeSystem-workflow.json");
		 expect(searchparameterValidateFunction(searchparameterExample1199)).toBe(true);
	 });

	 test("validate SearchParameter-condition-extensions-Condition-based-on.json", () => {
		 const searchparameterExample1200 = require("../stu3-resources/SearchParameter-condition-extensions-Condition-based-on.json");
		 expect(searchparameterValidateFunction(searchparameterExample1200)).toBe(true);
	 });

	 test("validate SearchParameter-condition-extensions-Condition-definition.json", () => {
		 const searchparameterExample1201 = require("../stu3-resources/SearchParameter-condition-extensions-Condition-definition.json");
		 expect(searchparameterValidateFunction(searchparameterExample1201)).toBe(true);
	 });

	 test("validate SearchParameter-condition-extensions-Condition-part-of.json", () => {
		 const searchparameterExample1202 = require("../stu3-resources/SearchParameter-condition-extensions-Condition-part-of.json");
		 expect(searchparameterValidateFunction(searchparameterExample1202)).toBe(true);
	 });

	 test("validate SearchParameter-device-extensions-Device-din.json", () => {
		 const searchparameterExample1203 = require("../stu3-resources/SearchParameter-device-extensions-Device-din.json");
		 expect(searchparameterValidateFunction(searchparameterExample1203)).toBe(true);
	 });

	 test("validate SearchParameter-diagnosticreport-genetic-DiagnosticReport-assessed-condition.json", () => {
		 const searchparameterExample1204 = require("../stu3-resources/SearchParameter-diagnosticreport-genetic-DiagnosticReport-assessed-condition.json");
		 expect(searchparameterValidateFunction(searchparameterExample1204)).toBe(true);
	 });

	 test("validate SearchParameter-elementdefinition-11179-DataElement-objectClass.json", () => {
		 const searchparameterExample1205 = require("../stu3-resources/SearchParameter-elementdefinition-11179-DataElement-objectClass.json");
		 expect(searchparameterValidateFunction(searchparameterExample1205)).toBe(true);
	 });

	 test("validate SearchParameter-elementdefinition-11179-DataElement-objectClassProperty.json", () => {
		 const searchparameterExample1206 = require("../stu3-resources/SearchParameter-elementdefinition-11179-DataElement-objectClassProperty.json");
		 expect(searchparameterValidateFunction(searchparameterExample1206)).toBe(true);
	 });

	 test("validate SearchParameter-example-extension.json", () => {
		 const searchparameterExample1207 = require("../stu3-resources/SearchParameter-example-extension.json");
		 expect(searchparameterValidateFunction(searchparameterExample1207)).toBe(true);
	 });

	 test("validate SearchParameter-example-reference.json", () => {
		 const searchparameterExample1208 = require("../stu3-resources/SearchParameter-example-reference.json");
		 console.log(searchparameterValidateFunction(searchparameterExample1208));
		 console.log(searchparameterValidateFunction.errors);
		 expect(searchparameterValidateFunction(searchparameterExample1208)).toBe(true);
	 });

	 test("validate SearchParameter-example.json", () => {
		 const searchparameterExample1209 = require("../stu3-resources/SearchParameter-example.json");
		 expect(searchparameterValidateFunction(searchparameterExample1209)).toBe(true);
	 });

	 test("validate SearchParameter-individual-address-city.json", () => {
		 const searchparameterExample1210 = require("../stu3-resources/SearchParameter-individual-address-city.json");
		 expect(searchparameterValidateFunction(searchparameterExample1210)).toBe(true);
	 });

	 test("validate SearchParameter-individual-address-country.json", () => {
		 const searchparameterExample1211 = require("../stu3-resources/SearchParameter-individual-address-country.json");
		 expect(searchparameterValidateFunction(searchparameterExample1211)).toBe(true);
	 });

	 test("validate SearchParameter-individual-address-postalcode.json", () => {
		 const searchparameterExample1212 = require("../stu3-resources/SearchParameter-individual-address-postalcode.json");
		 expect(searchparameterValidateFunction(searchparameterExample1212)).toBe(true);
	 });

	 test("validate SearchParameter-individual-address-state.json", () => {
		 const searchparameterExample1213 = require("../stu3-resources/SearchParameter-individual-address-state.json");
		 expect(searchparameterValidateFunction(searchparameterExample1213)).toBe(true);
	 });

	 test("validate SearchParameter-individual-address-use.json", () => {
		 const searchparameterExample1214 = require("../stu3-resources/SearchParameter-individual-address-use.json");
		 expect(searchparameterValidateFunction(searchparameterExample1214)).toBe(true);
	 });

	 test("validate SearchParameter-individual-address.json", () => {
		 const searchparameterExample1215 = require("../stu3-resources/SearchParameter-individual-address.json");
		 expect(searchparameterValidateFunction(searchparameterExample1215)).toBe(true);
	 });

	 test("validate SearchParameter-individual-birthdate.json", () => {
		 const searchparameterExample1216 = require("../stu3-resources/SearchParameter-individual-birthdate.json");
		 expect(searchparameterValidateFunction(searchparameterExample1216)).toBe(true);
	 });

	 test("validate SearchParameter-individual-email.json", () => {
		 const searchparameterExample1217 = require("../stu3-resources/SearchParameter-individual-email.json");
		 expect(searchparameterValidateFunction(searchparameterExample1217)).toBe(true);
	 });

	 test("validate SearchParameter-individual-family.json", () => {
		 const searchparameterExample1218 = require("../stu3-resources/SearchParameter-individual-family.json");
		 expect(searchparameterValidateFunction(searchparameterExample1218)).toBe(true);
	 });

	 test("validate SearchParameter-individual-gender.json", () => {
		 const searchparameterExample1219 = require("../stu3-resources/SearchParameter-individual-gender.json");
		 expect(searchparameterValidateFunction(searchparameterExample1219)).toBe(true);
	 });

	 test("validate SearchParameter-individual-given.json", () => {
		 const searchparameterExample1220 = require("../stu3-resources/SearchParameter-individual-given.json");
		 expect(searchparameterValidateFunction(searchparameterExample1220)).toBe(true);
	 });

	 test("validate SearchParameter-individual-phone.json", () => {
		 const searchparameterExample1221 = require("../stu3-resources/SearchParameter-individual-phone.json");
		 expect(searchparameterValidateFunction(searchparameterExample1221)).toBe(true);
	 });

	 test("validate SearchParameter-individual-phonetic.json", () => {
		 const searchparameterExample1222 = require("../stu3-resources/SearchParameter-individual-phonetic.json");
		 expect(searchparameterValidateFunction(searchparameterExample1222)).toBe(true);
	 });

	 test("validate SearchParameter-individual-telecom.json", () => {
		 const searchparameterExample1223 = require("../stu3-resources/SearchParameter-individual-telecom.json");
		 expect(searchparameterValidateFunction(searchparameterExample1223)).toBe(true);
	 });

	 test("validate SearchParameter-location-extensions-Location-alias.json", () => {
		 const searchparameterExample1224 = require("../stu3-resources/SearchParameter-location-extensions-Location-alias.json");
		 expect(searchparameterValidateFunction(searchparameterExample1224)).toBe(true);
	 });

	 test("validate SearchParameter-medications-code.json", () => {
		 const searchparameterExample1225 = require("../stu3-resources/SearchParameter-medications-code.json");
		 expect(searchparameterValidateFunction(searchparameterExample1225)).toBe(true);
	 });

	 test("validate SearchParameter-medications-date.json", () => {
		 const searchparameterExample1226 = require("../stu3-resources/SearchParameter-medications-date.json");
		 expect(searchparameterValidateFunction(searchparameterExample1226)).toBe(true);
	 });

	 test("validate SearchParameter-medications-identifier.json", () => {
		 const searchparameterExample1227 = require("../stu3-resources/SearchParameter-medications-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1227)).toBe(true);
	 });

	 test("validate SearchParameter-medications-medication.json", () => {
		 const searchparameterExample1228 = require("../stu3-resources/SearchParameter-medications-medication.json");
		 expect(searchparameterValidateFunction(searchparameterExample1228)).toBe(true);
	 });

	 test("validate SearchParameter-medications-patient.json", () => {
		 const searchparameterExample1229 = require("../stu3-resources/SearchParameter-medications-patient.json");
		 expect(searchparameterValidateFunction(searchparameterExample1229)).toBe(true);
	 });

	 test("validate SearchParameter-medications-prescription.json", () => {
		 const searchparameterExample1230 = require("../stu3-resources/SearchParameter-medications-prescription.json");
		 expect(searchparameterValidateFunction(searchparameterExample1230)).toBe(true);
	 });

	 test("validate SearchParameter-medications-status.json", () => {
		 const searchparameterExample1231 = require("../stu3-resources/SearchParameter-medications-status.json");
		 expect(searchparameterValidateFunction(searchparameterExample1231)).toBe(true);
	 });

	 test("validate SearchParameter-observation-genetic-Observation-amino-acid-change.json", () => {
		 const searchparameterExample1232 = require("../stu3-resources/SearchParameter-observation-genetic-Observation-amino-acid-change.json");
		 expect(searchparameterValidateFunction(searchparameterExample1232)).toBe(true);
	 });

	 test("validate SearchParameter-observation-genetic-Observation-dna-variant.json", () => {
		 const searchparameterExample1233 = require("../stu3-resources/SearchParameter-observation-genetic-Observation-dna-variant.json");
		 expect(searchparameterValidateFunction(searchparameterExample1233)).toBe(true);
	 });

	 test("validate SearchParameter-observation-genetic-Observation-gene-amino-acid-change.json", () => {
		 const searchparameterExample1234 = require("../stu3-resources/SearchParameter-observation-genetic-Observation-gene-amino-acid-change.json");
		 expect(searchparameterValidateFunction(searchparameterExample1234)).toBe(true);
	 });

	 test("validate SearchParameter-observation-genetic-Observation-gene-dnavariant.json", () => {
		 const searchparameterExample1235 = require("../stu3-resources/SearchParameter-observation-genetic-Observation-gene-dnavariant.json");
		 expect(searchparameterValidateFunction(searchparameterExample1235)).toBe(true);
	 });

	 test("validate SearchParameter-observation-genetic-Observation-gene-identifier.json", () => {
		 const searchparameterExample1236 = require("../stu3-resources/SearchParameter-observation-genetic-Observation-gene-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample1236)).toBe(true);
	 });

	 test("validate SearchParameter-organization-extensions-Organization-alias.json", () => {
		 const searchparameterExample1237 = require("../stu3-resources/SearchParameter-organization-extensions-Organization-alias.json");
		 expect(searchparameterValidateFunction(searchparameterExample1237)).toBe(true);
	 });

	 test("validate SearchParameter-patient-extensions-Patient-age.json", () => {
		 const searchparameterExample1238 = require("../stu3-resources/SearchParameter-patient-extensions-Patient-age.json");
		 expect(searchparameterValidateFunction(searchparameterExample1238)).toBe(true);
	 });

	 test("validate SearchParameter-patient-extensions-Patient-birthOrderBoolean.json", () => {
		 const searchparameterExample1239 = require("../stu3-resources/SearchParameter-patient-extensions-Patient-birthOrderBoolean.json");
		 expect(searchparameterValidateFunction(searchparameterExample1239)).toBe(true);
	 });

	 test("validate SearchParameter-patient-extensions-Patient-mothersMaidenName.json", () => {
		 const searchparameterExample1240 = require("../stu3-resources/SearchParameter-patient-extensions-Patient-mothersMaidenName.json");
		 expect(searchparameterValidateFunction(searchparameterExample1240)).toBe(true);
	 });

	 test("validate SearchParameter-valueset-extensions-ValueSet-author.json", () => {
		 const searchparameterExample1241 = require("../stu3-resources/SearchParameter-valueset-extensions-ValueSet-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample1241)).toBe(true);
	 });

	 test("validate SearchParameter-valueset-extensions-ValueSet-effective.json", () => {
		 const searchparameterExample1242 = require("../stu3-resources/SearchParameter-valueset-extensions-ValueSet-effective.json");
		 expect(searchparameterValidateFunction(searchparameterExample1242)).toBe(true);
	 });

	 test("validate SearchParameter-valueset-extensions-ValueSet-end.json", () => {
		 const searchparameterExample1243 = require("../stu3-resources/SearchParameter-valueset-extensions-ValueSet-end.json");
		 expect(searchparameterValidateFunction(searchparameterExample1243)).toBe(true);
	 });

	 test("validate SearchParameter-valueset-extensions-ValueSet-keyword.json", () => {
		 const searchparameterExample1244 = require("../stu3-resources/SearchParameter-valueset-extensions-ValueSet-keyword.json");
		 expect(searchparameterValidateFunction(searchparameterExample1244)).toBe(true);
	 });

	 test("validate SearchParameter-valueset-extensions-ValueSet-workflow.json", () => {
		 const searchparameterExample1245 = require("../stu3-resources/SearchParameter-valueset-extensions-ValueSet-workflow.json");
		 expect(searchparameterValidateFunction(searchparameterExample1245)).toBe(true);
	 });

});
