package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 社团
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2022-05-07 17:17:58
 */
@TableName("shetuan")
public class ShetuanEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public ShetuanEntity() {
		
	}
	
	public ShetuanEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 社团编号
	 */
					
	private String shetuanbianhao;
	
	/**
	 * 密码
	 */
					
	private String mima;
	
	/**
	 * 社团名称
	 */
					
	private String shetuanmingcheng;
	
	/**
	 * 社团地址
	 */
					
	private String shetuandizhi;
	
	/**
	 * 社长姓名
	 */
					
	private String shezhangxingming;
	
	/**
	 * 社团电话
	 */
					
	private String shetuandianhua;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：社团编号
	 */
	public void setShetuanbianhao(String shetuanbianhao) {
		this.shetuanbianhao = shetuanbianhao;
	}
	/**
	 * 获取：社团编号
	 */
	public String getShetuanbianhao() {
		return shetuanbianhao;
	}
	/**
	 * 设置：密码
	 */
	public void setMima(String mima) {
		this.mima = mima;
	}
	/**
	 * 获取：密码
	 */
	public String getMima() {
		return mima;
	}
	/**
	 * 设置：社团名称
	 */
	public void setShetuanmingcheng(String shetuanmingcheng) {
		this.shetuanmingcheng = shetuanmingcheng;
	}
	/**
	 * 获取：社团名称
	 */
	public String getShetuanmingcheng() {
		return shetuanmingcheng;
	}
	/**
	 * 设置：社团地址
	 */
	public void setShetuandizhi(String shetuandizhi) {
		this.shetuandizhi = shetuandizhi;
	}
	/**
	 * 获取：社团地址
	 */
	public String getShetuandizhi() {
		return shetuandizhi;
	}
	/**
	 * 设置：社长姓名
	 */
	public void setShezhangxingming(String shezhangxingming) {
		this.shezhangxingming = shezhangxingming;
	}
	/**
	 * 获取：社长姓名
	 */
	public String getShezhangxingming() {
		return shezhangxingming;
	}
	/**
	 * 设置：社团电话
	 */
	public void setShetuandianhua(String shetuandianhua) {
		this.shetuandianhua = shetuandianhua;
	}
	/**
	 * 获取：社团电话
	 */
	public String getShetuandianhua() {
		return shetuandianhua;
	}

}
