package com.vr.domain;
// Generated 2017-7-20 15:29:22 by Hibernate Tools 4.3.5.Final

/**
 * ProfileId generated by hbm2java
 */
public class ProfileId implements java.io.Serializable {

	private int id;
	private String type;

	public ProfileId() {
	}

	public ProfileId(int id, String type) {
		this.id = id;
		this.type = type;
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof ProfileId))
			return false;
		ProfileId castOther = (ProfileId) other;

		return (this.getId() == castOther.getId())
				&& ((this.getType() == castOther.getType()) || (this.getType() != null && castOther.getType() != null
						&& this.getType().equals(castOther.getType())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + this.getId();
		result = 37 * result + (getType() == null ? 0 : this.getType().hashCode());
		return result;
	}

}
