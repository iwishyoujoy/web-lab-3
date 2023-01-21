package com.iwishyoujoy.weblab3;

import com.iwishyoujoy.weblab3.utils.AreaChecker;

import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.SessionScoped;
import jakarta.faces.context.FacesContext;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.LinkedList;
import java.util.List;

@Named("dotBean")
@SessionScoped
public class DotBean implements Serializable {

    private Dot dot;
    @Inject
    private DotDao dotDao;
    private List<Dot> dotsList;
    private int timezone;

    @PostConstruct
    public void postConstruct(){
        dot = new Dot();
        dotDao.createEntityManager();
        dotsList = dotDao.getDotsFromDB();
    }

    public void add(){
        LocalDateTime startTime = LocalDateTime.now(ZoneOffset.UTC);
        dot.setStatus(AreaChecker.isHit(dot));
        dot.setTime(startTime.minusMinutes(getTimezone()).format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")));
        dot.setScriptTime(Math.round(LocalDateTime.now().minusNanos(startTime.getNano()).getNano() * 0.001));
        dotsList.add(dot);
        dotDao.addDotToDB(dot);
        dot = new Dot();
    }

    public void clear(){
        dotDao.clearDotsInBD();
        dotsList = dotDao.getDotsFromDB();
    }

    public Dot getDot() {
        return dot;
    }

    public void setDot(Dot dot) {
        this.dot = dot;
    }

    public List<Dot> getDotsList() {
        return dotsList;
    }

    public void setDotsList(LinkedList<Dot> dotsList) {
        this.dotsList = dotsList;
    }

    public int getTimezone() {
        return timezone;
    }

    public void setTimezone() {
        timezone = Integer.parseInt(FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap().get("timezone"));
    }
}
