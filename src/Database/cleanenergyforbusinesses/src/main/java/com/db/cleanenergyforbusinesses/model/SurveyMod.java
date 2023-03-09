package com.db.cleanenergyforbusinesses.model;
import jakarta.persistence.*;

@Entity
@Table(name = "surveyTable")
public class SurveyMod {
    @Id
    @GeneratedValue
    @Column(name = "survey_id")
    private Long surveyId;
    private String businessName;
    private String location;
    private String typeOfBusiness;
    private String utilProvider;
    private Double co2;

    public Long getSurveyId() {
        return surveyId;
    }
    public void setSurveyId(Long surveyId) {
        this.surveyId = surveyId;
    }
    public String getBusinessName() {
        return businessName;
    }
    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getTypeOfBusiness() {
        return typeOfBusiness;
    }
    public void setTypeOfBusiness(String typeOfBusiness) {
        this.typeOfBusiness = typeOfBusiness;
    }
    public String getUtilProvider() {
        return utilProvider;
    }
    public void setUtilProvider(String utilProvider) {
        this.utilProvider = utilProvider;
    }
    public Double getCo2() {
        return co2;
    }
    public void setCo2(Double co2) {
        this.co2 = co2;
    }
}
