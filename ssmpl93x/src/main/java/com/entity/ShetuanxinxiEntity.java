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
 * 社团信息
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2022-05-07 17:17:58
 */
@TableName("shetuanxinxi")
public class ShetuanxinxiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public ShetuanxinxiEntity() {
		
	}
	
	public ShetuanxinxiEntity(T t) {
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
	 * 社团名称
	 */
					
	private String shetuanmingcheng;
	
	/**
	 * 社团类型
	 */
					
	private String shetuanleixing;
	
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
	
	/**
	 * 社团介绍
	 */
					
	private String shetuanjieshao;
	
	/**
	 * 社团图片
	 */
					
	private String shetuantupian;
	
	/**
	 * 是否审核
	 */
					
	private String sfsh;
	
	/**
	 * 审核回复
	 */
					
	private String shhf;
	
	/**
	 * 最近点击时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date clicktime;
	
	/**
	 * 点击次数
	 */
					
	private Integer clicknum;
	
	
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
	 * 设置：社团类型
	 */
	public void setShetuanleixing(String shetuanleixing) {
		this.shetuanleixing = shetuanleixing;
	}
	/**
	 * 获取：社团类型
	 */
	public String getShetuanleixing() {
		return shetuanleixing;
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
	/**
	 * 设置：社团介绍
	 */
	public void setShetuanjieshao(String shetuanjieshao) {
		this.shetuanjieshao = shetuanjieshao;
	}
	/**
	 * 获取：社团介绍
	 */
	public String getShetuanjieshao() {
		return shetuanjieshao;
	}
	/**
	 * 设置：社团图片
	 */
	public void setShetuantupian(String shetuantupian) {
		this.shetuantupian = shetuantupian;
	}
	/**
	 * 获取：社团图片
	 */
	public String getShetuantupian() {
		return shetuantupian;
	}
	/**
	 * 设置：是否审核
	 */
	public void setSfsh(String sfsh) {
		this.sfsh = sfsh;
	}
	/**
	 * 获取：是否审核
	 */
	public String getSfsh() {
		return sfsh;
	}
	/**
	 * 设置：审核回复
	 */
	public void setShhf(String shhf) {
		this.shhf = shhf;
	}
	/**
	 * 获取：审核回复
	 */
	public String getShhf() {
		return shhf;
	}
	/**
	 * 设置：最近点击时间
	 */
	public void setClicktime(Date clicktime) {
		this.clicktime = clicktime;
	}
	/**
	 * 获取：最近点击时间
	 */
	public Date getClicktime() {
		return clicktime;
	}
	/**
	 * 设置：点击次数
	 */
	public void setClicknum(Integer clicknum) {
		this.clicknum = clicknum;
	}
	/**
	 * 获取：点击次数
	 */
	public Integer getClicknum() {
		return clicknum;
	}

}
