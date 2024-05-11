package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.DiscussshetuanhuodongDao;
import com.entity.DiscussshetuanhuodongEntity;
import com.service.DiscussshetuanhuodongService;
import com.entity.vo.DiscussshetuanhuodongVO;
import com.entity.view.DiscussshetuanhuodongView;

@Service("discussshetuanhuodongService")
public class DiscussshetuanhuodongServiceImpl extends ServiceImpl<DiscussshetuanhuodongDao, DiscussshetuanhuodongEntity> implements DiscussshetuanhuodongService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DiscussshetuanhuodongEntity> page = this.selectPage(
                new Query<DiscussshetuanhuodongEntity>(params).getPage(),
                new EntityWrapper<DiscussshetuanhuodongEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DiscussshetuanhuodongEntity> wrapper) {
		  Page<DiscussshetuanhuodongView> page =new Query<DiscussshetuanhuodongView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<DiscussshetuanhuodongVO> selectListVO(Wrapper<DiscussshetuanhuodongEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public DiscussshetuanhuodongVO selectVO(Wrapper<DiscussshetuanhuodongEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<DiscussshetuanhuodongView> selectListView(Wrapper<DiscussshetuanhuodongEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DiscussshetuanhuodongView selectView(Wrapper<DiscussshetuanhuodongEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
