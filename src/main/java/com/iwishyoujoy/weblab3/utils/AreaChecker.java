package com.iwishyoujoy.weblab3.utils;

import com.iwishyoujoy.weblab3.Dot;

public class AreaChecker {
    public static boolean isHit(Dot dot){
        double x = dot.getX();
        double y = dot.getY();
        double r = dot.getR();
        return ((x >= 0) && (y >= 0) && (y <= -x + r/2) ||
                ((x*x + y*y <= r/2*r/2) && (x >= 0) && (y <= 0)) ||
                ((x <= 0) && (x >= -r) && (y <= 0) && (y >= -r/2)));
    }
}
