package com.db.cleanenergyforbusinesses.repository;

import com.db.cleanenergyforbusinesses.model.SurveyMod;
import org.springframework.data.jpa.repository.JpaRepository;
public interface SurveyRepo extends JpaRepository <SurveyMod, Long> {
    SurveyMod findBybusinessName(String businessName);
}