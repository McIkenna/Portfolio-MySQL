package com.ikenna.portfolios.infos;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Doc {
        @Id
        @GeneratedValue(strategy= GenerationType.IDENTITY)
        private Integer id;
        private String docName;
        private String docType;
        @Lob
        private byte[] image;
        private String urlDownload;
        private String link;
        private String projectTitle;
        private String keyRole;
        private String projectSummary;
        private int progressRate;
        private Date startDate;
        private Date endDate;

        public Doc() {}

    public Doc(
               String docName,
               String docType,
               byte[] image,
              String urlDownload,
              String link,
              String projectTitle,
               String projectSummary,
              int progressRate,
               String keyRole,
               Date startDate,
               Date endDate ) {

        this.docName = docName;
        this.docType = docType;
        this.image = image;
        this.urlDownload = urlDownload;
        this.link = link;
        this.projectTitle = projectTitle;
        this.projectSummary = projectSummary;
        this.progressRate = progressRate;
        this.keyRole = keyRole;
        this.startDate = startDate;
        this.endDate = endDate;
    }


    public String getUrlDownload() {
        return urlDownload;
    }

    public String setUrlDownload(String urlDownload) {
        this.urlDownload = urlDownload;
        return urlDownload;
    }

    public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
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

        public byte[] getImage() {
            return image;
        }

        public void setImage(byte[] image) {
            this.image = image;
        }


    public String getProjectTitle() {
        return projectTitle;
    }

    public void setProjectTitle(String projectTitle) {
        this.projectTitle = projectTitle;
    }

    public String getKeyRole() {
        return keyRole;
    }

    public void setKeyRole(String keyRole) {
        this.keyRole = keyRole;
    }

    public String getProjectSummary() {
        return projectSummary;
    }

    public void setProjectSummary(String projectSummary) {
        this.projectSummary = projectSummary;
    }

    public int getProgressRate() {
        return progressRate;
    }

    public void setProgressRate(int progressRate) {
        this.progressRate = progressRate;
    }


    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
