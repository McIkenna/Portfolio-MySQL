package com.ikenna.portfolios.infos;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
public class Skills {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotEmpty(message = "skill name must not be empty")
    @Column(updatable = false, unique = true)
    private String skillName;
    private String subName;
    private String proficiency;
    private int rating;
    @Lob
    private byte[] image;
    private String docName;
    private String docType;
    private String urlDownload;

    public Skills(){

    }
    public Skills(String skillName,
                  String subName,
                  String proficiency,
                  int rating,
                  byte[] image,
                  String docName,
                  String docType,
                  String urlDownload) {

        this.skillName = skillName;
        this.subName = subName;
        this.proficiency = proficiency;
        this.rating = rating;
        this.image = image;
        this.docName = docName;
        this.docType = docType;
        this.urlDownload = urlDownload;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    public String getSubName() {
        return subName;
    }

    public void setSubName(String subName) {
        this.subName = subName;
    }

    public String getProficiency() {
        return proficiency;
    }

    public void setProficiency(String proficiency) {
        this.proficiency = proficiency;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
    public String setUrlDownload(String urlDownload) {
        this.urlDownload = urlDownload;
        return urlDownload;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getDocName() {
        return docName;
    }

    public void setDocName(String docName) {
        this.docName = docName;
    }

    public String getDocType() {
        return docType;
    }

    public void setDocType(String docType) {
        this.docType = docType;
    }

    public String getUrlDownload() {
        return urlDownload;
    }
}
