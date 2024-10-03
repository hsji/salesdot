/******************************************************************************
</PRE>
*******************************************************************************/

package com.unisales.util.common;

import javax.servlet.http.*;

import com.nexacro.java.xapi.tx.PlatformRequest;

public interface Command
{
  public String execute(HttpServletRequest  request,
                        HttpServletResponse response,
                        RereadableRequestWrapper rereadableRequestWrapper,
                        PlatformRequest greq) throws Exception;
}