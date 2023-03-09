package com.db.cleanenergyforbusinesses.controller;

import com.db.cleanenergyforbusinesses.model.SurveyMod;
import com.db.cleanenergyforbusinesses.repository.SurveyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class SurveyCont {

    @Autowired
    private SurveyRepo surveyRepository;

    @PostMapping("/Survey")
    SurveyMod newSurvey(@RequestBody SurveyMod newSurvey){
        return surveyRepository.save(newSurvey);
    }
    @GetMapping("/Survey_log")
    List<SurveyMod> getAllUsers(){
        return surveyRepository.findAll();
    }
    @GetMapping("/Survey/{id}")
    Optional<SurveyMod> getUserById(@PathVariable Long id){
        return surveyRepository.findById(id);
    }
    @PutMapping("/Survey/{id}")
    Optional<SurveyMod> updateSurvey(@RequestBody SurveyMod newSurvey,@PathVariable Long id){
        return surveyRepository.findById(id)
                .map(surveyDetails -> {
                    surveyDetails.setBusinessName(newSurvey.getBusinessName());
                    surveyDetails.setLocation(newSurvey.getLocation());
                    surveyDetails.setTypeOfBusiness(newSurvey.getTypeOfBusiness());
                    surveyDetails.setUtilProvider(newSurvey.getUtilProvider());
                    surveyDetails.setCo2(newSurvey.getCo2());
                    return surveyRepository.save(surveyDetails);
                });
    }
    @DeleteMapping("/Survey/{id}")
    String deleteSurvey(@PathVariable Long id){
        surveyRepository.deleteById(id);
        return "Survey by id "+id+" is now removed";
    }
}
