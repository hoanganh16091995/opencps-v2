//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2017.10.24 at 11:31:01 AM ICT 
//


package org.opencps.api.dossier.model;

import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="actionCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="actionUser" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="actionNote" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="assignUserId" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "actionCode",
    "actionUser",
    "actionNote",
    "assignUserId",
    "isSynAction",
    "payment"
})
@XmlRootElement(name = "DoActionModel")
public class DoActionModel {

	@FormParam(value = "actionCode")
    protected String actionCode;
	@FormParam(value = "actionUser")
    protected String actionUser;
	@FormParam(value = "actionNote")
    protected String actionNote;
	@FormParam(value = "assignUserId")
    protected int assignUserId;
	@FormParam(value = "isSynAction")
    protected int isSynAction;
	@FormParam(value = "payment")
	protected String payment;

    public int getIsSynAction() {
		return isSynAction;
	}

	public void setIsSynAction(int isSynAction) {
		this.isSynAction = isSynAction;
	}

	/**
     * Gets the value of the actionCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getActionCode() {
        return actionCode;
    }

    /**
     * Sets the value of the actionCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setActionCode(String value) {
        this.actionCode = value;
    }

    /**
     * Gets the value of the actionUser property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getActionUser() {
        return actionUser;
    }

    /**
     * Sets the value of the actionUser property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setActionUser(String value) {
        this.actionUser = value;
    }

    /**
     * Gets the value of the actionNote property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getActionNote() {
        return actionNote;
    }

    /**
     * Sets the value of the actionNote property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setActionNote(String value) {
        this.actionNote = value;
    }

    /**
     * Gets the value of the assignUserId property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getAssignUserId() {
        return assignUserId;
    }

    /**
     * Sets the value of the assignUserId property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setAssignUserId(Integer value) {
        this.assignUserId = value;
    }

	public String getPayment() {
		return payment;
	}

	public void setPayment(String payment) {
		this.payment = payment;
	}

}
