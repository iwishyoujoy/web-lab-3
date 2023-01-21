package com.iwishyoujoy.weblab3;


import jakarta.enterprise.context.SessionScoped;
import jakarta.faces.component.html.HtmlSelectBooleanCheckbox;
import jakarta.faces.event.ValueChangeEvent;
import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "dots")
@SessionScoped
public class Dot implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    private float x = -2.0f;
    private float y = 0.0f;
    private float r = 1.0f;
    private boolean status;
    private String time;
    private long scriptTime;

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getR() {
        return r;
    }

    public void setR(float radius) {
        this.r = radius;
    }

    public String getStatus() {
        if (status) return "попадание!";
        else return "промах!";
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public long getScriptTime() {
        return scriptTime;
    }

    public void setScriptTime(long scriptTime) {
        this.scriptTime = scriptTime;
    }

    public void updateX(ValueChangeEvent e){
        String id = ((HtmlSelectBooleanCheckbox) e.getSource()).getId();
        boolean isChecked = (boolean) e.getNewValue();
        if (isChecked){
            setX(Float.parseFloat(id.substring(5,id.length()).replace("x", ".")));
        }
    }
}
